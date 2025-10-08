import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

type Props = { onPress?: () => void };

export default function FloatingQuickDeliveryButton({ onPress }: Props) {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.8} style={styles.fab}>
      <Text style={styles.text}>⚡</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    right: 16,
    bottom: 140,
    width: 52,
    height: 52,
    borderRadius: 26,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFB84D',
    elevation: 4,
  },
  text: { color: '#000', fontSize: 22, fontWeight: '700' },
});


