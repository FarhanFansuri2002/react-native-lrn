# Hari 8 — `TextInput` dan Formulir

## Tujuan

Menghubungkan `TextInput` dengan state, membaca perubahan, dan memproses
masukan pengguna melalui tombol.

## Konsep

Input terkendali memiliki `value` dari state dan `onChangeText` untuk
memperbarui state. Dengan begitu state menjadi sumber nilai input yang terlihat.

```jsx
import { useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";

export default function ContohHari08() {
  const [nama, setNama] = useState("");
  const [sapaan, setSapaan] = useState("");
  return (
    <View>
      <Text style={styles.label}>HARI 8 · TEXTINPUT</Text>
      <TextInput style={styles.input} value={nama} onChangeText={setNama} placeholder="Nama Anda" />
      <Pressable style={styles.tombol} onPress={() => setSapaan(`Halo, ${nama || "teman"}!`)}>
        <Text style={styles.tombolText}>Sapa</Text>
      </Pressable>
      <Text>{sapaan}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  label: { color: "#2563eb", fontWeight: "800", marginBottom: 12 },
  input: { borderColor: "#cbd5e1", borderRadius: 8, borderWidth: 1, padding: 12 },
  tombol: { backgroundColor: "#2563eb", borderRadius: 8, marginVertical: 12, padding: 12 },
  tombolText: { color: "#fff", textAlign: "center" },
});
```

`onChangeText` langsung menerima string baru (berbeda dengan pola DOM
`event.target.value`). React Native `TextInput` tidak memakai mekanisme submit
form browser; aksi tombol dibuat secara eksplisit. Beri label yang jelas dan
pertimbangkan jenis keyboard serta tombol return sesuai tujuan input.

## Kesalahan umum

- Memberi `value` tanpa `onChangeText`, sehingga input tidak berubah.
- Menganggap `TextInput` selalu mengirim event DOM.
- Tidak menangani spasi/kosong sebelum menyimpan.
- Lupa label/placeholder yang menjelaskan tujuan input.

## Hubungan materi

State Hari 7 mengendalikan nilai input; props Hari 3 dapat meneruskan callback
ke component form. Hari 9 akan berbagi nilai antara component.
