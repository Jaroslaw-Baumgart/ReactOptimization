import { useState, useEffect } from 'react';
import type { Triangle } from '../components/types';
import { generateRandomTriangle } from '../utils/triangleUtils';

export const useTriangleGenerator = (isRunning: boolean, spawnRate: number) => {
  const [triangles, setTriangles] = useState<Triangle[]>([]);

  const addTriangle = () => {
    setTriangles(prev => [...prev, generateRandomTriangle()]);
  };

  const clearAllTriangles = () => {
    setTriangles([]);
  };

  useEffect(() => {
    if (!isRunning) return;

    const interval = setInterval(() => {
      addTriangle();
    }, spawnRate);

    return () => clearInterval(interval);
  }, [isRunning, spawnRate]);

  return {
    triangles,
    setTriangles,
    addTriangle,
    clearAllTriangles
  };
};