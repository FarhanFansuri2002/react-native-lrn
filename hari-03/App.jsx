import { StyleSheet, Text, View } from "react-native";

function KartuTopik({ nama, menit }) {
  return (
    <View style={styles.kartu}>
      <Text style={styles.judul}>{nama}</Text>
      <Text>{menit} menit latihan</Text>
    </View>
  );
}

export default function ContohHari03() {
  return (
    <View>
      <Text style={styles.label}>HARI 3 · PROPS</Text>
      <Text style={styles.heading}>Data berbeda, kartu sama</Text>
      <KartuTopik nama="Komponen" menit={20} />
      <KartuTopik nama="Props" menit={30} />
    </View>
  );
}

const styles = StyleSheet.create({
  label: { color: "#2563eb", fontWeight: "800", marginBottom: 12 },
  heading: { color: "#172554", fontSize: 20, fontWeight: "700", marginBottom: 12 },
  kartu: { backgroundColor: "#eff6ff", borderRadius: 12, padding: 16, marginBottom: 10 },
  judul: { color: "#1d4ed8", fontSize: 17, fontWeight: "700" },
});
