import React from "react";

import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

import theme from "../constants/theme";

const tabs = [
  {
    name: "Dashboard",
    label: "Home",
    icon: "⌂",
  },
  {
    name: "Tasks",
    label: "Tasks",
    icon: "✓",
  },
  {
    name: "Calendar",
    label: "Calendar",
    icon: "▣",
  },
  {
    name: "Courses",
    label: "Courses",
    icon: "▤",
  },
  {
    name: "GPA",
    label: "GPA",
    icon: "★",
  },
];

export default function MainTabs({
  navigation,
  state,
}) {
  return (
    <View style={styles.container}>

      {tabs.map((tab) => {

        const active =
          state?.routeNames?.[state.index] ===
          tab.name;

        return (
          <TouchableOpacity
            key={tab.name}
            activeOpacity={0.8}
            onPress={() =>
              navigation.navigate(tab.name)
            }
            style={styles.tab}
          >

            <View
              style={[
                styles.iconBox,
                active && styles.activeIcon,
              ]}
            >
              <Text
                style={[
                  styles.icon,
                  active && styles.activeText,
                ]}
              >
                {tab.icon}
              </Text>
            </View>

            <Text
              style={[
                styles.label,
                active && styles.activeText,
              ]}
            >
              {tab.label}
            </Text>

          </TouchableOpacity>
        );
      })}

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 78,
    backgroundColor: "#FFFFFF",
    borderTopWidth: 1,
    borderTopColor: theme.colors.border,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    paddingBottom: 8,

    shadowColor: theme.colors.primary,
    shadowOffset: {
      width: 0,
      height: -4,
    },
    shadowOpacity: 0.08,
    shadowRadius: 10,
    elevation: 8,
  },

  tab: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  iconBox: {
    width: 38,
    height: 32,
    borderRadius: 13,
    alignItems: "center",
    justifyContent: "center",
  },

  activeIcon: {
    backgroundColor: theme.colors.lavender,
  },

  icon: {
    fontSize: 19,
    color: theme.colors.textLight,
    fontWeight: "800",
  },

  label: {
    fontSize: 9,
    color: theme.colors.textLight,
    marginTop: 3,
    fontWeight: "700",
  },

  activeText: {
    color: theme.colors.primaryDark,
  },
});