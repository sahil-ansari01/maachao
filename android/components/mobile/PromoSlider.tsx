import React, { useEffect, useRef, useState } from 'react';
import { View, Text, Image, ScrollView, StyleSheet, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Colors } from '@/constants/Colors';

const { width } = Dimensions.get('window');

const slides = [
  { id: '1', title: 'Hot Deal 🔥', subtitle: 'Get 20% OFF', image: require('../../public/chocolate-cake-with-candles.jpg') },
  { id: '2', title: 'Hot Deal 🔥', subtitle: 'Get 20% OFF', image: require('../../public/delicious-cupcakes.jpg') },
  { id: '3', title: 'Hot Deal 🔥', subtitle: 'Get 20% OFF', image: require('../../public/chocolate-dessert.jpg') },
];

export default function PromoSlider() {
  const scrollRef = useRef<ScrollView>(null);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      const next = (index + 1) % slides.length;
      setIndex(next);
      scrollRef.current?.scrollTo({ x: next * width, animated: true });
    }, 4000);
    return () => clearInterval(timer);
  }, [index]);

  return (
    <View style={styles.wrapper}>
      <ScrollView
        ref={scrollRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={(e) => {
          const newIndex = Math.round(e.nativeEvent.contentOffset.x / width);
          setIndex(newIndex);
        }}
      >
        {slides.map((s) => (
          <View style={styles.slide} key={s.id}>
            <LinearGradient colors={['#4a1a1a', '#5a2020', '#3a1515']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} style={styles.card}>
              <View style={{ flex: 1 }}>
                <Text style={styles.badge}>{s.title}</Text>
                <Text style={styles.title}>{s.subtitle}</Text>
                <View style={styles.cta}><Text style={styles.ctaText}>Order Now</Text></View>
              </View>
              <Image source={s.image} style={styles.image} />
            </LinearGradient>
          </View>
        ))}
      </ScrollView>
      <View style={styles.dots}>
        {slides.map((s, i) => (
          <View key={s.id} style={[styles.dot, i === index && styles.dotActive]} />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    marginTop: 16,
  },
  slide: {
    width,
    paddingHorizontal: 16,
  },
  card: {
    borderRadius: 16,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  badge: { color: Colors.primary, fontSize: 12, marginBottom: 4, fontWeight: '600' },
  title: {
    fontSize: 20,
    fontWeight: '800',
    color: '#fff',
  },
  cta: { backgroundColor: Colors.primary, alignSelf: 'flex-start', paddingHorizontal: 14, paddingVertical: 8, borderRadius: 999, marginTop: 8 },
  ctaText: { color: '#000', fontWeight: '700' },
  image: {
    width: 80,
    height: 80,
    borderRadius: 10,
  },
  dots: {
    flexDirection: 'row',
    gap: 6,
    justifyContent: 'center',
    marginTop: 8,
  },
  dot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#ddd',
  },
  dotActive: {
    backgroundColor: '#FFB84D',
  },
});


