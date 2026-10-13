# Hari 4 — Ekspresi JSX dan Tampilan Bersyarat

## Tujuan

Menyisipkan ekspresi JavaScript dalam JSX, memilih UI dengan ternary, dan
menampilkan komponen hanya bila syarat terpenuhi.

## Konsep

Kurung kurawal `{}` menjalankan ekspresi JavaScript di JSX. Ternary memilih
satu dari dua hasil; `&&` menampilkan sesuatu bila kondisi benar. Contoh native
memakai `Text` untuk menampilkan hasil ekspresi.

```jsx
import { StyleSheet, Text, View } from "react-native";

export default function ContohHari04() {
  const nama = "React Native";
  const sudahMulai = true;
  return (
    <View>
      <Text style={styles.label}>HARI 4 · EKSPRESI DAN KONDISI</Text>
      <Text style={styles.judul}>Halo, {nama}</Text>
      {sudahMulai && <Text>Semangat belajar hari ini!</Text>}
      <Text style={styles.kartu}>{sudahMulai ? "Sedang belajar" : "Belum mulai"}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  label: { color: "#2563eb", fontWeight: "800", marginBottom: 12 },
  judul: { color: "#172554", fontSize: 21, fontWeight: "700", marginBottom: 12 },
  kartu: { backgroundColor: "#eff6ff", borderRadius: 10, marginTop: 12, padding: 14 },
});
```

Ekspresi dapat menghitung isi text. Untuk keputusan dengan banyak cabang,
hitung nilai dahulu atau pecah ke component agar JSX tetap mudah dibaca.
Gunakan `&&` hati-hati dengan angka `0`, karena angka itu dapat ikut terlihat.

## Kesalahan umum

- Menulis statement `if` mentah di dalam JSX.
- Menampilkan string/teks di `View` tanpa `Text`.
- Lupa `{}` pada variabel.
- Memakai `kondisi && angka` dan tidak sengaja merender angka nol.

## Hubungan materi

Props Hari 3 memberi component data. Hari ini data tersebut dapat menentukan
tampilan. Hari 5 menerapkan ekspresi untuk membuat daftar native.
