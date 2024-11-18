import React from "react";
import { StatusBar } from "expo-status-bar";
import { Text, View, ScrollView, Image, TouchableOpacity } from "react-native";
import { BarChart, ProgressChart } from "react-native-chart-kit";
import { StyleSheet } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useRouter } from "expo-router";

import MedaFarm from "@/assets/images/MedaName.png";
import Cow from "@/assets/icons/cow.png";
import CowWhite from "@/assets/icons/cowWhite.png";
import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "@/components/ThemedText";
import { useThemeColor } from "@/hooks/useThemeColor";
import { Href } from "expo-router";

export default function HomeScreen() {
  const router = useRouter();
  // Sample data for the ProgressChart
  const progressData = {
    labels: ["🐑", "🐐", "🐮"],
    data: [0.4, 0.6, 0.8],
  };

  // Sample data for the BarChart
  const barData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 43],
      },
    ],
  };

  const barBackgroundColor = useThemeColor(
    { light: "rgb(212 212 212)", dark: "rgb(38 38 38)" },
    "background"
  );
  const barColor = useThemeColor({ light: "black", dark: "white" }, "text");

  return (
    <ThemedView lightColor="white" darkColor="black" style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={styles.container}>
        <StatusBar style="light" />
        <View className="align-left w-full mt-4 px-4">
          <Image
            source={MedaFarm}
            resizeMode="contain"
            className="w-[155px] h-[65]"
          />
        </View>
        {/* Notification and Chart Container */}
        <View className="flex-row w-11/12 justify-between mb-5 ">
          <ThemedView
            otherStyles="p-3 rounded-lg w-[44%] h-full"
            lightColor="rgb(212 212 212)"
            darkColor="rgb(38 38 38)"
          >
            <ThemedText
              darkColor="#FF9C01"
              lightColor="#FF9C01"
              textStyles="font-bold mb-1"
            >
              Notification
            </ThemedText>
            <ThemedText darkColor="white" lightColor="black" textStyles="mb-1">
              You have 3 new messages
            </ThemedText>
            <ThemedText darkColor="white" lightColor="black" textStyles="mb-1">
              System Update available
            </ThemedText>
          </ThemedView>

          <ProgressChart
            data={progressData}
            style={{
              backgroundColor: "#FF9C01",
              padding: 5,
              borderRadius: 10,
              width: "54%",
              justifyContent: "center",
              alignItems: "center",
            }}
            width={197}
            height={190}
            strokeWidth={6}
            radius={8}
            chartConfig={{
              backgroundColor: "rgb(245 158 11)",
              backgroundGradientFrom: "#FF9C01",
              backgroundGradientTo: "#FF9C01",
              color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
              labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity * 1.5})`,
            }}
            hideLegend={false}
          />
        </View>

        {/* Bar Chart Container */}
        <ThemedView
          otherStyles="p-3 rounded-lg w-11/12"
          lightColor="rgb(38 38 38)"
          darkColor="rgb(38 38 38)"
        >
          <BarChart
            data={barData}
            width={320} // Width of the chart
            height={200} // Height of the chart
            yAxisSuffix="%" // Added yAxisSuffix, you can change "%" to any other suffix you need
            yAxisLabel="$"
            chartConfig={{
              backgroundColor: "rgb(38 38 38)",
              backgroundGradientFrom: "rgb(38 38 38)",
              backgroundGradientTo: "rgb(38 38 38)",
              decimalPlaces: 0, // Number of decimal places
              color: (opacity = 1) => `rgba(255, 255, 255, ${opacity * 2})`, // Color of the bars
              labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`, // Color of the labels
            }}
            verticalLabelRotation={0} // Rotate labels for better readability
          />
        </ThemedView>

        <View className="w-11/12">
          <ThemedView
            otherStyles="p-3 rounded-lg  mt-4"
            lightColor="rgb(212 212 212)"
            darkColor="rgb(38 38 38)"
          >
            <ThemedText
              darkColor="#FF9C01"
              lightColor="#FF9C01"
              type="subtitle"
              textStyles="font-bold mb-1"
            >
              Tasks
            </ThemedText>
          </ThemedView>

          <ThemedView
            otherStyles="p-3 rounded-lg  mt-2"
            lightColor="rgb(212 212 212)"
            darkColor="rgb(38 38 38)"
          >
            <ThemedText darkColor="white" lightColor="black" type="default">
              Tasks One Tasks One
            </ThemedText>
          </ThemedView>

          <ThemedView
            otherStyles="p-3 rounded-lg  mt-2"
            lightColor="rgb(212 212 212)"
            darkColor="rgb(38 38 38)"
          >
            <ThemedText darkColor="white" lightColor="black" type="default">
              Tasks One Tasks One
            </ThemedText>
          </ThemedView>

          <ThemedView
            otherStyles="p-3 rounded-lg  mt-2"
            lightColor="rgb(212 212 212)"
            darkColor="rgb(38 38 38)"
          >
            <ThemedText darkColor="white" lightColor="black" type="default">
              Tasks One Tasks One
            </ThemedText>
          </ThemedView>

          <ThemedView
            otherStyles="p-3 rounded-lg  mt-2"
            lightColor="rgb(212 212 212)"
            darkColor="rgb(38 38 38)"
          >
            <ThemedText darkColor="white" lightColor="black" type="default">
              Tasks One Tasks One
            </ThemedText>
          </ThemedView>
        </View>
      </ScrollView>

      {/* Fixed "Add Item" Icon */}
      <TouchableOpacity
        style={styles.fixedIconContainer}
        onPress={() => router.push(`/cattleList` as Href<string>)}
        className="bg-white rounded-3xl p-1"
      >
        {/* <Ionicons size={64} name="add-circle" color="white" /> */}
        <Image
          source={Cow}
          resizeMode="contain"
          className="w-[40px] h-[40px]"
        />
      </TouchableOpacity>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: "center",
    paddingVertical: 20,
  },
  fixedIconContainer: {
    position: "absolute",
    right: 25,
    bottom: 30,
  },
});
