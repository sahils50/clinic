import React, { useState, useMemo } from 'react';
import { View, Text, ScrollView, Pressable, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from 'Screens/RootNavigator';
import { Plus } from 'lucide-react-native';

type Appointment = {
  id: number;
  name: string;
  date: string;
  time: string;
  gender?: 'Male' | 'Female';
  status: 'TODAY' | 'UPCOMING' | 'COMPLETED';
};

const appointments: Appointment[] = [
  {
    id: 1,
    name: 'Rahul Sharma',
    date: '12 Sep 2025',
    time: '10:00 AM',
    gender: 'Male',
    status: 'TODAY',
  },
  {
    id: 2,
    name: 'Anita Verma',
    date: '13 Sep 2025',
    time: '11:30 AM',
    gender: 'Female',
    status: 'UPCOMING',
  },
  {
    id: 3,
    name: 'Rohit Mehta',
    date: '10 Sep 2025',
    time: '09:00 AM',
    gender: 'Male',
    status: 'COMPLETED',
  },
  {
    id: 4,
    name: 'Neha Singh',
    date: '14 Sep 2025',
    time: '01:00 PM',
    gender: 'Female',
    status: 'TODAY',
  },
  {
    id: 5,
    name: 'Neha Singh',
    date: '14 Sep 2025',
    time: '01:00 PM',
    gender: 'Female',
    status: 'TODAY',
  },
];

const getStatusStyle = (status: string) => {
  switch (status) {
    case 'TODAY':
      return 'text-blue-600';
    case 'UPCOMING':
      return 'text-orange-500';
    case 'COMPLETED':
      return 'text-green-600';
    default:
      return 'text-gray-700';
  }
};

export default function AppointmentsScreen() {
  const [activeTab, setActiveTab] = useState<'ALL' | 'TODAY' | 'UPCOMING' | 'COMPLETED'>('ALL');

  const filteredAppointments = useMemo(() => {
    return appointments.filter((item) => (activeTab === 'ALL' ? true : item.status === activeTab));
  }, [activeTab]);

  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <LinearGradient
      colors={['rgba(162,236,255,0.89)', '#FFFFFF']}
      start={{ x: 0.5, y: 0 }}
      end={{ x: 0.5, y: 1 }}
      style={{ flex: 1 }}>
      <SafeAreaView className="flex-1 p-2 px-4">
        <View className="mt-4 flex-row items-center justify-between px-2">
          {/* Title */}
          <Text className="text-3xl font-bold text-indigo-900">Appointments</Text>

          {/* Plus Button */}
          <Pressable
            onPress={() => navigation.navigate('NewAppointments')}
            className="rounded-full bg-indigo-600 p-2 active:opacity-80">
            <Plus size={26} color="#ffffff" strokeWidth={2.5} />
          </Pressable>
        </View>

        {/* Tabs */}
        <View className="my-4 flex-row justify-around">
          {['ALL', 'TODAY', 'UPCOMING', 'COMPLETED'].map((tab) => (
            <Pressable
              key={tab}
              onPress={() => setActiveTab(tab as any)}
              className={`rounded-xl px-4 py-2 ${activeTab === tab ? 'bg-indigo-600' : ''}`}>
              <Text
                className={`${activeTab === tab ? 'text-white' : 'text-gray-700'} font-semibold`}>
                {tab}
              </Text>
            </Pressable>
          ))}
        </View>

        {/* Appointment Cards */}
        <ScrollView className="flex-1">
          {filteredAppointments.length === 0 ? (
            <Text className="mt-10 text-center text-gray-500">No appointments found</Text>
          ) : (
            filteredAppointments.map((item) => (
              <View
                key={item.id}
                className="mb-4 flex-row items-center rounded-xl bg-white p-4 shadow-sm">
                {/* Left: Profile */}
                <Image
                  source={{
                    uri:
                      item.gender === 'Male'
                        ? 'https://randomuser.me/api/portraits/men/1.jpg'
                        : 'https://randomuser.me/api/portraits/women/1.jpg',
                  }}
                  className="mr-3 h-12 w-12 rounded-full"
                />

                {/* Middle: Name, Gender, Date, Time */}
                <View className="flex-1">
                  <Text className="text-base font-semibold text-gray-800">{item.name}</Text>
                  <Text className="text-sm text-gray-500">{item.gender}</Text>
                  <Text className="text-sm text-gray-500">{item.date}</Text>
                  <Text className="text-sm text-gray-500">{item.time}</Text>
                </View>

                {/* Right: Status & Button */}
                <View className="items-end">
                  <Text className={`font-semibold ${getStatusStyle(item.status)}`}>
                    {item.status}
                  </Text>
                  <Pressable
                    onPress={() => navigation.navigate('AddVisit')}
                    className="mt-2 rounded-lg bg-indigo-600 px-3 py-1.5">
                    <Text className="text-xs font-semibold text-white">
                      {item.status === 'TODAY' ? 'Start Visit' : 'View Details'}
                    </Text>
                  </Pressable>
                </View>
              </View>
            ))
          )}
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
}
