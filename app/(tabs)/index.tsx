import React from "react";
import { StatusBar } from "expo-status-bar";
import { Text, View, ScrollView, Image } from "react-native";
import { BarChart, ProgressChart } from "react-native-chart-kit";
import { StyleSheet } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

import MedaFarm from "@/assets/images/MedaName.png";

export default function HomeScreen() {
  // Sample data for the ProgressChart
  const progressData = {
    labels: ["🐑", "🐐", "🐮"],
    data: [0.4, 0.6, 0.8],
  };

  // Sample data for the BarChart
  const barData = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 43],
      },
    ],
  };

  return (
    <View style={{ flex: 1 }}>
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
          <View className="bg-gray-800 p-3 rounded-lg w-[44%] h-full">
            <Text className="text-white font-bold mb-1">Notification</Text>
            <Text className="text-gray-300 mb-1">You have 3 new messages</Text>
            <Text className="text-gray-300 mb-1">System Update available</Text>
          </View>

          <ProgressChart
            data={progressData}
            style={{
              backgroundColor: "#333",
              padding: 5,
              borderRadius: 10,
              width: "54%",
              justifyContent: "center",
              alignItems: "center",
            }}
            width={197}
            height={190}
            strokeWidth={8}
            radius={2}
            chartConfig={{
              backgroundColor: "#25292e",
              backgroundGradientFrom: "#25292e",
              backgroundGradientTo: "#25292e",
              color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            }}
            hideLegend={false}
          />
        </View>

        {/* Bar Chart Container */}
        <View className="bg-gray-800 p-3 rounded-lg w-11/12">
          <BarChart
            data={barData}
            width={320} // Width of the chart
            height={200} // Height of the chart
            yAxisSuffix="%" // Added yAxisSuffix, you can change "%" to any other suffix you need
            yAxisLabel="$"
            chartConfig={{
              backgroundColor: "#25292e",
              backgroundGradientFrom: "#25292e",
              backgroundGradientTo: "#25292e",
              decimalPlaces: 0, // Number of decimal places
              color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`, // Color of the bars
              labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`, // Color of the labels
            }}
            verticalLabelRotation={30} // Rotate labels for better readability
          />
        </View>

        <View className="w-11/12">
          <View className="bg-gray-800 p-3 rounded-lg  mt-4">
            <Text className="text-white text-lg">Tasks</Text>
          </View>
          <View className="bg-gray-800 p-3 rounded-lg  mt-2">
            <Text className="text-white ">Tasks One Tasks One </Text>
          </View>
          <View className="bg-gray-800 p-3 rounded-lg mt-2">
            <Text className="text-white ">Tasks One Tasks One</Text>
          </View>
          <View className="bg-gray-800 p-3 rounded-lg  mt-2">
            <Text className="text-white ">Tasks One Tasks One</Text>
          </View>
          <View className="bg-gray-800 p-3 rounded-lg  mt-2">
            <Text className="text-white ">Tasks One Tasks One</Text>
          </View>
        </View>
      </ScrollView>

      {/* Fixed "Add Item" Icon */}
      <View style={styles.fixedIconContainer}>
        <Ionicons size={64} name="add-circle" color="white" />
      </View>
    </View>
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
    right: 20,
    bottom: 20,
  },
});
