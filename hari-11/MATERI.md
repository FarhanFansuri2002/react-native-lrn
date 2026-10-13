# Hari 11 — Mengambil Data API

## Tujuan

Mengambil JSON dengan `fetch`, menampilkan loading/sukses/error, dan memahami
bahwa jaringan tidak selalu cepat atau berhasil.

## Konsep

Request jaringan berjalan asynchronous. UI sebaiknya memberi status yang
jelas. Periksa `response.ok`: `fetch` tidak otomatis melempar error hanya
karena server merespons dengan status HTTP seperti 404.

```jsx
import { useEffect, useState } from "react";
import { ActivityIndicator, Text, View } from "react-native";

export default function ContohHari11() {
  const [hasil, setHasil] = useState({ status: "loading", judul: "", error: "" });
  useEffect(() => {
    const controller = new AbortController();
    async function muat() {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/todos/1", {
          signal: controller.signal,
        });
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        const data = await response.json();
        setHasil({ status: "success", judul: data.title, error: "" });
      } catch (error) {
        if (error.name === "AbortError") return;
        setHasil({ status: "error", judul: "", error: error.message });
      }
    }
    muat();
    return () => controller.abort();
  }, []);
  if (hasil.status === "loading") return <ActivityIndicator accessibilityLabel="Memuat data" />;
  if (hasil.status === "error") return <Text accessibilityRole="alert">Gagal: {hasil.error}</Text>;
  return <View><Text>Data dari API</Text><Text>{hasil.judul}</Text></View>;
}
```

Ponsel perlu koneksi internet untuk contoh ini. Cleanup membatalkan request
apabila component dilepas. Jangan menampilkan error sebagai data sukses.

## Kesalahan umum

- Tidak memeriksa `response.ok`.
- Lupa menampilkan loading atau error.
- Mengasumsikan request API selalu berhasil.
- Mengirim token rahasia yang disimpan dalam aplikasi client; kode mobile dapat
  diperiksa pengguna, jadi rahasia server harus tetap di server.

## Hubungan materi

Hari 10 menggunakan effect dan cleanup; Hari ini menggabungkan effect, state,
dan tampilan bersyarat untuk request jaringan.
