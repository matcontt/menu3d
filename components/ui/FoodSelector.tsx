import React from 'react';
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';
import { useMenu } from '../../lib/context/MenuContext';
import { MENU_ITEMS, COLORS } from '../../lib/constants/menuData';

export default function FoodSelector() {
  const { selectedItem, setSelectedItem } = useMenu();

  return (
    <View style={styles.container}>
      {MENU_ITEMS.map((item) => {
        const isSelected = selectedItem.id === item.id;
        
        return (
          <TouchableOpacity
            key={item.id}
            onPress={() => setSelectedItem(item)}
            style={styles.button}
          >
            {/* Indicador visual minimalista */}
            <View style={[
              styles.dot, 
              isSelected && styles.activeDot
            ]} />
            
            <Text style={[
              styles.label, 
              isSelected ? styles.activeLabel : styles.inactiveLabel
            ]}>
              {item.id.padStart(2, '0')}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
    gap: 30,
  },
  button: {
    alignItems: 'center',
    padding: 10,
  },
  dot: {
    width: 4,
    height: 4,
    borderRadius: 2,
    backgroundColor: 'transparent',
    marginBottom: 8,
  },
  activeDot: {
    backgroundColor: COLORS.accent,
    transform: [{ scale: 1.5 }],
  },
  label: {
    fontSize: 12,
    letterSpacing: 2,
    fontWeight: '600',
  },
  activeLabel: {
    color: COLORS.textPrimary,
  },
  inactiveLabel: {
    color: '#333',
  },
});