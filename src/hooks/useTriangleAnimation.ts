import { useEffect } from 'react';
import type { Triangle } from '../components/types';

export const useTriangleAnimation = (
  triangles: Triangle[],
  setTriangles: (triangles: Triangle[]) => void
) => {
  useEffect(() => {
    let animationFrameId: number;

    const updateTriangles = () => {
      setTriangles((prev: Triangle[]) => {
        const updated = prev.map((triangle: Triangle) => ({
          ...triangle,
          y: triangle.y + triangle.speed
        }));

        return updated.filter((triangle: Triangle) => 
          triangle.y - triangle.size < window.innerHeight
        );
      });

      animationFrameId = requestAnimationFrame(updateTriangles);
    };

    animationFrameId = requestAnimationFrame(updateTriangles);

    return () => cancelAnimationFrame(animationFrameId);
  }, [triangles, setTriangles]);
};