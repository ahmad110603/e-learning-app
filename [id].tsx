import { useLocalSearchParams } from 'expo-router';
import { View, Text, StyleSheet } from 'react-native';

const dataDummy = [
  {
    id: 1,
    nama: 'Shahih Bukhari',
    kategori: 'hadis',
    penulis: 'Imam Bukhari',
    gambar: 'https://upload.wikimedia.org/wikipedia/commons/4/4b/Shahih_Bukhari.jpg',
  },
  {
    id: 2,
    nama: 'Shahih Muslim',
    kategori: 'hadis',
    penulis: 'Imam Muslim',
    gambar: 'https://upload.wikimedia.org/wikipedia/commons/d/d3/Sahih_Muslim.jpg',
  },
  // Tambahkan data lain sesuai kebutuhan
];

export default function KitabDetail() {
  const { id } = useLocalSearchParams();
  const kitab = dataDummy.find((k) => k.id === Number(id));

  if (!kitab) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Kitab tidak ditemukan</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{kitab.nama}</Text>
      <Text style={styles.text}>Penulis: {kitab.penulis}</Text>
      <Text style={styles.text}>Kategori: {kitab.kategori}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 24, justifyContent: 'center' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 12 },
  text: { fontSize: 18, marginBottom: 6 },
});
