# Hari 6 — Sentuhan dan Event

## Tujuan

Menanggapi sentuhan dengan `Pressable`, menampilkan state pressed, dan
memberi umpan balik pada tindakan pengguna.

## Konsep

`Pressable` adalah komponen untuk area yang dapat ditekan. Prop `onPress`
menerima fungsi yang berjalan saat ditekan; jangan memanggil fungsi saat
render. Callback `style` dapat membaca `{ pressed }` untuk memberi umpan balik.

```jsx
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function ContohHari06() {
  function sapa() {
    console.log("Tombol ditekan");
  }
  return (
    <View>
      <Text style={styles.label}>HARI 6 · PRESSABLE</Text>
      <Pressable
        accessibilityRole="button"
        onPress={sapa}
        style={({ pressed }) => [styles.tombol, pressed && styles.ditekan]}
      >
        <Text style={styles.teks}>Tekan saya</Text>
      </Pressable>
    </View>
  );
}
const styles = StyleSheet.create({
  label: { color: "#2563eb", fontWeight: "800", marginBottom: 12 },
  tombol: { backgroundColor: "#2563eb", borderRadius: 10, padding: 14 },
  ditekan: { opacity: 0.7 },
  teks: { color: "#fff", fontWeight: "700", textAlign: "center" },
});
```

Pada contoh di atas, gaya conditional ditulis dengan array style. Handler
berupa referensi fungsi. `console.log` hanya demonstrasi; UI yang benar-benar
berubah memerlukan state, yang dipelajari besok.

## Kesalahan umum

- Menggunakan event DOM `onClick` alih-alih `onPress`.
- Menulis `onPress={sapa()}` sehingga fungsi berjalan saat render.
- Membuat target sentuh terlalu kecil atau tanpa label aksesibel.
- Mengira log console otomatis tampil kepada pengguna.

## Hubungan materi

Props Hari 3 mengirim handler ke component, dan Hari ini memakai event sentuh
native. Hari 7 memperkenalkan state agar interaksi mengubah UI.
