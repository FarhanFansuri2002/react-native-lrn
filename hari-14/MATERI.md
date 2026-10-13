# Hari 14 — Evaluasi dan Proyek Akhir Mobile

## Tujuan

Menggabungkan component, props, daftar, sentuhan, state, input, layout mobile,
dan status UI menjadi aplikasi kecil.

## Tantangan akhir — Daftar belanja

Buat aplikasi yang:

1. Menampilkan daftar belanja dengan `FlatList` dan id stabil.
2. Menambahkan item melalui `TextInput` dan `Pressable`.
3. Menandai item selesai serta menghapus item.
4. Menampilkan empty state dan jumlah item aktif.
5. Menggunakan component terpisah untuk form dan baris item bila membantu.
6. Nyaman dipakai pada layar kecil dan memberi label aksesibel.

Rancang data item dan alur state sebelum menulis UI. Tambahkan fitur satu demi
satu; jangan menyalin solusi penuh.

## Contoh reducer kecil

```jsx
const awal = [];
function reducer(items, action) {
  if (action.type === "tambah") return [...items, action.item];
  if (action.type === "toggle") {
    return items.map((item) =>
      item.id === action.id ? { ...item, selesai: !item.selesai } : item
    );
  }
  return items;
}
```

Contoh ini menunjukkan state array immutable. Pilih `useReducer` hanya jika
transisi beberapa aksi perlu dikelompokkan; untuk satu state sederhana,
`useState` juga tepat.

## Kesalahan umum

- Menyimpan daftar turunan secara terpisah dan membuatnya tidak konsisten.
- Tidak memakai id stabil sebagai key.
- Melupakan keyboard/input, empty state, dan aksesibilitas.
- Menambah package/native capability tanpa kebutuhan.

## Hubungan materi

Proyek menyatukan konsep hari 1–13. Jika kesulitan, kembali ke FlatList Hari 5,
state Hari 7, TextInput Hari 8, atau layout/aksesibilitas Hari 12–13.
