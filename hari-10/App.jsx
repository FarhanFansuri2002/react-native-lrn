import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";

export default function ContohHari10() {
  const [status, setStatus] = useState("Siap");

  useEffect(() => {
    const timer = setTimeout(() => setStatus("Effect selesai"), 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <View>
      <Text style={styles.label}>HARI 10 · EFFECT</Text>
      <Text style={styles.judul}>{status}</Text>
      <Text>Timer dibersihkan saat component dilepas.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  label: { color: "#2563eb", fontWeight: "800" },
  judul: { color: "#172554", fontSize: 21, fontWeight: "700", marginVertical: 12 },
});
