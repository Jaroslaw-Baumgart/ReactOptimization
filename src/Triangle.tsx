import React, { useState, useEffect, useRef } from 'react';

interface Triangle {
  id: number;
  x: number;
  y: number;
  size: number;
  color: string;
  rotation: number;
  speed: number;
}

const FallingTriangles: React.FC = () => {
  const [triangles, setTriangles] = useState<Triangle[]>([]);
  const [isRunning, setIsRunning] = useState(true);
  const [spawnRate, setSpawnRate] = useState(500); // ms between triangles
  const triangleId = useRef(0);

  // Generate random color
  const getRandomColor = (): string => {
    const hue = Math.floor(Math.random() * 360);
    return `hsl(${hue}, 70%, 60%)`;
  };

  // Generate random triangle
  const generateRandomTriangle = (): Triangle => {
    const size = Math.random() * 30 + 20;
    return {
      id: triangleId.current++,
      x: Math.random() * (window.innerWidth - size),
      y: -size,
      size,
      color: getRandomColor(),
      rotation: Math.random() * 360,
      speed: Math.random() * 2 + 1
    };
  };

  // Add a single triangle
  const addTriangle = () => {
    setTriangles(prev => [...prev, generateRandomTriangle()]);
  };

  // Remove all triangles
  const clearAllTriangles = () => {
    setTriangles([]);
  };

  // Automatic triangle spawning
  useEffect(() => {
    if (!isRunning) return;

    const interval = setInterval(() => {
      addTriangle();
    }, spawnRate);

    return () => clearInterval(interval);
  }, [isRunning, spawnRate]);

  // Falling animation
  useEffect(() => {
    let animationFrameId: number;

    const updateTriangles = () => {
      setTriangles(prev => {
        const updated = prev.map(triangle => ({
          ...triangle,
          y: triangle.y + triangle.speed
        }));

        return updated.filter(triangle => 
          triangle.y - triangle.size < window.innerHeight
        );
      });

      animationFrameId = requestAnimationFrame(updateTriangles);
    };

    animationFrameId = requestAnimationFrame(updateTriangles);

    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  // Calculate triangles per second based on spawn rate
  const trianglesPerSecond = Math.round(1000 / spawnRate);

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      overflow: 'hidden',
      background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)'
    }}>
      {/* Triangles */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%'
      }}>
        {triangles.map(triangle => (
          <div
            key={triangle.id}
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
              transition: 'top 0.05s linear'
            }}
          />
        ))}
      </div>
      
      {/* Control Panel - Centered */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        background: 'rgba(0, 0, 0, 0.8)',
        padding: '25px',
        borderRadius: '15px',
        color: 'white',
        fontFamily: 'Arial, sans-serif',
        zIndex: 100,
        minWidth: '300px',
        boxShadow: '0 0 20px rgba(0, 0, 0, 0.5)',
        backdropFilter: 'blur(10px)'
      }}>
        <h2 style={{ 
          margin: '0 0 20px 0', 
          textAlign: 'center',
          color: '#ffa502'
        }}>
          Control Panel
        </h2>
        
        {/* Start/Stop and Clear buttons */}
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          marginBottom: '20px',
          gap: '10px'
        }}>
          <button
            onClick={() => setIsRunning(!isRunning)}
            style={{
              padding: '12px 20px',
              backgroundColor: isRunning ? '#ff4757' : '#2ed573',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              fontWeight: 'bold',
              flex: 1,
              fontSize: '16px'
            }}
          >
            {isRunning ? '⏸ Pause' : '▶ Start'}
          </button>
          
          <button
            onClick={clearAllTriangles}
            style={{
              padding: '12px 20px',
              backgroundColor: '#ffa502',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              fontWeight: 'bold',
              flex: 1,
              fontSize: '16px'
            }}
          >
            Clear All
          </button>
        </div>
        
        {/* Spawn Rate Slider */}
        <div style={{ marginBottom: '20px' }}>
          <label style={{
            display: 'block',
            marginBottom: '10px',
            fontWeight: 'bold',
            fontSize: '14px'
          }}>
            Spawn Rate: {spawnRate}ms ({trianglesPerSecond} triangles/sec)
          </label>
          <input
            type="range"
            min="10"
            max="1000"
            value={spawnRate}
            onChange={(e) => setSpawnRate(Number(e.target.value))}
            style={{
              width: '100%',
              height: '8px',
              borderRadius: '5px',
              background: '#3742fa',
              outline: 'none',
              opacity: 0.7,
              transition: 'opacity .2s',
              cursor: 'pointer'
            }}
          />
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            fontSize: '12px',
            marginTop: '5px',
            color: '#dfe4ea'
          }}>
            <span>Fast (10ms)</span>
            <span>Slow (1000ms)</span>
          </div>
        </div>
        
        {/* Statistics */}
        <div style={{
          textAlign: 'center',
          padding: '15px',
          backgroundColor: 'rgba(255, 255, 255, 0.1)',
          borderRadius: '8px',
          marginBottom: '15px'
        }}>
          <div style={{ 
            fontSize: '18px', 
            fontWeight: 'bold',
            marginBottom: '5px',
            color: '#ffa502'
          }}>
            {triangles.length}
          </div>
          <div style={{ fontSize: '14px' }}>
            Total Triangles
          </div>
        </div>
        
        {/* Status */}
        <div style={{
          textAlign: 'center',
          padding: '10px',
          backgroundColor: isRunning ? 'rgba(46, 213, 115, 0.2)' : 'rgba(255, 71, 87, 0.2)',
          borderRadius: '8px',
          border: `1px solid ${isRunning ? '#2ed573' : '#ff4757'}`,
          fontSize: '14px',
          fontWeight: 'bold'
        }}>
          Status: {isRunning ? 'RUNNING' : 'PAUSED'}
        </div>
      </div>
      
      {/* Instructions when no triangles */}
      {triangles.length === 0 && !isRunning && (
        <div style={{
          position: 'absolute',
          top: 'calc(50% + 150px)',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          textAlign: 'center',
          color: 'white',
          zIndex: 10,
          textShadow: '0 0 10px rgba(0,0,0,0.5)',
          background: 'rgba(0, 0, 0, 0.5)',
          padding: '15px',
          borderRadius: '10px'
        }}>
          <p style={{ fontSize: '1.1rem', margin: 0 }}>
            Click "Start" to begin spawning triangles
          </p>
          <p style={{ fontSize: '0.9rem', margin: '5px 0 0 0', opacity: 0.8 }}>
            Use the slider to adjust spawn rate
          </p>
        </div>
      )}
    </div>
  );
};

export default FallingTriangles;