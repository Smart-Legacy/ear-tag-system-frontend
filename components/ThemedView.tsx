import { View, type ViewProps } from "react-native";

import { useThemeColor } from "@/hooks/useThemeColor";

export type ThemedViewProps = ViewProps & {
  lightColor?: string;
  darkColor?: string;
  otherStyles?: string;
};

export function ThemedView({
  style,
  lightColor,
  otherStyles,
  darkColor,
  ...otherProps
}: ThemedViewProps) {
  const backgroundColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    "background"
  );

  return (
    <View
      className={`${otherStyles}`}
      style={[{ backgroundColor }, style]}
      {...otherProps}
    />
  );
}
