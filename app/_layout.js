import { Stack } from 'expo-router';
import { useCallback } from 'react';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();

const Layout = () => {
    const [fontLoaded] =useFonts({
        DMBOLD: require('../assets/fonts/DMSans-Bold.ttf'),
        DMMEDIUM: require('../assets/fonts/DMSans-Medium.ttf'), 
        DMBOLD: require('../assets/fonts/DMSans-Bold.ttf')
    })
const onLayoutRootView = useCallback(async () => {
    if(fontLoaded){
        await SplashScreen.hideAsync()
    }
},[fontLoaded])


    return <Stack />;
}

export default Layout;