import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import "react-native-reanimated";
import { Slot } from "expo-router";
import CustomStatusBar from "@/components/customStatusBar";
import { Head } from "@/components/head";
import { ArtistHead, ArtistHead1 } from "@/components/artistHead";
import { Stack } from "expo-router";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [fontsLoaded, error] = useFonts({
    "Poppins-Black": require("../assets/fonts/Poppins-Black.ttf"),
    "Poppins-Bold": require("../assets/fonts/Poppins-Bold.ttf"),
    "Poppins-SemiBold": require("../assets/fonts/Poppins-SemiBold.ttf"),
    "Poppins-Light": require("../assets/fonts/Poppins-Light.ttf"),
    "Poppins-ExtraLight": require("../assets/fonts/Poppins-ExtraLight.ttf"),
    "Roboto-Regular": require("../assets/fonts/Roboto-Regular.ttf"),
  });
  useEffect(() => {
    if (error) throw error;

    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, error]);

  if (!fontsLoaded) {
    return null;
  }

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <CustomStatusBar statusBgColor="black" bgColor="black">
      <Stack>
        <Stack.Screen
          name="index"
          options={{
            header: (props) => <Head {...props} />,
          }}
        />
        <Stack.Screen
          name="artist/[query]"
          // options={{
          //   header: (props) => <ArtistHead {...props} />,
          // }}
          // options={{
          //   headerShown: false,
          // }}
          options={{
            header: (props) => <ArtistHead1 {...props} />,
          }}
        />
      </Stack>
    </CustomStatusBar>
  );
}
