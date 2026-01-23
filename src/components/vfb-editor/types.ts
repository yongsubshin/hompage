// VFB Editor Types

export interface PortData {
  id: string;
  type: 'provider' | 'required';
  name: string;
  side: 'top' | 'right' | 'bottom' | 'left';
  position: number;
}

export interface ExecutableData extends Record<string, unknown> {
  label: string;
  width: number;
  height: number;
  ports: PortData[];
  onLabelChange?: (nodeId: string, newLabel: string) => void;
}

// For click-to-connect
export interface SelectedPort {
  nodeId: string;
  portId: string;
  portType: 'provider' | 'required';
}

// Context menu
export interface ContextMenuState {
  show: boolean;
  x: number;
  y: number;
  type: 'node' | 'port' | null;
  nodeId?: string;
  portId?: string;
  clickPosition?: { x: number; y: number; side: 'top' | 'right' | 'bottom' | 'left'; position: number };
}
