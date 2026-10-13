# Hari 7 — `useState` dan Perubahan UI

## Tujuan

Menyimpan nilai yang berubah, memperbaruinya melalui setter, dan memahami
render ulang setelah interaksi.

## Konsep

State adalah ingatan component. Memanggil setter memberi tahu React bahwa UI
perlu dihitung ulang dengan nilai baru. Jangan mengubah variabel state langsung.

```jsx
import { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function ContohHari07() {
  const [jumlah, setJumlah] = useState(0);
  return (
    <View>
      <Text style={styles.label}>HARI 7 · STATE</Text>
      <Text style={styles.judul}>Jumlah: {jumlah}</Text>
      <Pressable onPress={() => setJumlah((nilai) => nilai + 1)} style={styles.tombol}>
        <Text style={styles.teks}>Tambah satu</Text>
      </Pressable>
    </View>
  );
}
const styles = StyleSheet.create({
  label: { color: "#2563eb", fontWeight: "800" },
  judul: { color: "#172554", fontSize: 22, fontWeight: "700", marginVertical: 16 },
  tombol: { backgroundColor: "#dbeafe", padding: 14 },
  teks: { color: "#1d4ed8" },
});
```

Untuk interaksi pengguna, lebih baik gunakan `Pressable` daripada membuat
`Text` bertindak seperti tombol. Setter bentuk updater
`setJumlah((nilai) => nilai + 1)` menghitung dari nilai sebelumnya.
`useState` dipanggil di tingkat teratas component.

## Kesalahan umum

- Mengubah state langsung (`jumlah++`).
- Mengira nilai state berubah pada baris yang sama setelah setter.
- Memanggil Hook dalam kondisi atau loop.
- Memakai teks sebagai tombol tanpa affordance/aksesibilitas.

## Hubungan materi

Hari 6 menanggapi tap; state membuat hasil interaksi tampil. Hari 8 menggunakan
state untuk mengendalikan `TextInput`.
