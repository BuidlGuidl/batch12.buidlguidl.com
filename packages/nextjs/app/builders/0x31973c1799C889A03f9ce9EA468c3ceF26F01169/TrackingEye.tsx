import { useEffect, useRef, useState } from "react";

export const TrackingEye = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const eyeRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef<number | undefined>();
  const targetRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!eyeRef.current) return;

      const eye = eyeRef.current.getBoundingClientRect();
      const eyeCenterX = eye.left + eye.width / 2;
      const eyeCenterY = eye.top + eye.height / 2;

      const deltaX = e.clientX - eyeCenterX;
      const deltaY = e.clientY - eyeCenterY;
      const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

      const maxRadius = eye.width * 0.2;

      const angle = Math.atan2(deltaY, deltaX);
      const radius = Math.min(distance / 2, maxRadius);

      targetRef.current = {
        x: Math.cos(angle) * radius,
        y: Math.sin(angle) * radius,
      };
    };

    const animate = () => {
      if (!frameRef.current) return;

      setPosition(prev => ({
        x: prev.x + (targetRef.current.x - prev.x) * 0.1,
        y: prev.y + (targetRef.current.y - prev.y) * 0.1,
      }));

      frameRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMouseMove);
    frameRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, []);

  return (
    <div className="flex items-center justify-center">
      <div ref={eyeRef} className="relative size-16 rounded-full bg-white border-4 border-gray-800">
        <div
          className="absolute top-1/2 left-1/2 size-8 -mt-4 -ml-4 rounded-full bg-primary/80"
          style={{
            transform: `translate(${position.x}px, ${position.y}px)`,
          }}
        >
          <div className="absolute top-1/2 left-1/2 size-4 -mt-2 -ml-2 rounded-full bg-gray-900" />
        </div>
      </div>
    </div>
  );
};
