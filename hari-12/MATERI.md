# Hari 12 — Flexbox dan Layout Mobile

## Tujuan

Memahami Flexbox React Native, membuat susunan yang menyesuaikan ukuran
layar, dan membaca ukuran melalui `useWindowDimensions`.

## Konsep

Flexbox adalah cara utama menyusun elemen. Secara default React Native
menggunakan `flexDirection: "column"` (berbeda dari default browser web).
`flex: 1` meminta area mengambil ruang yang tersedia. Hindari mengandalkan
ukuran layar tetap karena perangkat memiliki ukuran dan orientasi berbeda.

```jsx
import { useWindowDimensions } from "react-native";
import { StyleSheet, Text, View } from "react-native";

export default function ContohHari12() {
  const { width } = useWindowDimensions();
  const duaKolom = width >= 600;
  return (
    <View style={styles.layar}>
      <Text style={styles.label}>HARI 12 · FLEXBOX</Text>
      <View style={[styles.kartu, duaKolom && styles.kolom]}>
        <Text style={styles.judul}>Layout adaptif</Text>
        <Text>Lebar layar terukur: {Math.round(width)} dp</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  layar: { flex: 1, gap: 12 },
  kartu: { backgroundColor: "#eff6ff", borderRadius: 12, padding: 16 },
  kolom: { flexDirection: "row", justifyContent: "space-between" },
  judul: { fontSize: 18, fontWeight: "700" },
  label: { color: "#2563eb", fontWeight: "800" },
});
```

`useWindowDimensions` memberi ukuran terkini dan memicu render saat berubah.
Unit hasil adalah density-independent points (dp), bukan piksel fisik. Test
pada emulator/perangkat dengan ukuran berbeda.

## Kesalahan umum

- Mengasumsikan default Flexbox sama dengan web.
- Mengunci tinggi/lebar tanpa mempertimbangkan konten atau orientasi.
- Menggunakan `Dimensions.get()` sekali lalu lupa ukuran bisa berubah.
- Menumpuk banyak style tanpa memahami urutan array (style berikutnya menang).

## Hubungan materi

Komponen native dan StyleSheet dari Hari 1 dipakai untuk membangun layout.
Hari 13 menambah aksesibilitas dan perbedaan platform.
