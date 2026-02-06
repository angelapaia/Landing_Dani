'use client';

import { useRef, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';
import { vertexShader, fragmentShader } from '@/lib/shaders/darkVeilShader';

/**
 * DarkVeil Component
 * Fondo shader dinámico que reacciona al movimiento del mouse
 * Implementa el "Shader Core" especificado en los requisitos
 */

function ShaderPlane() {
  const meshRef = useRef<THREE.Mesh>(null);
  const mouseRef = useRef({ x: 0.5, y: 0.5 });
  const { size } = useThree();

  // Uniforms para el shader
  const uniforms = useRef({
    uTime: { value: 0 },
    uMouse: { value: new THREE.Vector2(0.5, 0.5) },
    uResolution: { value: new THREE.Vector2(size.width, size.height) },
  });

  // Actualizar mouse position
  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      mouseRef.current = {
        x: event.clientX / window.innerWidth,
        y: 1.0 - event.clientY / window.innerHeight, // Invertir Y
      };
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Actualizar uniforms en cada frame
  useFrame((state) => {
    if (meshRef.current) {
      const material = meshRef.current.material as THREE.ShaderMaterial;

      // Smooth lerp para el mouse (efecto suave)
      const currentMouse = uniforms.current.uMouse.value;
      currentMouse.x += (mouseRef.current.x - currentMouse.x) * 0.05;
      currentMouse.y += (mouseRef.current.y - currentMouse.y) * 0.05;

      material.uniforms.uTime.value = state.clock.elapsedTime;
      material.uniforms.uMouse.value = currentMouse;
    }
  });

  // Actualizar resolución en resize
  useEffect(() => {
    uniforms.current.uResolution.value.set(size.width, size.height);
  }, [size]);

  return (
    <mesh ref={meshRef} scale={[size.width / 100, size.height / 100, 1]}>
      <planeGeometry args={[10, 10, 32, 32]} />
      <shaderMaterial
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms.current}
        side={THREE.DoubleSide}
      />
    </mesh>
  );
}

export default function DarkVeil() {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        dpr={[1, 2]}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: 'high-performance',
        }}
      >
        <ShaderPlane />
      </Canvas>
    </div>
  );
}
