"use client";

import { Cpu, Trash2, Plus, Download } from "lucide-react";

interface ToolbarProps {
  onLoadDemo: (type: "ap" | "cp") => void;
  onAddSWC: () => void;
  onExport: () => void;
  onClear: () => void;
  activeDemo: "ap" | "cp" | null;
  hasModifications: boolean;
}

export default function Toolbar({
  onLoadDemo,
  onAddSWC,
  onExport,
  onClear,
  activeDemo,
  hasModifications,
}: ToolbarProps) {
  return (
    <div className="flex items-center gap-3 px-4 py-2.5 bg-gray-50 border-b border-gray-200">
      {/* AP Button */}
      <button
        onClick={() => onLoadDemo("ap")}
        className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-sm font-medium shadow-sm hover:shadow transition-all duration-150 active:scale-95 ${
          activeDemo === "ap"
            ? "bg-blue-600 text-white ring-2 ring-blue-300"
            : "bg-white text-gray-700 border border-gray-200 hover:bg-blue-50 hover:border-blue-200"
        }`}
      >
        <Cpu className="w-4 h-4" />
        AP
      </button>

      {/* CP Button */}
      <button
        onClick={() => onLoadDemo("cp")}
        className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-sm font-medium shadow-sm hover:shadow transition-all duration-150 active:scale-95 ${
          activeDemo === "cp"
            ? "bg-green-600 text-white ring-2 ring-green-300"
            : "bg-white text-gray-700 border border-gray-200 hover:bg-green-50 hover:border-green-200"
        }`}
      >
        <Cpu className="w-4 h-4" />
        CP
      </button>

      <div className="w-px h-5 bg-gray-300" />

      {/* Add SWC Button */}
      <button
        onClick={onAddSWC}
        disabled={!activeDemo}
        className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-sm font-medium shadow-sm transition-all duration-150 ${
          activeDemo
            ? "bg-white text-gray-700 border border-gray-200 hover:bg-purple-50 hover:border-purple-200 active:scale-95 hover:shadow"
            : "bg-gray-100 text-gray-400 border border-gray-200 cursor-not-allowed"
        }`}
      >
        <Plus className="w-3.5 h-3.5" />
        Add SWC
      </button>

      {/* Export Button */}
      <button
        onClick={onExport}
        disabled={!activeDemo}
        className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-sm font-medium shadow-sm transition-all duration-150 ${
          activeDemo
            ? hasModifications
              ? "bg-orange-500 text-white hover:bg-orange-600 active:scale-95 hover:shadow"
              : "bg-white text-gray-700 border border-gray-200 hover:bg-cyan-50 hover:border-cyan-200 active:scale-95 hover:shadow"
            : "bg-gray-100 text-gray-400 border border-gray-200 cursor-not-allowed"
        }`}
      >
        <Download className="w-3.5 h-3.5" />
        Export{hasModifications ? "*" : ""}
      </button>

      <div className="flex-1" />

      {/* Tips */}
      <div className="text-xs text-gray-400">
        Select AP or CP to load VFB design
      </div>

      <div className="w-px h-5 bg-gray-300" />

      {/* Clear */}
      <button
        onClick={onClear}
        className="flex items-center gap-1.5 px-3 py-1.5 rounded-md text-sm font-medium bg-white text-red-500 hover:bg-red-50 active:scale-95 border border-gray-200 hover:border-red-200 transition-all duration-150"
      >
        <Trash2 className="w-3.5 h-3.5" />
        Clear
      </button>
    </div>
  );
}
