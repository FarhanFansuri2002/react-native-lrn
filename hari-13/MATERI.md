# Hari 13 — Aksesibilitas dan Perbedaan Platform

## Tujuan

Memberi label aksesibel, memahami platform Android/iOS, dan mengenali perlunya
menguji aplikasi di perangkat atau emulator.

## Konsep

Kontrol yang bisa ditekan perlu peran, label, dan petunjuk yang menjelaskan
aksinya kepada teknologi bantu. `Platform.OS` mengidentifikasi sistem operasi;
`Platform.select` memilih nilai yang sesuai. Gunakan perbedaan platform hanya
ketika pengalaman memang perlu berbeda, bukan untuk menggandakan seluruh UI.

```jsx
import { Platform, Pressable, StyleSheet, Text, View } from "react-native";

export default function ContohHari13() {
  const pesan = Platform.select({ ios: "Berjalan di iOS", android: "Berjalan di Android", default: "Platform lain" });
  return (
    <View>
      <Text style={styles.label}>HARI 13 · PLATFORM</Text>
      <Text>{pesan}</Text>
      <Pressable accessibilityRole="button" accessibilityLabel="Tampilkan bantuan"
        accessibilityHint="Menjelaskan tujuan tombol bantuan"
        onPress={() => console.log("Bantuan dibuka")} style={styles.tombol}>
        <Text style={styles.teks}>Bantuan</Text>
      </Pressable>
    </View>
  );
}
const styles = StyleSheet.create({
  label: { color: "#2563eb", fontWeight: "800", marginBottom: 12 },
  tombol: { backgroundColor: "#2563eb", borderRadius: 10, marginTop: 12, padding: 14 },
  teks: { color: "#fff", fontWeight: "700", textAlign: "center" },
});
```

Uji dengan VoiceOver (iOS) atau TalkBack (Android), bukan hanya melihat UI.
Perilaku aksesibilitas tiap platform dapat berbeda. Navigation antar layar
untuk aplikasi nyata biasanya memakai Expo Router atau React Navigation; contoh
ini tidak memasang library navigasi tambahan agar konsep native tetap ringan.

## Kesalahan umum

- Mengandalkan warna saja untuk menyampaikan status.
- Tombol hanya memiliki ikon tanpa accessible label.
- Membuat `accessibilityHint` berulang atau tidak menjelaskan hasil aksi.
- Menguji hanya satu platform.

## Hubungan materi

Hari 12 membuat layout lintas ukuran layar. Hari ini memperluas kualitas UI
untuk cara pengguna mengaksesnya dan perbedaan sistem operasi.
