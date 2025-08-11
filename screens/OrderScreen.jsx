import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function OrderScreen() {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Ionicons name="person-circle-outline" size={32} color="#555" />

        <View style={styles.credits}>
          <Text style={styles.coin}>🪙</Text>
          <Text style={styles.creditText}>199</Text>
          <View style={styles.creditButton}>
            <Text style={styles.creditLabel}>LK Credits</Text>
            <Ionicons name="add-circle" size={16} color="white" />
          </View>
        </View>

        <View style={styles.headerIcons}>
          <Ionicons
            name="chatbubble-ellipses-outline"
            size={22}
            color="#333"
            style={styles.icon}
          />
          <Ionicons
            name="notifications-outline"
            size={22}
            color="#333"
            style={styles.icon}
          />
          <Ionicons name="heart-outline" size={22} color="#333" />
        </View>
      </View>

      {/* Title */}
      <Text style={styles.title}>Order</Text>

      {/* Search & Filter */}
      <View style={styles.searchRow}>
        <View style={styles.searchBox}>
          <Ionicons name="search-outline" size={20} color="#aaa" />
          <TextInput
            placeholder="Search orders"
            placeholderTextColor="#999"
            style={styles.searchInput}
          />
        </View>
        <TouchableOpacity style={styles.filterButton}>
          <Text style={styles.filterText}>Filters</Text>
          <Ionicons name="filter-outline" size={18} color="#000" />
        </TouchableOpacity>
      </View>

      {/* Empty State */}
      <View style={styles.emptyContainer}>
        <Image
          source={{
            uri: 'https://cdn-icons-png.flaticon.com/512/4076/4076549.png',
          }}
          style={styles.emptyImage}
        />
        <Text style={styles.emptyText}>No record found</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40,
    paddingHorizontal: 15,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  credits: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#e6f4ea',
    paddingVertical: 2,
    paddingHorizontal: 10,
    borderRadius: 20,
    marginLeft: 10,
    flex: 1,
    marginHorizontal: 10,
  },
  coin: { fontSize: 16 },
  creditText: { fontWeight: 'bold', marginHorizontal: 5 },
  creditButton: {
    flexDirection: 'row',
    backgroundColor: '#28a745',
    borderRadius: 12,
    paddingHorizontal: 6,
    paddingVertical: 2,
    alignItems: 'center',
    marginLeft: 8,
  },
  creditLabel: {
    color: 'white',
    fontSize: 12,
    marginRight: 4,
  },
  headerIcons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginHorizontal: 5,
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    marginTop: 20,
  },
  searchRow: {
    flexDirection: 'row',
    marginTop: 20,
    alignItems: 'center',
  },
  searchBox: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#f1f1f1',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 25,
    alignItems: 'center',
  },
  searchInput: {
    marginLeft: 10,
    flex: 1,
    fontSize: 14,
  },
  filterButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 10,
    paddingHorizontal: 12,
  },
  filterText: {
    marginRight: 4,
    fontSize: 14,
  },
  emptyContainer: {
    marginTop: 80,
    alignItems: 'center',
    justifyContent: 'center',
  },
  emptyImage: {
    width: 100,
    height: 100,
    opacity: 0.3,
    marginBottom: 10,
  },
  emptyText: {
    fontSize: 16,
    color: '#555',
    fontWeight: '500',
  },
});
