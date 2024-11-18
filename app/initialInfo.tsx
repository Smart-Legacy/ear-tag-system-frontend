import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  ScrollView,
  Platform,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Picker } from "@react-native-picker/picker";
import DateTimePicker, {
  DateTimePickerEvent,
} from "@react-native-community/datetimepicker";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import FormField from "@/components/FormField";
import { useColorScheme } from "react-native";
import { useRouter } from "expo-router";
import { Href } from "expo-router";

const InitialInfo = () => {
  const theme = useColorScheme() ?? "light";
  const router = useRouter();

  const [formData, setFormData] = useState({
    fullName: "",
    contactNumber: "",
    emailAddress: "",
    postalAddress: "",
    region: "",
    zone: "",
    woreda: "",
    kebele: "",
    farmName: "",
    idNumber: "",
    dateOfBirth: new Date(),
    gender: "",
    occupation: "",
    experience: "",
  });
  const [showDatePicker, setShowDatePicker] = useState(false);

  const handleDateChange = (
    event: DateTimePickerEvent,
    selectedDate?: Date
  ) => {
    const currentDate = selectedDate || formData.dateOfBirth;
    setShowDatePicker(Platform.OS === "ios"); // Keep date picker open for iOS
    setFormData({ ...formData, dateOfBirth: currentDate });
    setShowDatePicker(false); // Close date picker for other platforms
  };

  const handleChange = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleSubmit = () => {
    // Add validation if needed
    //Alert.alert("Farmer Information Saved", JSON.stringify(formData, null, 2));
    router.push(`/(tabs)` as Href<string>);
  };

  return (
    <ThemedView darkColor="black" lightColor="white" className="flex-1 p-4">
      <ScrollView contentContainerStyle={{ paddingBottom: 20 }}>
        <ThemedText className="text-xl font-bold my-6 text-center">
          Farmer Information
        </ThemedText>

        {/* Full Name */}
        <View className="mb-4">
          <FormField
            title="Full name"
            value={formData.fullName}
            handleChangeText={(text) => handleChange("fullName", text)}
          />
        </View>

        {/* Contact Number */}
        <View className="mb-4">
          <FormField
            title="Contact Number"
            value={formData.contactNumber}
            handleChangeText={(text) => handleChange("contactNumber", text)}
            keyboardType="phone-pad"
          />
        </View>

        {/* Email Address */}
        <View className="mb-4">
          <FormField
            title="Email Address"
            value={formData.fullName}
            handleChangeText={(text) => handleChange("emailAddress", text)}
            keyboardType="email-address"
          />
        </View>

        {/* Postal Address */}
        <View className="mb-4">
          <FormField
            title="Postal Address"
            value={formData.postalAddress}
            handleChangeText={(text) => handleChange("postalAddress", text)}
          />
        </View>

        {/* REGION */}
        <View className="mb-4">
          <FormField
            title="Region"
            value={formData.region}
            handleChangeText={(text) => handleChange("region", text)}
          />
        </View>

        {/* ZONE */}
        <View className="mb-4">
          <FormField
            className="border p-2 bg-gray-700 text-white rounded-md"
            title="Zone"
            value={formData.zone}
            handleChangeText={(text) => handleChange("zone", text)}
          />
        </View>

        {/* WOREDA */}
        <View className="mb-4">
          <FormField
            title="Woreda"
            value={formData.woreda}
            handleChangeText={(text) => handleChange("woreda", text)}
          />
        </View>

        {/* KEBELE */}
        <View className="mb-4">
          <FormField
            title="Kebele"
            value={formData.kebele}
            handleChangeText={(text) => handleChange("kebele", text)}
          />
        </View>

        {/* Farm/Business Name */}
        <View className="mb-4">
          <FormField
            title="Farm/Business Name (if applicable)"
            value={formData.farmName}
            handleChangeText={(text) => handleChange("farmName", text)}
          />
        </View>

        {/* National or Woreda ID */}
        <View className="mb-4">
          <FormField
            title="National or Woreda ID"
            value={formData.idNumber}
            handleChangeText={(text) => handleChange("idNumber", text)}
          />
        </View>

        {/* Date of Birth */}
        <View className="mb-4">
          <ThemedText textStyles="mb-2">Date of Birth</ThemedText>
          <TouchableOpacity
            style={{
              backgroundColor:
                theme === "light" ? "rgb(229 231 235)" : "rgb(55 65 81)",
              padding: 16,
              borderRadius: 8,
            }}
            onPress={() => setShowDatePicker(true)}
          >
            <Text style={{ color: theme === "light" ? "black" : "white" }}>
              {formData.dateOfBirth.toDateString()}
            </Text>
          </TouchableOpacity>
          {showDatePicker && (
            <DateTimePicker
              value={formData.dateOfBirth}
              mode="date"
              display="default"
              onChange={handleDateChange}
            />
          )}
        </View>

        {/* Gender */}
        <View className="mb-4">
          <ThemedText textStyles="mb-2">Gender</ThemedText>
          <Picker
            selectedValue={formData.gender}
            onValueChange={(itemValue) => handleChange("gender", itemValue)}
            style={{
              color: theme === "light" ? "black" : "white",
              backgroundColor:
                theme === "light" ? "rgb(229 231 235)" : "rgb(55 65 81)",
              borderRadius: 16,
            }}
          >
            <Picker.Item label="Select Gender" value="" />
            <Picker.Item label="Male" value="male" />
            <Picker.Item label="Female" value="female" />
            <Picker.Item label="Other" value="other" />
          </Picker>
        </View>

        {/* Occupation */}
        <View className="mb-4">
          <FormField
            title="Occupation"
            value={formData.occupation}
            handleChangeText={(text) => handleChange("occupation", text)}
          />
        </View>

        {/* Years of Experience */}
        <View className="mb-4">
          <FormField
            title="Years of Experience in Livestock Farming"
            value={formData.experience}
            handleChangeText={(text) => handleChange("experience", text)}
            keyboardType="numeric"
          />
        </View>

        {/* Submit Button */}
        <TouchableOpacity
          className="bg-blue-600 p-4 rounded-md flex-row justify-center items-center"
          onPress={handleSubmit}
        >
          <Text className="text-white mr-2">Save Information</Text>
          <Ionicons name="save-outline" size={24} color="white" />
        </TouchableOpacity>
      </ScrollView>
    </ThemedView>
  );
};

export default InitialInfo;
