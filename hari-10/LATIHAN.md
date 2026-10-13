# Latihan Hari 10

## Mudah — Timer status
**Instruksi:** Ubah pesan setelah jeda singkat.
**Kriteria:** Timer dijadwalkan di effect dan dibersihkan.
**Petunjuk:** Simpan hasil `setTimeout` untuk cleanup.

## Menengah — Listener
**Instruksi:** Tambahkan listener AppState atau dimensi layar sesuai API yang dipakai.
**Kriteria:** Listener dilepas saat component unmount.
**Petunjuk:** Cleanup effect memanggil fungsi remove/unsubscribe yang cocok.

## Menantang — Effect atau render?
**Instruksi:** Ambil beberapa nilai turunan dan putuskan mana yang butuh effect.
**Kriteria:** Perhitungan murni dilakukan saat render; sinkronisasi eksternal memakai effect.
**Petunjuk:** Tanyakan apakah operasi itu perlu berkomunikasi dengan sistem luar.
