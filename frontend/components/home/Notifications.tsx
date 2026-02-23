import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { CalendarCheck, FileText, Bell, Repeat, LucideIcon } from 'lucide-react-native';
import { LinearGradient } from 'expo-linear-gradient';

type NotificationType = 'appointment' | 'lab' | 'followup' | 'billing';

type NotificationItem = {
  id: number;
  title: string;
  description: string;
  icon: LucideIcon;

  iconColor: string;
};

const notifications: NotificationItem[] = [
  {
    id: 1,
    title: 'New Appointment Booked',
    description: 'John Doe • 12 Apr, 10:00 AM',
    icon: CalendarCheck,
  
    iconColor: '#2563EB',
  },
  {
    id: 2,
    title: 'Lab Reports Ready',
    description: 'CBC Report uploaded • Jane Smith',
    icon: FileText,
 
    iconColor: '#16A34A',
  },
  {
    id: 3,
    title: 'Follow Up Due Tomorrow',
    description: 'Cody Fisher • 9:00 AM',
    icon: Repeat,
  
    iconColor: '#CA8A04',
  },
  {
    id: 4,
    title: 'Invoice Generated',
    description: 'Invoice #2301 • ₹950',
    icon: Bell,
  
    iconColor: '#7C3AED',
  },
];

const NotificationCard = ({ item }: { item: NotificationItem }) => {
  const Icon = item.icon;

  return (
    <View
      className={`mb-3 flex-row items-center rounded-xl p-4  border border-gray-200 shadow-md`}>
      {/* Icon */}
      <View className="mr-4 rounded-full bg-white p-3 shadow-sm">
        <Icon size={26} color={item.iconColor} />
      </View>

      {/* Text */}
      <View className="flex-1">
        <Text className="text-base font-semibold text-gray-900">{item.title}</Text>
        <Text className="mt-1 text-sm text-gray-600">{item.description}</Text>
      </View>
    </View>
  );
};

export default function Notifications(): JSX.Element {
  return (
    <LinearGradient
      colors={['rgba(162, 236, 255, 0.89)', '#FFFFFF']}
      locations={[0, 1]}
      start={{ x: 0.5, y: 0 }}
      end={{ x: 0.5, y: 1 }}
      style={{ flex: 1 }}>
      <SafeAreaView className="flex-1 p-5">
        {/* Header */}
        <View className="px-4 py-3">
          <Text className="text-center text-3xl font-bold text-indigo-900">Notifications</Text>
        </View>

        {/* Content */}
        <View className="flex-1 rounded-tl-[7%] rounded-tr-[7%] bg-white p-4">
          <FlatList
            data={notifications}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => <NotificationCard item={item} />}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
}
