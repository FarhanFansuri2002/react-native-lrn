# Hari 9 — Berbagi State Antarkomponen

## Tujuan

Menempatkan state di induk terdekat yang perlu membagikan data dan meneruskan
nilai serta callback ke anak melalui props.

## Konsep

Jika tampilan dan tombol perlu memakai nilai yang sama, state tinggal di induk
bersama. Anak membaca nilai dan meminta perubahan melalui callback. Ini
menghindari dua salinan state yang dapat tidak sinkron.

```jsx
import { useState } from "react";
import { Pressable, Text, View } from "react-native";

function Tampilan({ jumlah }) { return <Text>Jumlah: {jumlah}</Text>; }
function TombolTambah({ onTambah }) {
  return <Pressable onPress={onTambah}><Text>Tambah</Text></Pressable>;
}
export default function ContohHari09() {
  const [jumlah, setJumlah] = useState(0);
  return <View>
    <Text>HARI 9 · STATE BERSAMA</Text>
    <Tampilan jumlah={jumlah} />
    <TombolTambah onTambah={() => setJumlah((nilai) => nilai + 1)} />
  </View>;
}
```

Induk memiliki nilai dan mengirimkannya ke `Tampilan`; ia juga mengirim
callback ke `TombolTambah`. Anak tidak memutasi state induk.

## Kesalahan umum

- Menyimpan data sama di dua anak sehingga nilainya dapat berbeda.
- Mengirim hasil pemanggilan fungsi alih-alih callback.
- Mengangkat state terlalu tinggi tanpa kebutuhan.
- Mengubah props di dalam anak.

## Hubungan materi

Hari 7–8 menggunakan state lokal. Hari ini mengangkatnya ke induk bersama
ketika dua component membutuhkan data yang sama.
