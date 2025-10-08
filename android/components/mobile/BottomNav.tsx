import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { usePathname, Link } from 'expo-router';
import { Colors } from '@/constants/Colors';

const items = [
  { href: '/(tabs)', label: 'Home', icon: '🏠' },
  { href: '/(tabs)/two', label: 'Wishlist', icon: '❤' },
  { href: '/(tabs)/categories', label: 'Categories', icon: '⬛' },
  { href: '/(tabs)/profile', label: 'Profile', icon: '👤' },
];

export default function BottomNav() {
  const path = usePathname();
  return (
    <View style={styles.nav}>
      <View style={styles.row}>
        {items.map((it) => {
          const active = path === it.href || (it.href === '/(tabs)' && path === '/(tabs)/index');
          return (
            <Link key={it.href} href={it.href} asChild>
              <TouchableOpacity style={[styles.btn, active && styles.btnActive]}>
                <Text style={[styles.icon, active && styles.iconActive]}>{it.icon}</Text>
                {active && <Text style={styles.label}>{it.label}</Text>}
              </TouchableOpacity>
            </Link>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  nav: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '#fff',
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: '#e5e7eb',
    paddingVertical: 8,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  btn: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderRadius: 12,
  },
  btnActive: {
    backgroundColor: Colors.primary,
  },
  icon: { fontSize: 18, color: '#9CA3AF' },
  iconActive: { color: '#fff' },
  label: { color: '#fff', fontSize: 12, fontWeight: '600' },
});


