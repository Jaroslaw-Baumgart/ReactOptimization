import React from 'react';
import type { Triangle as TriangleType } from './types';

interface TriangleProps {
  triangle: TriangleType;
}

export const Triangle: React.FC<TriangleProps> = ({ triangle }) => {
  return (
    <div
      style={{
        position: 'absolute',
        left: triangle.x,
        top: triangle.y,
        width: 0,
        height: 0,
        borderLeft: `${triangle.size / 2}px solid transparent`,
        borderRight: `${triangle.size / 2}px solid transparent`,
        borderBottom: `${triangle.size}px solid ${triangle.color}`,
        transform: `rotate(${triangle.rotation}deg)`,
        transformOrigin: 'center center',
        opacity: 0.8,
        transition: 'top 0.05s linear',
        pointerEvents: 'none'
      }}
    />
  );
};