import React, { useState, useMemo } from 'react';
import { View, Text, TextInput, Pressable, ScrollView, Image } from 'react-native';
import { Search } from 'lucide-react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../Screens/RootNavigator';

type BillTab = 'ALL' | 'PAID' | 'PENDING';

type Bill = {
  id: number;
  name: string;
  date: string;
  amount: number;
  status: 'PAID' | 'PENDING';
};

const BillsScreens: React.FC = () => {
  const [search, setSearch] = useState('');
  const [activeTab, setActiveTab] = useState<BillTab>('ALL');

  const bills: Bill[] = [
    { id: 1, name: 'Rahul Sharma', date: '12 Sep 2025', amount: 1200, status: 'PAID' },
    { id: 2, name: 'Anita Verma', date: '14 Sep 2025', amount: 850, status: 'PENDING' },
    { id: 3, name: 'Rohit Mehta', date: '15 Sep 2025', amount: 950, status: 'PAID' },
    { id: 4, name: 'Neha Singh', date: '16 Sep 2025', amount: 1100, status: 'PENDING' },
    { id: 5, name: 'Rohit Mehta', date: '15 Sep 2025', amount: 950, status: 'PAID' },
    { id: 6, name: 'Neha Singh', date: '16 Sep 2025', amount: 1100, status: 'PENDING' },
  ];

  // Filter bills based on tab and search
  const filteredBills = useMemo(() => {
    return bills.filter((bill) => {
      const matchTab = activeTab === 'ALL' ? true : bill.status === activeTab;
      const matchSearch = bill.name.toLowerCase().includes(search.toLowerCase());
      return matchTab && matchSearch;
    });
  }, [activeTab, search]);

  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <LinearGradient
      colors={['rgba(162, 236, 255, 0.89)', '#FFFFFF']}
      locations={[0.03, 0.95]}
      start={{ x: 0.5, y: 0 }}
      end={{ x: 0.5, y: 1 }}
      style={{ flex: 1 }}>
      <SafeAreaView className="flex-1">
        <Text className="mt-4 text-center text-3xl font-bold text-indigo-900">Bills</Text>

        {/* Search */}
        <View className="p-4">
          <View className="flex-row items-center rounded-2xl border border-gray-300 bg-white px-3 py-2">
            <Search size={20} color="#6B7280" />
            <TextInput
              placeholder="Search bill..."
              value={search}
              onChangeText={setSearch}
              className="ml-3 flex-1 text-base"
            />
          </View>
        </View>

        {/* Tabs */}
        <View className="mx-4 mb-2 flex-row rounded-xl  p-1">
          {(['ALL', 'PAID', 'PENDING'] as BillTab[]).map((tab) => (
            <Pressable
              key={tab}
              onPress={() => setActiveTab(tab)}
              className={`flex-1 items-center rounded-xl py-2 ${
                activeTab === tab ? 'bg-indigo-600' : ''
              }`}>
              <Text
                className={`font-semibold ${activeTab === tab ? 'text-white' : 'text-gray-700'}`}>
                {tab}
              </Text>
            </Pressable>
          ))}
        </View>

        {/* Bills List */}
        <ScrollView className="flex-1 px-4">
          {filteredBills.length === 0 ? (
            <Text className="mt-10 text-center text-gray-500">No bills found</Text>
          ) : (
            filteredBills.map((bill) => {
              const isPaid = bill.status === 'PAID';

              return (
                <View
                  key={bill.id}
                  className="mb-4 flex-row items-center rounded-xl bg-white p-4 shadow-sm">
                  {/* Left: Profile */}
                  <Image
                    source={{ uri: 'https://i.pravatar.cc/100' }}
                    className="mr-3 h-12 w-12 rounded-full"
                  />

                  {/* Middle: Name & Date */}
                  <View className="flex-1">
                    <Text className="text-base font-semibold text-gray-800">{bill.name}</Text>
                    <Text className="mt-1 text-sm text-gray-500">{bill.date}</Text>
                  </View>

                  {/* Right: Amount, Status, Button */}
                  <View className="items-end">
                    <Text className="text-base font-bold text-indigo-700">₹ {bill.amount}</Text>
                    <Text
                      className={`mt-1 text-sm font-semibold ${
                        isPaid ? 'text-green-600' : 'text-red-500'
                      }`}>
                      {isPaid ? 'Paid' : 'Pending'}
                    </Text>
                    <Pressable
                      onPress={() => navigation.navigate('ViewBill', { billId: bill.id })}
                      className="mt-2 rounded-lg bg-indigo-600 px-3 py-1.5">
                      <Text className="text-xs font-semibold text-white">View Invoice</Text>
                    </Pressable>
                  </View>
                </View>
              );
            })
          )}
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default BillsScreens;
