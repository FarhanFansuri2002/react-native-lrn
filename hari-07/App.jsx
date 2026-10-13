import { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function ContohHari07() {
  const [jumlah, setJumlah] = useState(0);

  return (
    <View>
      <Text style={styles.label}>HARI 7 · STATE</Text>
      <Text style={styles.judul}>Jumlah: {jumlah}</Text>
      <Pressable
        accessibilityRole="button"
        onPress={() => setJumlah((nilai) => nilai + 1)}
        style={styles.tombol}
      >
        <Text style={styles.teks}>Tambah satu</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  label: { color: "#2563eb", fontWeight: "800" },
  judul: { color: "#172554", fontSize: 22, fontWeight: "700", marginVertical: 16 },
  tombol: { backgroundColor: "#2563eb", borderRadius: 10, padding: 14 },
  teks: { color: "#fff", fontWeight: "700", textAlign: "center" },
});
