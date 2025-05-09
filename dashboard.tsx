import { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

type Kitab = {
  id: number;
  nama: string;
  kategori: string;
  penulis: string;
};

const kitabData: Kitab[] = [
  { id: 1, nama: 'Shahih Bukhari', kategori: 'hadis', penulis: 'Imam Bukhari' },
  { id: 2, nama: 'Shahih Muslim', kategori: 'hadis', penulis: 'Imam Muslim' },
  { id: 3, nama: 'Tafsir Jalalain', kategori: 'tafsir', penulis: 'Jalaluddin al-Mahalli & al-Suyuthi' },
  { id: 4, nama: "Fathul Mu'in", kategori: 'fiqih', penulis: 'Zainuddin al-Malibari' },
  { id: 5, nama: 'Bulughul Maram', kategori: 'hadis', penulis: 'Ibnu Hajar al-Asqalani' },
];

export default function Dashboard() {
  const router = useRouter();
  const [category, setCategory] = useState<string>('semua');

  const handleLogout = () => {
    router.replace('/');
  };

  const kategoriUnik = ['semua', ...new Set(kitabData.map((k) => k.kategori))];

  const filteredData = kitabData.filter(
    (k) => category === 'semua' || k.kategori === category
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Daftar Kitab Ahli Sunnah Wal Jamaah</Text>

      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Ionicons name="exit-outline" size={30} color="white" />
      </TouchableOpacity>

      <View style={styles.categoryContainer}>
        {kategoriUnik.map((kategori) => (
          <TouchableOpacity
            key={kategori}
            onPress={() => setCategory(kategori)}
            style={styles.categoryButton}
          >
            <Text>{kategori.toUpperCase()}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <ScrollView>
        {filteredData.map((kitab) => (
          <TouchableOpacity
            key={kitab.id}
            style={styles.card}
            onPress={() => router.push(`/kitab/${kitab.id}`)}
          >
            <Text style={styles.kitabTitle}>{kitab.nama}</Text>
            <Text>{kitab.penulis}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 24, backgroundColor: '#fff' },
  title: { fontSize: 20, fontWeight: 'bold', marginBottom: 16, textAlign: 'center' },
  logoutButton: {
    position: 'absolute',
    top: 40,
    right: 20,
    padding: 10,
    backgroundColor: '#ff5c5c',
    borderRadius: 25,
  },
  categoryContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: 16,
  },
  categoryButton: {
    backgroundColor: '#e0e0e0',
    paddingVertical: 8,
    paddingHorizontal: 16,
    marginVertical: 6,
    borderRadius: 8,
    width: 200,
    alignItems: 'center',
  },
  card: {
    backgroundColor: '#f1f1f1',
    padding: 16,
    marginBottom: 10,
    borderRadius: 8,
  },
  kitabTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
