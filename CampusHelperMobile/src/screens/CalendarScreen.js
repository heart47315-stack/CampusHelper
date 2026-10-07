import React, { useState } from "react";

import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

import Header from "../components/Header";
import AppCard from "../components/AppCard";
import theme from "../constants/theme";

const days = [
  { day: "MON", number: "06" },
  { day: "TUE", number: "07" },
  { day: "WED", number: "08" },
  { day: "THU", number: "09" },
  { day: "FRI", number: "10" },
];

export default function CalendarScreen() {
  const [selected, setSelected] = useState("07");

  return (
    <ScrollView
      style={styles.screen}
      contentContainerStyle={styles.content}
    >

      <Header
        title="ปฏิทิน 📅"
        subtitle="ดูตารางเรียนและกิจกรรมของคุณ"
      />

      <View style={styles.month}>
        <Text style={styles.monthTitle}>
          October 2026
        </Text>

        <Text style={styles.monthIcon}>
          🌷
        </Text>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.days}
      >
        {days.map((item) => {
          const active =
            selected === item.number;

          return (
            <TouchableOpacity
              key={item.number}
              onPress={() =>
                setSelected(item.number)
              }
              style={[
                styles.day,
                active && styles.activeDay,
              ]}
            >
              <Text
                style={[
                  styles.dayName,
                  active && styles.activeText,
                ]}
              >
                {item.day}
              </Text>

              <Text
                style={[
                  styles.dayNumber,
                  active && styles.activeText,
                ]}
              >
                {item.number}
              </Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>

      <Text style={styles.section}>
        ตารางของวันที่ {selected}
      </Text>

      <Event
        time="09:00"
        title="Database Systems"
        room="Room CE-302"
        icon="💜"
      />

      <Event
        time="13:00"
        title="Mobile Application"
        room="Computer Lab"
        icon="🌸"
      />

      <Event
        time="16:00"
        title="ทำโปรเจกต์ส่วนตัว"
        room="My Workspace"
        icon="💻"
      />

    </ScrollView>
  );
}

function Event({
  time,
  title,
  room,
  icon,
}) {
  return (
    <AppCard style={styles.event}>
      <View style={styles.eventRow}>

        <View style={styles.time}>
          <Text style={styles.timeText}>
            {time}
          </Text>
        </View>

        <View style={styles.eventIcon}>
          <Text>{icon}</Text>
        </View>

        <View style={styles.eventInfo}>
          <Text style={styles.eventTitle}>
            {title}
          </Text>

          <Text style={styles.room}>
            {room}
          </Text>
        </View>

      </View>
    </AppCard>
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

  month: {
    backgroundColor: theme.colors.primaryDark,
    borderRadius: 24,
    padding: 22,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 18,
  },

  monthTitle: {
    color: "#FFFFFF",
    fontSize: 20,
    fontWeight: "900",
  },

  monthIcon: {
    fontSize: 30,
  },

  days: {
    marginBottom: 25,
  },

  day: {
    width: 65,
    height: 78,
    backgroundColor: "#FFFFFF",
    borderRadius: 19,
    marginRight: 10,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: theme.colors.border,
  },

  activeDay: {
    backgroundColor: theme.colors.primary,
    borderColor: theme.colors.primary,
  },

  dayName: {
    fontSize: 10,
    fontWeight: "700",
    color: theme.colors.textSecondary,
  },

  dayNumber: {
    fontSize: 23,
    fontWeight: "900",
    color: theme.colors.text,
    marginTop: 5,
  },

  activeText: {
    color: "#FFFFFF",
  },

  section: {
    fontSize: 18,
    fontWeight: "900",
    color: theme.colors.text,
    marginBottom: 15,
  },

  event: {
    marginBottom: 13,
  },

  eventRow: {
    flexDirection: "row",
    alignItems: "center",
  },

  time: {
    width: 48,
  },

  timeText: {
    fontSize: 12,
    color: theme.colors.primaryDark,
    fontWeight: "900",
  },

  eventIcon: {
    width: 44,
    height: 44,
    borderRadius: 14,
    backgroundColor: theme.colors.lavender,
    alignItems: "center",
    justifyContent: "center",
  },

  eventInfo: {
    marginLeft: 12,
    flex: 1,
  },

  eventTitle: {
    fontSize: 14,
    fontWeight: "800",
    color: theme.colors.text,
  },

  room: {
    fontSize: 11,
    color: theme.colors.textSecondary,
    marginTop: 4,
  },
});