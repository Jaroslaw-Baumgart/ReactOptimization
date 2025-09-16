export interface Triangle {
  id: number;
  x: number;
  y: number;
  size: number;
  color: string;
  rotation: number;
  speed: number;
}

export interface ControlPanelProps {
  isRunning: boolean;
  setIsRunning: (running: boolean) => void;
  spawnRate: number;
  setSpawnRate: (rate: number) => void;
  trianglesCount: number;
  clearAllTriangles: () => void;
}