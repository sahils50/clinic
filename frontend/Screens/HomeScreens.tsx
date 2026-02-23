import { View, Text, Pressable, Image, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  FileText,
  LucideIcon,
  UserPlus,
  CalendarCheck,
  Repeat,
  Bell,
  ChevronLeft,
} from 'lucide-react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from './RootNavigator';

type OverviewCard = { id: number; value: number; label: string };
type ActionsCard = {
  id: number;
  label: string;
  icon: LucideIcon;
  screen: 'newpatient' | 'prescription' | 'appointments' | 'followup' | 'notifications';
};
type Appointment = {
  id: number;
  name: string;
  issue: string;
  time: string;
  type: string;
  status: 'New' | 'Follow Up' | 'Emergency';
};

const overviewData: OverviewCard[] = [
  { id: 1, value: 10, label: 'Patients Today' },
  { id: 2, value: 15, label: 'Upcoming Appointments' },
  { id: 3, value: 5, label: 'Pending Lab Reports' },
  { id: 4, value: 3, label: 'Follow Ups Due' },
];

const actionsData: ActionsCard[] = [
  { id: 1, label: 'New Patients', icon: UserPlus, screen: 'newpatient' },
  { id: 2, label: 'Create Prescriptions', icon: FileText, screen: 'prescription' },
  { id: 3, label: 'Appointments', icon: CalendarCheck, screen: 'appointments' },
  { id: 4, label: 'Add Follow Up', icon: Repeat, screen: 'followup' },
];

const appointments: Appointment[] = [
  {
    id: 1,
    name: 'Rahul Sharma',
    issue: 'Tooth Pain',
    time: '10:30 AM',
    type: 'General Consultation',
    status: 'New',
  },
  {
    id: 2,
    name: 'Anita Verma',
    issue: 'Routine Checkup',
    time: '11:15 AM',
    type: 'Dental Review',
    status: 'Follow Up',
  },
  {
    id: 3,
    name: 'Amit Patel',
    issue: 'Jaw Swelling',
    time: '12:00 PM',
    type: 'Emergency Visit',
    status: 'Emergency',
  },
];

const getStatusStyle = (status: string) => {
  switch (status) {
    case 'New':
      return 'bg-green-100 text-green-700';
    case 'Follow Up':
      return 'bg-blue-100 text-blue-700';
    case 'Emergency':
      return 'bg-red-100 text-red-700';
    default:
      return 'bg-gray-100 text-gray-700';
  }
};

