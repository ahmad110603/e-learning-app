import { View, Text, Button, StyleSheet, Image } from 'react-native';
import { useRouter } from 'expo-router';

export default function LandingPage() {
  const router = useRouter();

  const handleLogin = () => {
    router.push('/login'); 
  };

  return (
    <View style={styles.container}>
      <Image
  source={require('../assets/elearning.png')}
  style={styles.logo}
/>
      <Text style={styles.title}> WELCOME to E_LERNING</Text>
      <Text style={styles.description}>
        Aplikasi pembelajaran online untuk santri Hidayatun Najah. Akses materi kapan saja dan di mana saja.
      </Text>
      <Button title="Masuk ke Akun" onPress={handleLogin} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 30,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 12,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 24,
  },
});
