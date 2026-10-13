import { useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";

export default function ContohHari08() {
  const [nama, setNama] = useState("");
  const [sapaan, setSapaan] = useState("");

  return (
    <View>
      <Text style={styles.label}>HARI 8 · TEXTINPUT</Text>
      <Text style={styles.judul}>Kenalan lewat input</Text>
      <TextInput
        accessibilityLabel="Nama Anda"
        style={styles.input}
        value={nama}
        onChangeText={setNama}
        placeholder="Nama Anda"
        returnKeyType="done"
      />
      <Pressable
        accessibilityRole="button"
        style={styles.tombol}
        onPress={() => setSapaan(`Halo, ${nama.trim() || "teman"}!`)}
      >
        <Text style={styles.tombolText}>Sapa</Text>
      </Pressable>
      <Text>{sapaan}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  label: { color: "#2563eb", fontWeight: "800", marginBottom: 12 },
  judul: { color: "#172554", fontSize: 20, fontWeight: "700", marginBottom: 12 },
  input: { borderColor: "#cbd5e1", borderRadius: 8, borderWidth: 1, padding: 12 },
  tombol: { backgroundColor: "#2563eb", borderRadius: 8, marginVertical: 12, padding: 12 },
  tombolText: { color: "#fff", fontWeight: "700", textAlign: "center" },
});
