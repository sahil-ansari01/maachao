import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { CategoryBg, Colors } from '@/constants/Colors';

const categories = [
  { id: '1', label: 'Trending', icon: '🔥', bg: CategoryBg.trending },
  { id: '2', label: 'Cakes', icon: '🧁', bg: CategoryBg.cakes },
  { id: '3', label: 'Decoration', icon: '🎀', bg: CategoryBg.decoration },
  { id: '4', label: 'Gifts', icon: '🎁', bg: CategoryBg.gifts },
  { id: '5', label: 'Hire MUA', icon: '👨‍🍳', bg: CategoryBg.hireMua },
  { id: '6', label: 'Video Gr.', icon: '📹', bg: CategoryBg.videoGr },
  { id: '7', label: 'Photo Gr.', icon: '📸', bg: CategoryBg.photoGr },
  { id: '8', label: 'View All', icon: 'grid-outline', border: Colors.primary, bg: '#FFFFFF' },
];

export default function Categories() {
  return (
    <View style={styles.container}>
      {categories.map((c) => (
        <View key={c.id} style={styles.item}>
          <View style={[styles.iconWrap, { backgroundColor: c.bg }, c.border && { borderWidth: 2, borderColor: c.border }]}>
            {typeof c.icon === 'string' && c.icon.includes('-') ? (
              <Ionicons name={c.icon as any} size={20} color={Colors.primary} />
            ) : (
              <Text style={[styles.icon, c.border && { color: Colors.primary }]}>{c.icon}</Text>
            )}
          </View>
          <Text style={styles.label}>{c.label}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  item: {
    alignItems: 'center',
    width: '25%',
    marginBottom: 16,
  },
  iconWrap: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: { fontSize: 22 },
  label: { fontSize: 12, marginTop: 6 },
});


