"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
import type { MutableRefObject } from "react";

interface StreamingPlayerProps {
  hlsUrl: string;
  dashUrl: string;
  thumbnailUrl?: string;
  className?: string;
  autoplay?: boolean;
}

export default function StreamingPlayer({
  hlsUrl,
  dashUrl,
  thumbnailUrl,
  className = "",
  autoplay = true,
}: StreamingPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const hlsRef = useRef<any>(null);
  const dashRef = useRef<any>(null);
  const [format, setFormat] = useState<"hls" | "dash">("hls");
  const [isPlaying, setIsPlaying] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isMuted, setIsMuted] = useState(false);
  const [userPaused, setUserPaused] = useState(false);

  // Use intersection observer to detect when video is in viewport
  const { ref, inView } = useInView({
    threshold: 0.5, // Trigger when 50% of video is visible
    triggerOnce: false,
  });

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Auto-play when in view (but don't show error for autoplay)
    // Only autoplay if user hasn't manually paused
    if (inView && autoplay && !isPlaying && !userPaused) {
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // Silent autoplay failure - user can still click play
          console.log("Autoplay blocked, waiting for user interaction");
        });
      }
    }

    // Pause when out of view
    if (!inView && isPlaying) {
      video.pause();
    }
  }, [inView, autoplay, isPlaying, userPaused]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const loadStream = async () => {
      try {
        setError(null);

        if (
          format === "hls" &&
          typeof window !== "undefined" &&
          window.Hls &&
          window.Hls.isSupported()
        ) {
          // Use HLS.js for HLS
          if (hlsRef.current) {
            hlsRef.current.destroy();
          }

          const hls = new window.Hls({
            enableWorker: true,
            lowLatencyMode: true,
            backBufferLength: 30,
            maxBufferLength: 30,
          });

          hls.loadSource(hlsUrl);
          hls.attachMedia(video);

          // @ts-ignore - HLS events loaded from CDN
          hls.on("hlsManifestParsed", () => {
            console.log("HLS manifest parsed");
          });

          // @ts-ignore - HLS error events loaded from CDN
          hls.on("hlsError", (_event: any, data: any) => {
            if (data.fatal) {
              switch (data.type) {
                case "networkError":
                  hls.startLoad();
                  break;
                case "mediaError":
                  hls.recoverMediaError();
                  break;
                default:
                  setError("HLS playback error");
                  // Fallback to DASH
                  if (dashUrl) {
                    setFormat("dash");
                  }
                  break;
              }
            }
          });

          hlsRef.current = hls;
        } else if (
          format === "hls" &&
          video.canPlayType("application/vnd.apple.mpegurl")
        ) {
          // Native HLS (Safari)
          video.src = hlsUrl;
        } else if (
          format === "dash" &&
          typeof window !== "undefined" &&
          window.dashjs
        ) {
          // Use dash.js for DASH
          if (dashRef.current) {
            dashRef.current.reset();
          }

          const player = window.dashjs.MediaPlayer().create();
          player.initialize(video, dashUrl, false);

          // Simplified settings that work with current dash.js version
          player.updateSettings({
            streaming: {
              abr: {
                autoSwitchBitrate: {
                  video: true,
                },
              },
            },
          });

          dashRef.current = player;
        } else {
          setError("No supported streaming format");
        }
      } catch (err) {
        console.error("Stream loading error:", err);
        setError("Failed to load stream");
      }
    };

    loadStream();

    return () => {
      if (hlsRef.current) {
        hlsRef.current.destroy();
      }
      if (dashRef.current) {
        dashRef.current.reset();
      }
    };
  }, [format, hlsUrl, dashUrl]);

  const handlePlayPause = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    const video = videoRef.current;
    if (!video) {
      console.log("No video element");
      return;
    }

    console.log("Current video paused state:", video.paused);

    if (video.paused) {
      console.log("Playing video");
      setUserPaused(false); // User clicked play
      video
        .play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch((err) => {
          console.error("Play failed:", err);
        });
    } else {
      console.log("Pausing video");
      setUserPaused(true); // User manually paused
      video.pause();
      setIsPlaying(false);
    }
  };

  const handleMute = () => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = !video.muted;
    setIsMuted(video.muted);
  };

  return (
    <div
      ref={ref}
      className={`relative w-full h-full max-w-full max-h-full group ${className}`}
    >
      {/* Manual thumbnail image - only shown before video starts */}
      {/* {thumbnailUrl && !isPlaying && videoRef.current?.readyState === 0 && (
        <img
          src={thumbnailUrl}
          alt="Video thumbnail"
          className="h-full max-h-full w-auto rounded-lg object-contain mx-auto"
          style={{ backgroundColor: "transparent" }}
        />
      )} */}

      <video
        ref={videoRef}
        preload="none"
        // poster={thumbnailUrl}
        playsInline={true}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        className="h-full w-auto max-h-full object-cover  mx-auto"
        style={{
          backgroundColor: "transparent",
        }}
      />

      {/* Custom Play/Pause Button (Center) */}
      <div
        className="absolute inset-0 flex items-center justify-center cursor-pointer"
        onClick={handlePlayPause}
      >
        <button className="bg-black/70 hover:bg-black/90 rounded-full p-2 sm:p-4 transition-all hover:scale-110 opacity-70 sm:opacity-0 sm:group-hover:opacity-100">
          {isPlaying ? (
            <svg
              className="w-8 h-8 sm:w-12 sm:h-12 text-white"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
            </svg>
          ) : (
            <svg
              className="w-8 h-8 sm:w-12 sm:h-12 text-white"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          )}
        </button>
      </div>

      {error && (
        <div className="absolute bottom-4 left-4 right-4 bg-red-500/90 text-white p-2 rounded text-sm">
          {error}
        </div>
      )}

      {/* Format selector */}
      <div className="absolute top-4 right-4 flex gap-2 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity">
        <button
          onClick={(e) => {
            e.stopPropagation();
            setFormat("hls");
          }}
          className={`px-2 py-0.5 sm:px-3 sm:py-1 rounded text-xs sm:text-sm transition ${
            format === "hls"
              ? "bg-blue-500 text-white"
              : "bg-white/80 text-gray-700"
          }`}
        >
          HLS
        </button>
        <button
          onClick={(e) => {
            e.stopPropagation();
            setFormat("dash");
          }}
          className={`px-2 py-0.5 sm:px-3 sm:py-1 rounded text-xs sm:text-sm transition ${
            format === "dash"
              ? "bg-blue-500 text-white"
              : "bg-white/80 text-gray-700"
          }`}
        >
          DASH
        </button>
      </div>

      {/* Mute/Unmute button (bottom left) */}
      <div className="absolute bottom-4 left-4 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity">
        <button
          onClick={(e) => {
            e.stopPropagation();
            handleMute();
          }}
          className="bg-black/70 hover:bg-black/90 rounded-full p-2 sm:p-3 transition-transform hover:scale-110"
          title={isMuted ? "Unmute" : "Mute"}
        >
          {isMuted ? (
            <svg
              className="w-5 h-5 sm:w-6 sm:h-6 text-white"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z" />
            </svg>
          ) : (
            <svg
              className="w-5 h-5 sm:w-6 sm:h-6 text-white"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" />
            </svg>
          )}
        </button>
      </div>
    </div>
  );
}
