// SmokeCursor.tsx
import React, { useEffect, useState, useCallback } from 'react';
import '../Style/SmokeCursor.css';

// Define types for particles
interface Particle {
    id: number;
    x: number;
    y: number;
    size: number;
    opacity: number;
    velocityX: number;
    velocityY: number;
    color: string;
}

// Props interface (optional, for future enhancements)
interface SmokeCursorProps {
    intensity?: number; // 0 to 100
    color?: string; // Primary color
    particleCount?: number; // Max particles to show
    enabled?: boolean; // Enable/disable effect
}

const SmokeCursor: React.FC<SmokeCursorProps> = ({
    intensity = 50,
    particleCount = 40,
    enabled = true
}) => {
    const [particles, setParticles] = useState<Particle[]>([]);
    const [isMobile, setIsMobile] = useState<boolean>(false);
    const [isReducedMotion, setIsReducedMotion] = useState<boolean>(false);

    // Check if mobile device and reduced motion preference
    useEffect(() => {
        const checkDevice = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        const checkMotionPreference = () => {
            setIsReducedMotion(
                window.matchMedia('(prefers-reduced-motion: reduce)').matches
            );
        };

        checkDevice();
        checkMotionPreference();

        window.addEventListener('resize', checkDevice);
        const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
        mediaQuery.addEventListener('change', checkMotionPreference);

        return () => {
            window.removeEventListener('resize', checkDevice);
            mediaQuery.removeEventListener('change', checkMotionPreference);
        };
    }, []);

    // Create particle with typed parameters
    const createParticle = useCallback((x: number, y: number): Particle => {
        // Generate a hue variation based on the base color
        const hue = Math.random() * 60 + 180; // Blueish range
        const saturation = 100;
        const lightness = 50 + Math.random() * 20;

        return {
            id: Date.now() + Math.random(),
            x,
            y,
            size: Math.random() * 15 + 8,
            opacity: 0.7 * (intensity / 100),
            velocityX: (Math.random() - 0.5) * 2 * (intensity / 50),
            velocityY: (Math.random() - 0.5) * 2 * (intensity / 50),
            color: `hsla(${hue}, ${saturation}%, ${lightness}%, 0.7)`
        };
    }, [intensity]);

    // Handle mouse movement
    useEffect(() => {
        // Don't run if disabled, mobile, or reduced motion
        if (!enabled || isMobile || isReducedMotion) return;

        let animationFrameId: number;
        let lastMouseMoveTime = 0;
        const MOUSE_MOVE_THROTTLE = 16; // ~60fps

        const handleMouseMove = (e: MouseEvent) => {
            const now = Date.now();
            if (now - lastMouseMoveTime < MOUSE_MOVE_THROTTLE) return;
            lastMouseMoveTime = now;

            // Calculate particle count based on intensity
            const calculatedParticleCount = Math.floor((intensity / 100) * 2) + 1;
            const newParticles: Particle[] = [];

            for (let i = 0; i < calculatedParticleCount; i++) {
                // Add some randomness to particle positions
                const offsetX = (Math.random() - 0.5) * 20 * (intensity / 50);
                const offsetY = (Math.random() - 0.5) * 20 * (intensity / 50);

                newParticles.push(createParticle(
                    e.clientX + offsetX,
                    e.clientY + offsetY
                ));
            }

            setParticles(prev => {
                const updated = [...prev, ...newParticles];
                // Keep only the most recent particles up to particleCount
                return updated.slice(-particleCount);
            });
        };

        // Animation loop
        const animate = () => {
            setParticles(prev =>
                prev.map(p => ({
                    ...p,
                    x: p.x + p.velocityX,
                    y: p.y + p.velocityY,
                    opacity: p.opacity - 0.015 * (intensity / 50),
                    size: p.size * 0.98
                })).filter(p => p.opacity > 0.05 && p.size > 2)
            );
            animationFrameId = requestAnimationFrame(animate);
        };

        // Add event listeners
        window.addEventListener('mousemove', handleMouseMove);
        animate();

        // Cleanup
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            cancelAnimationFrame(animationFrameId);
        };
    }, [enabled, isMobile, isReducedMotion, intensity, particleCount, createParticle]);

    // Don't render if disabled, mobile, or reduced motion
    if (!enabled || isMobile || isReducedMotion) return null;

    return (
        <div
            className="smoke-cursor-container"
            data-intensity={intensity}
        >
            {particles.map(p => (
                <div
                    key={p.id}
                    className="smoke-particle"
                    style={{
                        left: `${p.x}px`,
                        top: `${p.y}px`,
                        width: `${p.size}px`,
                        height: `${p.size}px`,
                        opacity: p.opacity,
                        background: `radial-gradient(circle, ${p.color}, transparent 70%)`,
                        transform: `translate(-50%, -50%) scale(${1.2 - p.opacity})`,
                        filter: `blur(${p.size * 0.3}px)`
                    }}
                    aria-hidden="true"
                />
            ))}
        </div>
    );
};

export default SmokeCursor;