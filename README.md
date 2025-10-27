# UltraFast Social - Next.js Edition

A high-performance social media platform with **low-latency DASH & HLS streaming** built with Next.js, TypeScript, and Tailwind CSS.

## Features

🎥 **Low-Latency Streaming**

- DASH (Dynamic Adaptive Streaming over HTTP)
- HLS (HTTP Live Streaming)
- Automatic format detection and fallback
- Smooth playback with adaptive bitrate switching

📱 **Mobile-First Design**

- Responsive video feed
- Virtual scrolling for performance
- Touch-friendly controls
- Fullscreen support

⚡ **Auto-Play on Screen View**

- Videos automatically play when scrolled into viewport
- Pauses when out of view
- Intersection Observer optimization

🎨 **Modern UI**

- Gradient backgrounds
- Smooth animations
- Custom scrollbars
- Beautiful video cards

## Quick Start

1. **Install dependencies:**

   ```bash
   npm install
   ```

2. **Start development server:**

   ```bash
   npm run dev
   ```

3. **Open your browser:**
   ```
   http://localhost:3001
   ```

## Architecture

### Components

- **`StreamingPlayer.tsx`** - Smart video player with HLS/DASH support
- **`VideoFeed.tsx`** - Infinite scroll feed with virtual scrolling
- **`page.tsx`** - Main page layout

### Streaming Libraries

- **HLS.js** - For HLS streaming support
- **dashjs** - For DASH streaming support
- **react-intersection-observer** - For viewport detection

## Configuration

The app connects to your streaming API at `http://localhost:3000/api/posts`.

Make sure your backend is running first!

## Features Explained

### Auto-Play on Screen View

Videos automatically start playing when they enter the viewport and pause when they leave. This creates a TikTok-like experience.

### Virtual Scrolling

Only visible posts are rendered, improving performance with large feeds.

### Format Switching

Users can switch between HLS and DASH formats with the click of a button.

### Error Handling

The player automatically falls back to alternative formats if one fails to load.

## Production Build

```bash
npm run build
npm start
```

## License

MIT
