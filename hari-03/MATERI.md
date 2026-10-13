# Hari 3 — Props untuk Mengirim Data

## Tujuan

Memahami props sebagai data input component, mengirim string/angka/aksi, dan
menggunakan component yang sama untuk informasi berbeda.

## Konsep

Props adalah nilai yang diberikan induk kepada anak. Component anak membaca
props, bukan mengubahnya. Analogi: satu desain kartu dapat dicetak untuk
banyak topik; props adalah tulisan yang berbeda pada tiap kartu.

```jsx
import { StyleSheet, Text, View } from "react-native";

function KartuTopik({ nama, menit }) {
  return <View style={styles.kartu}><Text style={styles.judul}>{nama}</Text><Text>{menit} menit</Text></View>;
}

export default function ContohHari03() {
  return <View>
    <Text style={styles.label}>HARI 3 · PROPS</Text>
    <KartuTopik nama="Komponen" menit={20} />
    <KartuTopik nama="Props" menit={30} />
  </View>;
}

const styles = StyleSheet.create({
  label: { color: "#2563eb", fontWeight: "800", marginBottom: 12 },
  kartu: { backgroundColor: "#eff6ff", borderRadius: 12, padding: 16, marginBottom: 10 },
  judul: { color: "#1d4ed8", fontSize: 17, fontWeight: "700" },
});
```

`nama="Props"` mengirim string, sedangkan `menit={30}` mengirim nilai number.
Destructuring di parameter mengambil nilai dari object props. Data mengalir
dari induk ke anak; jika data perlu berubah, pemilik state memperbaruinya.

## Kesalahan umum

- Lupa kurung kurawal saat mengirim ekspresi/angka.
- Salah mengeja nama prop.
- Mengubah props di dalam anak.
- Mengira props otomatis membuat component punya state.

## Hubungan materi

Props memperluas komposisi Hari 2. Bentuk UI reusable yang sama kini dapat
menampilkan data berbeda. Hari 4 akan memakai props/state untuk memilih UI.
