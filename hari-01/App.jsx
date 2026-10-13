import { StyleSheet, Text, View } from "react-native";

export default function ContohHari01() {
  return (
    <>
    <View style={styles.kartu}>
      <Text style={styles.label}>HARI 1 · KOMPONEN NATIVE PERTAMA BERUBAH</Text>
      <Text style={styles.judul}>Halo, React Native Berubah!</Text>
      <Text>Saya sedang membuat UI mobile dengan komponen native Berubah.</Text>
    </View>
    <View style={styles.kartu}>
      <Text>Saya Farhan</Text>
      <Text>Saya dari Malang</Text>
      <Text>Saya mau belajar native react karena mau jadi developer handal</Text>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  kartu: { backgroundColor: "#eff6ff", borderRadius: 12, padding: 18, marginBottom: 12 },
  label: { color: "#2563eb", fontSize: 11, fontWeight: "800", marginBottom: 10 },
  judul: { color: "#172554", fontSize: 22, fontWeight: "700", marginBottom: 8 },
});
