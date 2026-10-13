import { useWindowDimensions } from "react-native";
import { StyleSheet, Text, View } from "react-native";

export default function ContohHari12() {
  const { width } = useWindowDimensions();
  const duaKolom = width >= 600;

  return (
    <View style={styles.layar}>
      <Text style={styles.label}>HARI 12 · FLEXBOX DAN LAYOUT</Text>
      <Text style={styles.judul}>Lebar layar: {Math.round(width)} dp</Text>
      <View style={[styles.kartu, duaKolom && styles.kolom]}>
        <Text style={styles.subjudul}>Layout adaptif</Text>
        <Text>{duaKolom ? "Mode layar lebar" : "Mode layar kecil"}</Text>
      </View>
      <Text>Ubah orientasi atau coba perangkat dengan lebar berbeda.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  layar: { gap: 12 },
  label: { color: "#2563eb", fontWeight: "800" },
  judul: { color: "#172554", fontSize: 20, fontWeight: "700" },
  kartu: { backgroundColor: "#eff6ff", borderRadius: 12, padding: 16 },
  kolom: { flexDirection: "row", justifyContent: "space-between" },
  subjudul: { color: "#1d4ed8", fontSize: 17, fontWeight: "700" },
});
