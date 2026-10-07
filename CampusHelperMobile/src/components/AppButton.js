import React from "react";
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ActivityIndicator,
} from "react-native";

import theme from "../constants/theme";

export default function AppButton({
  title,
  onPress,
  variant = "primary",
  loading = false,
  disabled = false,
  style,
}) {
  const outline = variant === "outline";
  const pink = variant === "pink";

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      disabled={disabled || loading}
      style={[
        styles.button,
        outline && styles.outline,
        pink && styles.pink,
        disabled && styles.disabled,
        style,
      ]}
    >
      {loading ? (
        <ActivityIndicator
          color={outline ? theme.colors.primary : "#FFFFFF"}
        />
      ) : (
        <Text
          style={[
            styles.text,
            outline && styles.outlineText,
          ]}
        >
          {title}
        </Text>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    minHeight: 50,
    paddingHorizontal: 20,
    borderRadius: 16,
    backgroundColor: theme.colors.primary,
    alignItems: "center",
    justifyContent: "center",

    shadowColor: theme.colors.primary,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 3,
  },

  pink: {
    backgroundColor: theme.colors.pinkDark,
  },

  outline: {
    backgroundColor: "#FFFFFF",
    borderWidth: 1.5,
    borderColor: theme.colors.primary,
    shadowOpacity: 0,
    elevation: 0,
  },

  disabled: {
    opacity: 0.5,
  },

  text: {
    color: "#FFFFFF",
    fontSize: 15,
    fontWeight: "800",
  },

  outlineText: {
    color: theme.colors.primaryDark,
  },
});