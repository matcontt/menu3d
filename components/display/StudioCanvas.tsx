import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber/native';
import { Environment, ContactShadows, Float } from '@react-three/drei/native';
import { ActivityIndicator, View, StyleSheet } from 'react-native';

interface StudioCanvasProps {
  children: React.ReactNode;
}

export default function StudioCanvas({ children }: StudioCanvasProps) {
  return (
    <View style={styles.container}>
      <Canvas
        shadows
        camera={{ position: [0, 0, 4], fov: 45 }}
        gl={{ antialias: true }}
      >
        {/* Iluminación de Estudio */}
        <ambientLight intensity={0.3} />
        <spotLight position={[5, 5, 5]} intensity={1} castShadow />
        <pointLight position={[-5, -5, -5]} color="#D4AF37" intensity={0.5} />
        
        <Suspense fallback={null}>
          <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
            {children}
          </Float>
          
          {/* Sombra suave en el suelo para realismo */}
          <ContactShadows 
            position={[0, -0.8, 0]} 
            opacity={0.4} 
            scale={5} 
            blur={2.5} 
            far={1} 
          />
          
          {/* Reflejos predefinidos para materiales metálicos/brillantes */}
          <Environment preset="city" />
        </Suspense>
      </Canvas>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
  },
});