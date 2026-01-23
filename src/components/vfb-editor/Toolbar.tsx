"use client";

import { Plus, Download, Trash2 } from "lucide-react";

interface ToolbarProps {
  onAddExecutable: () => void;
  onExportARXML: () => void;
  onClear: () => void;
  selectedPortInfo: string | null;
}

export default function Toolbar({
  onAddExecutable,
  onExportARXML,
  onClear,
  selectedPortInfo,
}: ToolbarProps) {
  return (
    <div className="flex items-center gap-3 p-3 bg-gray-100 border-b border-gray-300">
      {/* Add Executable */}
      <button
        onClick={onAddExecutable}
        className="flex items-center gap-1.5 px-3 py-1.5 rounded-md text-sm font-medium bg-yellow-500 text-black hover:bg-yellow-400 border border-yellow-600 transition-colors"
        title="Add Executable"
      >
        <Plus className="w-4 h-4" />
        Executable
      </button>

      <div className="w-px h-6 bg-gray-300" />

      {/* Selected port indicator */}
      {selectedPortInfo && (
        <>
          <div className="px-3 py-1 rounded bg-blue-100 border border-blue-300 text-sm text-blue-800">
            {selectedPortInfo} <span className="text-blue-500">→ Click another port to connect</span>
          </div>
          <div className="w-px h-6 bg-gray-300" />
        </>
      )}

      <div className="flex-1" />

      {/* Tips */}
      <div className="text-xs text-gray-500">
        Right-click for menu
      </div>

      <div className="w-px h-6 bg-gray-300" />

      {/* Export & Clear */}
      <button
        onClick={onClear}
        className="flex items-center gap-1.5 px-3 py-1.5 rounded-md text-sm font-medium bg-white text-red-600 hover:bg-red-50 border border-red-300 transition-colors"
      >
        <Trash2 className="w-4 h-4" />
        Clear
      </button>
      <button
        onClick={onExportARXML}
        className="flex items-center gap-1.5 px-3 py-1.5 rounded-md text-sm font-medium bg-blue-600 text-white hover:bg-blue-700 transition-colors"
      >
        <Download className="w-4 h-4" />
        Export ARXML
      </button>
    </div>
  );
}
