import { StyleSheet, Text, View } from "react-native";

export default function ContohHari04() {
  const nama = "React Native";
  const sudahMulai = true;

  return (
    <View>
      <Text style={styles.label}>HARI 4 · EKSPRESI DAN KONDISI</Text>
      <Text style={styles.judul}>Halo, {nama}</Text>
      {sudahMulai && <Text>Semangat belajar hari ini!</Text>}
      <Text style={styles.kartu}>
        {sudahMulai ? "Sedang belajar" : "Belum mulai"}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  label: { color: "#2563eb", fontWeight: "800", marginBottom: 12 },
  judul: { color: "#172554", fontSize: 21, fontWeight: "700", marginBottom: 12 },
  kartu: { backgroundColor: "#eff6ff", borderRadius: 10, marginTop: 12, padding: 14 },
});
