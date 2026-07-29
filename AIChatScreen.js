// AIChatScreen.js - Ti Kreyòn AI Chat
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

export default function AIChatScreen() {
  const [messages, setMessages] = useState([
    { id: 1, text: 'Bonjou! Mwen se Ti Kreyòn AI ✏️. Kòman m ka ede w jodi a?', sender: 'ai' }
  ]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (!input.trim()) return;
    const newMsg = { id: Date.now(), text: input, sender: 'user' };
    setMessages(prev => [...prev, newMsg]);
    setInput('');

    setTimeout(() => {
      setMessages(prev => [
        ...prev,
        { id: Date.now() + 1, text: `✏️ Ti Kreyòn reponn: Mwen konprann kesyon w lan! M ap travay sou sa pou ou.`, sender: 'ai' }
      ]);
    }, 1000);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>✏️ Ti Kreyòn AI Assistant</Text>
      
      <ScrollView style={styles.chatArea}>
        {messages.map(msg => (
          <View key={msg.id} style={[styles.msgBox, msg.sender === 'user' ? styles.userMsg : styles.aiMsg]}>
            <Text style={styles.msgText}>{msg.text}</Text>
          </View>
        ))}
      </ScrollView>

      <View style={styles.inputArea}>
        <TextInput
          style={styles.input}
          placeholder="Poze Ti Kreyòn yon kesyon..."
          placeholderTextColor="#888"
          value={input}
          onChangeText={setInput}
        />
        <TouchableOpacity style={styles.sendBtn} onPress={handleSend}>
          <Text style={styles.sendText}>Voye</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 15, backgroundColor: '#121212' },
  header: { fontSize: 20, fontWeight: 'bold', color: '#E50914', marginBottom: 15, textAlign: 'center' },
  chatArea: { flex: 1, marginBottom: 15 },
  msgBox: { padding: 12, borderRadius: 10, marginBottom: 10, maxWidth: '80%' },
  aiMsg: { backgroundColor: '#1E1E1E', alignSelf: 'flex-start', borderWidth: 1, borderColor: '#333' },
  userMsg: { backgroundColor: '#E50914', alignSelf: 'flex-end' },
  msgText: { color: '#FFF', fontSize: 14 },
  inputArea: { flexDirection: 'row', gap: 10 },
  input: { flex: 1, backgroundColor: '#1E1E1E', color: '#FFF', borderRadius: 25, paddingHorizontal: 15, height: 45, borderWidth: 1, borderColor: '#333' },
  sendBtn: { backgroundColor: '#E50914', paddingHorizontal: 20, justifyContent: 'center', borderRadius: 25 },
  sendText: { color: '#FFF', fontWeight: 'bold' }
});
