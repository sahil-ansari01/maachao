import React, { useEffect, useMemo, useRef } from 'react';
import { Animated, View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Link, Tabs } from 'expo-router';
import { Pressable } from 'react-native';

import palette, { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/components/useColorScheme';
import { useClientOnlyValue } from '@/components/useClientOnlyValue';

function TabIcon({ name, focused, color }: { name: React.ComponentProps<typeof Ionicons>['name']; focused: boolean; color: string; }) {
  const scale = useRef(new Animated.Value(focused ? 1.1 : 1)).current;
  useEffect(() => {
    Animated.spring(scale, { toValue: focused ? 1.1 : 1, useNativeDriver: true, friction: 6, tension: 150 }).start();
  }, [focused]);
  return (
    <Animated.View style={{ transform: [{ scale }] }}>
      <Ionicons name={name} size={22} color={color} />
    </Animated.View>
  );
}

function CustomTabBar({ state, descriptors, navigation }: any) {
  return (
    <View style={styles.tabBar}>
      {state.routes.map((route: any, index: number) => {
        const { options } = descriptors[route.key];
        const label = options.title || route.name;
        const focused = state.index === index;
        const onPress = () => {
          const event = navigation.emit({ type: 'tabPress', target: route.key, canPreventDefault: true });
          if (!focused && !event.defaultPrevented) navigation.navigate(route.name);
        };
        const color = focused ? '#fff' : '#9CA3AF';
        const containerStyle = [styles.pill, focused && styles.pillActive];
        const iconName = options.tabBarTestID as keyof typeof Ionicons.glyphMap | undefined;
        return (
          <TouchableOpacity key={route.key} onPress={onPress} activeOpacity={0.8} style={styles.tabItem}>
            <Animated.View style={containerStyle}>
              <TabIcon name={(focused ? options.tabBarAccessibilityLabel : options.tabBarTestID) || 'home-outline' as any} focused={focused} color={color} />
              {focused ? <Text style={styles.pillText}>{label}</Text> : null}
            </Animated.View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      tabBar={(props) => <CustomTabBar {...props} />}
      screenOptions={{
        tabBarActiveTintColor: palette[colorScheme ?? 'light'].tint,
        tabBarShowLabel: false,
        headerShown: useClientOnlyValue(false, true),
      }}>
      <Tabs.Screen
        name="index"
        options={({ route }) => ({
          title: 'Home',
          // Using testID as the outline icon and accessibilityLabel as the filled icon to pass into custom bar
          tabBarTestID: 'home-outline',
          tabBarAccessibilityLabel: 'home',
          headerShown: false,
        })}
      />
      <Tabs.Screen
        name="two"
        options={{
          title: 'Wishlist',
          tabBarTestID: 'heart-outline',
          tabBarAccessibilityLabel: 'heart',
        }}
      />
      <Tabs.Screen
        name="categories"
        options={{
          title: 'Categories',
          tabBarTestID: 'grid-outline',
          tabBarAccessibilityLabel: 'grid',
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarTestID: 'person-outline',
          tabBarAccessibilityLabel: 'person',
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingVertical: 10,
    paddingHorizontal: 16,
    backgroundColor: '#fff',
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: '#e5e7eb',
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
  },
  pill: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 999,
  },
  pillActive: {
    backgroundColor: Colors.primary,
  },
  pillText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '600',
  },
});
