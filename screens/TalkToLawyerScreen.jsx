import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const lawyers = [
  {
    id: '1',
    name: 'Abhijeet Negi',
    rating: '3.5',
    reviews: '0',
    expertise: 'Cheque Bounce & Mo...',
    exp: '2 years',
    lang: 'English',
    charges: '₹ 2.80K/min',
    image: 'https://randomuser.me/api/portraits/men/1.jpg',
  },
  {
    id: '2',
    name: 'Amit Kumra',
    rating: '3.5',
    reviews: '0',
    expertise: 'Property & Real Estate...',
    exp: '2 years',
    lang: 'English, Hindi',
    charges: '₹ 70/min',
    image: null,
    initials: 'AK',
  },
  {
    id: '3',
    name: 'Kishen Samuel',
    rating: '3.5',
    reviews: '0',
    expertise: 'Property & Real Estate...',
    exp: '3 years',
    lang: 'English, Telugu',
    charges: '₹ 70/min',
    image: 'https://randomuser.me/api/portraits/men/3.jpg',
  },
  {
    id: '4',
    name: 'Anirban Basak',
    rating: '3.5',
    reviews: '0',
    expertise: 'Other Legal Problem ...',
    exp: '2 years',
    lang: 'Bengali',
    charges: '₹ 70/min',
    image: null,
    initials: 'AB',
  },
];

const LawyerCard = ({ lawyer }) => (
  <View style={styles.card}>
    {lawyer.image ? (
      <Image source={{ uri: lawyer.image }} style={styles.avatar} />
    ) : (
      <View style={styles.initialsCircle}>
        <Text style={styles.initialsText}>{lawyer.initials}</Text>
      </View>
    )}
    <View style={styles.onlineDot} />
    <View style={styles.ratingBox}>
      <Text style={styles.ratingText}>{lawyer.rating} ★</Text>
      <Text style={styles.reviewText}>{lawyer.reviews} Reviews</Text>
    </View>
    <Text style={styles.name}>
      {lawyer.name} <Ionicons name="checkmark-circle" color="#007bff" />
    </Text>
    <Text style={styles.expertise}>{lawyer.expertise}</Text>
    <Text style={styles.details}>Exp: {lawyer.exp}</Text>
    <Text style={styles.details}>{lawyer.lang}</Text>
    <View style={styles.callRow}>
      <Text style={styles.callCharges}>CALL CHARGES{'\n'}{lawyer.charges}</Text>
      <View style={styles.callIcons}>
        <Ionicons name="call" size={24} color="#4338ca" style={styles.icon} />
        <Ionicons name="videocam" size={24} color="#4338ca" />
      </View>
    </View>
  </View>
);

export default function TalkToLawyerScreen() {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Ionicons name="person-circle-outline" size={30} />
        <Text style={styles.headerTitle}>Talk To Lawyer</Text>
        <View style={styles.creditBox}>
          <Ionicons name="cash-outline" color="gold" size={16} />
          <Text style={styles.creditText}>199</Text>
          <Text style={styles.creditLabel}>LK Credits</Text>
          <Ionicons name="add" size={16} color="white" style={styles.creditPlus} />
        </View>
        <Ionicons name="chatbox-outline" size={22} style={styles.headerIcon} />
        <Ionicons name="notifications-outline" size={22} style={styles.headerIcon} />
        <Ionicons name="heart-outline" size={22} style={styles.headerIcon} />
      </View>

      {/* Search */}
      <View style={styles.searchBox}>
        <Ionicons name="search-outline" size={20} color="#555" />
        <TextInput placeholder="Search lawyers" style={styles.searchInput} />
      </View>

      {/* Lawyers */}
      <FlatList
        data={lawyers}
        keyExtractor={(item) => item.id}
        numColumns={2}
        contentContainerStyle={{ paddingBottom: 60 }}
        renderItem={({ item }) => <LawyerCard lawyer={item} />}
      />

      {/* Footer */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.footerItem}>
          <Ionicons name="filter-outline" size={20} />
          <Text>Filters</Text>
          <View style={styles.badge}>
            <Text style={styles.badgeText}>1</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerItem}>
          <Ionicons name="funnel-outline" size={20} />
          <Text>Sort By</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f6f6f6' },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 14,
    backgroundColor: '#fff',
    elevation: 3,
  },
  headerTitle: { fontSize: 18, fontWeight: 'bold', marginLeft: 10, flex: 1 },
  creditBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#34a853',
    borderRadius: 20,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  creditText: { color: '#fff', marginLeft: 4, fontWeight: 'bold' },
  creditLabel: { color: '#fff', marginLeft: 4, fontSize: 12 },
  creditPlus: { marginLeft: 6 },
  headerIcon: { marginLeft: 10 },
  searchBox: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    margin: 12,
    paddingHorizontal: 12,
    borderRadius: 10,
    elevation: 1,
  },
  searchInput: {
    flex: 1,
    marginLeft: 10,
    height: 40,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 12,
    margin: 8,
    width: '44%',
    elevation: 2,
    alignItems: 'flex-start',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  initialsCircle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#f36',
    justifyContent: 'center',
    alignItems: 'center',
  },
  initialsText: { color: '#fff', fontWeight: 'bold' },
  onlineDot: {
    position: 'absolute',
    top: 45,
    left: 35,
    width: 10,
    height: 10,
    backgroundColor: 'green',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#fff',
  },
  ratingBox: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  ratingText: { color: '#2e7d32', fontWeight: 'bold', fontSize: 12 },
  reviewText: { fontSize: 12, color: '#888', marginLeft: 6 },
  name: { fontWeight: 'bold', marginTop: 6 },
  expertise: { color: '#555', fontSize: 12, marginTop: 2 },
  details: { fontSize: 12, color: '#777' },
  callRow: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  callCharges: {
    fontSize: 12,
    color: '#000',
    fontWeight: 'bold',
  },
  callIcons: {
    flexDirection: 'row',
    gap: 10,
  },
  icon: {
    marginRight: 10,
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    height: 50,
    backgroundColor: '#fff',
    width: '100%',
    flexDirection: 'row',
    borderTopColor: '#ccc',
    borderTopWidth: 1,
  },
  footerItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  badge: {
    position: 'absolute',
    top: 4,
    right: 30,
    backgroundColor: 'red',
    borderRadius: 10,
    paddingHorizontal: 5,
  },
  badgeText: {
    color: 'white',
    fontSize: 10,
  },
});
