# Hari 2 — Komponen, Komposisi, dan Penggunaan Ulang

## Tujuan pembelajaran

- Memecah layar menjadi komponen yang memiliki tanggung jawab jelas.
- Menyusun satu component dari komponen lain (komposisi).
- Menggunakan kembali struktur UI tanpa menyalin markup.

## Konsep

Component adalah bagian antarmuka yang dapat diberi nama dan dirakit. Bayangkan
layar sebagai beberapa kartu dan bagian judul. Component `KartuTopik` dapat
dipakai berulang agar bentuk kartu konsisten.

Pada React Native, komposisi tetap memakai JSX dan aturan nama kapital seperti
React web, tetapi elemen di dalam component adalah komponen native.

## Contoh

Contoh ini juga dapat dicoba melalui tombol **Hari 2** di aplikasi.

```jsx
import { StyleSheet, Text, View } from "react-native";

function JudulBagian() {
  return <Text style={styles.judul}>Topik minggu ini</Text>;
}

function KartuTopik() {
  return (
    <View style={styles.kartu}>
      <Text style={styles.nama}>Komposisi</Text>
      <Text>Merakit layar dari bagian kecil yang bisa digunakan ulang.</Text>
    </View>
  );
}

export default function ContohHari02() {
  return (
    <View>
      <JudulBagian />
      <KartuTopik />
      <KartuTopik />
    </View>
  );
}

const styles = StyleSheet.create({
  judul: { fontSize: 20, fontWeight: "700", marginBottom: 12 },
  kartu: { backgroundColor: "#eff6ff", borderRadius: 12, padding: 16, marginBottom: 10 },
  nama: { color: "#1d4ed8", fontSize: 16, fontWeight: "700", marginBottom: 5 },
});
```

- `JudulBagian` dan `KartuTopik` memisahkan bagian yang memiliki peran.
- `ContohHari02` menyusun bagian-bagian itu.
- Dua pemakaian `<KartuTopik />` menghasilkan bentuk kartu yang sama.
- Data kedua kartu masih sama. Hari 3 mengajarkan props agar datanya berbeda.
- `StyleSheet.create` menerima object style dengan nama properti camelCase.

## Kesalahan yang sering dilakukan

- Memulai nama component dengan huruf kecil.
- Memanggil component sebagai fungsi `KartuTopik()`; tampilkan dengan JSX.
- Menggunakan elemen HTML seperti `article` atau `h2`.
- Membuat terlalu banyak component tanpa tanggung jawab yang jelas.
- Mengira style React Native memiliki semua fitur CSS web.

## Hubungan dengan Hari 1

Hari 1 membuat satu component berisi `View` dan `Text`. Hari ini kita
menyusunnya menjadi bagian kecil yang dapat dipakai ulang. Esok, props memberi
data berbeda pada component dengan struktur sama.

## Coba amati

Ubah teks di `KartuTopik` dan lihat bahwa kedua kartu berubah. Apakah kedua
kartu seharusnya memiliki data yang sama? Ingat pertanyaan ini untuk Hari 3.
