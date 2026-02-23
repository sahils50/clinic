import React from 'react';
import { View, Text, TouchableOpacity, Switch } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import {
  Settings,
  Bell,
  Shield,
  ChevronLeft,
  LogOut,
  Moon,
  CloudDownload,
  AlertTriangle,
  Calendar,
  FileText,
  BellRing,
  Check,
} from 'lucide-react-native';

const SettingsScreen = ({ navigation }: { navigation?: any }) => {
  const insets = useSafeAreaInsets();

  // State for toggles
  const [darkMode, setDarkMode] = React.useState(false);
  const [autoSync, setAutoSync] = React.useState(true);
  const [lowStockAlerts, setLowStockAlerts] = React.useState(true);

  // Notification toggles (using boolean state for consistency)
  const [appointmentAlerts, setAppointmentAlerts] = React.useState(true);
  const [billingUpdates, setBillingUpdates] = React.useState(true);
  const [followUpReminders, setFollowUpReminders] = React.useState(true);

  return (
    <View className="flex-1 bg-white">
      {/* Header */}
      <View
        style={{ paddingTop: insets.top }}
        className="flex-row items-center border-b border-gray-200 px-4 py-4">
        <TouchableOpacity onPress={() => navigation?.goBack()}>
          <ChevronLeft size={28} color="#000" />
        </TouchableOpacity>
        <Text className="ml-4 text-2xl font-semibold">Settings</Text>
      </View>

      <View className="px-4 py-6">
        <Text className="mb-6 text-base text-gray-600">Manage your app preferences & alerts.</Text>

        {/* App Preferences Section */}
        <View className="mb-4 rounded-2xl border border-gray-100 bg-white shadow-sm">
          <View className="flex-row items-center px-5 py-4">
            <Settings size={24} color="#3B82F6" />
            <Text className="ml-3 text-lg font-medium">App Preferences</Text>
          </View>

          <View className="border-t border-gray-100">
            <View className="flex-row items-center justify-between px-5 py-4">
              <View className="flex-row items-center">
                <Moon size={20} color="#6B7280" />
                <Text className="ml-3 text-base">Dark Mode</Text>
              </View>
              <Switch
                value={darkMode}
                onValueChange={setDarkMode}
                trackColor={{ false: '#E5E7EB', true: '#3B82F6' }}
                thumbColor={darkMode ? '#FFFFFF' : '#F3F4F6'}
              />
            </View>

            <View className="flex-row items-center justify-between px-5 py-4">
              <View className="flex-row items-center">
                <CloudDownload size={20} color="#6B7280" />
                <Text className="ml-3 text-base">Auto Sync Data</Text>
              </View>
              <Switch
                value={autoSync}
                onValueChange={setAutoSync}
                trackColor={{ false: '#E5E7EB', true: '#3B82F6' }}
                thumbColor={autoSync ? '#FFFFFF' : '#F3F4F6'}
              />
            </View>

            <View className="flex-row items-center justify-between px-5 py-4">
              <View className="flex-row items-center">
                <AlertTriangle size={20} color="#6B7280" />
                <Text className="ml-3 text-base">Low Stock Alerts</Text>
              </View>
              <Switch
                value={lowStockAlerts}
                onValueChange={setLowStockAlerts}
                trackColor={{ false: '#E5E7EB', true: '#3B82F6' }}
                thumbColor={lowStockAlerts ? '#FFFFFF' : '#F3F4F6'}
              />
            </View>
          </View>
        </View>

        {/* Notification Settings Section - Now consistent with switches */}
        <View className="mb-4 rounded-2xl border border-gray-100 bg-white shadow-sm">
          <View className="flex-row items-center px-5 py-4">
            <Bell size={24} color="#3B82F6" />
            <Text className="ml-3 text-lg font-medium">Notification Settings</Text>
          </View>

          <View className="border-t border-gray-100">
            <View className="flex-row items-center justify-between px-5 py-4">
              <View className="flex-row items-center">
                <Calendar size={20} color="#6B7280" />
                <Text className="ml-3 text-base">Appointment Alerts</Text>
              </View>
              <View className="h-6 w-6 items-center justify-center">
                {appointmentAlerts && <Check size={20} color="#3B82F6" strokeWidth={3} />}
              </View>
            </View>

            <View className="flex-row items-center justify-between px-5 py-4">
              <View className="flex-row items-center">
                <FileText size={20} color="#6B7280" />
                <Text className="ml-3 text-base">Billing Updates</Text>
              </View>
              <View className="h-6 w-6 items-center justify-center">
                {billingUpdates && <Check size={20} color="#3B82F6" strokeWidth={3} />}
              </View>
            </View>

            <View className="flex-row items-center justify-between px-5 py-4">
              <View className="flex-row items-center">
                <BellRing size={20} color="#6B7280" />
                <Text className="ml-3 text-base">Follow-up Reminders</Text>
              </View>
              <View className="h-6 w-6 items-center justify-center">
                {followUpReminders && <Check size={20} color="#3B82F6" strokeWidth={3} />}
              </View>
            </View>
          </View>
        </View>

        {/* Security Section */}
        <View className="rounded-2xl border border-gray-100 bg-white shadow-sm">
          <View className="flex-row items-center px-5 py-4">
            <Shield size={24} color="#3B82F6" />
            <Text className="ml-3 text-lg font-medium">Security</Text>
          </View>

          <View className="border-t border-gray-100">
            <TouchableOpacity className="px-5 py-4">
              <Text className="text-base">Change Password</Text>
            </TouchableOpacity>

            <TouchableOpacity className="flex-row items-center justify-between border-t border-gray-100 px-5 py-5">
              <Text className="text-base text-red-600">Logout</Text>
              <LogOut size={20} color="#DC2626" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default SettingsScreen;
