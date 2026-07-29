// HomeScreen.js - ChatHaiti TV (Rechèch, AI, Metye, Paramèt)
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, ScrollView } from 'react-native';

export default function HomeScreen({ navigation }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [promptAI, setPromptAI] = useState('');
  const [generatedImage, setGeneratedImage] = useState(null);

  const handleGenerateImage = () => {
    if (!promptAI) {
      alert('Tanpri ekri sa w ta renmen AI a desine pou ou.');
      return;
    }
    // Egzanp similasyon AI jenerasyon
    setGeneratedImage('https://via.placeholder.com/300/E50914/FFFFFF?text=AI+Image+Generated');
  };

  const courses = [
    { id: 1, title: 'Programasyon & Kòd' },
    { id: 2, title: 'Grafik Design & AI' },
    { id: 3, title: 'Elektwonik & Reparasyon' },
    { id: 4, title: 'Mekanik & Auto' },
    { id: 5, title: 'Kouti & Moda' },
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Header ak Bouton Paramèt */}
      <View style={styles.topBar}>
        <Text style={styles.logo}>ChatHaiti TV 📺</Text>
        <TouchableOpacity style={styles.settingsBtn} onPress={() => alert('Ouvri Paramèt Aplikasyon an')}>
          <Text style={styles.settingsText}>⚙️ Paramèt</Text>
        </TouchableOpacity>
      </View>

      {/* Ba de Rechèch (Stil Facebook) */}
      <View style={styles.searchBarContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Chèche yon bagay ki egziste (Videyo, Kou, AI)..."
          placeholderTextColor="#888"
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
      </View>

      {/* Seksyon AI (Foto & Imaj Generator) */}
      <View style={styles.sectionCard}>
        <Text style={styles.sectionTitle}>🤖 Sèvis AI - Jenere Foto & Imaj</Text>
        <TextInput
          style={styles.aiInput}
          placeholder="Ekri sa w vle AI a desine (eg: Yon kay nan mòn nan sware)..."
          placeholderTextColor="#888"
          value={promptAI}
          onChangeText={setPromptAI}
        />
        <TouchableOpacity style={styles.aiBtn} onPress={handleGenerateImage}>
          <Text style={styles.aiBtnText}>✨ Jenere Foto AI</Text>
        </TouchableOpacity>

        {generatedImage && (
          <Image source={{ uri: generatedImage }} style={styles.previewImage} />
        )}
      </View>

      {/* Seksyon Lekòl AI & Metye */}
      <View style={styles.sectionCard}>
        <Text style={styles.sectionTitle}>🎓 Lekòl AI & Metye yo</Text>
        {courses.map((item) => (
          <TouchableOpacity key={item.id} style={styles.courseItem} onPress={() => alert(`Ouvri kou: ${item.title}`)}>
            <Text style={styles.courseText}>📚 {item.title}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flexGrow: 1, padding: 15, backgroundColor: '#121212' },
  topBar: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 15 },
  logo: { fontSize: 22, fontWeight: 'bold', color: '#E50914' },
  settingsBtn: { backgroundColor: '#222', paddingHorizontal: 12, paddingVertical: 6, borderRadius: 20 },
  settingsText: { color: '#FFF', fontSize: 13, fontWeight: 'bold' },
  searchBarContainer: { marginBottom: 20 },
  searchInput: { backgroundColor: '#1E1E1E', color: '#FFF', borderRadius: 25, paddingHorizontal: 20, height: 45, borderWidth: 1, borderColor: '#333' },
  sectionCard: { backgroundColor: '#1E1E1E', padding: 15, borderRadius: 12, marginBottom: 20, borderWidth: 1, borderColor: '#333' },
  sectionTitle: { fontSize: 16, fontWeight: 'bold', color: '#FFF', marginBottom: 12 },
  aiInput: { backgroundColor: '#121212', color: '#FFF', borderRadius: 8, padding: 10, height: 45, marginBottom: 10, borderWidth: 1, borderColor: '#333' },
  aiBtn: { backgroundColor: '#E50914', padding: 12, borderRadius: 8, alignItems: 'center' },
  aiBtnText: { color: '#FFF', fontWeight: 'bold' },
  previewImage: { width: '100%', height: 200, borderRadius: 8, marginTop: 12 },
  courseItem: { backgroundColor: '#262626', padding: 12, borderRadius: 8, marginBottom: 8 },
  courseText: { color: '#FFF', fontSize: 14, fontWeight: '500' },
});
