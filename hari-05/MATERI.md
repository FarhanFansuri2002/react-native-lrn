# Hari 5 — Array, `map()`, `FlatList`, dan Key

## Tujuan

Merender data array menjadi UI, memilih `FlatList` untuk daftar panjang, dan
memahami pentingnya key yang stabil.

## Konsep

`map()` mengubah setiap data menjadi elemen. Untuk daftar panjang atau yang
bergulir, `FlatList` merender item secara virtual sehingga tidak perlu membuat
semua item sekaligus. Setiap item perlu identitas stabil melalui `keyExtractor`.

```jsx
import { FlatList, StyleSheet, Text, View } from "react-native";

const topik = [{ id: "jsx", nama: "JSX" }, { id: "props", nama: "Props" }];

export default function ContohHari05() {
  return (
    <View>
      <Text style={styles.label}>HARI 5 · FLATLIST</Text>
      <FlatList
        data={topik}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Text style={styles.baris}>{item.nama}</Text>}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  label: { color: "#2563eb", fontWeight: "800", marginBottom: 12 },
  baris: { backgroundColor: "#eff6ff", borderRadius: 8, marginBottom: 8, padding: 14 },
});
```

Gunakan `ScrollView` untuk konten kecil yang seluruh isinya boleh dirender
sekaligus; gunakan `FlatList` untuk koleksi yang dapat tumbuh. `keyExtractor`
mestinya mengembalikan id unik yang tidak berubah, bukan index bila item dapat
disisipkan atau dihapus.

## Kesalahan umum

- Lupa key untuk item yang dibuat dengan `map()`.
- Key berubah setiap render atau sama untuk banyak item.
- Memakai `ScrollView` untuk daftar besar tanpa alasan.
- Membuat scroll vertikal bertingkat tanpa mengatur perilakunya.

## Hubungan materi

Array JavaScript dan ekspresi Hari 4 menghasilkan daftar. Hari 6 menambah event
ke item daftar seperti tap atau pemilihan.
