import { Groups } from '@screens/Groups';
import { ThemeProvider } from 'styled-components';
import theme from './src/theme'
import { ActivityIndicator } from 'react-native'
import { 
        useFonts, 
        Roboto_400Regular, 
        Roboto_700Bold } 
  from '@expo-google-fonts/roboto'

export default function App() {
  const [fontsLoaded] = useFonts({Roboto_400Regular, Roboto_700Bold});

  return (
    <ThemeProvider theme={theme}>
      { fontsLoaded ?  <Groups /> : <ActivityIndicator/>}
    </ThemeProvider>
  );
}
