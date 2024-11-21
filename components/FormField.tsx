import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import {
  TextProps,
  KeyboardTypeOptions,
  StyleProp,
  TextStyle,
} from "react-native";
import { useThemeColor } from "@/hooks/useThemeColor";
import { ThemedText } from "./ThemedText";

import Eye from "@/assets/icons/eye.png";
import EyeHide from "@/assets/icons/eye-hide.png";

export type FormProps = TextProps & {
  title?: string;
  value?: string;
  handleChangeText?: (text: string) => void;
  otherStyles?: string;
  keyboardType?: KeyboardTypeOptions;
  lightColor?: string;
  darkColor?: string;
};

const FormField = ({
  title,
  value,
  handleChangeText,
  otherStyles,
  keyboardType,
  lightColor,
  darkColor,
}: FormProps) => {
  const color = useThemeColor({ light: lightColor, dark: darkColor }, "text");
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View className={`space-y-2 ${otherStyles}`}>
      <ThemedText className="text-base font-pmedium">{title}</ThemedText>
      <View className="border-2 border-gray-500 w-full h-16 bg-black-100 px-4 rounded-2xl focus:border-secondary items-center flex-row">
        <TextInput
          style={[{ color }]}
          className="flex-1 font-psemibold text-base"
          value={value}
          placeholderTextColor="#7b7b8b"
          onChangeText={handleChangeText}
          secureTextEntry={title === "Password" && !showPassword}
          keyboardType={keyboardType}
        />
        {title === "Password" && (
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Image
              source={!showPassword ? Eye : EyeHide}
              className="w-6 h-6"
              resizeMode="contain"
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default FormField;
