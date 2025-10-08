import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default function QuickDeliveryBanner() {
  return (
    <View style={styles.container}>
      <View style={{ flex: 1 }}>
        <Text style={styles.title}>Quick delivery</Text>
        <Text style={styles.subtitle}>Get it in 15–20 mins</Text>
      </View>
      <Image source={require('../../public/chocolate-cake-slice.png')} style={styles.image} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 16,
    marginHorizontal: 16,
    backgroundColor: '#FFF1DB',
    borderRadius: 16,
    padding: 14,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  title: { fontSize: 14, fontWeight: '700' },
  subtitle: { fontSize: 12, color: '#6B7280' },
  image: { width: 60, height: 60, borderRadius: 10 },
});


