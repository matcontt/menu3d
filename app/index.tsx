import React from 'react';
import { View, StyleSheet, SafeAreaView } from 'react-native';
import { useMenu } from '../lib/context/MenuContext';
import { COLORS } from '../lib/constants/menuData';

import StudioCanvas from '../components/display/StudioCanvas';
import FoodModel from '../components/models/FoodModel';
import ProductInfo from '../components/ui/ProductInfo';
import FoodSelector from '../components/ui/FoodSelector';

export default function MainMenu() {
  const { selectedItem } = useMenu();

  return (
    <View style={styles.container}>
      <View style={styles.canvasContainer}>
        <StudioCanvas>
          <FoodModel 
            key={selectedItem.id} 
            modelPath={selectedItem.modelPath} 
          />
        </StudioCanvas>
      </View>

      {/* box-none permite que los gestos lleguen al 3D en las zonas vacías */}
      <SafeAreaView style={styles.uiContainer} pointerEvents="box-none">
        <View style={styles.spacer} pointerEvents="none" />
        <View style={styles.bottomControls}>
          <FoodSelector />
          <ProductInfo />
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.background },
  canvasContainer: { ...StyleSheet.absoluteFillObject },
  uiContainer: { flex: 1 },
  spacer: { flex: 1 },
  bottomControls: { backgroundColor: 'transparent' }
});