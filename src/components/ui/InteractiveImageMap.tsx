"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface HotspotArea {
  id: string;
  x: number;
  y: number;
  width: number;
  height: number;
  hoverImage: string;
}

interface InteractiveImageMapProps {
  baseImage: string;
  overlayImage?: string;
  hotspots: HotspotArea[];
  alt?: string;
  className?: string;
}

export function InteractiveImageMap({
  baseImage,
  overlayImage,
  hotspots,
  alt = "Interactive Image",
  className = "",
}: InteractiveImageMapProps) {
  const [currentImage, setCurrentImage] = useState(baseImage);
  const [showOverlay, setShowOverlay] = useState(false);
  const [activeHotspot, setActiveHotspot] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });
  const [naturalSize, setNaturalSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const updateSize = () => {
      if (containerRef.current) {
        setContainerSize({
          width: containerRef.current.offsetWidth,
          height: containerRef.current.offsetHeight,
        });
      }
    };

    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  const handleImageLoad = (e: React.SyntheticEvent<HTMLImageElement>) => {
    const img = e.currentTarget;
    setNaturalSize({
      width: img.naturalWidth,
      height: img.naturalHeight,
    });
  };

  const handleMouseEnter = (hotspot: HotspotArea) => {
    setCurrentImage(hotspot.hoverImage);
    setShowOverlay(true);
    setActiveHotspot(hotspot.id);
  };

  const handleMouseLeave = () => {
    setCurrentImage(baseImage);
    setShowOverlay(false);
    setActiveHotspot(null);
  };

  const scaleX = containerSize.width / (naturalSize.width || 1);
  const scaleY = containerSize.height / (naturalSize.height || 1);

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden ${className}`}
    >
      <img
        src={currentImage}
        alt={alt}
        className="w-full h-auto transition-opacity duration-200"
        onLoad={handleImageLoad}
      />

      {naturalSize.width > 0 &&
        hotspots.map((hotspot) => (
          <div
            key={hotspot.id}
            className="absolute cursor-pointer"
            style={{
              left: `${hotspot.x * scaleX}px`,
              top: `${hotspot.y * scaleY}px`,
              width: `${hotspot.width * scaleX}px`,
              height: `${hotspot.height * scaleY}px`,
            }}
            onMouseEnter={() => handleMouseEnter(hotspot)}
            onMouseLeave={handleMouseLeave}
          >
            <div
              className={`absolute inset-0 border-2 rounded-lg transition-all duration-200 ${
                activeHotspot === hotspot.id
                  ? "border-accent-cyan bg-accent-cyan/10"
                  : "border-transparent hover:border-accent-cyan/50"
              }`}
            />
          </div>
        ))}

      <AnimatePresence>
        {showOverlay && overlayImage && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-0 flex items-center justify-center pointer-events-none"
          >
            <img
              src={overlayImage}
              alt="Overlay"
              className="max-w-[80%] max-h-[80%] object-contain shadow-2xl rounded-lg border border-white/20"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default InteractiveImageMap;
