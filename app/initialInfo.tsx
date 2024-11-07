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

const InitialInfo = () => {
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
    Alert.alert("Farmer Information Saved", JSON.stringify(formData, null, 2));
  };

  return (
    <View className="flex-1 p-4">
      <ScrollView contentContainerStyle={{ paddingBottom: 20 }}>
        <ThemedText className="text-xl font-bold mb-4">
          Farmer Information
        </ThemedText>

        {/* Full Name */}
        <View className="mb-4">
          <ThemedText>Full Name</ThemedText>
          <TextInput
            className="border p-2 bg-gray-700 text-white rounded-md"
            placeholder="Enter full name"
            value={formData.fullName}
            onChangeText={(text) => handleChange("fullName", text)}
          />
        </View>

        {/* Contact Number */}
        <View className="mb-4">
          <ThemedText>Contact Number</ThemedText>
          <TextInput
            className="border p-2 bg-gray-700 text-white rounded-md"
            placeholder="Enter contact number"
            value={formData.contactNumber}
            onChangeText={(text) => handleChange("contactNumber", text)}
            keyboardType="phone-pad"
          />
        </View>

        {/* Email Address */}
        <View className="mb-4">
          <ThemedText>Email Address</ThemedText>
          <TextInput
            className="border p-2 bg-gray-700 text-white rounded-md"
            placeholder="Enter email address"
            value={formData.emailAddress}
            onChangeText={(text) => handleChange("emailAddress", text)}
            keyboardType="email-address"
          />
        </View>

        {/* Postal Address */}
        <View className="mb-4">
          <ThemedText>Postal Address</ThemedText>
          <TextInput
            className="border p-2 bg-gray-700 text-white rounded-md"
            placeholder="Enter postal address"
            value={formData.postalAddress}
            onChangeText={(text) => handleChange("postalAddress", text)}
          />
        </View>

        {/* REGION */}
        <View className="mb-4">
          <ThemedText>Region</ThemedText>
          <TextInput
            className="border p-2 bg-gray-700 text-white rounded-md"
            placeholder="Enter region"
            value={formData.region}
            onChangeText={(text) => handleChange("region", text)}
          />
        </View>

        {/* ZONE */}
        <View className="mb-4">
          <ThemedText>Zone</ThemedText>
          <TextInput
            className="border p-2 bg-gray-700 text-white rounded-md"
            placeholder="Enter zone"
            value={formData.zone}
            onChangeText={(text) => handleChange("zone", text)}
          />
        </View>

        {/* WOREDA */}
        <View className="mb-4">
          <ThemedText>Woreda</ThemedText>
          <TextInput
            className="border p-2 bg-gray-700 text-white rounded-md"
            placeholder="Enter woreda"
            value={formData.woreda}
            onChangeText={(text) => handleChange("woreda", text)}
          />
        </View>

        {/* KEBELE */}
        <View className="mb-4">
          <ThemedText>Kebele</ThemedText>
          <TextInput
            className="border p-2 bg-gray-700 text-white rounded-md"
            placeholder="Enter kebele"
            value={formData.kebele}
            onChangeText={(text) => handleChange("kebele", text)}
          />
        </View>

        {/* Farm/Business Name */}
        <View className="mb-4">
          <ThemedText>Farm/Business Name (if applicable)</ThemedText>
          <TextInput
            className="border p-2 bg-gray-700 text-white rounded-md"
            placeholder="Enter farm or business name"
            value={formData.farmName}
            onChangeText={(text) => handleChange("farmName", text)}
          />
        </View>

        {/* National or Woreda ID */}
        <View className="mb-4">
          <ThemedText>National or Woreda ID</ThemedText>
          <TextInput
            className="border p-2 bg-gray-700 text-white rounded-md"
            placeholder="Enter ID or registration number"
            value={formData.idNumber}
            onChangeText={(text) => handleChange("idNumber", text)}
          />
        </View>

        {/* Date of Birth */}
        <View className="mb-4">
          <ThemedText>Date of Birth</ThemedText>
          <TouchableOpacity
            className="bg-gray-700 p-3 rounded-md"
            onPress={() => setShowDatePicker(true)}
          >
            <Text style={{ color: "white" }}>
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
          <ThemedText>Gender</ThemedText>
          <Picker
            selectedValue={formData.gender}
            onValueChange={(itemValue) => handleChange("gender", itemValue)}
            style={{ color: "white", backgroundColor: "#333", borderRadius: 8 }}
          >
            <Picker.Item label="Select Gender" value="" />
            <Picker.Item label="Male" value="male" />
            <Picker.Item label="Female" value="female" />
            <Picker.Item label="Other" value="other" />
          </Picker>
        </View>

        {/* Occupation */}
        <View className="mb-4">
          <ThemedText>Occupation</ThemedText>
          <TextInput
            className="border p-2 bg-gray-700 text-white rounded-md"
            placeholder="Enter occupation"
            value={formData.occupation}
            onChangeText={(text) => handleChange("occupation", text)}
          />
        </View>

        {/* Years of Experience */}
        <View className="mb-4">
          <ThemedText>Years of Experience in Livestock Farming</ThemedText>
          <TextInput
            className="border p-2 bg-gray-700 text-white rounded-md"
            placeholder="Enter years of experience"
            value={formData.experience}
            onChangeText={(text) => handleChange("experience", text)}
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
    </View>
  );
};

export default InitialInfo;
