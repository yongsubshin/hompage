"use client";

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
        className="absolute inset-0"
      />
    </div>
  );
}
