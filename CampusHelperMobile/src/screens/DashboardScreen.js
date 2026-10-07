import React from "react";

import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

import AppCard from "../components/AppCard";
import AppButton from "../components/AppButton";
import Header from "../components/Header";
import theme from "../constants/theme";

export default function DashboardScreen({ navigation }) {
  return (
    <ScrollView
      style={styles.screen}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    >

      <Header
        title="สวัสดี 👋"
        subtitle="พร้อมจัดการวันของคุณหรือยัง?"
      />

      <View style={styles.hero}>

        <Text style={styles.small}>
          YOUR STUDY SPACE ✦
        </Text>

        <Text style={styles.heroTitle}>
          Make today{"\n"}
          beautiful.
        </Text>

        <Text style={styles.heroSubtitle}>
          จัดการงาน ตารางเรียน และเป้าหมาย
          ของคุณในที่เดียว
        </Text>

        <AppButton
          title="+ เพิ่มงานใหม่"
          onPress={() =>
            navigation.navigate("Tasks")
          }
          style={styles.heroButton}
        />

        <Text style={styles.star}>
          ✦
        </Text>

      </View>

      <Text style={styles.section}>
        ภาพรวมของฉัน 🌷
      </Text>

      <View style={styles.grid}>

        <Stat
          icon="📝"
          number="08"
          label="งานทั้งหมด"
        />

        <Stat
          icon="🌸"
          number="05"
          label="เสร็จแล้ว"
        />

        <Stat
          icon="📚"
          number="06"
          label="รายวิชา"
        />

        <Stat
          icon="⭐"
          number="3.50"
          label="GPA"
        />

      </View>

      <View style={styles.sectionRow}>
        <Text style={styles.section}>
          งานวันนี้ 💗
        </Text>

        <TouchableOpacity
          onPress={() =>
            navigation.navigate("Tasks")
          }
        >
          <Text style={styles.more}>
            ดูทั้งหมด
          </Text>
        </TouchableOpacity>
      </View>

      <AppCard>

        <Task
          icon="💻"
          title="ทำโปรเจกต์วิชาเขียนโปรแกรม"
          time="วันนี้ · 16:00"
        />

        <View style={styles.separator} />

        <Task
          icon="📖"
          title="อ่านบทที่ 5"
          time="วันนี้ · 19:00"
        />

      </AppCard>

      <Text style={styles.section}>
        เมนูด่วน ✨
      </Text>

      <View style={styles.quickGrid}>

        <Quick
          icon="📅"
          title="ปฏิทิน"
          onPress={() =>
            navigation.navigate("Calendar")
          }
        />

        <Quick
          icon="📚"
          title="รายวิชา"
          onPress={() =>
            navigation.navigate("Courses")
          }
        />

        <Quick
          icon="🎓"
          title="คำนวณ GPA"
          onPress={() =>
            navigation.navigate("GPA")
          }
        />

        <Quick
          icon="✅"
          title="งานของฉัน"
          onPress={() =>
            navigation.navigate("Tasks")
          }
        />

      </View>

    </ScrollView>
  );
}

function Stat({ icon, number, label }) {
  return (
    <AppCard style={styles.stat}>
      <Text style={styles.statIcon}>
        {icon}
      </Text>

      <Text style={styles.number}>
        {number}
      </Text>

      <Text style={styles.label}>
        {label}
      </Text>
    </AppCard>
  );
}

function Task({ icon, title, time }) {
  return (
    <View style={styles.task}>

      <View style={styles.taskIcon}>
        <Text>{icon}</Text>
      </View>

      <View style={styles.taskInfo}>
        <Text style={styles.taskTitle}>
          {title}
        </Text>

        <Text style={styles.taskTime}>
          {time}
        </Text>
      </View>

      <Text style={styles.dot}>
        ●
      </Text>

    </View>
  );
}

function Quick({ icon, title, onPress }) {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      style={styles.quick}
    >
      <Text style={styles.quickIcon}>
        {icon}
      </Text>

      <Text style={styles.quickText}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },

  content: {
    padding: 20,
    paddingTop: 25,
    paddingBottom: 40,
  },

  hero: {
    backgroundColor: theme.colors.primaryDark,
    borderRadius: 28,
    padding: 24,
    marginBottom: 28,
    overflow: "hidden",
  },

  small: {
    color: "#EDE5FF",
    fontSize: 10,
    fontWeight: "900",
    letterSpacing: 2,
  },

  heroTitle: {
    color: "#FFFFFF",
    fontSize: 32,
    lineHeight: 37,
    fontWeight: "900",
    marginTop: 12,
  },

  heroSubtitle: {
    color: "#EDE5FF",
    fontSize: 13,
    lineHeight: 20,
    marginTop: 10,
    maxWidth: "80%",
  },

  heroButton: {
    marginTop: 20,
    width: 150,
    backgroundColor: theme.colors.pinkDark,
  },

  star: {
    position: "absolute",
    right: 20,
    top: 20,
    fontSize: 60,
    color: "#DCD0FF",
  },

  section: {
    fontSize: 19,
    fontWeight: "900",
    color: theme.colors.text,
    marginBottom: 15,
  },

  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginBottom: 18,
  },

  stat: {
    width: "48%",
    marginBottom: 14,
  },

  statIcon: {
    fontSize: 23,
    marginBottom: 10,
  },

  number: {
    fontSize: 26,
    fontWeight: "900",
    color: theme.colors.primaryDark,
  },

  label: {
    fontSize: 12,
    color: theme.colors.textSecondary,
    marginTop: 3,
  },

  sectionRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  more: {
    color: theme.colors.primaryDark,
    fontWeight: "800",
    fontSize: 12,
    marginBottom: 15,
  },

  task: {
    flexDirection: "row",
    alignItems: "center",
  },

  taskIcon: {
    width: 45,
    height: 45,
    borderRadius: 15,
    backgroundColor: theme.colors.lavender,
    alignItems: "center",
    justifyContent: "center",
  },

  taskInfo: {
    flex: 1,
    marginLeft: 12,
  },

  taskTitle: {
    fontSize: 13,
    fontWeight: "800",
    color: theme.colors.text,
  },

  taskTime: {
    fontSize: 11,
    color: theme.colors.textSecondary,
    marginTop: 4,
  },

  dot: {
    color: theme.colors.pink,
    fontSize: 15,
  },

  separator: {
    height: 1,
    backgroundColor: theme.colors.border,
    marginVertical: 15,
  },

  quickGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },

  quick: {
    width: "48%",
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    padding: 18,
    marginBottom: 14,
    borderWidth: 1,
    borderColor: theme.colors.border,
    alignItems: "center",
  },

  quickIcon: {
    fontSize: 27,
    marginBottom: 8,
  },

  quickText: {
    fontSize: 13,
    color: theme.colors.text,
    fontWeight: "800",
  },
});