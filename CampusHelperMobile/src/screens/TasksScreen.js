import React, { useState } from "react";

import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from "react-native";

import Header from "../components/Header";
import AppCard from "../components/AppCard";
import AppButton from "../components/AppButton";
import theme from "../constants/theme";

export default function TasksScreen() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "ทำโปรเจกต์ React Native",
      subject: "Mobile Application",
      date: "วันนี้ · 16:00",
      done: false,
      icon: "💻",
    },
    {
      id: 2,
      title: "อ่านบทที่ 5",
      subject: "Computer Engineering",
      date: "วันนี้ · 19:00",
      done: false,
      icon: "📖",
    },
    {
      id: 3,
      title: "ส่งรายงาน",
      subject: "Database",
      date: "พรุ่งนี้ · 10:00",
      done: true,
      icon: "📄",
    },
  ]);

  const toggleTask = (id) => {
    setTasks((current) =>
      current.map((task) =>
        task.id === id
          ? { ...task, done: !task.done }
          : task
      )
    );
  };

  const addTask = () => {
    Alert.alert(
      "เพิ่มงาน",
      "สามารถเชื่อมกับฟอร์มเพิ่มงานจริงได้ในขั้นถัดไป"
    );
  };

  return (
    <ScrollView
      style={styles.screen}
      contentContainerStyle={styles.content}
    >

      <Header
        title="งานของฉัน ✨"
        subtitle="จัดการทุกอย่างให้เป็นระเบียบ"
      />

      <AppButton
        title="+ เพิ่มงานใหม่"
        onPress={addTask}
        style={styles.add}
      />

      <View style={styles.summary}>
        <View>
          <Text style={styles.summaryNumber}>
            {tasks.filter((x) => !x.done).length}
          </Text>

          <Text style={styles.summaryLabel}>
            งานที่เหลือ
          </Text>
        </View>

        <View>
          <Text style={styles.summaryNumber}>
            {tasks.filter((x) => x.done).length}
          </Text>

          <Text style={styles.summaryLabel}>
            เสร็จแล้ว
          </Text>
        </View>
      </View>

      {tasks.map((task) => (
        <TouchableOpacity
          key={task.id}
          activeOpacity={0.85}
          onPress={() => toggleTask(task.id)}
        >
          <AppCard
            style={[
              styles.card,
              task.done && styles.doneCard,
            ]}
          >

            <View style={styles.row}>

              <View style={styles.icon}>
                <Text style={styles.iconText}>
                  {task.icon}
                </Text>
              </View>

              <View style={styles.info}>
                <Text
                  style={[
                    styles.title,
                    task.done && styles.doneText,
                  ]}
                >
                  {task.title}
                </Text>

                <Text style={styles.subject}>
                  {task.subject}
                </Text>

                <Text style={styles.date}>
                  {task.date}
                </Text>
              </View>

              <View
                style={[
                  styles.check,
                  task.done && styles.checked,
                ]}
              >
                <Text style={styles.checkText}>
                  {task.done ? "✓" : ""}
                </Text>
              </View>

            </View>

          </AppCard>
        </TouchableOpacity>
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

  add: {
    marginBottom: 20,
  },

  summary: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: theme.colors.lavender,
    borderRadius: 22,
    padding: 20,
    marginBottom: 20,
  },

  summaryNumber: {
    fontSize: 25,
    fontWeight: "900",
    color: theme.colors.primaryDark,
    textAlign: "center",
  },

  summaryLabel: {
    fontSize: 11,
    color: theme.colors.textSecondary,
    marginTop: 4,
  },

  card: {
    marginBottom: 14,
  },

  doneCard: {
    opacity: 0.65,
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
    justifyContent: "center",
    alignItems: "center",
  },

  iconText: {
    fontSize: 23,
  },

  info: {
    flex: 1,
    marginLeft: 13,
  },

  title: {
    fontSize: 14,
    fontWeight: "800",
    color: theme.colors.text,
  },

  doneText: {
    textDecorationLine: "line-through",
  },

  subject: {
    fontSize: 11,
    color: theme.colors.textSecondary,
    marginTop: 4,
  },

  date: {
    fontSize: 11,
    color: theme.colors.primaryDark,
    marginTop: 4,
    fontWeight: "700",
  },

  check: {
    width: 26,
    height: 26,
    borderRadius: 9,
    borderWidth: 2,
    borderColor: theme.colors.primarySoft,
    alignItems: "center",
    justifyContent: "center",
  },

  checked: {
    backgroundColor: theme.colors.primary,
    borderColor: theme.colors.primary,
  },

  checkText: {
    color: "#FFFFFF",
    fontWeight: "900",
  },
});