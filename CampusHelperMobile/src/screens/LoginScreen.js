import React, { useState } from "react";

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";

import AppButton from "../components/AppButton";
import theme from "../constants/theme";

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = () => {
    navigation.replace("Main");
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={
        Platform.OS === "ios"
          ? "padding"
          : undefined
      }
    >
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >

        <View style={styles.logo}>
          <Text style={styles.logoText}>
            ✦
          </Text>
        </View>

        <Text style={styles.title}>
          Welcome back
        </Text>

        <Text style={styles.subtitle}>
          เข้าสู่พื้นที่จัดการชีวิตนักเรียนของคุณ 💜
        </Text>

        <View style={styles.form}>

          <Text style={styles.label}>
            Email
          </Text>

          <TextInput
            value={email}
            onChangeText={setEmail}
            placeholder="your@email.com"
            placeholderTextColor="#B8A9C5"
            keyboardType="email-address"
            autoCapitalize="none"
            style={styles.input}
          />

          <Text style={styles.label}>
            Password
          </Text>

          <TextInput
            value={password}
            onChangeText={setPassword}
            placeholder="••••••••"
            placeholderTextColor="#B8A9C5"
            secureTextEntry
            style={styles.input}
          />

          <TouchableOpacity
            style={styles.forgot}
          >
            <Text style={styles.forgotText}>
              ลืมรหัสผ่าน?
            </Text>
          </TouchableOpacity>

          <AppButton
            title="เข้าสู่ระบบ ✨"
            onPress={login}
            style={styles.loginButton}
          />

          <View style={styles.divider}>
            <View style={styles.line} />
            <Text style={styles.or}>
              หรือ
            </Text>
            <View style={styles.line} />
          </View>

          <AppButton
            title="เข้าสู่ระบบแบบทดลอง"
            variant="outline"
            onPress={login}
          />

        </View>

        <Text style={styles.bottom}>
          Study beautifully · Live peacefully 🌷
        </Text>

      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },

  content: {
    flexGrow: 1,
    padding: 25,
    justifyContent: "center",
  },

  logo: {
    width: 78,
    height: 78,
    borderRadius: 26,
    backgroundColor: theme.colors.lavender,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    marginBottom: 25,
  },

  logoText: {
    fontSize: 42,
    color: theme.colors.primaryDark,
  },

  title: {
    textAlign: "center",
    fontSize: 32,
    fontWeight: "900",
    color: theme.colors.text,
  },

  subtitle: {
    textAlign: "center",
    fontSize: 14,
    color: theme.colors.textSecondary,
    marginTop: 8,
    marginBottom: 35,
  },

  form: {
    backgroundColor: "#FFFFFF",
    borderRadius: 28,
    padding: 22,
    borderWidth: 1,
    borderColor: theme.colors.border,
    ...theme.shadow.card,
  },

  label: {
    fontSize: 13,
    fontWeight: "700",
    color: theme.colors.text,
    marginBottom: 8,
  },

  input: {
    height: 52,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: theme.colors.border,
    backgroundColor: "#FCFAFF",
    paddingHorizontal: 16,
    fontSize: 14,
    color: theme.colors.text,
    marginBottom: 18,
  },

  forgot: {
    alignSelf: "flex-end",
    marginBottom: 20,
  },

  forgotText: {
    color: theme.colors.primaryDark,
    fontWeight: "700",
    fontSize: 12,
  },

  loginButton: {
    width: "100%",
  },

  divider: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 22,
  },

  line: {
    flex: 1,
    height: 1,
    backgroundColor: theme.colors.border,
  },

  or: {
    marginHorizontal: 12,
    color: theme.colors.textLight,
    fontSize: 12,
  },

  bottom: {
    textAlign: "center",
    color: theme.colors.textLight,
    marginTop: 28,
    fontSize: 12,
  },
});