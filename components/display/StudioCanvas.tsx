import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber/native';
import { Environment, ContactShadows, Float, OrbitControls } from '@react-three/drei/native';
import { View, StyleSheet } from 'react-native';

export default function StudioCanvas({ children }: { children: React.ReactNode }) {
  return (
    <View style={styles.container}>
      <Canvas
        shadows
        camera={{ position: [0, 0, 4], fov: 45 }}
        gl={{ 
          antialias: true,
          toneMappingExposure: 1.2 // Aumenta ligeramente el brillo global
        }}
      >
        <ambientLight intensity={0.7} /> 
        <spotLight position={[10, 10, 10]} intensity={1.5} penumbra={1} castShadow />
        <pointLight position={[-10, -10, -10]} color="#D4AF37" intensity={0.8} />
        
        <OrbitControls enableZoom={false} enablePan={false} />
        
        <Suspense fallback={null}>
          <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.4}>
            {children}
          </Float>
          <ContactShadows position={[0, -1.8, 0]} opacity={0.5} scale={10} blur={2} far={2.5} />
          <Environment preset="apartment" /> 
        </Suspense>
      </Canvas>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
});