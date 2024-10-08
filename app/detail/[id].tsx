import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useColorScheme } from "react-native";

import Cow from "@/assets/icons/cowWhite.png";
import CowBlack from "@/assets/icons/cow.png";
import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "@/components/ThemedText";

const DetailPage = () => {
  const theme = useColorScheme() ?? "light";

  return (
    <ThemedView className="flex-1 p-4">
      <ScrollView className="space-y-4 mt-4">
        <View className="flex-row w-11/12 justify-between mt-5 mb-5 items-center">
          <Image
            source={theme == "light" ? CowBlack : Cow}
            resizeMode="contain"
            className="w-[80px] h-[80px]"
          />
          <ThemedText
            lightColor="black"
            darkColor="white"
            className="text-xl font-bold w-[70%]"
          >
            Cattle A113 {theme}
          </ThemedText>
        </View>

        {/* 2x2 Grid for Cattle Details */}
        <View className="flex flex-wrap flex-row justify-between">
          <ThemedView
            lightColor="rgb(229 231 235)"
            darkColor="rgb(55 65 81)"
            className="w-[48%] p-2 mb-2 rounded-md"
          >
            <ThemedText lightColor="black" darkColor="white">
              Id: u29328420
            </ThemedText>
          </ThemedView>
          <ThemedView
            lightColor="rgb(229 231 235)"
            darkColor="rgb(55 65 81)"
            className="w-[48%] p-2 mb-2 rounded-md"
          >
            <ThemedText lightColor="black" darkColor="white">
              Sex: Female
            </ThemedText>
          </ThemedView>
          <ThemedView
            lightColor="rgb(229 231 235)"
            darkColor="rgb(55 65 81)"
            className="w-[48%] p-2 mb-2 rounded-md"
          >
            <ThemedText lightColor="black" darkColor="white">
              Last Medication: -
            </ThemedText>
          </ThemedView>
          <ThemedView
            lightColor="rgb(229 231 235)"
            darkColor="rgb(55 65 81)"
            className="w-[48%] p-2 mb-2 rounded-md"
          >
            <ThemedText lightColor="black" darkColor="white">
              Latest Weight: 55 kg
            </ThemedText>
          </ThemedView>
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
        <ThemedView className="mt-6">
          <ThemedText
            lightColor="black"
            darkColor="white"
            className="text-lg font-bold mb-2"
          >
            Events
          </ThemedText>
          <ThemedView
            lightColor="rgb(229 231 235)"
            darkColor="rgb(55 65 81)"
            className="p-4 rounded-lg mb-2"
          >
            <ThemedText lightColor="black" darkColor="white">
              Last Medicated: N/A
            </ThemedText>
            <ThemedText lightColor="black" darkColor="white">
              Weight Recorded: 55 kg
            </ThemedText>
            <ThemedText lightColor="black" darkColor="white">
              Other Event: None
            </ThemedText>
          </ThemedView>
        </ThemedView>
      </ScrollView>
    </ThemedView>
  );
};

export default DetailPage;
