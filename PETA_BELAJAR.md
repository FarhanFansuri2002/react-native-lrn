# Peta Belajar React Native Basic — 14 Hari

## Prasyarat

Sebaiknya sudah memahami JavaScript dasar serta component, JSX, props, state,
dan event React. Jika belum, pelajari proyek `react-learning` dahulu. React
Native memakai banyak konsep React yang sama, tetapi komponen dan gaya untuk
antarmuka mobile berbeda dari HTML/CSS.

| Hari | Fokus | Hubungan dengan hari sebelumnya |
|---|---|---|
| 1 | React Native, Expo, komponen native pertama | Mengubah pengetahuan React menjadi tampilan mobile |
| 2 | Komponen inti, komposisi, penggunaan ulang | Memecah layar menjadi bagian UI |
| 3 | Props dan data komponen | Membuat komponen reusable menerima data |
| 4 | JSX dan tampilan bersyarat | Memilih tampilan berdasarkan props/state |
| 5 | Array, `map()`, `FlatList`, dan key | Merender daftar dengan cara yang efisien di mobile |
| 6 | Sentuhan dan event | Menangani tap dengan `Pressable` |
| 7 | `useState` | Memperbarui UI setelah interaksi |
| 8 | `TextInput` dan formulir | Menghubungkan input native dengan state |
| 9 | Berbagi state | Menyatukan data yang dipakai beberapa komponen |
| 10 | `useEffect` dan lifecycle | Menyinkronkan komponen dengan sumber luar |
| 11 | API, loading, dan error | Mengambil data jaringan pada perangkat |
| 12 | Flexbox dan layout mobile | Mengatur tampilan lintas ukuran layar |
| 13 | Aksesibilitas, platform, dan perilaku perangkat | Menyiapkan layar yang nyaman dipakai di Android/iOS |
| 14 | Evaluasi dan proyek akhir | Menggabungkan konsep menjadi aplikasi mobile kecil |

## Perbedaan penting dari React web

- Gunakan komponen native seperti `View`, `Text`, `Image`, `TextInput`, dan
  `Pressable`; tidak ada elemen HTML seperti `div` atau `button`.
- Semua teks harus berada di dalam `Text`.
- Styling memakai object JavaScript melalui `StyleSheet.create`; properti
  umumnya camelCase dan ukuran angka adalah unit logis, bukan `px`.
- Layout umumnya menggunakan Flexbox. `FlatList` lebih tepat daripada
  `ScrollView` untuk daftar panjang.
- Browser DOM API seperti `document` tidak tersedia langsung di native.

## Proyek mandiri

- `proyek/proyek-01`: kartu profil mobile (setelah Hari 5).
- `proyek/proyek-02`: daftar belanja dengan tambah/hapus/tandai (setelah Hari 9).
- `proyek/proyek-03`: aplikasi katalog dari API (setelah Hari 14).

Folder disediakan kosong agar Anda merancang solusi sendiri. Ikuti tempo
belajar sendiri; satu topik boleh membutuhkan beberapa hari.
