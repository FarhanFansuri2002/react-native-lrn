import { useState } from "react";
import { FlatList, Pressable, StyleSheet, Text, TextInput, View } from "react-native";

export default function ContohHari14() {
  const [nama, setNama] = useState("");
  const [items, setItems] = useState([]);

  function tambahItem() {
    const judul = nama.trim();
    if (!judul) return;
    setItems((sebelumnya) => [
      ...sebelumnya,
      { id: `${Date.now()}-${judul}`, nama: judul, selesai: false },
    ]);
    setNama("");
  }

  function toggleItem(id) {
    setItems((sebelumnya) =>
      sebelumnya.map((item) =>
        item.id === id ? { ...item, selesai: !item.selesai } : item,
      ),
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.label}>HARI 14 · PROYEK AKHIR</Text>
      <Text style={styles.judul}>Daftar belanja</Text>
      <View style={styles.form}>
        <TextInput
          accessibilityLabel="Nama barang"
          value={nama}
          onChangeText={setNama}
          placeholder="Nama barang"
          style={styles.input}
        />
        <Pressable accessibilityRole="button" onPress={tambahItem} style={styles.button}>
          <Text style={styles.buttonText}>Tambah</Text>
        </Pressable>
      </View>
      {items.length === 0 ? (
        <Text style={styles.empty}>Daftar masih kosong. Tambahkan barang.</Text>
      ) : (
        <FlatList
          style={styles.list}
          data={items}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Pressable
              accessibilityRole="checkbox"
              accessibilityState={{ checked: item.selesai }}
              onPress={() => toggleItem(item.id)}
              style={styles.row}
            >
              <Text style={item.selesai ? styles.done : styles.item}>{item.nama}</Text>
            </Pressable>
          )}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  label: { color: "#2563eb", fontWeight: "800" },
  judul: { color: "#172554", fontSize: 21, fontWeight: "700", marginVertical: 12 },
  form: { flexDirection: "row", gap: 8, marginBottom: 12 },
  input: { borderColor: "#cbd5e1", borderRadius: 8, borderWidth: 1, flex: 1, padding: 10 },
  button: { backgroundColor: "#2563eb", borderRadius: 8, justifyContent: "center", padding: 12 },
  buttonText: { color: "#fff", fontWeight: "700" },
  row: { backgroundColor: "#eff6ff", borderRadius: 8, marginBottom: 8, padding: 14 },
  item: { color: "#172554" },
  done: { color: "#64748b", textDecorationLine: "line-through" },
  empty: { color: "#64748b", paddingVertical: 14 },
  list: { flex: 1 },
});
