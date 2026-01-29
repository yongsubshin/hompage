"use client";

import { useEffect, useRef } from "react";
import type { Platform, CpPortKind } from "./types";

interface ContextMenuProps {
  x: number;
  y: number;
  type: "node" | "port";
  platform?: Platform;
  onDelete: () => void;
  onAddPort?: (portType: "provider" | "required", cpPortKind?: CpPortKind) => void;
  onClose: () => void;
}

export default function ContextMenu({
  x,
  y,
  type,
  platform,
  onDelete,
  onAddPort,
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

  const handleAdd = (portType: "provider" | "required", cpPortKind?: CpPortKind) => {
    onAddPort?.(portType, cpPortKind);
    onClose();
  };

  return (
    <>
      {/* Invisible backdrop to capture clicks outside */}
      <div
        className="fixed inset-0 z-40"
        onClick={onClose}
        onContextMenu={(e) => {
          e.preventDefault();
          onClose();
        }}
      />
      <div
        ref={menuRef}
        className="fixed z-50 bg-white rounded-lg shadow-xl border border-gray-200 py-1 min-w-[200px]"
        style={{
          left: x,
          top: y,
          animation: "contextMenuIn 0.15s ease-out",
        }}
      >
      {type === "node" && onAddPort && (
        <>
          {platform === "cp" ? (
            <>
              <button
                onClick={() => handleAdd("provider", "server")}
                className="w-full px-3 py-2 text-left text-sm text-gray-700 hover:bg-blue-50 flex items-center gap-2"
              >
                <span className="inline-flex items-center justify-center w-5 h-5 rounded bg-gray-100 border border-gray-300">
                  <svg width="10" height="10" viewBox="0 0 12 12"><circle cx="6" cy="6" r="4" fill="none" stroke="#000" strokeWidth="1.5"/><circle cx="6" cy="6" r="1.5" fill="#000"/></svg>
                </span>
                P-PORT (CLIENT-SERVER)
              </button>
              <button
                onClick={() => handleAdd("required", "client")}
                className="w-full px-3 py-2 text-left text-sm text-gray-700 hover:bg-blue-50 flex items-center gap-2"
              >
                <span className="inline-flex items-center justify-center w-5 h-5 rounded bg-gray-100 border border-gray-300">
                  <svg width="10" height="10" viewBox="0 0 12 12"><path d="M 5 2 A 4.5 4.5 0 0 1 5 10" fill="none" stroke="#000" strokeWidth="1.5"/></svg>
                </span>
                R-PORT (CLIENT-SERVER)
              </button>
              <button
                onClick={() => handleAdd("provider", "sender")}
                className="w-full px-3 py-2 text-left text-sm text-gray-700 hover:bg-blue-50 flex items-center gap-2"
              >
                <span className="inline-flex items-center justify-center w-5 h-5 rounded bg-gray-100 border border-gray-300">
                  <svg width="10" height="10" viewBox="0 0 12 12"><polygon points="3,2 10,6 3,10" fill="#000"/></svg>
                </span>
                P-PORT (SENDER-RECEIVER)
              </button>
              <button
                onClick={() => handleAdd("required", "receiver")}
                className="w-full px-3 py-2 text-left text-sm text-gray-700 hover:bg-blue-50 flex items-center gap-2"
              >
                <span className="inline-flex items-center justify-center w-5 h-5 rounded bg-gray-100 border border-gray-300">
                  <svg width="10" height="10" viewBox="0 0 12 12"><polygon points="9,2 2,6 9,10" fill="#000"/></svg>
                </span>
                R-PORT (SENDER-RECEIVER)
              </button>
            </>
          ) : (
            <>
              <button
                onClick={() => handleAdd("provider")}
                className="w-full px-3 py-2 text-left text-sm text-gray-700 hover:bg-blue-50 flex items-center gap-2"
              >
                <span className="inline-flex items-center justify-center w-5 h-5 rounded bg-green-100 text-[10px] font-bold text-green-700">P</span>
                P-PORT-PROTOTYPE
              </button>
              <button
                onClick={() => handleAdd("required")}
                className="w-full px-3 py-2 text-left text-sm text-gray-700 hover:bg-blue-50 flex items-center gap-2"
              >
                <span className="inline-flex items-center justify-center w-5 h-5 rounded bg-orange-100 text-[10px] font-bold text-orange-700">R</span>
                R-PORT-PROTOTYPE
              </button>
            </>
          )}
          <div className="my-1 border-t border-gray-100" />
        </>
      )}
      <button
        onClick={() => {
          onDelete();
          onClose();
        }}
        className="w-full px-3 py-2 text-left text-sm text-red-600 hover:bg-red-100"
      >
        Delete {type === "node" ? "SWC" : "Port"}
      </button>
    </div>
    </>
  );
}
