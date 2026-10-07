import React from "react";

import {
  View,
  Text,
  ScrollView,
  StyleSheet,
} from "react-native";

import Header from "../components/Header";
import AppCard from "../components/AppCard";
import theme from "../constants/theme";

const courses = [
  {
    code: "CE401",
    name: "Computer Networks",
    credit: 3,
    grade: "A",
    icon: "🌐",
  },
  {
    code: "CE402",
    name: "Mobile Application",
    credit: 3,
    grade: "A",
    icon: "📱",
  },
  {
    code: "CE403",
    name: "Database Systems",
    credit: 3,
    grade: "B+",
    icon: "🗄️",
  },
  {
    code: "CE404",
    name: "Software Engineering",
    credit: 3,
    grade: "A",
    icon: "💻",
  },
];

export default function CoursesScreen() {
  return (
    <ScrollView
      style={styles.screen}
      contentContainerStyle={styles.content}
    >

      <Header
        title="รายวิชา 📚"
        subtitle="จัดการข้อมูลการเรียนของคุณ"
      />

      <View style={styles.gpaCard}>
        <Text style={styles.gpaLabel}>
          CURRENT GPA
        </Text>

        <Text style={styles.gpa}>
          3.50
        </Text>

        <Text style={styles.gpaSub}>
          จากทั้งหมด 12 หน่วยกิต
        </Text>
      </View>

      {courses.map((course) => (
        <AppCard
          key={course.code}
          style={styles.card}
        >
          <View style={styles.row}>

            <View style={styles.icon}>
              <Text>
                {course.icon}
              </Text>
            </View>

            <View style={styles.info}>
              <Text style={styles.code}>
                {course.code}
              </Text>

              <Text style={styles.name}>
                {course.name}
              </Text>

              <Text style={styles.credit}>
                {course.credit} Credits
              </Text>
            </View>

            <View style={styles.grade}>
              <Text style={styles.gradeText}>
                {course.grade}
              </Text>
            </View>

          </View>
        </AppCard>
      ))}

    </ScrollView>
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

  gpaCard: {
    backgroundColor: theme.colors.primaryDark,
    borderRadius: 27,
    padding: 25,
    marginBottom: 22,
  },

  gpaLabel: {
    color: "#DDD2FF",
    fontSize: 10,
    fontWeight: "900",
    letterSpacing: 2,
  },

  gpa: {
    color: "#FFFFFF",
    fontSize: 44,
    fontWeight: "900",
    marginTop: 8,
  },

  gpaSub: {
    color: "#E8DEFF",
    fontSize: 12,
    marginTop: 3,
  },

  card: {
    marginBottom: 13,
  },

  row: {
    flexDirection: "row",
    alignItems: "center",
  },

  icon: {
    width: 50,
    height: 50,
    borderRadius: 17,
    backgroundColor: theme.colors.pinkSoft,
    alignItems: "center",
    justifyContent: "center",
  },

  info: {
    flex: 1,
    marginLeft: 13,
  },

  code: {
    fontSize: 10,
    color: theme.colors.primaryDark,
    fontWeight: "900",
  },

  name: {
    fontSize: 14,
    color: theme.colors.text,
    fontWeight: "800",
    marginTop: 3,
  },

  credit: {
    fontSize: 11,
    color: theme.colors.textSecondary,
    marginTop: 4,
  },

  grade: {
    width: 43,
    height: 43,
    borderRadius: 15,
    backgroundColor: theme.colors.lavender,
    alignItems: "center",
    justifyContent: "center",
  },

  gradeText: {
    color: theme.colors.primaryDark,
    fontSize: 17,
    fontWeight: "900",
  },
});