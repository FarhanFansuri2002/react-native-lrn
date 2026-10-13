import { useEffect, useState } from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";

export default function ContohHari11() {
  const [hasil, setHasil] = useState({ status: "loading", judul: "", error: "" });

  useEffect(() => {
    const controller = new AbortController();
    async function muat() {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/todos/1", {
          signal: controller.signal,
        });
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        const data = await response.json();
        setHasil({ status: "success", judul: data.title, error: "" });
      } catch (error) {
        if (error instanceof Error && error.name === "AbortError") return;
        setHasil({
          status: "error",
          judul: "",
          error: error instanceof Error ? error.message : "Kesalahan tidak diketahui",
        });
      }
    }
    muat();
    return () => controller.abort();
  }, []);

  return (
    <View>
      <Text style={styles.label}>HARI 11 · DATA API</Text>
      {hasil.status === "loading" && <ActivityIndicator accessibilityLabel="Memuat data" />}
      {hasil.status === "error" && (
        <Text accessibilityRole="alert">Gagal memuat: {hasil.error}</Text>
      )}
      {hasil.status === "success" && (
        <Text style={styles.kartu}>{hasil.judul}</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  label: { color: "#2563eb", fontWeight: "800", marginBottom: 12 },
  kartu: { backgroundColor: "#eff6ff", borderRadius: 10, padding: 14 },
});
