import type { Triangle } from '../components/types';

let triangleId = 0;

export const getRandomColor = (): string => {
  const hue = Math.floor(Math.random() * 360);
  return `hsl(${hue}, 70%, 60%)`;
};

export const generateRandomTriangle = (): Triangle => {
  const size = Math.random() * 30 + 20;
  return {
    id: triangleId++,
    x: Math.random() * (window.innerWidth - size),
    y: -size,
    size,
    color: getRandomColor(),
    rotation: Math.random() * 360,
    speed: Math.random() * 2 + 1
  };
};

export const calculateTrianglesPerSecond = (spawnRate: number): number => {
  return Math.round(1000 / spawnRate);
};