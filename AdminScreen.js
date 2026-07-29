// AdminScreen.js - Dashboard Admin pou ChatHaiti TV
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native';

export default function AdminScreen() {
  const [users, setUsers] = useState([
    { id: '1', name: 'Jean Pierre', status: 'En attente', action: 'Demande Monetization (500 HTG)', isBlocked: false },
    { id: '2', name: 'Marie Luce', status: 'Actif', action: 'Lekòl AI (1000 HTG)', isBlocked: false },
    { id: '3', name: 'Paul Alex', status: 'Actif', action: 'AI Generator (250 HTG)', isBlocked: false },
  ]);

  const handleApprove = (id) => {
    setUsers(users.map(u => u.id === id ? { ...u, status: 'Validé' } : u));
    alert('Aksè konfime pou itilizatè sa a!');
  };

  const handleToggleBlock = (id) => {
    setUsers(users.map(u => u.id === id ? { ...u, isBlocked: !u.isBlocked } : u));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>👑 Panno Kontwòl Admin</Text>
      <Text style={styles.subHeader}>Jere itilizatè, demann aksè ak bloki nan aplikasyon an</Text>

      <FlatList
        data={users}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={[styles.userCard, item.isBlocked && styles.blockedCard]}>
            <View>
              <Text style={styles.userName}>{item.name}</Text>
              <Text style={styles.userAction}>{item.action}</Text>
              <Text style={styles.userStatus}>Sitiyasyon: {item.isBlocked ? '🚫 Bloke' : item.status}</Text>
            </View>

            <View style={styles.actionButtons}>
              {item.status !== 'Validé' && !item.isBlocked && (
                <TouchableOpacity style={styles.approveBtn} onPress={() => handleApprove(item.id)}>
                  <Text style={styles.btnText}>Otorize</Text>
                </TouchableOpacity>
              )}
              
              <TouchableOpacity 
                style={[styles.blockBtn, item.isBlocked && styles.unblockBtn]} 
                onPress={() => handleToggleBlock(item.id)}
              >
                <Text style={styles.btnText}>{item.isBlocked ? 'Debloke' : 'Bloke'}</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#121212' },
  header: { fontSize: 24, fontWeight: 'bold', color: '#E50914', marginTop: 10 },
  subHeader: { fontSize: 13, color: '#AAA', marginBottom: 20 },
  userCard: { backgroundColor: '#1E1E1E', padding: 15, borderRadius: 10, marginBottom: 12, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', borderWidth: 1, borderColor: '#333' },
  blockedCard: { borderColor: '#E50914', backgroundColor: '#2A1215' },
  userName: { color: '#FFF', fontSize: 16, fontWeight: 'bold' },
  userAction: { color: '#E50914', fontSize: 12, marginVertical: 2 },
  userStatus: { color: '#AAA', fontSize: 11 },
  actionButtons: { flexDirection: 'column', gap: 5 },
  approveBtn: { backgroundColor: '#27ae60', paddingHorizontal: 10, paddingVertical: 6, borderRadius: 5 },
  blockBtn: { backgroundColor: '#E50914', paddingHorizontal: 10, paddingVertical: 6, borderRadius: 5 },
  unblockBtn: { backgroundColor: '#2980b9' },
  btnText: { color: '#FFF', fontSize: 11, fontWeight: 'bold', textAlign: 'center' }
});
