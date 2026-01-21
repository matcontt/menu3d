import React from 'react';
import { View, StyleSheet, SafeAreaView } from 'react-native';
import { useMenu } from '../lib/context/MenuContext';
import { COLORS } from '../lib/constants/menuData';

// Componentes que creamos anteriormente
import StudioCanvas from '../components/display/StudioCanvas';
import FoodModel from '../components/models/FoodModel';
import ProductInfo from '../components/ui/ProductInfo';
import FoodSelector from '../components/ui/FoodSelector';

export default function MainMenu() {
  const { selectedItem } = useMenu();

  return (
    <View style={styles.container}>
      {/* 1. Capa del Modelo 3D */}
      <View style={styles.canvasContainer}>
        <StudioCanvas>
          <FoodModel 
            key={selectedItem.id} 
            modelPath={selectedItem.modelPath} 
          />
        </StudioCanvas>
      </View>

      {/* 2. Capa de Interfaz de Usuario */}
      <SafeAreaView style={styles.uiContainer}>
        <View style={styles.spacer} />
        <FoodSelector />
        <ProductInfo />
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  canvasContainer: {
    ...StyleSheet.absoluteFillObject, // El 3D vive detrás de la UI
  },
  uiContainer: {
    flex: 1,
    justifyContent: 'space-between',
  },
  spacer: {
    flex: 1, // Esto empuja la información hacia abajo para no tapar el modelo
  },
});