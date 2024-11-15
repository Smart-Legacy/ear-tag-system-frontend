import { StyleSheet, Text, View, ScrollView, Image } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

import FormField from "@/components/FormField";
import CustomButton from "@/components/CustomButton";
import { Link } from "expo-router";
import MedaFarm from "@/assets/images/MedaName.png";

const SignIn = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const submit = () => {};

  return (
    <SafeAreaView className="h-full">
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
            Log In
          </ThemedText>
          <FormField
            title="Email"
            value={form.email}
            handleChangeText={(e: string) => setForm({ ...form, email: e })}
            otherStyles="mt-4"
            keyboardType="email-address"
          />

          <FormField
            title="Password"
            value={form.password}
            handleChangeText={(e: string) => setForm({ ...form, password: e })}
            otherStyles="mt-2"
          />

          <CustomButton
            title="Sign In"
            handlePress={submit}
            containerStyles="mt-5"
            isLoading={isSubmitting}
          />

          <View className="justify-center pt-5 flex-row gap-2">
            <ThemedText textStyles="text-md">Don't have account?</ThemedText>
            <Link href="/sign-up" className="text-md text-secondary">
              Sign Up
            </Link>
          </View>
        </ThemedView>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;

const styles = StyleSheet.create({});
