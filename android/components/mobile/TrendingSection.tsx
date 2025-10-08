import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Colors } from '@/constants/Colors';
import ProductCard from './ProductCard';

const products = [
  {
    id: 'p1',
    name: 'Chocolate Cake',
    price: 12.99,
    originalPrice: 16.99,
    image: require('../../public/chocolate-pastry.jpg'),
  },
  {
    id: 'p2',
    name: 'Cupcakes Mix',
    price: 7.99,
    originalPrice: 9.99,
    image: require('../../public/delicious-cupcakes.jpg'),
  },
  {
    id: 'p3',
    name: 'Dessert Box',
    price: 19.99,
    originalPrice: 24.99,
    image: require('../../public/chocolate-dessert.jpg'),
  },
];

export default function TrendingSection() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Trending</Text>
        <Text style={styles.viewAll}>See All →</Text>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 16,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  title: { fontSize: 16, fontWeight: '700' },
  viewAll: { color: Colors.primary, fontWeight: '600' },
});


