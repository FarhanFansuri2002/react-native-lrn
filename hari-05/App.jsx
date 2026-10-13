import { FlatList, StyleSheet, Text, View } from "react-native";

const topik = [
  { id: "jsx", nama: "JSX native" },
  { id: "props", nama: "Props" },
  { id: "state", nama: "State" },
];

export default function ContohHari05() {
  return (
    <View>
      <Text style={styles.label}>HARI 5 · FLATLIST DAN KEY</Text>
      <Text style={styles.judul}>Rencana belajar</Text>
      <FlatList
        data={topik}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Text style={styles.baris}>{item.nama}</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  label: { color: "#2563eb", fontWeight: "800", marginBottom: 12 },
  judul: { color: "#172554", fontSize: 20, fontWeight: "700", marginBottom: 12 },
  baris: { backgroundColor: "#eff6ff", borderRadius: 8, marginBottom: 8, padding: 14 },
});
