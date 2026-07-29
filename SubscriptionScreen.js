// SubscriptionScreen.js - ChatHaiti TV (Paj Abònman & Natcash/MonCash)
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Alert } from 'react-native';

export default function SubscriptionScreen() {
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [paymentMethod, setPaymentMethod] = useState('Natcash');

  const plans = [
    { id: 1, title: 'Pass 1 Jou', price: '50 HTG', duration: '24 èdtan aksè' },
    { id: 2, title: 'Abònman Mwa', price: '500 HTG', duration: '30 jou aksè illimité' },
    { id: 3, title: 'Abònman Ane', price: '4500 HTG', duration: '1 lane aksè illimité' },
  ];

  const handlePayment = () => {
    if (!selectedPlan) {
      alert('Tanpri chwazi yon plan abònman pou w kontinye.');
      return;
    }
    alert(`W ap peye ${selectedPlan.price} ak ${paymentMethod} pou ${selectedPlan.title}.`);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Chwazi Abònman W 📺</Text>
      <Text style={styles.subHeader}>Jwi tout nivo kontni sou ChatHaiti TV</Text>

      {plans.map((plan) => (
        <TouchableOpacity
          key={plan.id}
          style={[
            styles.planCard,
            selectedPlan?.id === plan.id && styles.selectedCard,
          ]}
          onPress={() => setSelectedPlan(plan)}
        >
          <Text style={styles.planTitle}>{plan.title}</Text>
          <Text style={styles.planPrice}>{plan.price}</Text>
          <Text style={styles.planDuration}>{plan.duration}</Text>
        </TouchableOpacity>
      ))}

      <Text style={styles.paymentHeader}>Metòd Pèman:</Text>
      <View style={styles.paymentContainer}>
        <TouchableOpacity
          style={[styles.payBtn, paymentMethod === 'Natcash' && styles.activePay]}
          onPress={() => setPaymentMethod('Natcash')}
        >
          <Text style={styles.payText}>Natcash 📲</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.payBtn, paymentMethod === 'MonCash' && styles.activePay]}
          onPress={() => setPaymentMethod('MonCash')}
        >
          <Text style={styles.payText}>MonCash 💳</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.checkoutBtn} onPress={handlePayment}>
        <Text style={styles.checkoutText}>Konfime ak Peye</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flexGrow: 1, padding: 20, backgroundColor: '#121212', alignItems: 'center' },
  header: { fontSize: 26, fontWeight: 'bold', color: '#E50914', marginTop: 20 },
  subHeader: { fontSize: 14, color: '#AAA', marginBottom: 20 },
  planCard: { width: '100%', backgroundColor: '#1E1E1E', padding: 20, borderRadius: 10, marginBottom: 15, borderWidth: 1, borderColor: '#333' },
  selectedCard: { borderColor: '#E50914', backgroundColor: '#2A1215' },
  planTitle: { fontSize: 20, fontWeight: 'bold', color: '#FFF' },
  planPrice: { fontSize: 24, fontWeight: 'bold', color: '#E50914', marginVertical: 5 },
  planDuration: { fontSize: 12, color: '#AAA' },
  paymentHeader: { fontSize: 18, color: '#FFF', alignSelf: 'flex-start', marginTop: 15, marginBottom: 10 },
  paymentContainer: { flexDirection: 'row', justifyContent: 'space-between', width: '100%', marginBottom: 20 },
  payBtn: { flex: 0.48, backgroundColor: '#1E1E1E', padding: 15, borderRadius: 8, alignItems: 'center', borderWidth: 1, borderColor: '#333' },
  activePay: { borderColor: '#E50914', backgroundColor: '#333' },
  payText: { color: '#FFF', fontWeight: 'bold' },
  checkoutBtn: { width: '100%', backgroundColor: '#E50914', padding: 15, borderRadius: 8, alignItems: 'center', marginTop: 10 },
  checkoutText: { color: '#FFF', fontSize: 18, fontWeight: 'bold' }
});
