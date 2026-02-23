import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Platform } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Search, Calendar, ChevronDown } from 'lucide-react-native';
import { Picker } from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import HeroButton from 'components/common/buttons/HeroButton';

const visitTypes = ['New', 'Follow-up', 'Consultation', 'Check-up', 'Emergency'];

export default function NewAppointment() {
  const [patientSearch, setPatientSearch] = useState('John Doe');
  const [date, setDate] = useState(new Date(2025, 11, 4)); // Dec 4, 2025
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [visitType, setVisitType] = useState('New');
  const [reason, setReason] = useState('');
  const [loading, setLoading] = useState(false);

  const onDateChange = (_event: any, selectedDate?: Date) => {
    setShowDatePicker(Platform.OS === 'ios');
    if (selectedDate) setDate(selectedDate);
  };

  const handleBookAppointment = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      console.log('Appointment booked!');
    }, 2000);
  };

  const formatDate = (d: Date) => {
    return d.toLocaleDateString('en-US', {
      month: 'numeric',
      day: 'numeric',
      year: 'numeric',
    });
  };

  return (
    <LinearGradient
      colors={['rgba(162, 236, 255, 0.89)', '#FFFFFF']}
      locations={[0.03, 0.55]}
      start={{ x: 0.5, y: 0 }}
      end={{ x: 0.5, y: 1 }}
      className="flex-1 px-4 pt-8" // Horizontal padding + top padding for title
    >
      <Text className="mb-8 text-center text-2xl font-bold text-gray-800">New Appointment</Text>

      {/* White content card with side padding to reveal gradient */}
      <View className="flex-1 rounded-3xl bg-white px-6 py-6 shadow-xl">
        {/* Select Patient */}
        <View className="mb-6">
          <Text className="mb-2 text-lg font-semibold text-gray-700">Select Patient</Text>
          <View className="relative">
            <Search size={20} color="#9ca3af" className="absolute left-4 top-4 z-10" />
            <TextInput
              className="rounded-2xl bg-gray-100 py-4 pl-12 pr-4 text-base"
              placeholder="Search patient..."
              value={patientSearch}
              onChangeText={setPatientSearch}
            />
          </View>
        </View>

        {/* Select Date */}
        <View className="mb-6">
          <Text className="mb-2 text-lg font-semibold text-gray-700">Select Date</Text>
          <TouchableOpacity
            onPress={() => setShowDatePicker(true)}
            className="flex-row items-center justify-between rounded-2xl bg-gray-100 px-4 py-4">
            <Text className="text-base text-gray-800">{formatDate(date)}</Text>
            <Calendar size={24} color="#374151" />
          </TouchableOpacity>

          {showDatePicker && (
            <DateTimePicker value={date} mode="date" display="default" onChange={onDateChange} />
          )}
        </View>

        {/* Select Time */}
        <View className="mb-6">
          <Text className="mb-2 text-lg font-semibold text-gray-700">Select Time</Text>
          <View className="relative overflow-hidden rounded-2xl bg-gray-100">
            <Picker
              selectedValue={date.toTimeString().slice(0, 5)}
              onValueChange={(itemValue) => {
                const [hours, minutes] = (itemValue as string).split(':').map(Number);
                const newDate = new Date(date);
                newDate.setHours(hours);
                newDate.setMinutes(minutes);
                setDate(newDate);
              }}
              dropdownIconColor="#374151">
              <Picker.Item label="9:00 AM" value="09:00" />
              <Picker.Item label="9:30 AM" value="09:30" />
              <Picker.Item label="10:00 AM" value="10:00" />
              <Picker.Item label="10:30 AM" value="10:30" />
              <Picker.Item label="11:00 AM" value="11:00" />
              <Picker.Item label="11:30 AM" value="11:30" />
              <Picker.Item label="12:00 PM" value="12:00" />
              <Picker.Item label="12:30 PM" value="12:30" />
              <Picker.Item label="1:00 PM" value="13:00" />
            </Picker>
            <View className="pointer-events-none absolute right-4 top-4">
              <ChevronDown size={24} color="#374151" />
            </View>
          </View>
        </View>

        {/* Visit Type */}
        <View className="mb-6">
          <Text className="mb-2 text-lg font-semibold text-gray-700">Visit Type</Text>
          <View className="relative overflow-hidden rounded-2xl bg-gray-100">
            <Picker
              selectedValue={visitType}
              onValueChange={(itemValue) => setVisitType(itemValue as string)}
              dropdownIconColor="#374151">
              {visitTypes.map((type) => (
                <Picker.Item key={type} label={type} value={type} />
              ))}
            </Picker>
            <View className="pointer-events-none absolute right-4 top-4">
              <ChevronDown size={24} color="#374151" />
            </View>
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

        {/* Book Appointment Button */}
        <View className="items-center">
          <HeroButton
            title="Book Appointment"
            onPress={handleBookAppointment}
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
