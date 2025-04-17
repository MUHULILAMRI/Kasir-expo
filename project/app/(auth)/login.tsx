import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useRouter } from 'expo-router';
import { useAuth } from '@/hooks/useAuth';
import { Lock, User } from 'lucide-react-native';

export default function LoginScreen() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();
  const { signIn } = useAuth();

  const handleLogin = async () => {
    try {
      await signIn(username, password);
      router.replace('/(app)/(tabs)');
    } catch (err) {
      setError('Invalid username or password');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          source={{ uri: 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=800&auto=format&fit=crop&q=60' }}
          style={styles.logo}
        />
        <Text style={styles.title}>ALFATIHA POS</Text>
        <Text style={styles.subtitle}>Your Trusted Retail Partner</Text>
      </View>

      <View style={styles.formContainer}>
        {error ? <Text style={styles.errorText}>{error}</Text> : null}
        
        <View style={styles.inputContainer}>
          <User size={20} color="#666666" />
          <TextInput
            style={styles.input}
            placeholder="Username"
            value={username}
            onChangeText={setUsername}
            autoCapitalize="none"
          />
        </View>

        <View style={styles.inputContainer}>
          <Lock size={20} color="#666666" />
          <TextInput
            style={styles.input}
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
        </View>

        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>

        <View style={styles.helpContainer}>
          <Text style={styles.helpText}>Default Credentials:</Text>
          <Text style={styles.credentialText}>Admin: admin / admin</Text>
          <Text style={styles.credentialText}>Cashier: cashier / cashier</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  logoContainer: {
    alignItems: 'center',
    marginTop: 60,
    marginBottom: 40,
  },
  logo: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontFamily: 'Inter_700Bold',
    color: '#1a1a1a',
  },
  subtitle: {
    fontSize: 16,
    fontFamily: 'Inter_400Regular',
    color: '#666666',
    marginTop: 8,
  },
  formContainer: {
    backgroundColor: '#ffffff',
    padding: 20,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#e1e1e1',
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 15,
    backgroundColor: '#f8f8f8',
  },
  input: {
    flex: 1,
    height: 50,
    marginLeft: 10,
    fontSize: 16,
    fontFamily: 'Inter_400Regular',
  },
  button: {
    backgroundColor: '#2E8B57',
    height: 50,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontFamily: 'Inter_600SemiBold',
  },
  errorText: {
    color: '#ff3b30',
    marginBottom: 15,
    textAlign: 'center',
    fontFamily: 'Inter_500Medium',
  },
  helpContainer: {
    marginTop: 20,
    padding: 15,
    backgroundColor: '#f8f8f8',
    borderRadius: 8,
  },
  helpText: {
    fontSize: 14,
    fontFamily: 'Inter_500Medium',
    color: '#666666',
    marginBottom: 8,
  },
  credentialText: {
    fontSize: 14,
    fontFamily: 'Inter_400Regular',
    color: '#666666',
    marginBottom: 4,
  },
});