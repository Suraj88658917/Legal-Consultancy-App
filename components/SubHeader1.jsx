import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  FlatList,
  Dimensions,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const { width } = Dimensions.get('window');

const sections = [
  {
    title: 'Traffic Challan',
    data: [
      {
        id: '1',
        title: 'Check Challan',
        rating: 5.0,
        reviews: 207,
        purchases: '',
        image: 'https://img.freepik.com/free-photo/traffic-cones-road_23-2147727682.jpg',
      },
      {
        id: '2',
        title: 'My Challan',
        rating: 4.0,
        reviews: 251,
        purchases: '',
        image: 'https://img.freepik.com/free-photo/person-writing-document_23-2148495290.jpg',
      },
      {
        id: '3',
        title: 'My Vehicle',
        rating: 5.0,
        reviews: 207,
        purchases: '',
        image: 'https://img.freepik.com/free-photo/car-insurance-concept_23-2149147170.jpg',
      },
    ],
  },
  {
    title: 'Property',
    data: [
      {
        id: '4',
        title: 'Property Registration (sale Deed Regi...)',
        rating: 4.8,
        reviews: 1116,
        purchases: '374+ purchases',
        image: 'https://img.freepik.com/free-photo/hand-holding-house-model_23-2147823422.jpg',
      },
      {
        id: '5',
        title: 'Property Paper Review (oral Discussion)',
        rating: 4.6,
        reviews: 345,
        purchases: '891+ purchases',
        image: 'https://img.freepik.com/free-photo/businessman-having-meeting-with-client_23-2149303460.jpg',
      },
      {
        id: '6',
        title: 'Sale Deed Drafting',
        rating: 4.6,
        reviews: 108,
        purchases: '671+ purchases',
        image: 'https://img.freepik.com/free-photo/man-signing-contract_23-2147826820.jpg',
      },
    ],
  },
];

const SectionCard = ({ section }) => (
  <View style={styles.sectionContainer}>
    <View style={styles.sectionHeader}>
      <Text style={styles.sectionTitle}>{section.title}</Text>
      <Text style={styles.seeAll}>See all</Text>
    </View>
    <FlatList
      horizontal
      data={section.data}
      keyExtractor={(item) => item.id}
      showsHorizontalScrollIndicator={false}
      renderItem={({ item }) => (
        <View style={styles.card}>
          <Image source={{ uri: item.image }} style={styles.image} />
          <Text style={styles.title} numberOfLines={2}>{item.title}</Text>
          <Text style={styles.rating}>
            <FontAwesome name="star" size={12} color="green" /> {item.rating}{' '}
            <Text style={styles.review}>({item.reviews} reviews)</Text>
          </Text>
          <Text style={styles.purchases}>{item.purchases || '+ purchases'}</Text>
        </View>
      )}
    />
  </View>
);

export default function SubHeader1() {
  return (
    <ScrollView style={styles.container}>
      {sections.map((section) => (
        <SectionCard key={section.title} section={section} />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f2f2f2',
    padding: 12,
    flex: 1,
  },
  sectionContainer: {
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 15,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
  },
  seeAll: {
    color: '#6b7280',
    fontSize: 14,
  },
  card: {
    width: width * 0.35,
    marginRight: 15,
  },
  image: {
    width: '100%',
    height: 80,
    borderRadius: 10,
    marginBottom: 8,
    backgroundColor: '#e5e5e5',
  },
  title: {
    fontSize: 13,
    fontWeight: '500',
  },
  rating: {
    fontSize: 12,
    marginTop: 2,
    color: 'green',
  },
  review: {
    color: '#6b7280',
  },
  purchases: {
    fontSize: 12,
    color: '#6b7280',
    marginTop: 2,
  },
});
