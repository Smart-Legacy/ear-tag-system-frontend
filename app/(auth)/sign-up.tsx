import { StyleSheet, Text, View, ScrollView, Image } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import MedaFarm from "@/assets/images/MedaName.png";
import FormField from "@/components/FormField";
import CustomButton from "@/components/CustomButton";
import { Link } from "expo-router";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

const SignUp = () => {
  const [form, setForm] = useState({ username: "", email: "", password: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const submit = () => {};

  return (
    <SafeAreaView className=" h-full">
      <ScrollView>
        <ThemedView
          darkColor="black"
          lightColor="white"
          className="w-full justify-center min-h-[100vh] px-4 "
        >
          <View className="justify-left">
            <Image
              source={MedaFarm}
              resizeMode="contain"
              className="w-[155px] h-[65]"
            />
          </View>

          <ThemedText className="text-2xl text-semibold mt-4 font-psemibold">
            Sign Up
          </ThemedText>

          <FormField
            title="Username"
            value={form.username}
            handleChangeText={(e: string) => setForm({ ...form, username: e })}
            otherStyles="mt-4"
          />

          <FormField
            title="Email"
            value={form.email}
            handleChangeText={(e: string) => setForm({ ...form, email: e })}
            otherStyles=""
            keyboardType="email-address"
          />

          <FormField
            title="Password"
            value={form.password}
            handleChangeText={(e: string) => setForm({ ...form, password: e })}
            otherStyles=""
          />

          <CustomButton
            title="Sign Up"
            handlePress={submit}
            containerStyles="mt-5"
            isLoading={isSubmitting}
          />

          <View className="justify-center pt-5 flex-row gap-2">
            <ThemedText className="text-md text-gray-100 font-pregular">
              Have have account already?
            </ThemedText>
            <Link
              href="/sign-in"
              className="text-md font-psemibold text-secondary"
            >
              Sign In
            </Link>
          </View>
        </ThemedView>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUp;
