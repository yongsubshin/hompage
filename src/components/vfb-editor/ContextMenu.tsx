"use client";

import { useEffect, useRef } from "react";

interface ContextMenuProps {
  x: number;
  y: number;
  type: "node" | "port";
  onAddProviderPort?: () => void;
  onAddRequiredPort?: () => void;
  onDelete: () => void;
  onClose: () => void;
}

export default function ContextMenu({
  x,
  y,
  type,
  onAddProviderPort,
  onAddRequiredPort,
  onDelete,
  onClose,
}: ContextMenuProps) {
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        onClose();
      }
    };

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [onClose]);

  return (
    <div
      ref={menuRef}
      className="fixed z-50 bg-white rounded-lg shadow-xl border border-gray-300 py-1 min-w-[150px]"
      style={{ left: x, top: y }}
    >
      {type === "node" && (
        <>
          <button
            onClick={() => {
              onAddProviderPort?.();
              onClose();
            }}
            className="w-full px-3 py-2 text-left text-sm text-gray-800 hover:bg-green-100 flex items-center gap-2"
          >
            <span
              className="w-4 h-4 flex items-center justify-center text-[10px] font-bold text-black"
              style={{ backgroundColor: "#99cc00", border: "1px solid #000000" }}
            >
              P
            </span>
            <span className="text-gray-800">Add P Port</span>
          </button>
          <button
            onClick={() => {
              onAddRequiredPort?.();
              onClose();
            }}
            className="w-full px-3 py-2 text-left text-sm text-gray-800 hover:bg-green-100 flex items-center gap-2"
          >
            <span
              className="w-4 h-4 flex items-center justify-center text-[10px] font-bold text-black"
              style={{ backgroundColor: "#99cc00", border: "1px solid #000000" }}
            >
              R
            </span>
            <span className="text-gray-800">Add R Port</span>
          </button>
          <div className="h-px bg-gray-300 my-1" />
        </>
      )}
      <button
        onClick={() => {
          onDelete();
          onClose();
        }}
        className="w-full px-3 py-2 text-left text-sm text-red-600 hover:bg-red-100"
      >
        Delete {type === "node" ? "Executable" : "Port"}
      </button>
    </div>
  );
}
