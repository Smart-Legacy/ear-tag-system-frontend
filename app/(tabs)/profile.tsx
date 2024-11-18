import { View, Text } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { useColorScheme } from "react-native";

const Profile = () => {
  const theme = useColorScheme() ?? "light";

  return (
    <ThemedView className="mt-8 h-full">
      <ThemedText type="subtitle" className="mt-5 px-4">
        Hello Bob
      </ThemedText>
      <ThemedView className="p-4">
        <TouchableOpacity
          style={{
            backgroundColor:
              theme === "light" ? "rgb(229 231 235)" : "rgb(55 65 81)",
          }}
          className="flex-row justify-between items-center p-4  mt-4"
        >
          <ThemedText className="font-bold">Profile</ThemedText>
          <Ionicons
            name="chevron-forward"
            size={20}
            color={theme == "light" ? "black" : "white"}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor:
              theme === "light" ? "rgb(229 231 235)" : "rgb(55 65 81)",
          }}
          className="flex-row justify-between items-center p-4  mt-4"
        >
          <ThemedText className="font-bold">Update</ThemedText>
          <Ionicons
            name="chevron-forward"
            size={20}
            color={theme == "light" ? "black" : "white"}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor:
              theme === "light" ? "rgb(229 231 235)" : "rgb(55 65 81)",
          }}
          className="flex-row justify-between items-center p-4  mt-4"
        >
          <ThemedText className="font-bold">Settings</ThemedText>
          <Ionicons
            name="chevron-forward"
            size={20}
            color={theme == "light" ? "black" : "white"}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor:
              theme === "light" ? "rgb(229 231 235)" : "rgb(55 65 81)",
          }}
          className="flex-row justify-between items-center p-4  mt-4"
        >
          <ThemedText className="font-bold">FAQ</ThemedText>
          <Ionicons
            name="chevron-forward"
            size={20}
            color={theme == "light" ? "black" : "white"}
          />
        </TouchableOpacity>
      </ThemedView>
    </ThemedView>
  );
};

export default Profile;
