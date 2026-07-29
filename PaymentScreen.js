// PaymentScreen.js - ChatHaiti TV (Guichet Pèman Natcash / MonCash)
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

export default function PaymentScreen() {
  const [transactionID, setTransactionID] = useState('');
  const [selectedProvider, setSelectedProvider] = useState('Natcash');

  // Nimewo pèman ou an pou tout sèvis yo
  const phoneNumbers = {
    Natcash: '+509 33848670',
    MonCash: '+509 33848670',
  };

  const handleConfirmPayment = () => {
    if (!transactionID) {
      alert('Tanpri antre ID / Kòd tranzaksyon an anvan w konfime.');
      return;
    }
    alert(`Mèsi! Nou resevwa ID Tranzaksyon ou an (${transactionID}). N ap konfime pèman an sou ${selectedProvider} (+509 33848670) nan yon ti moman.`);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Bwat Pèman ChatHaiti TV 💳</Text>
      <Text style={styles.subtitle}>Fè transfè a sou nimewo ki anba a epi antre ID la</Text>

      {/* Seksyon Chwa Sèvis */}
      <View style={styles.providerRow}>
        <TouchableOpacity
          style={[styles.providerBtn, selectedProvider === 'Natcash' && styles.activeProvider]}
          onPress={() => setSelectedProvider('Natcash')}
        >
          <Text style={styles.providerText}>Natcash 📲</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.providerBtn, selectedProvider === 'MonCash' && styles.activeProvider]}
          onPress={() => setSelectedProvider('MonCash')}
        >
          <Text style={styles.providerText}>MonCash 💵</Text>
        </TouchableOpacity>
      </View>

      {/* Afichaj Nimewo Moun k ap Peye an */}
      <View style={styles.numberBox}>
        <Text style={styles.numberLabel}>Voye kòb la sou nimewo {selectedProvider} sa a:</Text>
        <Text style={styles.phoneNumber}>{phoneNumbers[selectedProvider]}</Text>
      </View>

      {/* Bwat pou antre ID Tranzaksyon an */}
      <View style={styles.inputCard}>
        <Text style={styles.inputLabel}>Antre Kòd / ID Tranzaksyon an la a:</Text>
        <TextInput
          style={styles.input}
          placeholder="Egzanp: TXN-98472018 oswa ID mesaj la..."
          placeholderTextColor="#888"
          value={transactionID}
          onChangeText={setTransactionID}
        />
        
        <TouchableOpacity style={styles.confirmBtn} onPress={handleConfirmPayment}>
          <Text style={styles.confirmText}>Konfime Pèman an</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flexGrow: 1, padding: 20, backgroundColor: '#121212', alignItems: 'center' },
  title: { fontSize: 24, fontWeight: 'bold', color: '#E50914', marginTop: 10 },
  subtitle: { fontSize: 13, color: '#AAA', textAlign: 'center', marginVertical: 10 },
  providerRow: { flexDirection: 'row', justifyContent: 'space-between', width: '100%', marginVertical: 15 },
  providerBtn: { flex: 0.48, backgroundColor: '#1E1E1E', padding: 12, borderRadius: 8, alignItems: 'center', borderWidth: 1, borderColor: '#333' },
  activeProvider: { borderColor: '#E50914', backgroundColor: '#2A1215' },
  providerText: { color: '#FFF', fontWeight: 'bold' },
  numberBox: { width: '100%', backgroundColor: '#E50914', padding: 20, borderRadius: 12, alignItems: 'center', marginBottom: 20 },
  numberLabel: { color: '#FFF', fontSize: 13, marginBottom: 5 },
  phoneNumber: { color: '#FFF', fontSize: 26, fontWeight: 'bold' },
  inputCard: { width: '100%', backgroundColor: '#1E1E1E', padding: 15, borderRadius: 12, borderWidth: 1, borderColor: '#333' },
  inputLabel: { color: '#FFF', fontSize: 14, marginBottom: 10 },
  input: { backgroundColor: '#121212', color: '#FFF', borderRadius: 8, paddingHorizontal: 15, height: 50, marginBottom: 15, borderWidth: 1, borderColor: '#333' },
  confirmBtn: { backgroundColor: '#27ae60', padding: 15, borderRadius: 8, alignItems: 'center' },
  confirmText: { color: '#FFF', fontSize: 16, fontWeight: 'bold' },
});
   
