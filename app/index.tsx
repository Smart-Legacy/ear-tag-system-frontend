import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { SafeAreaView } from "react-native-safe-area-context";

import "react-native-reanimated";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  useColorScheme,
} from "react-native";
import { Redirect, router } from "expo-router";
import { StatusBar } from "expo-status-bar";

import CoverImage from "@/assets/images/MedaNameWIconSlogan.png";
import CustomButton from "@/components/CustomButton";
import { ThemedText } from "@/components/ThemedText";
import { Href } from "expo-router";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function HomePage() {
  const colorScheme = useColorScheme() ?? "light";

  return (
    <SafeAreaView className="h-full">
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="items-center h-full justify-center">
          <View className="w-full justify-center items-center min-h-85[vh] px-4">
            <Image
              source={CoverImage}
              className="max-w-[380px] w-full h-[300px]"
              resizeMode="contain"
            />
            <View className="relative">
              <ThemedText type="subtitle" style={{ textAlign: "center" }}>
                {" "}
                Empowering Farmers, One Cattle at a Time. &nbsp;
              </ThemedText>
            </View>

            <ThemedText textStyles="text-sm font-pregular text-gray-100 mt-7 text-center">
              Where creativity meets innovation:
            </ThemedText>

            <CustomButton
              title="Continue with Email"
              handlePress={() => router.push("/sign-in" as Href<string>)}
              containerStyles="w-full mt-7"
              textStyles="bold text-xl"
            />
            <CustomButton
              title="Main page"
              handlePress={() => router.push("/initialInfo" as Href<string>)}
              containerStyles="w-full mt-7"
              textStyles="bold text-xl"
            />
          </View>
        </View>
      </ScrollView>
      <StatusBar backgroundColor="#161622" style="light" />
    </SafeAreaView>
  );
}
