import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  TextInput,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useRouter } from "expo-router";
import { Href } from "expo-router";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { useColorScheme } from "react-native";

export default function CattleListPage() {
  const router = useRouter();
  const theme = useColorScheme() ?? "light";

  const [searchText, setSearchText] = useState<string>("");

  // Sample data for cattle
  const cattleData = [
    { id: "u1039892", name: "A13", weight: "111 kg" },
    { id: "u2039853", name: "B22", weight: "120 kg" },
    { id: "u3039874", name: "C45", weight: "130 kg" },
    { id: "u4039885", name: "D67", weight: "90 kg" },
    { id: "u5039906", name: "E75", weight: "100 kg" },
  ];

  // Filter cattle data based on search text
  const filteredCattle = cattleData.filter(
    (cattle) =>
      cattle.name.toLowerCase().includes(searchText.toLowerCase()) ||
      cattle.id.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <ThemedView className="flex-1  p-4 ">
      <ThemedText
        darkColor="white"
        lightColor="black"
        type="subtitle"
        textStyles="font-bold mb-4 mt-4"
      >
        Livestock
      </ThemedText>
      <ThemedView
        darkColor="black"
        lightColor="rgb(229 231 235)"
        otherStyles="border-2 border-gray-300 focus:border-secondary mb-4 w-full h-16 px-4 rounded-2xl items-center flex-row"
      >
        <TextInput
          className="flex-1 text-base"
          value={searchText}
          placeholder="Search"
          placeholderTextColor="#7b7b8b"
          onChangeText={(text) => setSearchText(text)}
        />
        <Ionicons name="search" size={30} color="black" />
      </ThemedView>
      <ScrollView className="space-y-4">
        {filteredCattle.length > 0 ? (
          filteredCattle.map((cattle, index) => (
            <TouchableOpacity
              key={index}
              style={{
                backgroundColor:
                  theme === "light" ? "rgb(229 231 235)" : "rgb(55 65 81)",
              }}
              className="px-4 py-2 rounded-lg flex-row justify-between items-center shadow"
              onPress={() =>
                router.push(`/detail/${cattle.id}` as Href<string>)
              }
            >
              <View>
                <View className="flex flex-row gap-2">
                  <ThemedText className="text-lg font-bold">
                    {cattle.name}
                  </ThemedText>
                  <ThemedText>{cattle.id}</ThemedText>
                </View>
                <ThemedText>{cattle.weight}</ThemedText>
              </View>
              <Ionicons
                name="chevron-forward"
                size={24}
                color={theme == "light" ? "black" : "white"}
              />
            </TouchableOpacity>
          ))
        ) : (
          <Text className="text-center text-gray-600 mt-4">
            No results found
          </Text>
        )}
      </ScrollView>
      <TouchableOpacity
        style={styles.fixedIconContainer}
        onPress={() => router.push(`/cattleAdd` as Href<string>)}
        className="rounded-3xl  border border-gray-300 shadow shadow-2xl"
      >
        <Ionicons
          size={48}
          name="add-outline"
          color={theme == "light" ? "black" : "white"}
        />
      </TouchableOpacity>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  fixedIconContainer: {
    position: "absolute",
    right: 25,
    bottom: 30,
  },
});
