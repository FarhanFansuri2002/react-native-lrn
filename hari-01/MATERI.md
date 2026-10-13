# Hari 1 — React Native, Expo, dan Layar Pertama

## Tujuan pembelajaran

- Memahami bahwa React Native membangun aplikasi native dengan konsep React.
- Menjalankan satu proyek Expo di ponsel/emulator.
- Mengenali `View`, `Text`, dan `StyleSheet`.
- Membaca function component sederhana.

## Konsep

React Native adalah cara membangun UI Android/iOS menggunakan React dan
JavaScript. JSX-nya bukan HTML: `View` dipakai sebagai wadah, `Text` untuk
teks, dan elemen lain dipetakan ke komponen native. Expo menyediakan alat
untuk menjalankan dan mengembangkan aplikasi tanpa membuat proyek native
terpisah lebih dahulu.

Analogi: React memberi rancangan komponennya; React Native menerjemahkan
rancangan tersebut menjadi kontrol antarmuka perangkat, bukan halaman browser.

## Menjalankan proyek

Di folder `react-native-learning`, jalankan `npm.cmd install`, kemudian
`npm.cmd start`. Pindai QR code lewat Expo Go. Baca instruksi lengkap di
`README.md`. Pilih tombol Hari 1 dalam aplikasi.

## Contoh

```jsx
import { StyleSheet, Text, View } from "react-native";

export default function ContohHari01() {
  return (
    <View style={styles.kartu}>
      <Text style={styles.judul}>Halo, React Native!</Text>
      <Text>Saya sedang membuat UI mobile dengan komponen native.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  kartu: { backgroundColor: "#eff6ff", borderRadius: 12, padding: 18 },
  judul: { color: "#1d4ed8", fontSize: 22, fontWeight: "700", marginBottom: 8 },
});
```

- `View` mengelompokkan elemen dan menjadi wadah layout.
- `Text` menampilkan teks. Teks biasa tidak boleh langsung diletakkan di
  dalam `View`.
- `style` menerima object style atau array style. `StyleSheet.create`
  membantu mengelompokkan aturan.
- Ukuran `fontSize` dan `padding` berupa angka unit logis; jangan menambahkan
  string `"px"`.
- `export default` membuat contoh dapat diimpor ke pemilih hari.

## Kesalahan yang sering dilakukan

- Memakai `<div>`, `<p>`, atau `<button>`: itu elemen web, bukan komponen native.
- Menaruh teks langsung di dalam `View`, bukan di dalam `Text`.
- Menulis ukuran seperti `"20px"`; gunakan angka.
- Mengira seluruh properti CSS browser didukung React Native.
- Mengubah `src/App.js` ketika yang ingin dicoba adalah contoh hari.

## Hubungan dengan React

Function component, JSX, dan JavaScript sama-sama dipakai seperti React web.
Yang berbeda adalah komponen UI serta sistem style dan runtime-nya. Materi
React dasar tetap berguna sebagai prasyarat.

## Coba amati

Ubah teks dan `fontSize`, simpan, lalu lihat pembaruan di perangkat. Prediksi
apa yang berubah sebelum menyimpan.
