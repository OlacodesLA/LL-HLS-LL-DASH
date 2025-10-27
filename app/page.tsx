import VideoFeed from "../components/VideoFeed";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 py-8">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent mb-2">
            Olajide's UltraFast Social
          </h1>
          <p className="text-gray-400 text-sm sm:text-base">
            Low-latency streaming powered by DASH & HLS
          </p>
        </div>
        <VideoFeed />
      </div>
    </main>
  );
}
