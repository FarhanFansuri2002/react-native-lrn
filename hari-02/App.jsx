import { StyleSheet, Text, View } from "react-native";

function JudulBagian() {
  return <Text style={styles.judul}>Topik minggu ini</Text>;
}

function KartuTopik() {
  return (
    <View style={styles.kartu}>
      <Text style={styles.nama}>Komposisi Berubah</Text>
      <Text>Merakit layar dari bagian kecil yang bisa digunakan berulang.</Text>
    </View>
  );
}

export default function ContohHari02() {
  return (
    <View>
      <Text style={styles.label}>HARI 2 · KOMPOSISI COMPONENT</Text>
      <JudulBagian />
      <KartuTopik />
      <KartuTopik />
      <Text style={styles.catatan}>Kedua kartu memakai component yang sama.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  label: { color: "#2563eb", fontSize: 11, fontWeight: "800", marginBottom: 12 },
  judul: { color: "#172554", fontSize: 20, fontWeight: "700", marginBottom: 12 },
  kartu: { backgroundColor: "#eff6ff", borderRadius: 12, padding: 16, marginBottom: 10 },
  nama: { color: "#1d4ed8", fontSize: 16, fontWeight: "700", marginBottom: 5 },
  catatan: { color: "#64748b", marginTop: 4 },
});
