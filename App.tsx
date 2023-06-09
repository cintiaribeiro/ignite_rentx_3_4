import React from 'react';
import { ThemeProvider } from 'styled-components'
import {
  useFonts,
  Inter_400Regular,
  Inter_500Medium,
} from '@expo-google-fonts/inter'
import {
  Archivo_400Regular,
  Archivo_500Medium,
  Archivo_600SemiBold
} from '@expo-google-fonts/archivo'
import theme from './src/styles/theme'

import { CarDetails } from './src/screens/CarDetails'

export default function App() {
  const [fontLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Archivo_400Regular,
    Archivo_500Medium,
    Archivo_600SemiBold
  });

  if(!fontLoaded){
    return null
  }
  return (
    <ThemeProvider theme={theme}>
      <CarDetails/>      
    </ThemeProvider>
  );
}
