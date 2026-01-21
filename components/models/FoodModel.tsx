import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber/native';
import { useGLTF } from '@react-three/drei/native';
import { Group } from 'three'; // Cambiamos Mesh por Group para mayor compatibilidad

interface FoodModelProps {
  modelPath: any;
}

export default function FoodModel({ modelPath }: FoodModelProps) {
  // Añadimos el "as any" o el casting correcto para evitar el error de TS
  const gltf = useGLTF(modelPath) as any;
  const modelRef = useRef<Group>(null);

  useFrame((state) => {
    if (modelRef.current) {
      modelRef.current.rotation.y += 0.005; 
      modelRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.05;
    }
  });

  return (
    <primitive 
      ref={modelRef}
      object={gltf.scene} 
      scale={1.8} // Un poco más grande para el iPhone 14
      position={[0, -0.5, 0]} 
    />
  );
}