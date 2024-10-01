import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";

import Cow from "@/assets/icons/cowWhite.png";

const DetailPage = () => {
  return (
    <View className="flex-1 p-4 bg-gray-900">
      <ScrollView className="space-y-4 mt-4">
        <View className="flex-row w-11/12 justify-between mt-5 mb-5 items-center">
          <Image
            source={Cow}
            resizeMode="contain"
            className="w-[80px] h-[80px]"
          />
          <Text className="text-xl text-white font-bold w-[70%]">
            Cattle A113
          </Text>
        </View>

        {/* 2x2 Grid for Cattle Details */}
        <View className="flex flex-wrap flex-row justify-between">
          <View className="w-[48%] bg-gray-800 p-2 mb-2 rounded-md">
            <Text className="text-white">Id: u29328420</Text>
          </View>
          <View className="w-[48%] bg-gray-800 p-2 mb-2 rounded-md">
            <Text className="text-white">Sex: Female</Text>
          </View>
          <View className="w-[48%] bg-gray-800 p-2 mb-2 rounded-md">
            <Text className="text-white">Last Medication: -</Text>
          </View>
          <View className="w-[48%] bg-gray-800 p-2 mb-2 rounded-md">
            <Text className="text-white">Latest Weight: 55 kg</Text>
          </View>
        </View>

        {/* Buttons with chevron-forward icon */}
        <TouchableOpacity className="flex-row justify-between items-center bg-gray-700 p-4 rounded-lg mt-4">
          <Text className="text-white font-bold">Add New Weight</Text>
          <Ionicons name="chevron-forward" size={20} color="white" />
        </TouchableOpacity>

        <TouchableOpacity className="flex-row justify-between items-center bg-gray-700 p-4 rounded-lg mt-2">
          <Text className="text-white font-bold">Add Medication</Text>
          <Ionicons name="chevron-forward" size={20} color="white" />
        </TouchableOpacity>

        {/* Displaying Events */}
        <View className="mt-6">
          <Text className="text-lg text-white font-bold mb-2">Events</Text>
          <View className="bg-gray-800 p-4 rounded-lg mb-2">
            <Text className="text-white">Last Medicated: N/A</Text>
            <Text className="text-white">Weight Recorded: 55 kg</Text>
            <Text className="text-white">Other Event: None</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default DetailPage;
