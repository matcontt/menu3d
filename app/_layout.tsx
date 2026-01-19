import { Stack } from 'expo-router';
import { MenuProvider } from '../lib/context/MenuContext';
import { StatusBar } from 'expo-status-bar';

export default function RootLayout() {
  return (
    <MenuProvider>
      <StatusBar style="light" />
      <Stack screenOptions={{ headerShown: false }} />
    </MenuProvider>
  );
}