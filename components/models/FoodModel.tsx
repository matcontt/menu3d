import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber/native';
import { useGLTF } from '@react-three/drei/native';
import { Group } from 'three';
import { useMenu } from '../../lib/context/MenuContext'; // Importamos el contexto

export default function FoodModel({ modelPath }: { modelPath: any }) {
  const { selectedItem } = useMenu(); // Obtenemos la info del item actual
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
      scale={selectedItem.scale} // <-- Aplicamos la escala personalizada
      position={[0, -0.8, 0]} 
    />
  );
}