import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useMenu } from '../../lib/context/MenuContext';
import { COLORS } from '../../lib/constants/menuData';

export default function ProductInfo() {
  const { selectedItem } = useMenu();

  return (
    <View style={styles.container}>
      <Text style={styles.name}>{selectedItem.name}</Text>
      <Text style={styles.description}>{selectedItem.description}</Text>
      
      <View style={styles.specsRow}>
        <View style={styles.specItem}>
          <Text style={styles.specLabel}>PESO</Text>
          <Text style={styles.specValue}>{selectedItem.specs.weight}</Text>
        </View>
        <View style={[styles.specItem, styles.borderCenter]}>
          <Text style={styles.specLabel}>CALORÍAS</Text>
          <Text style={styles.specValue}>{selectedItem.specs.calories}</Text>
        </View>
        <View style={styles.specItem}>
          <Text style={styles.specLabel}>TEMP</Text>
          <Text style={styles.specValue}>{selectedItem.specs.temp}</Text>
        </View>
      </View>
      
      <View style={styles.footer}>
        <Text style={styles.priceLabel}>PRECIO</Text>
        <Text style={styles.price}>{selectedItem.price}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 25,
    paddingBottom: 20,
  },
  name: {
    color: COLORS.accent,
    fontSize: 26,
    fontWeight: '800',
    letterSpacing: 1.2,
    marginBottom: 8,
    textTransform: 'uppercase',
  },
  description: {
    color: COLORS.textSecondary,
    fontSize: 15,
    lineHeight: 22,
    marginBottom: 25,
    fontWeight: '300',
  },
  specsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderTopWidth: 0.5,
    borderBottomWidth: 0.5,
    borderColor: '#2A2A2A',
    paddingVertical: 15,
    marginBottom: 25,
  },
  specItem: { flex: 1, alignItems: 'center' },
  borderCenter: { 
    borderLeftWidth: 0.5, 
    borderRightWidth: 0.5, 
    borderColor: '#2A2A2A' 
  },
  specLabel: { 
    color: COLORS.textSecondary, 
    fontSize: 10, 
    marginBottom: 4,
    letterSpacing: 1 
  },
  specValue: { 
    color: COLORS.textPrimary, 
    fontSize: 13, 
    fontWeight: '600' 
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'baseline',
    justifyContent: 'space-between'
  },
  priceLabel: {
    color: COLORS.textSecondary,
    fontSize: 12,
    letterSpacing: 1
  },
  price: { 
    color: COLORS.textPrimary, 
    fontSize: 36, 
    fontWeight: '200' 
  },
});