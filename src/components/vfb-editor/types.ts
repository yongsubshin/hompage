// VFB Editor Types

export type CpPortKind = 'server' | 'client' | 'sender' | 'receiver';

export interface PortData {
  id: string;
  type: 'provider' | 'required';
  name: string;
  side: 'top' | 'right' | 'bottom' | 'left';
  position: number;
  cpPortKind?: CpPortKind;
}

export type Platform = 'ap' | 'cp';

export interface ExecutableData extends Record<string, unknown> {
  label: string;
  width: number;
  height: number;
  ports: PortData[];
  platform?: Platform;
  onLabelChange?: (nodeId: string, newLabel: string) => void;
}

// Context menu
export interface ContextMenuState {
  show: boolean;
  x: number;
  y: number;
  type: 'node' | 'port' | null;
  nodeId?: string;
  portId?: string;
}
