import React, { useState } from 'react';
import { useTriangleGenerator } from '../hooks/useTriangleGenerator';
import { useTriangleAnimation } from '../hooks/useTriangleAnimation';
import { Triangle } from './Triangle';
import { ControlPanel } from './ControlPanel';
import './styles.css';

export const FallingTriangles: React.FC = () => {
  const [isRunning, setIsRunning] = useState(true);
  const [spawnRate, setSpawnRate] = useState(500);
  
  const { triangles, setTriangles, clearAllTriangles } = 
    useTriangleGenerator(isRunning, spawnRate);
  
  useTriangleAnimation(triangles, setTriangles);

  return (
    <div className="falling-triangles-container">
      <div className="triangles-wrapper">
        {triangles.map(triangle => (
          <Triangle key={triangle.id} triangle={triangle} />
        ))}
      </div>
      
      <ControlPanel
        isRunning={isRunning}
        setIsRunning={setIsRunning}
        spawnRate={spawnRate}
        setSpawnRate={setSpawnRate}
        trianglesCount={triangles.length}
        clearAllTriangles={clearAllTriangles}
      />
      
      {triangles.length === 0 && !isRunning && (
        <div className="instructions">
          <p>Click "Start" to begin spawning triangles</p>
          <p>Use the slider to adjust spawn rate</p>
        </div>
      )}
    </div>
  );
};