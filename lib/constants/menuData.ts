import { Platform } from 'react-native';

export const COLORS = {
  background: '#050505',     // Negro profundo
  surface: '#121212',        // Gris muy oscuro para tarjetas
  accent: '#D4AF37',         // Oro (High Class)
  textPrimary: '#F2F2F2',    // Blanco hueso
  textSecondary: '#8E8E93',  // Gris para especificaciones
  priceTag: '#E5E5E5',
};

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string;
  specs: {
    weight: string;
    calories: string;
    temp: string;
  };
  modelPath: any;
}

export const MENU_ITEMS: MenuItem[] = [
  {
    id: '1',
    name: 'KYOTO SHOYU RAMEN',
    description: 'Fideos artesanales en caldo de soja fermentada 48h, con láminas de cerdo ibérico y huevo marinado.',
    price: '$28.00',
    specs: { weight: '450g', calories: '620 kcal', temp: '85°C' },
    // Ajustamos la ruta según tu estructura de assets
    modelPath: require('../../assets/models/Ramen-GLB.gltf'),
  },
  {
    id: '2',
    name: 'CRIMSON GOLDEN APPLE',
    description: 'Manzana Fuji seleccionada, para todos esos deportistas que quieren comer una buena manzana.',
    price: '$15.00',
    specs: { weight: '200g', calories: '180 kcal', temp: '12°C' },
    modelPath: require('../../assets/models/AppleIcon.glb'),
  },
  {
    id: '3',
    name: 'MIDNIGHT VELVET CAKE',
    description: 'Bizcocho de cacao premium con capas de mousse de chocolate 70% y frutos del bosque.',
    price: '$22.50',
    specs: { weight: '180g', calories: '410 kcal', temp: '18°C' },
    modelPath: require('../../assets/models/Cake.glb'),
  },
];