export default function HomeScreen() {
  type Screen =
    | 'home'
    | 'newpatient'
    | 'prescription'
    | 'appointments'
    | 'followup'
    | 'notifications';
  const [activeScreen, setActiveScreen] = useState<Screen>('home');

  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <LinearGradient
      colors={['rgba(162, 236, 255, 0.89)', '#FFFFFF']}
      locations={[0, 1]}
      start={{ x: 0.5, y: 0 }}
      end={{ x: 0.5, y: 1 }}
      style={{ flex: 1 }}>
      <ScrollView>
        <SafeAreaView className="flex-1" edges={['top']}>
          {activeScreen === 'home' ? (
            // ===== Full Home Content =====
            <View className="flex-1 p-2">
              {/* Header */}
              <View className="flex-row items-center justify-between px-4 py-1">
                <View className="ml-[5%]">
                  <Text className="text-4xl text-indigo-900">Welcome,</Text>
                  <Text className="text-3xl font-bold text-indigo-900">Dr. XYZ</Text>
                </View>

                <View className="mt-6 flex-row items-center gap-4">
                  <Pressable onPress={() => setActiveScreen('home')}>
                    <Bell size={34} color="black" />
                  </Pressable>
                  <View>
                    <Image
                      source={{ uri: 'https://picsum.photos/200' }}
                      className="h-16 w-16 rounded-full"
                    />
                  </View>
                </View>
              </View>

              {/* Overview Section */}
              <View className="flex-1 overflow-hidden rounded-tl-[30px] rounded-tr-[30px] bg-white p-1">
                <View className="p-4">
                  <Text className="mb-4 text-xl font-semibold">Today's Overview</Text>
                  <View className="flex-row">
                    {overviewData.map((item) => (
                      <View
                        key={item.id}
                        className="mx-1 flex-1 items-center rounded-xl border border-gray-400 p-2">
                        <Text className="text-2xl font-bold">{item.value}</Text>
                        <Text className="mt-1 text-center text-sm">{item.label}</Text>
                      </View>
                    ))}
                  </View>
                </View>

                {/* Actions Section */}
                <View className="border-gray-200 p-2">
                  <Text className="mb-4 ml-4 mt-1 text-xl font-bold">Quick Actions</Text>
                  {/* <View className="flex-row flex-wrap">
                    {actionsData.map((item) => {
                      const Icon = item.icon;
                      return (
                        // <TouchableOpacity
                        //   key={item.id}
                        //   onPress={() => {
                        //     if (item.screen === 'appointments') {
                        //       // This switches to the actual Patients tab
                        //       navigation.navigate('appointments');
                        //     } else {
                        //       // Keep local overlay for other screens
                        //       setActiveScreen(item.screen);
                        //     }
                        //   }}
                        //   className="mx-1 mb-3 flex-1 items-center rounded-xl border border-gray-400 p-2">
                        //   <Icon size={28} color="#2563EB" />
                        //   <Text className="mt-2 text-center text-sm font-medium">{item.label}</Text>
                        // </TouchableOpacity>

                        <TouchableOpacity
                          key={item.id}
                          onPress={() => setActiveScreen(item.screen)} // ✅ works for all screens
                          className="mx-1 mb-3 flex-1 items-center rounded-xl border border-gray-400 p-2">
                          <Icon size={28} color="#2563EB" />
                          <Text className="mt-2 text-center text-sm font-medium">{item.label}</Text>
                        </TouchableOpacity>
                      );
                    })}
                  </View> */}

                  {/*  New Actions Section */}

                  <View className="flex-row flex-wrap">
                    {actionsData.map((item) => {
                      const Icon = item.icon;

                      return (
                        <TouchableOpacity
                          key={item.id}
                          onPress={() => {
                            switch (item.screen) {
                              case 'newpatient':
                                navigation.navigate('NewPatient');
                                break;
                              case 'prescription':
                                navigation.navigate('Prescription');
                                break;
                              case 'appointments':
                                navigation.navigate('Appointments');
                                break;
                              case 'followup':
                                navigation.navigate('FollowUp');
                                break;
                              case 'notifications':
                                navigation.navigate('Notifications');
                                break;
                            }
                          }}
                          className="mx-1 mb-3 flex-1 items-center rounded-xl border border-gray-400 p-2">
                          <Icon size={28} color="#2563EB" />
                          <Text className="mt-2 text-center text-sm font-medium">{item.label}</Text>
                        </TouchableOpacity>
                      );
                    })}
                  </View>

                  {/* Appointments Section */}
                  <View className="mt-4 rounded-2xl bg-white p-4 shadow-sm">
                    <Text className="mb-4 text-xl font-bold text-gray-900">
                      Upcoming Appointments
                    </Text>
                    {appointments.map((item) => (
                      <View
                        key={item.id}
                        className="mb-3 flex-row items-center justify-between rounded-xl border border-gray-200 bg-gray-50 p-3">
                        <View className="flex-1">
                          <Text className="text-base font-semibold text-gray-900">{item.name}</Text>
                          <Text className="mt-1 text-sm text-gray-500">{item.issue}</Text>
                        </View>
                        <View className="items-end">
                          <Text className="text-base font-semibold text-blue-600">{item.time}</Text>
                          <Text className="mt-1 text-sm text-gray-500">{item.type}</Text>
                          <View
                            className={`mt-1 rounded-full px-2 py-[2px] ${getStatusStyle(item.status)}`}>
                            <Text className="text-xs font-semibold">{item.status}</Text>
                          </View>
                        </View>
                      </View>
                    ))}
                  </View>
                </View>
              </View>
            </View>
          ) : (
            // ===== Only Action Card Page =====
            <View className="flex-1">
              {/* Elegant Header with Back Button */}
              {/* <LinearGradient
              colors={['rgba(162, 236, 255, 0.89)', '#FFFFFF']}
              locations={[0, 1]}
              start={{ x: 0.5, y: 0 }}
              end={{ x: 0.5, y: 1 }}
              style={{ flex: 1 }}
            /> */}

              <View className="flex-row items-center px-4 pb-6 pt-4">
                <TouchableOpacity
                  onPress={() => setActiveScreen('home')}
                  className="rounded-full bg-white/80 p-3 shadow-md active:opacity-70"
                  style={{ elevation: 4 }}>
                  <ChevronLeft size={28} color="#1e293b" strokeWidth={2.5} />
                </TouchableOpacity>

                {/* <Text className="ml-4 text-3xl font-bold text-indigo-900">
                  {activeScreen === 'newpatient' && 'New Patient'}
                  {activeScreen === 'followup' && 'Add Follow Up'}
                  {activeScreen === 'notifications' && 'Notifications'}
                </Text> */}
              </View>

              {/* Main Content with padding */}
              {/* <View className="flex-1 px-4 pb-6">
                {activeScreen === 'newpatient' && <NewPatients />}
                {activeScreen === 'followup' && <FollowUpHome />}
                {activeScreen === 'notifications' && <Notifications />}
                {activeScreen === 'prescription' && <CreatePrescription />}
                {activeScreen === 'appointments' && <Appointments />}
              </View> */}
            </View>
          )}
        </SafeAreaView>
      </ScrollView>
    </LinearGradient>
  );
}
