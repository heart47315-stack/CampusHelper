import React, { useMemo, useState } from "react";

import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TextInput,
} from "react-native";

import Header from "../components/Header";
import AppCard from "../components/AppCard";
import theme from "../constants/theme";

const initialSubjects = [
  {
    name: "Computer Networks",
    credit: "3",
    grade: "4",
  },
  {
    name: "Mobile Application",
    credit: "3",
    grade: "4",
  },
  {
    name: "Database Systems",
    credit: "3",
    grade: "3.5",
  },
  {
    name: "Software Engineering",
    credit: "3",
    grade: "4",
  },
];

export default function GPAScreen() {
  const [subjects, setSubjects] =
    useState(initialSubjects);

  const update = (index, field, value) => {
    setSubjects((current) =>
      current.map((item, i) =>
        i === index
          ? {
              ...item,
              [field]: value,
            }
          : item
      )
    );
  };

  const gpa = useMemo(() => {
    let credits = 0;
    let points = 0;

    subjects.forEach((item) => {
      const credit = Number(item.credit) || 0;
      const grade = Number(item.grade) || 0;

      credits += credit;
      points += credit * grade;
    });

    if (!credits) return "0.00";

    return (points / credits).toFixed(2);
  }, [subjects]);

  return (
    <ScrollView
      style={styles.screen}
      contentContainerStyle={styles.content}
    >

      <Header
        title="คำนวณ GPA 🎓"
        subtitle="กรอกข้อมูลรายวิชาเพื่อคำนวณเกรดเฉลี่ย"
      />

      <View style={styles.result}>
        <Text style={styles.resultLabel}>
          YOUR GPA
        </Text>

        <Text style={styles.resultNumber}>
          {gpa}
        </Text>

        <Text style={styles.resultText}>
          Keep going! ✨
        </Text>
      </View>

      <Text style={styles.section}>
        รายวิชา
      </Text>

      {subjects.map((subject, index) => (
        <AppCard
          key={index}
          style={styles.card}
        >

          <Text style={styles.subjectName}>
            {subject.name}
          </Text>

          <View style={styles.inputs}>

            <View style={styles.inputBox}>
              <Text style={styles.label}>
                หน่วยกิต
              </Text>

              <TextInput
                value={subject.credit}
                keyboardType="decimal-pad"
                onChangeText={(value) =>
                  update(index, "credit", value)
                }
                style={styles.input}
              />
            </View>

            <View style={styles.inputBox}>
              <Text style={styles.label}>
                Grade
              </Text>

              <TextInput
                value={subject.grade}
                keyboardType="decimal-pad"
                onChangeText={(value) =>
                  update(index, "grade", value)
                }
                style={styles.input}
              />
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

  result: {
    backgroundColor: theme.colors.primaryDark,
    borderRadius: 28,
    padding: 27,
    alignItems: "center",
    marginBottom: 25,
  },

  resultLabel: {
    color: "#DDD2FF",
    fontSize: 10,
    fontWeight: "900",
    letterSpacing: 2,
  },

  resultNumber: {
    color: "#FFFFFF",
    fontSize: 52,
    fontWeight: "900",
    marginVertical: 5,
  },

  resultText: {
    color: "#F1E9FF",
    fontSize: 12,
  },

  section: {
    fontSize: 19,
    fontWeight: "900",
    color: theme.colors.text,
    marginBottom: 15,
  },

  card: {
    marginBottom: 13,
  },

  subjectName: {
    color: theme.colors.text,
    fontSize: 14,
    fontWeight: "800",
    marginBottom: 15,
  },

  inputs: {
    flexDirection: "row",
    gap: 12,
  },

  inputBox: {
    flex: 1,
  },

  label: {
    fontSize: 11,
    color: theme.colors.textSecondary,
    marginBottom: 6,
  },

  input: {
    height: 45,
    backgroundColor: theme.colors.lavenderSoft,
    borderRadius: 13,
    paddingHorizontal: 14,
    color: theme.colors.text,
    fontWeight: "800",
    borderWidth: 1,
    borderColor: theme.colors.border,
  },
});