import React from "react";

import {
  NavigationContainer,
} from "@react-navigation/native";

import {
  createNativeStackNavigator,
} from "@react-navigation/native-stack";

import LoginScreen from "../screens/LoginScreen";
import DashboardScreen from "../screens/DashboardScreen";
import TasksScreen from "../screens/TasksScreen";
import CalendarScreen from "../screens/CalendarScreen";
import CoursesScreen from "../screens/CoursesScreen";
import GPAScreen from "../screens/GPAScreen";

const Stack =
  createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>

      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerShown: false,
          animation: "fade",
        }}
      >

        <Stack.Screen
          name="Login"
          component={LoginScreen}
        />

        <Stack.Screen
          name="Main"
          component={MainNavigator}
        />

      </Stack.Navigator>

    </NavigationContainer>
  );
}

function MainNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="Dashboard"
        component={DashboardScreen}
      />

      <Stack.Screen
        name="Tasks"
        component={TasksScreen}
      />

      <Stack.Screen
        name="Calendar"
        component={CalendarScreen}
      />

      <Stack.Screen
        name="Courses"
        component={CoursesScreen}
      />

      <Stack.Screen
        name="GPA"
        component={GPAScreen}
      />
    </Stack.Navigator>
  );
}