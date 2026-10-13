import { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

function TampilanJumlah({ jumlah }) {
  return <Text style={styles.jumlah}>Jumlah bersama: {jumlah}</Text>;
}

function TombolTambah({ onTambah }) {
  return (
    <Pressable accessibilityRole="button" onPress={onTambah} style={styles.tombol}>
      <Text style={styles.tombolText}>Tambah</Text>
    </Pressable>
  );
}

export default function ContohHari09() {
  const [jumlah, setJumlah] = useState(0);
  return (
    <View>
      <Text style={styles.label}>HARI 9 · STATE BERSAMA</Text>
      <Text style={styles.judul}>Dua anak, satu state induk</Text>
      <TampilanJumlah jumlah={jumlah} />
      <TombolTambah onTambah={() => setJumlah((nilai) => nilai + 1)} />
    </View>
  );
}

const styles = StyleSheet.create({
  label: { color: "#2563eb", fontWeight: "800" },
  judul: { color: "#172554", fontSize: 20, fontWeight: "700", marginVertical: 12 },
  jumlah: { backgroundColor: "#eff6ff", padding: 14 },
  tombol: { backgroundColor: "#2563eb", borderRadius: 8, marginTop: 12, padding: 12 },
  tombolText: { color: "#fff", textAlign: "center" },
});
