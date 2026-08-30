'use client';

import { useEffect, useRef, useState } from 'react';

export default function OceanCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    const listener = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', listener);
    return () => mediaQuery.removeEventListener('change', listener);
  }, []);

  useEffect(() => {
    if (prefersReducedMotion) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let time = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = document.documentElement.scrollHeight;
    };

    window.addEventListener('resize', resize);
    resize();

    const layers = [
      { amp: 40, freq: 0.0015, speed: 0.4, color: 'rgba(203,169,107,0.05)', yBase: 0.15 },
      { amp: 60, freq: 0.0011, speed: 0.25, color: 'rgba(192,107,62,0.04)', yBase: 0.45 },
      { amp: 50, freq: 0.0018, speed: 0.32, color: 'rgba(203,169,107,0.06)', yBase: 0.75 }
    ];

    const draw = () => {
      ctx.fillStyle = '#0A1B37';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      layers.forEach(layer => {
        ctx.beginPath();
        const yStart = canvas.height * layer.yBase;
        ctx.moveTo(0, yStart);
        
        for (let x = 0; x <= canvas.width; x += 10) {
          const y = yStart + Math.sin(x * layer.freq + time * layer.speed) * layer.amp;
          ctx.lineTo(x, y);
        }
        
        ctx.lineTo(canvas.width, canvas.height);
        ctx.lineTo(0, canvas.height);
        ctx.closePath();
        ctx.fillStyle = layer.color;
        ctx.fill();
      });

      time += 0.05;
      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [prefersReducedMotion]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full -z-10 opacity-55 pointer-events-none"
    />
  );
}
