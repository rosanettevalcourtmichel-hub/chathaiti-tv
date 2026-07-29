  // PaymentScreen.js - Peman pa Kat (HeyQo) & Opsyon Lokil pou ChatHaiti TV
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

export default function PaymentScreen() {
  const [method, setMethod] = useState('card'); // 'card', 'moncash', 'zelle'

  // Formulaire Carte
  const [cardName, setCardName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvc, setCvc] = useState('');

  const handleCardPayment = () => {
    if (!cardName || !cardNumber || !expiry || !cvc) {
      alert('Tanpri ranpli tout enfòmasyon kat la!');
      return;
    }
    alert('Tranzaksyon an ap trete ak sekirite pa sèvis Kat la... Mèsi pou abònman ou!');
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>💳 Chwazi Fason pou w Peye</Text>

      {/* Seleksyon Metòd Peman */}
      <View style={styles.methodSelector}>
        <TouchableOpacity 
          style={[styles.methodBtn, method === 'card' && styles.activeMethod]}
          onPress={() => setMethod('card')}
        >
          <Text style={styles.methodText}>💳 Kat (Visa/MC)</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={[styles.methodBtn, method === 'moncash' && styles.activeMethod]}
          onPress={() => setMethod('moncash')}
        >
          <Text style={styles.methodText}>📲 MonCash / Natcash</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={[styles.methodBtn, method === 'zelle' && styles.activeMethod]}
          onPress={() => setMethod('zelle')}
        >
          <Text style={styles.methodText}>💵 Zelle / CashApp</Text>
        </TouchableOpacity>
      </View>

      {/* 1. PEMAN PA KAT (Visa / Mastercard) */}
      {method === 'card' && (
        <View style={styles.cardForm}>
          <Text style={styles.sectionTitle}>Peye pa Kat de Kredi / Debit (Visa / MC)</Text>
          
          <Text style={styles.label}>Non sou Kat la</Text>
          <TextInput 
            style={styles.input} 
            placeholder="eg: Jean Baptiste" 
            placeholderTextColor="#666"
            value={cardName}
            onChangeText={setCardName}
          />

          <Text style={styles.label}>Nimewo Kat la</Text>
          <TextInput 
            style={styles.input} 
            placeholder="4000 0000 0000 0000" 
            placeholderTextColor="#666"
            keyboardType="numeric"
            value={cardNumber}
            onChangeText={setCardNumber}
          />

          <View style={styles.row}>
            <View style={{ flex: 1, marginRight: 5 }}>
              <Text style={styles.label}>Dat Ekspirasyon</Text>
              <TextInput 
                style={styles.input} 
                placeholder="MM/YY" 
                placeholderTextColor="#666"
                value={expiry}
                onChangeText={setExpiry}
              />
            </View>

            <View style={{ flex: 1, marginLeft: 5 }}>
              <Text style={styles.label}>Kòd CVC / CVV</Text>
              <TextInput 
                style={styles.input} 
                placeholder="123" 
                placeholderTextColor="#666"
                keyboardType="numeric"
                secureTextEntry
                value={cvc}
                onChangeText={setCvc}
              />
            </View>
          </View>

          <TouchableOpacity style={styles.payBtn} onPress={handleCardPayment}>
            <Text style={styles.payBtnText}>🔒 Peye Kounye a an Sekirite</Text>
          </TouchableOpacity>
        </View>
      )}

      {/* 2. MONCASH / NATCASH */}
      {method === 'moncash' && (
        <View style={styles.infoBox}>
          <Text style={styles.sectionTitle}>Peman ak MonCash / Natcash</Text>
          <Text style={styles.infoText}>Voye kòb la sou nimewo sa a:</Text>
          <Text style={styles.phoneText}>📞 +509 3700-0000</Text>
          <Text style={styles.infoSub}>Apre w fin voye l, kontakte sipò a ak ID tranzaksyon an pou valide abònman w.</Text>
        </View>
      )}

      {/* 3. ZELLE / CASHAPP */}
      {method === 'zelle' && (
        <View style={styles.infoBox}>
          <Text style={styles.sectionTitle}>Peman ak Zelle / CashApp</Text>
          <Text style={styles.infoText}>Zelle / CashApp Tag:</Text>
          <Text style={styles.phoneText}>📧 chathaiti@email.com / $ChatHaitiTV</Text>
          <Text style={styles.infoSub}>Mete non w ak imèl ou nan nòt tranzaksyon an.</Text>
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#121212' },
  header: { fontSize: 22, fontWeight: 'bold', color: '#E50914', marginBottom: 20, textAlign: 'center' },
  methodSelector: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 25 },
  methodBtn: { flex: 1, paddingVertical: 10, backgroundColor: '#1E1E1E', borderRadius: 8, marginHorizontal: 3, alignItems: 'center', borderWidth: 1, borderColor: '#333' },
  activeMethod: { backgroundColor: '#E50914', borderColor: '#E50914' },
  methodText: { color: '#FFF', fontSize: 11, fontWeight: 'bold' },
  cardForm: { backgroundColor: '#1E1E1E', padding: 15, borderRadius: 10, borderWidth: 1, borderColor: '#333' },
  sectionTitle: { color: '#FFF', fontSize: 16, fontWeight: 'bold', marginBottom: 15 },
  label: { color: '#AAA', fontSize: 12, marginBottom: 5 },
  input: { backgroundColor: '#2A2A2A', color: '#FFF', paddingHorizontal: 12, height: 45, borderRadius: 6, marginBottom: 12, borderWidth: 1, borderColor: '#444' },
  row: { flexDirection: 'row' },
  payBtn: { backgroundColor: '#27ae60', paddingVertical: 14, borderRadius: 8, marginTop: 10, alignItems: 'center' },
  payBtnText: { color: '#FFF', fontWeight: 'bold', fontSize: 15 },
  infoBox: { backgroundColor: '#1E1E1E', padding: 20, borderRadius: 10, alignItems: 'center', borderWidth: 1, borderColor: '#333' },
  infoText: { color: '#AAA', fontSize: 14, marginTop: 10 },
  phoneText: { color: '#E50914', fontSize: 18, fontWeight: 'bold', marginVertical: 10 },
  infoSub: { color: '#888', fontSize: 12, textAlign: 'center', marginTop: 10 }
});
