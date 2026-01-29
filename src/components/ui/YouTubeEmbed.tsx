"use client";

const YOUTUBE_ID_REGEX = /^[a-zA-Z0-9_-]{11}$/;

interface YouTubeEmbedProps {
  videoId: string;
  title?: string;
  className?: string;
}

export function YouTubeEmbed({
  videoId,
  title = "YouTube video",
  className = "",
}: YouTubeEmbedProps) {
  if (!YOUTUBE_ID_REGEX.test(videoId)) {
    return null;
  }

  return (
    <div className={`relative w-full aspect-video rounded-xl overflow-hidden ${className}`}>
      <iframe
        width="100%"
        height="100%"
        src={`https://www.youtube.com/embed/${videoId}`}
        title={title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        loading="lazy"
        sandbox="allow-scripts allow-same-origin allow-presentation"
        className="absolute inset-0"
      />
    </div>
  );
}
