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
      >
        <ambientLight intensity={0.5} />
        <spotLight position={[5, 5, 5]} intensity={1} />
        
        {/* OrbitControls permite la rotación con el dedo */}
        <OrbitControls 
          enableZoom={false} 
          enablePan={false}
          minPolarAngle={Math.PI / 3}
          maxPolarAngle={Math.PI / 1.5}
        />
        
        <Suspense fallback={null}>
          <Float speed={1.2} rotationIntensity={0.2} floatIntensity={0.3}>
            {children}
          </Float>
          <ContactShadows position={[0, -1.5, 0]} opacity={0.4} scale={5} blur={2.5} />
          <Environment preset="city" />
        </Suspense>
      </Canvas>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
});