import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function CountdownBanner() {
  const [secondsLeft, setSecondsLeft] = useState(15 * 60);

  useEffect(() => {
    const t = setInterval(() => setSecondsLeft((s) => Math.max(0, s - 1)), 1000);
    return () => clearInterval(t);
  }, []);

  const mm = String(Math.floor(secondsLeft / 60)).padStart(2, '0');
  const ss = String(secondsLeft % 60).padStart(2, '0');

  return (
    <View style={styles.shadowWrap}>
      <View style={styles.container}>
        <Image source={require('../../public/chocolate-cake-slice.png')} style={styles.image} />
        <View style={{ flex: 1 }}>
          <Text style={styles.title}>Do Order in <Text style={{ color: '#EF4444', fontWeight: '800' }}>{mm}:{ss}</Text></Text>
          <Text style={styles.subtitle}>And Get Order Today</Text>
        </View>
        <View style={styles.badge}><Text style={styles.badgeText}>{mm}:{ss}</Text></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  shadowWrap: {
    width: '100%',
    borderRadius: 16,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
    elevation: 3,
    backgroundColor: 'transparent',
  },
  container: {
    backgroundColor: '#fff',
    borderRadius: 16,
    paddingHorizontal: 12,
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    width: '100%',
  },
  image: { width: 36, height: 36, borderRadius: 8 },
  title: { fontSize: 13, fontWeight: '700' },
  subtitle: { fontSize: 11, color: '#666', marginTop: 2 },
  badge: {
    backgroundColor: '#EF4444',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 12,
  },
  badgeText: { color: '#fff', fontWeight: '800' },
});


