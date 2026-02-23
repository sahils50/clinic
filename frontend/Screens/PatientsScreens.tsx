import React, { useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

type Patient = {
  id: string;
  name: string;
  age: number;
  gender: 'Male' | 'Female';
  lastVisit: string;
  tag?: string;
  tagColor?: string;
};

const patientsData: Patient[] = [
  {
    id: '1',
    name: 'John Doe',
    age: 45,
    gender: 'Male',
    lastVisit: '9 days ago',
    tag: 'Follow-up due',
    tagColor: '#FF9800',
  },
  {
    id: '2',
    name: 'Ronald Richards',
    age: 36,
    gender: 'Male',
    lastVisit: 'Today',
    tag: 'New',
    tagColor: '#4CAF50',
  },
  {
    id: '3',
    name: 'Jane Smith',
    age: 25,
    gender: 'Female',
    lastVisit: '2 days ago',
    tag: 'New',
    tagColor: '#4CAF50',
  },
  {
    id: '4',
    name: 'Cody Fisher',
    age: 35,
    gender: 'Male',
    lastVisit: '2 days ago',
    tag: 'Follow-up due',
    tagColor: '#FF9800',
  },
  {
    id: '5',
    name: 'Jane Smith',
    age: 25,
    gender: 'Female',
    lastVisit: '2 days ago',
    tag: 'Follow-up due',
    tagColor: '#FF9800',
  },
  {
    id: '6',
    name: 'Jane Smith',
    age: 25,
    gender: 'Female',
    lastVisit: '2 days ago',
    tag: 'Follow-up due',
    tagColor: '#FF9800',
  },
];

const tabs = ['All', 'New', 'Follow-up', 'Today'];

const styles = StyleSheet.create({
  safeArea: { flex: 1 },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#000',
    marginLeft: 16,
    marginTop: 8,
    marginBottom: 16,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F0F0F0',
    borderRadius: 12,
    marginHorizontal: 16,
    paddingHorizontal: 12,
    height: 48,
  },
  searchIcon: { marginRight: 8 },
  searchInput: { flex: 1, fontSize: 16, color: '#000' },
  tabsContainer: {
    flexDirection: 'row',
    marginHorizontal: 16,
    marginVertical: 16,
  },
  tab: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    marginRight: 8,
  },
  activeTab: {
    backgroundColor: '#007AFF',
  },
  tabText: { fontSize: 15, color: '#666' },
  activeTabText: { color: '#FFF', fontWeight: '600' },
  list: { paddingHorizontal: 16 },
  patientCard: {
    flexDirection: 'row',
    backgroundColor: '#FFF',
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  avatarContainer: { marginRight: 16 },
  avatar: { width: 60, height: 60, borderRadius: 30, backgroundColor: '#DDD' },
  infoContainer: { flex: 1 },
  name: { fontSize: 18, fontWeight: 'bold', color: '#000' },
  details: { fontSize: 15, color: '#666', marginTop: 4 },
  lastVisit: { fontSize: 14, color: '#999', marginTop: 4 },
  tag: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    alignSelf: 'flex-start',
  },
  tagText: { color: '#FFF', fontSize: 13, fontWeight: '600' },
  fab: {
    position: 'absolute',
    bottom: 32,
    right: 16,
    backgroundColor: '#007AFF',
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
});

export default function PatientsScreen() {
  const navigation = useNavigation<any>();
  const [selectedTab, setSelectedTab] = useState('All');
  const [search, setSearch] = useState('');

  const filteredPatients = patientsData.filter((p) => {
    const matchesSearch = p.name.toLowerCase().includes(search.toLowerCase());
    if (!matchesSearch) return false;
    if (selectedTab === 'All') return true;
    if (selectedTab === 'New') return p.tag === 'New';
    if (selectedTab === 'Follow-up') return p.tag?.includes('Follow-up');
    if (selectedTab === 'Today') return p.lastVisit === 'Today';
    return true;
  });

  const renderPatient = ({ item }: { item: Patient }) => (
    <TouchableOpacity
      style={styles.patientCard}
      onPress={() => navigation.navigate('PatientProfile', { patientId: item.id })}>
      <View style={styles.avatarContainer}>
        <Image source={{ uri: 'https://picsum.photos/200/60' }} style={styles.avatar} />
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.details}>
          {item.age}, {item.gender}
        </Text>
        <Text style={styles.lastVisit}>Last visit: {item.lastVisit}</Text>
      </View>
      {item.tag && (
        <View style={[styles.tag, { backgroundColor: item.tagColor || '#4CAF50' }]}>
          <Text style={styles.tagText}>{item.tag}</Text>
        </View>
      )}
    </TouchableOpacity>
  );

  return (
    <LinearGradient
      colors={['rgba(162, 236, 255, 0.89)', '#FFFFFF']}
      locations={[0.03, 0.55]}
      start={{ x: 0.5, y: 0 }}
      end={{ x: 0.5, y: 1 }}
      style={{ flex: 1 }}>
      <SafeAreaView style={styles.safeArea}>
        <Text style={styles.title}>Patients</Text>

        {/* Search Bar */}
        <View style={styles.searchContainer}>
          <Ionicons name="search" size={20} color="#999" style={styles.searchIcon} />
          <TextInput
            placeholder="Search patients"
            value={search}
            onChangeText={setSearch}
            style={styles.searchInput}
            placeholderTextColor="#999"
          />
        </View>

        {/* Tabs */}
        <View style={styles.tabsContainer}>
          {tabs.map((tab) => (
            <TouchableOpacity
              key={tab}
              onPress={() => setSelectedTab(tab)}
              style={[styles.tab, selectedTab === tab && styles.activeTab]}>
              <Text style={[styles.tabText, selectedTab === tab && styles.activeTabText]}>
                {tab}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Patient List */}
        <FlatList
          data={filteredPatients}
          keyExtractor={(item) => item.id}
          renderItem={renderPatient}
          contentContainerStyle={styles.list}
          showsVerticalScrollIndicator={false}
        />

        {/* Floating Add Button */}
        <TouchableOpacity style={styles.fab}>
          <Ionicons name="add" size={36} color="#FFF" />
        </TouchableOpacity>
      </SafeAreaView>
    </LinearGradient>
  );
}
