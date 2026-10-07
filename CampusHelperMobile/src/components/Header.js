import React from "react";
import {
  View,
  Text,
  StyleSheet,
} from "react-native";

import theme from "../constants/theme";

export default function Header({
  title,
  subtitle,
  right,
}) {
  return (
    <View style={styles.container}>
      <View style={styles.left}>
        <Text style={styles.title}>
          {title}
        </Text>

        {subtitle ? (
          <Text style={styles.subtitle}>
            {subtitle}
          </Text>
        ) : null}
      </View>

      {right}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 22,
  },

  left: {
    flex: 1,
  },

  title: {
    fontSize: 26,
    fontWeight: "900",
    color: theme.colors.text,
  },

  subtitle: {
    marginTop: 5,
    fontSize: 13,
    color: theme.colors.textSecondary,
  },
});