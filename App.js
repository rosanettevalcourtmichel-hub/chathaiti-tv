import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, ScrollView } from 'react-native';

export default function App() {
  const [isLogin, setIsLogin] = useState(true);
  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [profilePic, setProfilePic] = useState('https://via.placeholder.com/150');

  const handleAuth = () => {
    if (isLogin) {
      alert(`Koneksyon reyalize pou: ${email}`);
    } else {
      alert(`Kont kreye pou: ${fullname}! Mèsi paske w rantre nan ChatHaiti TV.`);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>ChatHaiti TV 📺</Text>
      <Text style={styles.subtitle}>{isLogin ? 'Konekte sou kont ou' : 'Kreye yon nouvo kont'}</Text>

      {!isLogin && (
        <View style={styles.profileSection}>
          <Image source={{ uri: profilePic }} style={styles.avatar} />
          <TouchableOpacity style={styles.photoBtn} onPress={() => alert('Wap ka chwazi yon foto nan galri w')}>
            <Text style={styles.photoBtnText}>Mete Foto Profil</Text>
          </TouchableOpacity>
          <TextInput
            style={styles.input}
            placeholder="Non ak Siyati"
            value={fullname}
            onChangeText={setFullname}
          />
        </View>
      )}

      <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        style={styles.input}
        placeholder="Mo de pas"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <TouchableOpacity style={styles.mainBtn} onPress={handleAuth}>
        <Text style={styles.btnText}>{isLogin ? 'Konekte' : 'Enskri Kounye a'}</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => setIsLogin(!isLogin)} style={styles.switchBtn}>
        <Text style={styles.switchText}>
          {isLogin ? "Ou pa gen kont? Enskri la" : "Ou gen kont deja? Konekte"}
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flexGrow: 1, justifyContent: 'center', alignItems: 'center', padding: 20, backgroundColor: '#121212' },
  title: { fontSize: 32, fontWeight: 'bold', color: '#E50914', marginBottom: 5 },
  subtitle: { fontSize: 16, color: '#AAA', marginBottom: 25 },
  profileSection: { alignItems: 'center', width: '100%' },
  avatar: { width: 100, height: 100, borderRadius: 50, marginBottom: 10, borderWidth: 2, borderColor: '#E50914' },
  photoBtn: { backgroundColor: '#333', padding: 8, borderRadius: 5, marginBottom: 15 },
  photoBtnText: { color: '#FFF', fontSize: 12 },
  input: { width: '100%', height: 50, backgroundColor: '#1E1E1E', color: '#FFF', borderRadius: 8, paddingHorizontal: 15, marginBottom: 15, borderWidth: 1, borderColor: '#333' },
  mainBtn: { width: '100%', height: 50, backgroundColor: '#E50914', borderRadius: 8, justifyContent: 'center', alignItems: 'center', marginTop: 10 },
  btnText: { color: '#FFF', fontSize: 18, fontWeight: 'bold' },
  switchBtn: { marginTop: 20 },
  switchText: { color: '#E50914', fontSize: 14 }
});
