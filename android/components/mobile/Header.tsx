import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

type HeaderProps = {
  userName?: string;
  location?: string;
  onPressLocation?: () => void;
  onPressNotifications?: () => void;
  onPressCart?: () => void;
};

export function Header({
  userName = 'Guest',
  location = 'Select location',
  onPressLocation,
  onPressNotifications,
  onPressCart,
}: HeaderProps) {
  return (
    <View style={styles.container}>
      <View style={styles.left}>
        <Image source={require('../../public/avatar.png')} style={styles.avatar} />
        <TouchableOpacity onPress={onPressLocation} activeOpacity={0.7}>
          <Text style={styles.locationLabel}>Deliver to</Text>
          <Text style={styles.locationValue}>{location}</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.right}>
        <TouchableOpacity onPress={onPressNotifications} style={styles.iconBtn}>
          <Ionicons name="notifications-outline" size={18} color="#374151" />
        </TouchableOpacity>
        <TouchableOpacity onPress={onPressCart} style={styles.iconBtn}>
          <Ionicons name="cart-outline" size={18} color="#374151" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  left: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  right: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  avatar: {
    width: 36,
    height: 36,
    borderRadius: 18,
  },
  locationLabel: {
    fontSize: 12,
    color: '#666',
  },
  locationValue: {
    fontSize: 14,
    fontWeight: '600',
  },
  iconBtn: {
    width: 36,
    height: 36,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  iconText: {
    fontSize: 16,
  },
});

export default Header;


