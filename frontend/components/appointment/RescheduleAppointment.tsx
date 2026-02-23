import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Platform } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Calendar } from 'lucide-react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import HeroButton from 'components/common/buttons/HeroButton';

export default function RescheduleAppointment() {
  // Mock existing appointment data
  const patientName = 'Jane Smith';
  const visitType = 'General Consultation';
  const originalDate = '08 Apr 2024';
  const originalTime = '9:00 AM';

  const [newDate, setNewDate] = useState(new Date(2025, 3, 2)); // April 2, 2025
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [reason, setReason] = useState('');
  const [loading, setLoading] = useState(false);

  const onDateChange = (_event: any, selectedDate?: Date) => {
    setShowDatePicker(Platform.OS === 'ios');
    if (selectedDate) setNewDate(selectedDate);
  };

  const handleSaveChanges = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      console.log('Appointment rescheduled!');
    }, 2000);
  };

  const formatDate = (d: Date) => {
    return d.toLocaleDateString('en-US', {
      day: 'numeric',
      month: 'numeric',
      year: 'numeric',
    });
  };

  return (
    <LinearGradient
      colors={['rgba(162, 236, 255, 0.89)', '#FFFFFF']}
      locations={[0.03, 0.55]}
      start={{ x: 0.5, y: 0 }}
      end={{ x: 0.5, y: 1 }}
      className="flex-1 px-6 pt-8">
      <Text className="mb-8 text-center text-2xl font-bold text-gray-800">
        Appointment Reschedule
      </Text>

      {/* White content card with side padding to show gradient */}
      <View className="flex-1 rounded-3xl bg-white px-6 py-6 shadow-xl">
        {/* Existing Appointment Info */}
        <View className="mb-8 rounded-2xl bg-gray-50 p-5">
          <Text className="text-xl font-bold text-gray-800">{patientName}</Text>
          <Text className="mt-1 text-base text-gray-600">{visitType}</Text>
          <Text className="mt-2 text-base font-medium text-gray-700">
            {originalDate} • {originalTime}
          </Text>
        </View>

        {/* New Date */}
        <View className="mb-6">
          <Text className="mb-2 text-lg font-semibold text-gray-700">New Date</Text>
          <TouchableOpacity
            onPress={() => setShowDatePicker(true)}
            className="flex-row items-center justify-between rounded-2xl bg-gray-100 px-4 py-4">
            <Text className="text-base text-gray-800">{formatDate(newDate)}</Text>
            <Calendar size={24} color="#374151" />
          </TouchableOpacity>

          {showDatePicker && (
            <DateTimePicker value={newDate} mode="date" display="default" onChange={onDateChange} />
          )}
        </View>

        {/* New Time */}
        <View className="mb-6">
          <Text className="mb-2 text-lg font-semibold text-gray-700">New Time</Text>
          <View className="rounded-2xl bg-gray-100 px-4 py-4">
            <Text className="text-base text-gray-800">11:00 AM</Text>
            {/* Note: For a fully functional time picker, you can replace this with a Picker or DateTimePicker mode="time" */}
          </View>
        </View>

        {/* Reason */}
        <View className="mb-8">
          <Text className="mb-2 text-lg font-semibold text-gray-700">Reason</Text>
          <TextInput
            className="rounded-2xl bg-gray-100 px-4 py-4 text-base"
            placeholder="Enter Reason"
            multiline
            numberOfLines={4}
            textAlignVertical="top"
            value={reason}
            onChangeText={setReason}
          />
        </View>

        {/* Save Changes Button */}
        <View className="items-center">
          <HeroButton
            title="Save Changes"
            onPress={handleSaveChanges}
            loading={loading}
            disabled={loading}
            className="w-full rounded-full"
            height={56}
          />
        </View>
      </View>
    </LinearGradient>
  );
}
