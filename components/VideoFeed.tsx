"use client";

import { useState } from "react";
import StreamingPlayer from "./StreamingPlayer";

interface Post {
  id: number;
  user_id: number;
  username: string;
  caption: string;
  media_type: string;
  original_media_url: string;
  hls_playlist_url?: string;
  dash_manifest_url?: string;
  thumbnail_url?: string;
  duration_seconds: number | null;
  file_size_bytes: number | null;
  resolution: string | null;
  bitrate_kbps: number | null;
  likes_count: number;
  comments_count: number;
  shares_count: number;
  views_count: number;
  processing_status: string;
  processing_job_id: string | null;
  created_at: string;
  updated_at: string;
  profile_image_url: string | null;
}

export default function VideoFeed() {
  // Hardcoded posts data
  const [posts, setPosts] = useState<Post[]>([
    {
      id: 17,
      user_id: 1,
      caption: "Akaza",
      media_type: "video",
      original_media_url:
        "https://olajide-speed-stream.s3.amazonaws.com/uploads/mh8r4t32c6ewrm1cppo.mp4",
      thumbnail_url:
        "https://d2ssmtrbh2u7oe.cloudfront.net/streaming/mh8r4t32c6ewrm1cppo/thumbnail.jpg",
      dash_manifest_url:
        "https://d2ssmtrbh2u7oe.cloudfront.net/streaming/mh8r4t32c6ewrm1cppo/dash.mpd",
      hls_playlist_url:
        "https://d2ssmtrbh2u7oe.cloudfront.net/streaming/mh8r4t32c6ewrm1cppo/hls.m3u8",
      duration_seconds: null,
      file_size_bytes: null,
      resolution: null,
      bitrate_kbps: null,
      likes_count: 0,
      comments_count: 0,
      shares_count: 0,
      views_count: 0,
      processing_status: "ready",
      processing_job_id: null,
      created_at: "2025-10-27T06:23:36.000Z",
      updated_at: "2025-10-27T06:24:05.000Z",
      username: "testuser",
      profile_image_url: null,
    },
    {
      id: 16,
      user_id: 1,
      caption: "😂😂😂😂",
      media_type: "video",
      original_media_url:
        "https://olajide-speed-stream.s3.amazonaws.com/uploads/mh8pobjx1p15mhpnegnj.mp4",
      thumbnail_url:
        "https://d2ssmtrbh2u7oe.cloudfront.net/streaming/mh8pobjx1p15mhpnegnj/thumbnail.jpg",
      dash_manifest_url:
        "https://d2ssmtrbh2u7oe.cloudfront.net/streaming/mh8pobjx1p15mhpnegnj/dash.mpd",
      hls_playlist_url:
        "https://d2ssmtrbh2u7oe.cloudfront.net/streaming/mh8pobjx1p15mhpnegnj/hls.m3u8",
      duration_seconds: null,
      file_size_bytes: null,
      resolution: null,
      bitrate_kbps: null,
      likes_count: 0,
      comments_count: 0,
      shares_count: 0,
      views_count: 0,
      processing_status: "ready",
      processing_job_id: null,
      created_at: "2025-10-27T05:42:53.000Z",
      updated_at: "2025-10-27T05:43:59.000Z",
      username: "testuser",
      profile_image_url: null,
    },
    {
      id: 15,
      user_id: 1,
      caption: "Brooo",
      media_type: "video",
      original_media_url:
        "https://olajide-speed-stream.s3.amazonaws.com/uploads/mh8pgmmuru83x3blis.mp4",
      thumbnail_url:
        "https://d2ssmtrbh2u7oe.cloudfront.net/streaming/mh8pgmmuru83x3blis/thumbnail.jpg",
      dash_manifest_url:
        "https://d2ssmtrbh2u7oe.cloudfront.net/streaming/mh8pgmmuru83x3blis/dash.mpd",
      hls_playlist_url:
        "https://d2ssmtrbh2u7oe.cloudfront.net/streaming/mh8pgmmuru83x3blis/hls.m3u8",
      duration_seconds: null,
      file_size_bytes: null,
      resolution: null,
      bitrate_kbps: null,
      likes_count: 0,
      comments_count: 0,
      shares_count: 0,
      views_count: 0,
      processing_status: "ready",
      processing_job_id: null,
      created_at: "2025-10-27T05:36:51.000Z",
      updated_at: "2025-10-27T05:40:18.000Z",
      username: "testuser",
      profile_image_url: null,
    },
    {
      id: 14,
      user_id: 1,
      caption: "Come on broooo",
      media_type: "video",
      original_media_url:
        "https://olajide-speed-stream.s3.amazonaws.com/uploads/mh8pbjdirv6dkzjjdqn.mp4",
      thumbnail_url:
        "https://d2ssmtrbh2u7oe.cloudfront.net/streaming/mh8pbjdirv6dkzjjdqn/thumbnail.jpg",
      dash_manifest_url:
        "https://d2ssmtrbh2u7oe.cloudfront.net/streaming/mh8pbjdirv6dkzjjdqn/dash.mpd",
      hls_playlist_url:
        "https://d2ssmtrbh2u7oe.cloudfront.net/streaming/mh8pbjdirv6dkzjjdqn/hls.m3u8",
      duration_seconds: null,
      file_size_bytes: null,
      resolution: null,
      bitrate_kbps: null,
      likes_count: 0,
      comments_count: 0,
      shares_count: 0,
      views_count: 0,
      processing_status: "ready",
      processing_job_id: null,
      created_at: "2025-10-27T05:32:53.000Z",
      updated_at: "2025-10-27T05:33:54.000Z",
      username: "testuser",
      profile_image_url: null,
    },
    {
      id: 13,
      user_id: 1,
      caption: "X cooked",
      media_type: "video",
      original_media_url:
        "https://olajide-speed-stream.s3.amazonaws.com/uploads/mh8p6hxop6ssdmij9nf.mp4",
      thumbnail_url:
        "https://d2ssmtrbh2u7oe.cloudfront.net/streaming/mh8p6hxop6ssdmij9nf/thumbnail.jpg",
      dash_manifest_url:
        "https://d2ssmtrbh2u7oe.cloudfront.net/streaming/mh8p6hxop6ssdmij9nf/dash.mpd",
      hls_playlist_url:
        "https://d2ssmtrbh2u7oe.cloudfront.net/streaming/mh8p6hxop6ssdmij9nf/hls.m3u8",
      duration_seconds: null,
      file_size_bytes: null,
      resolution: null,
      bitrate_kbps: null,
      likes_count: 0,
      comments_count: 0,
      shares_count: 0,
      views_count: 0,
      processing_status: "ready",
      processing_job_id: null,
      created_at: "2025-10-27T05:28:58.000Z",
      updated_at: "2025-10-27T05:32:16.000Z",
      username: "testuser",
      profile_image_url: null,
    },
    {
      id: 12,
      user_id: 1,
      caption: "Yooooo",
      media_type: "video",
      original_media_url:
        "https://olajide-speed-stream.s3.amazonaws.com/uploads/mh8p499cgx6n8mfwzwu.mp4",
      thumbnail_url:
        "https://d2ssmtrbh2u7oe.cloudfront.net/streaming/mh8p499cgx6n8mfwzwu/thumbnail.jpg",
      dash_manifest_url:
        "https://d2ssmtrbh2u7oe.cloudfront.net/streaming/mh8p499cgx6n8mfwzwu/dash.mpd",
      hls_playlist_url:
        "https://d2ssmtrbh2u7oe.cloudfront.net/streaming/mh8p499cgx6n8mfwzwu/hls.m3u8",
      duration_seconds: null,
      file_size_bytes: null,
      resolution: null,
      bitrate_kbps: null,
      likes_count: 0,
      comments_count: 0,
      shares_count: 0,
      views_count: 0,
      processing_status: "ready",
      processing_job_id: null,
      created_at: "2025-10-27T05:27:14.000Z",
      updated_at: "2025-10-27T05:28:15.000Z",
      username: "testuser",
      profile_image_url: null,
    },
    {
      id: 11,
      user_id: 1,
      caption: "Kakashi",
      media_type: "video",
      original_media_url:
        "https://olajide-speed-stream.s3.amazonaws.com/uploads/mh8p2cx4mjrgaduc9dl.mp4",
      thumbnail_url:
        "https://d2ssmtrbh2u7oe.cloudfront.net/streaming/mh8p2cx4mjrgaduc9dl/thumbnail.jpg",
      dash_manifest_url:
        "https://d2ssmtrbh2u7oe.cloudfront.net/streaming/mh8p2cx4mjrgaduc9dl/dash.mpd",
      hls_playlist_url:
        "https://d2ssmtrbh2u7oe.cloudfront.net/streaming/mh8p2cx4mjrgaduc9dl/hls.m3u8",
      duration_seconds: null,
      file_size_bytes: null,
      resolution: null,
      bitrate_kbps: null,
      likes_count: 0,
      comments_count: 0,
      shares_count: 0,
      views_count: 0,
      processing_status: "ready",
      processing_job_id: null,
      created_at: "2025-10-27T05:25:45.000Z",
      updated_at: "2025-10-27T05:26:44.000Z",
      username: "testuser",
      profile_image_url: null,
    },
    {
      id: 10,
      user_id: 1,
      caption: "Kakashi Kakashi Kakashi",
      media_type: "video",
      original_media_url:
        "https://olajide-speed-stream.s3.amazonaws.com/uploads/mh8p0fvz89a1910yvto.mp4",
      thumbnail_url:
        "https://d2ssmtrbh2u7oe.cloudfront.net/streaming/mh8p0fvz89a1910yvto/thumbnail.jpg",
      dash_manifest_url:
        "https://d2ssmtrbh2u7oe.cloudfront.net/streaming/mh8p0fvz89a1910yvto/dash.mpd",
      hls_playlist_url:
        "https://d2ssmtrbh2u7oe.cloudfront.net/streaming/mh8p0fvz89a1910yvto/hls.m3u8",
      duration_seconds: null,
      file_size_bytes: null,
      resolution: null,
      bitrate_kbps: null,
      likes_count: 0,
      comments_count: 0,
      shares_count: 0,
      views_count: 0,
      processing_status: "ready",
      processing_job_id: null,
      created_at: "2025-10-27T05:24:18.000Z",
      updated_at: "2025-10-27T05:26:02.000Z",
      username: "testuser",
      profile_image_url: null,
    },
    {
      id: 9,
      user_id: 1,
      caption: "Here we go",
      media_type: "video",
      original_media_url:
        "https://olajide-speed-stream.s3.amazonaws.com/uploads/mh76wrvx4knx0vwll6q.mp4",
      thumbnail_url:
        "https://d2ssmtrbh2u7oe.cloudfront.net/streaming/mh76wrvx4knx0vwll6q/thumbnail.jpg",
      dash_manifest_url:
        "https://d2ssmtrbh2u7oe.cloudfront.net/streaming/mh76wrvx4knx0vwll6q/dash.mpd",
      hls_playlist_url:
        "https://d2ssmtrbh2u7oe.cloudfront.net/streaming/mh76wrvx4knx0vwll6q/hls.m3u8",
      duration_seconds: null,
      file_size_bytes: null,
      resolution: null,
      bitrate_kbps: null,
      likes_count: 0,
      comments_count: 0,
      shares_count: 0,
      views_count: 0,
      processing_status: "ready",
      processing_job_id: null,
      created_at: "2025-10-26T04:09:45.000Z",
      updated_at: "2025-10-26T04:10:02.000Z",
      username: "testuser",
      profile_image_url: null,
    },
    {
      id: 8,
      user_id: 1,
      caption: "Hmmm",
      media_type: "video",
      original_media_url:
        "https://olajide-speed-stream.s3.amazonaws.com/uploads/mh6cyw1f56jpk33ewn3.mp4",
      thumbnail_url:
        "https://d2ssmtrbh2u7oe.cloudfront.net/streaming/mh6cyw1f56jpk33ewn3/thumbnail.jpg",
      dash_manifest_url:
        "https://d2ssmtrbh2u7oe.cloudfront.net/streaming/mh6cyw1f56jpk33ewn3/dash.mpd",
      hls_playlist_url:
        "https://d2ssmtrbh2u7oe.cloudfront.net/streaming/mh6cyw1f56jpk33ewn3/hls.m3u8",
      duration_seconds: null,
      file_size_bytes: null,
      resolution: null,
      bitrate_kbps: null,
      likes_count: 0,
      comments_count: 0,
      shares_count: 0,
      views_count: 0,
      processing_status: "ready",
      processing_job_id: null,
      created_at: "2025-10-25T14:11:32.000Z",
      updated_at: "2025-10-25T14:11:41.000Z",
      username: "testuser",
      profile_image_url: null,
    },
  ]);
  const [loading] = useState(false);

  // Infinite scroll disabled for hardcoded data

  return (
    <div className="w-full max-w-md sm:max-w-2xl mx-auto space-y-3 sm:space-y-4 px-2 sm:px-0">
      {posts
        .filter((post) => post.processing_status === "ready")
        .map((post) => (
          <div
            key={post.id}
            className="bg-gray-800 rounded-lg sm:rounded-xl shadow-md sm:shadow-lg overflow-hidden h-[600px] sm:h-[700px] flex flex-col border border-gray-700"
          >
            {/* Post Header */}
            <div className="px-3 sm:px-4 py-2 sm:py-3 border-b border-gray-700 flex-shrink-0">
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-sm sm:text-base">
                  {post.username.charAt(0).toUpperCase()}
                </div>
                <div>
                  <h3 className="font-semibold text-gray-100 text-sm sm:text-base">
                    {post.username}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-400">
                    {new Date(post.created_at).toLocaleDateString()}
                  </p>
                </div>
              </div>
            </div>

            {/* Video Player */}
            {post.media_type === "video" &&
            post.hls_playlist_url &&
            post.dash_manifest_url ? (
              <div className="relative bg-gray-900 flex-1 flex items-center justify-center min-h-0 h-[450px] sm:h-[500px] overflow-hidden">
                {/* Blurred thumbnail background */}
                {post.thumbnail_url && (
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                      backgroundImage: `url(${post.thumbnail_url})`,
                      filter: "blur(20px)",
                      transform: "scale(1.1)",
                    }}
                  />
                )}
                {/* Video player on top */}
                <div className="relative z-10 w-full h-full flex items-center justify-center">
                  <StreamingPlayer
                    hlsUrl={post.hls_playlist_url}
                    dashUrl={post.dash_manifest_url}
                    thumbnailUrl={post.thumbnail_url}
                    autoplay={true}
                    className="w-full h-full"
                  />
                </div>
              </div>
            ) : (
              <div className="flex-1 bg-gray-900 flex items-center justify-center h-[400px] sm:h-[500px]">
                <p className="text-white text-sm sm:text-base">Processing...</p>
              </div>
            )}

            {/* Caption */}
            {post.caption && (
              <div className="px-3 sm:px-4 py-2 sm:py-3 flex-shrink-0">
                <p className="text-gray-200 text-sm sm:text-base line-clamp-2">
                  {post.caption}
                </p>
              </div>
            )}

            {/* Actions */}
            <div className="px-3 sm:px-4 py-2 sm:py-3 flex items-center gap-4 sm:gap-6 border-t border-gray-700 flex-shrink-0">
              <button className="flex items-center gap-1.5 sm:gap-2 text-gray-300 hover:text-red-400 transition-colors">
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
                <span className="text-xs sm:text-sm font-medium">
                  {post.likes_count}
                </span>
              </button>
              <button className="flex items-center gap-1.5 sm:gap-2 text-gray-300 hover:text-blue-400 transition-colors">
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                </svg>
                <span className="text-xs sm:text-sm font-medium">
                  {post.comments_count}
                </span>
              </button>
            </div>
          </div>
        ))}
    </div>
  );
}
