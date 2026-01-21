import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber/native';
import { useGLTF } from '@react-three/drei/native';
import { Group } from 'three';
import { useMenu } from '../../lib/context/MenuContext';

export default function FoodModel({ modelPath }: { modelPath: any }) {
  const { selectedItem } = useMenu();
  const { scene } = useGLTF(modelPath) as any;
  const modelRef = useRef<Group>(null);

  useFrame(() => {
    if (modelRef.current) {
      // Rotación automática muy tenue
      modelRef.current.rotation.y += 0.003;
    }
  });

  return (
    <primitive 
      ref={modelRef}
      object={scene} 
      scale={selectedItem.scale} 
      // Aplicamos la posición Y de las constantes
      position={[0, selectedItem.positionY, 0]} 
    />
  );
}