import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

type Product = {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: any;
};

type Props = {
  product: Product;
  onPress?: (id: string) => void;
  onToggleFavorite?: (id: string) => void;
};

export default function ProductCard({ product, onPress, onToggleFavorite }: Props) {
  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <TouchableOpacity style={styles.card} activeOpacity={0.8} onPress={() => onPress?.(product.id)}>
      <Image source={product.image} style={styles.image} />
      <TouchableOpacity onPress={() => onToggleFavorite?.(product.id)} style={styles.favorite}>
        <Text>♡</Text>
      </TouchableOpacity>
      <View style={styles.info}>
        <Text style={styles.name} numberOfLines={1}>{product.name}</Text>
        <View style={styles.priceRow}>
          <Text style={styles.price}>₹{product.price.toFixed(2)}</Text>
          {product.originalPrice ? (
            <Text style={styles.original}>₹{product.originalPrice.toFixed(2)}</Text>
          ) : null}
          {discount > 0 ? <Text style={styles.discount}>-{discount}%</Text> : null}
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 160,
    marginRight: 12,
    backgroundColor: '#fff',
    borderRadius: 14,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 110,
  },
  favorite: {
    position: 'absolute',
    right: 8,
    top: 8,
    backgroundColor: '#fff',
    borderRadius: 14,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  info: {
    padding: 10,
    gap: 6,
  },
  name: {
    fontSize: 14,
    fontWeight: '600',
  },
  priceRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  price: { fontWeight: '700' },
  original: { textDecorationLine: 'line-through', color: '#999' },
  discount: { color: '#10B981', fontWeight: '600' },
});


