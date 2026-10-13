import { Platform, Pressable, StyleSheet, Text, View } from "react-native";

export default function ContohHari13() {
  const pesan = Platform.select({
    ios: "Berjalan di iOS",
    android: "Berjalan di Android",
    default: "Platform lain",
  });

  return (
    <View>
      <Text style={styles.label}>HARI 13 · AKSESIBILITAS DAN PLATFORM</Text>
      <Text style={styles.judul}>{pesan}</Text>
      <Pressable
        accessibilityRole="button"
        accessibilityLabel="Tampilkan bantuan"
        accessibilityHint="Membuka informasi bantuan"
        onPress={() => console.log("Bantuan dibuka")}
        style={styles.tombol}
      >
        <Text style={styles.teks}>Bantuan</Text>
      </Pressable>
      <Text style={styles.catatan}>Uji label dengan TalkBack atau VoiceOver.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  label: { color: "#2563eb", fontWeight: "800" },
  judul: { color: "#172554", fontSize: 20, fontWeight: "700", marginVertical: 12 },
  tombol: { backgroundColor: "#2563eb", borderRadius: 10, padding: 14 },
  teks: { color: "#fff", fontWeight: "700", textAlign: "center" },
  catatan: { color: "#64748b", marginTop: 12 },
});
