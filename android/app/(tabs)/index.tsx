import React, { useState } from 'react';
import { View, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Text } from '@/components/Themed';
import Header from '@/components/mobile/Header';
import SearchBar from '@/components/mobile/SearchBar';
import PromoSlider from '@/components/mobile/PromoSlider';
import Categories from '@/components/mobile/Categories';
import TrendingSection from '@/components/mobile/TrendingSection';
import CountdownBanner from '@/components/mobile/CountdownBanner';
import FloatingQuickDeliveryButton from '@/components/mobile/FloatingQuickDeliveryButton';
import { Colors } from '@/constants/Colors';

export default function TabOneScreen() {
  const [q, setQ] = useState('');
  return (
    <SafeAreaView edges={['top']} style={{ flex: 1, backgroundColor: Colors.bg }}>
      <ScrollView contentContainerStyle={{ paddingBottom: 160 }}>
        {/* Header */}
        <Header location="Home" />

        {/* Search bar with horizontal padding */}
        <View style={{ paddingHorizontal: 16, paddingTop: 12 }}>
          <SearchBar value={q} onChangeText={setQ} />
        </View>

        {/* Promo slider */}
        <View style={{ marginTop: 20 }}>
          <PromoSlider />
        </View>

        {/* Categories */}
        <View style={{ marginTop: 24, paddingHorizontal: 16 }}>
          <Categories />
        </View>

        {/* Trending section */}
        <View style={{ marginTop: 16 }}>
          <TrendingSection />
        </View>
      </ScrollView>

      {/* Floating quick delivery button */}
      <FloatingQuickDeliveryButton />

      {/* Countdown banner fixed above native tab bar; leave space for FAB */}
      <View style={{ position: 'absolute', left: 16, right: 16, bottom: 88, paddingRight: 72 }}>
        <CountdownBanner />
      </View>

    </SafeAreaView>
  );
}
