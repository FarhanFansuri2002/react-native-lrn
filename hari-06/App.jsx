import { Pressable, StyleSheet, Text, View } from "react-native";

export default function ContohHari06() {
  function sapa() {
    console.log("Tombol ditekan");
  }

  return (
    <View>
      <Text style={styles.label}>HARI 6 · EVENT SENTUH</Text>
      <Text style={styles.judul}>Tekan tombol</Text>
      <Pressable
        accessibilityRole="button"
        onPress={sapa}
        style={({ pressed }) => [styles.tombol, pressed && styles.ditekan]}
      >
        <Text style={styles.teks}>Tekan saya</Text>
      </Pressable>
      <Text style={styles.catatan}>Lihat log development untuk mencatat aksi.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  label: { color: "#2563eb", fontWeight: "800", marginBottom: 12 },
  judul: { color: "#172554", fontSize: 20, fontWeight: "700", marginBottom: 12 },
  tombol: { backgroundColor: "#2563eb", borderRadius: 10, padding: 14 },
  ditekan: { opacity: 0.7 },
  teks: { color: "#fff", fontWeight: "700", textAlign: "center" },
  catatan: { color: "#64748b", marginTop: 12 },
});
