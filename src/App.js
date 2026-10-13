import { useState } from "react";
import { Pressable, ScrollView, StatusBar, StyleSheet, Text, View } from "react-native";
import Hari01 from "../hari-01/App";
import Hari02 from "../hari-02/App";
import Hari03 from "../hari-03/App";
import Hari04 from "../hari-04/App";
import Hari05 from "../hari-05/App";
import Hari06 from "../hari-06/App";
import Hari07 from "../hari-07/App";
import Hari08 from "../hari-08/App";
import Hari09 from "../hari-09/App";
import Hari10 from "../hari-10/App";
import Hari11 from "../hari-11/App";
import Hari12 from "../hari-12/App";
import Hari13 from "../hari-13/App";
import Hari14 from "../hari-14/App";

const lessons = [
  Hari01, Hari02, Hari03, Hari04, Hari05, Hari06, Hari07,
  Hari08, Hari09, Hari10, Hari11, Hari12, Hari13, Hari14,
];

export default function App() {
  const [selectedDay, setSelectedDay] = useState(1);
  const Lesson = lessons[selectedDay - 1];

  return (
    <View style={styles.screen}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.header}>
        <Text style={styles.eyebrow}>LAB BELAJAR MANDIRI</Text>
        <Text style={styles.title}>React Native, dari dasar</Text>
        <Text style={styles.description}>
          Pilih hari untuk mencoba contoh. Baca materi dan kerjakan latihan
          sebelum meminta AI memberikan solusi.
        </Text>
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.dayList}
      >
        {lessons.map((_, index) => {
          const day = index + 1;
          const active = selectedDay === day;
          return (
            <Pressable
              key={day}
              accessibilityRole="button"
              accessibilityState={{ selected: active }}
              onPress={() => setSelectedDay(day)}
              style={[styles.dayButton, active && styles.dayButtonActive]}
            >
              <Text style={[styles.dayButtonText, active && styles.dayButtonTextActive]}>
                Hari {day}
              </Text>
            </Pressable>
          );
        })}
      </ScrollView>
      <View style={styles.lesson}>
        <Lesson />
      </View>
      <Text style={styles.footer}>
        Satu proyek Expo, 14 contoh terpisah. Jalankan di Android, iOS, atau
        emulator dengan Expo Go.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: "#f1f5f9", paddingTop: 48 },
  header: { paddingHorizontal: 20, paddingBottom: 8 },
  eyebrow: { color: "#2563eb", fontSize: 12, fontWeight: "800", letterSpacing: 1.2 },
  title: { color: "#172554", fontSize: 26, fontWeight: "800", marginTop: 6 },
  description: { color: "#475569", fontSize: 15, lineHeight: 22, marginTop: 8 },
  dayList: { alignItems: "center", gap: 8, paddingHorizontal: 20, paddingVertical: 12 },
  dayButton: { backgroundColor: "#e2e8f0", borderRadius: 18, paddingHorizontal: 14, paddingVertical: 9 },
  dayButtonActive: { backgroundColor: "#2563eb" },
  dayButtonText: { color: "#334155", fontSize: 13, fontWeight: "700" },
  dayButtonTextActive: { color: "#fff" },
  lesson: { flex: 1, marginHorizontal: 16, padding: 20, backgroundColor: "#fff", borderRadius: 16 },
  footer: { color: "#64748b", fontSize: 12, lineHeight: 18, padding: 16, textAlign: "center" },
});
