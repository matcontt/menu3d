import React, { createContext, useContext, useState, ReactNode } from 'react';
import { MENU_ITEMS, MenuItem } from '../constants/menuData';

interface MenuContextType {
  selectedItem: MenuItem;
  setSelectedItem: (item: MenuItem) => void;
  nextItem: () => void;
  prevItem: () => void;
}

const MenuContext = createContext<MenuContextType | undefined>(undefined);

export const MenuProvider = ({ children }: { children: ReactNode }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextItem = () => {
    setCurrentIndex((prev) => (prev + 1) % MENU_ITEMS.length);
  };

  const prevItem = () => {
    setCurrentIndex((prev) => (prev - 1 + MENU_ITEMS.length) % MENU_ITEMS.length);
  };

  const value = {
    selectedItem: MENU_ITEMS[currentIndex],
    setSelectedItem: (item: MenuItem) => {
      const index = MENU_ITEMS.findIndex((i) => i.id === item.id);
      if (index !== -1) setCurrentIndex(index);
    },
    nextItem,
    prevItem,
  };

  return (
    <MenuContext.Provider value={value}>
      {children}
    </MenuContext.Provider>
  );
};

export const useMenu = () => {
  const context = useContext(MenuContext);
  if (!context) {
    throw new Error('useMenu debe usarsedentro de un MenuProvider');
  }
  return context;
};