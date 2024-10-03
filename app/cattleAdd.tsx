import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
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

export default function CattleAddPage() {
  const [animalType, setAnimalType] = useState<string | null>(null);
  const [sex, setSex] = useState<string | null>(null);
  const [weight, setWeight] = useState<string | null>(null);
  const [height, setHeight] = useState<string | null>(null);
  const [show, setShow] = useState<boolean>(false); // Controls visibility of DatePicker
  const [date, setDate] = useState<Date>(new Date());
  const [generatedId, setGeneratedId] = useState<string | null>(null);
  const [generatedName, setGeneratedName] = useState<string | null>(null);

  // Handle date change event
  const onChangeDate = (event: DateTimePickerEvent, selectedDate?: Date) => {
    if (selectedDate) {
      setDate(selectedDate); // Only set the date when a valid date is selected
    }
    setShow(false); // Close DatePicker when date is selected
  };

  // Show date picker
  const showDatePicker = () => {
    setShow(true);
  };

  // Function to generate a unique ID
  const generateUniqueId = () => {
    const id = `u${Math.floor(Math.random() * 10000000)}`;
    setGeneratedId(id);
    return id;
  };

  // Function to generate a name based on the type of animal and other data
  const generateName = () => {
    const prefix = animalType?.charAt(0).toUpperCase();
    const name = `${prefix}${Math.floor(Math.random() * 100)}`;
    setGeneratedName(name);
    return name;
  };

  const handleAddCattle = () => {
    if (!animalType || !sex || !weight || !height || !date) {
      Alert.alert("Error", "Please fill out all the fields.");
      return;
    }

    const id = generateUniqueId();
    const name = generateName();

    // Here, you can submit the data to your backend or handle it further
    Alert.alert(
      "Cattle Added",
      `ID: ${id}\nName: ${name}\nSex: ${sex}\nWeight: ${weight} kg\nHeight: ${height} cm\nDate: ${date.toDateString()}`
    );

    // Clear the form after submission
    setAnimalType(null);
    setSex(null);
    setWeight(null);
    setHeight(null);
    setDate(new Date());
  };

  return (
    <View className="flex-1  p-4 ">
      <ScrollView contentContainerStyle={{ padding: 16 }}>
        <Text className="text-xl font-bold mb-4 text-white">Add Cattle</Text>

        {/* Picker for selecting animal type */}
        <View className="mb-4">
          <Text className="text-white mb-2">Animal Type</Text>
          <Picker
            selectedValue={animalType}
            onValueChange={(itemValue) => setAnimalType(itemValue)}
            style={{ color: "white", backgroundColor: "#333", borderRadius: 8 }}
          >
            <Picker.Item label="Select Animal Type" value={null} />
            <Picker.Item label="Goat" value="goat" />
            <Picker.Item label="Sheep" value="sheep" />
            <Picker.Item label="Cattle" value="cattle" />
          </Picker>
        </View>

        {/* Picker for selecting sex */}
        <View className="mb-4">
          <Text className="text-white mb-2">Sex</Text>
          <Picker
            selectedValue={sex}
            onValueChange={(itemValue) => setSex(itemValue)}
            style={{ color: "white", backgroundColor: "#333", borderRadius: 8 }}
          >
            <Picker.Item label="Select Sex" value={null} />
            <Picker.Item label="Male" value="male" />
            <Picker.Item label="Female" value="female" />
          </Picker>
        </View>

        {/* Input for weight */}
        <View className="mb-4">
          <Text className="text-white mb-2">Weight (kg)</Text>
          <TextInput
            className="border p-2 bg-gray-700 text-white rounded-md"
            placeholder="Enter weight"
            value={weight}
            onChangeText={(text) => setWeight(text)}
            keyboardType="numeric"
            placeholderTextColor="#999"
          />
        </View>

        {/* Input for height */}
        <View className="mb-4">
          <Text className="text-white mb-2">Height (cm)</Text>
          <TextInput
            className="border p-2 bg-gray-700 text-white rounded-md"
            placeholder="Enter height"
            value={height}
            onChangeText={(text) => setHeight(text)}
            keyboardType="numeric"
            placeholderTextColor="#999"
          />
        </View>

        {/* Input for date */}
        <Text className="text-white mb-2">Date of Birth</Text>
        <View className="mb-4">
          <TouchableOpacity
            style={{ backgroundColor: "#4B5563", padding: 16, borderRadius: 8 }}
            onPress={showDatePicker}
          >
            <Text style={{ color: "white" }}>{date.toDateString()}</Text>
          </TouchableOpacity>
          {show && (
            <DateTimePicker
              value={date}
              mode="date"
              display="default"
              onChange={onChangeDate}
            />
          )}
        </View>

        {/* Button to submit the form */}
        <TouchableOpacity
          className="bg-blue-600 p-4 rounded-md flex-row justify-center items-center"
          onPress={handleAddCattle}
        >
          <Text className="text-white mr-2">Add Cattle</Text>
          <Ionicons name="add-circle-outline" size={24} color="white" />
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}
