import React from "react";
import {
  View,
  StyleSheet,
} from "react-native";

import theme from "../constants/theme";

export default function AppCard({
  children,
  style,
  contentStyle,
}) {
  return (
    <View style={[styles.card, style]}>
      <View style={[styles.content, contentStyle]}>
        {children}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: theme.colors.card,
    borderRadius: theme.radius.lg,
    borderWidth: 1,
    borderColor: theme.colors.border,
    ...theme.shadow.card,
  },

  content: {
    padding: 16,
  },
});