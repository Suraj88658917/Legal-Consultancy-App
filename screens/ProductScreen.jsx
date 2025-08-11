// screens/ProductScreen.js
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const products = {
  Consultation: [
    {
      id: 1,
      title: 'Talk to Lawyer',
      rating: 5,
      reviews: 351,
      image: 'https://images.unsplash.com/photo-1588776814546-bc14af1d3b5b?auto=format&fit=crop&w=100&q=80',
    },
    {
      id: 2,
      title: 'Document Review & Consult',
      rating: 5,
      reviews: 238,
      image: 'https://images.unsplash.com/photo-1581091012184-7e0cdfbb6795?auto=format&fit=crop&w=100&q=80',
    },
  ],
  'Traffic Challan': [
    {
      id: 3,
      title: 'Check Challan',
      rating: 5,
      reviews: 351,
      image: 'https://images.unsplash.com/photo-1634997561303-d0f33d6f2147?auto=format&fit=crop&w=100&q=80',
    },
    {
      id: 4,
      title: 'My Challan',
      rating: 5,
      reviews: 138,
      image: 'https://images.unsplash.com/photo-1527356926125-86a3c6df8c8f?auto=format&fit=crop&w=100&q=80',
    },
    {
      id: 5,
      title: 'My Vehicle',
      rating: 4,
      reviews: 126,
      image: 'https://images.unsplash.com/photo-1603099391703-4c975dbe8e4d?auto=format&fit=crop&w=100&q=80',
    },
  ],
};


export default function ProductScreen() {
  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Ionicons name="person-circle-outline" size={34} color="#555" />

        <View style={styles.creditBox}>
          <Text style={styles.coin}>🪙</Text>
          <Text style={styles.creditText}>199</Text>
          <TouchableOpacity style={styles.creditButton}>
            <Text style={styles.creditLabel}>LK Credits</Text>
            <Ionicons name="add-circle" size={14} color="#fff" />
          </TouchableOpacity>
        </View>

        <View style={styles.headerIcons}>
          <Ionicons name="chatbubble-ellipses-outline" size={22} color="#333" style={styles.icon} />
          <Ionicons name="notifications-outline" size={22} color="#333" style={styles.icon} />
          <Ionicons name="heart-outline" size={22} color="#333" />
        </View>
      </View>

      {/* Title */}
      <Text style={styles.screenTitle}>Product</Text>

      {/* Sections */}
      {Object.keys(products).map((section) => (
        <View key={section} style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>{section}</Text>
            <Text style={styles.seeAll}>See all</Text>
          </View>

          <View style={styles.cardRow}>
            {products[section].map((item) => (
              <View key={item.id} style={styles.card}>
                <Image source={{ uri: item.image }} style={styles.cardImage} />
                <Text style={styles.cardTitle}>{item.title}</Text>
                <Text style={styles.cardRating}>
                  <Text style={{ color: 'green' }}>★ {item.rating.toFixed(1)}</Text>{' '}
                  ({item.reviews} reviews)
                </Text>
              </View>
            ))}
          </View>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', paddingHorizontal: 15, paddingTop: 20 },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  creditBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#e6f4ea',
    paddingHorizontal: 10,
    paddingVertical: 3,
    borderRadius: 20,
  },
  coin: { fontSize: 16 },
  creditText: { fontWeight: 'bold', marginHorizontal: 4 },
  creditButton: {
    backgroundColor: '#28a745',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 12,
    paddingHorizontal: 6,
    paddingVertical: 2,
    marginLeft: 6,
  },
  creditLabel: {
    color: '#fff',
    fontSize: 12,
    marginRight: 4,
  },
  headerIcons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginHorizontal: 6,
  },
  screenTitle: {
    fontSize: 20,
    fontWeight: '700',
    marginTop: 20,
    marginBottom: 10,
  },
  section: {
    marginTop: 15,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
  },
  seeAll: {
    fontSize: 14,
    color: '#666',
  },
  cardRow: {
    flexDirection: 'row',
    gap: 10,
    flexWrap: 'wrap',
  },
  card: {
    width: '30%',
    marginRight: '3%',
    marginBottom: 16,
  },
  cardImage: {
    width: '100%',
    height: 80,
    borderRadius: 8,
    backgroundColor: '#eee',
  },
  cardTitle: {
    fontSize: 14,
    fontWeight: '500',
    marginTop: 6,
  },
  cardRating: {
    fontSize: 12,
    color: '#444',
    marginTop: 2,
  },
});
