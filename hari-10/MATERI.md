# Hari 10 — `useEffect` dan Efek Samping

## Tujuan

Mengenali efek samping, menjalankan sinkronisasi setelah render, dan
membersihkan listener/resource saat component dilepas.

## Konsep

Effect menghubungkan component dengan hal di luar render seperti listener,
timer, atau jaringan. Render menghitung UI; effect melakukan sinkronisasi
setelahnya. Cleanup melepas resource yang dibuat.

```jsx
import { useEffect, useState } from "react";
import { Text, View } from "react-native";

export default function ContohHari10() {
  const [status, setStatus] = useState("Siap");
  useEffect(() => {
    const timer = setTimeout(() => setStatus("Effect selesai"), 800);
    return () => clearTimeout(timer);
  }, []);
  return <View><Text>HARI 10 · EFFECT</Text><Text>{status}</Text></View>;
}
```

Array kosong menunjukkan effect tidak memakai nilai reaktif yang berubah.
Jika effect membaca props/state yang berubah, dependency harus mencantumkannya.
Jangan memakai effect untuk menghitung nilai sederhana yang dapat dihitung
langsung saat render.

## Kesalahan umum

- Dependency tidak lengkap dan effect memakai nilai lama.
- Membuat timer/listener tanpa cleanup.
- Memakai effect untuk semua logika.
- Mengira effect dijalankan sebelum UI dirender.

## Hubungan materi

State Hari 7 mengubah UI; effect menyinkronkan dengan timer, listener, atau
jaringan. Hari 11 memakai effect untuk mengambil data API.
