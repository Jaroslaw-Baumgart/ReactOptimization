import React from 'react';
import type { ControlPanelProps } from './types';
import { calculateTrianglesPerSecond } from '../utils/triangleUtils';

export const ControlPanel: React.FC<ControlPanelProps> = ({
  isRunning,
  setIsRunning,
  spawnRate,
  setSpawnRate,
  trianglesCount,
  clearAllTriangles
}) => {
  const trianglesPerSecond = calculateTrianglesPerSecond(spawnRate);

  return (
    <div className="control-panel">
      <h2>Control Panel</h2>
      
      <div className="control-buttons">
        <button
          onClick={() => setIsRunning(!isRunning)}
          className={`control-button ${isRunning ? 'pause' : 'start'}`}
        >
          {isRunning ? '⏸ Pause' : '▶ Start'}
        </button>
        
        <button
          onClick={clearAllTriangles}
          className="control-button clear"
        >
          Clear All
        </button>
      </div>
      
      <div className="slider-container">
        <label>
          Spawn Rate: {spawnRate}ms ({trianglesPerSecond} triangles/sec)
        </label>
        <input
          type="range"
          min="10"
          max="1000"
          value={spawnRate}
          onChange={(e) => setSpawnRate(Number(e.target.value))}
          className="spawn-slider"
        />
        <div className="slider-labels">
          <span>Fast (10ms)</span>
          <span>Slow (1000ms)</span>
        </div>
      </div>
      
      <div className="stats-container">
        <div className="triangle-count">
          {trianglesCount}
        </div>
        <div className="stats-label">
          Total Triangles
        </div>
      </div>
      
      <div className={`status-indicator ${isRunning ? 'running' : 'paused'}`}>
        Status: {isRunning ? 'RUNNING' : 'PAUSED'}
      </div>
    </div>
  );
};