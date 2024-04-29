import { NewGroup } from '@screens/NewGroup';
import { ThemeProvider } from 'styled-components';
import theme from './src/theme'
import { Loading } from '@components/Loading';
import { StatusBar } from 'react-native';
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold
}
  from '@expo-google-fonts/roboto'
import React from 'react';

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });

  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      {fontsLoaded ? <NewGroup /> : <Loading />}
    </ThemeProvider>
  );
}
