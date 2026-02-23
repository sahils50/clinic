import React, { useState } from 'react';
import { View, Text, TextInput, Pressable, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { SafeAreaView } from 'react-native-safe-area-context';

type Gender = 'Male' | 'Female' | 'Other';

export default function ProfileSetup(): JSX.Element {
  const [fullName, setFullName] = useState('');
  const [gender, setGender] = useState<Gender | null>(null);
  const [specialization, setSpecialization] = useState('Dentist');
  const [clinicName, setClinicName] = useState('');
  const [experience, setExperience] = useState('');
  const [registrationNumber, setRegistrationNumber] = useState('');

  const genderOptions: Gender[] = ['Male', 'Female', 'Other'];
  const specializationOptions: string[] = ['Dentist', 'Cardiologist', 'Orthopedic'];

  return (
    <SafeAreaView className="flex-1 bg-gray-100">
      {/* ScrollView should have flexGrow to allow scrolling */}
      <ScrollView
        contentContainerStyle={{ padding: 20, flexGrow: 1 }}
        showsVerticalScrollIndicator={false}>
        <View className="mb-6 items-center">
          <Text className="mb-4 text-2xl font-bold">Set Up Your Profile</Text>

          <Pressable className="h-24 w-24 items-center justify-center rounded-full bg-gray-200">
            <Text className="text-blue-600">Upload Photo</Text>
          </Pressable>
        </View>

        {/* Full Name */}
        <Text className="mb-1 text-lg font-semibold">Full Name</Text>
        <TextInput
          value={fullName}
          onChangeText={setFullName}
          placeholder="Enter your full name"
          className="mb-4 w-full rounded-md border border-gray-300 bg-white px-4 py-3 shadow-sm"
        />

        {/* Gender */}
        <Text className="mb-2 text-lg font-semibold">Gender</Text>
        <View className="mb-4 flex-row gap-2">
          {genderOptions.map((option) => (
            <Pressable
              key={option}
              onPress={() => setGender(option)}
              className={`flex-1 items-center rounded-md border py-2 ${
                gender === option ? 'border-blue-500 bg-blue-100' : 'border-gray-300 bg-white'
              }`}>
              <Text
                className={`font-medium ${gender === option ? 'text-blue-700' : 'text-gray-700'}`}>
                {option}
              </Text>
            </Pressable>
          ))}
        </View>

        {/* Specialization */}
        <Text className="mb-1 text-lg font-semibold">Specialization</Text>
        <View className="mb-4 w-full rounded-md border border-gray-300 bg-white">
          <Picker
            selectedValue={specialization}
            onValueChange={(itemValue) => setSpecialization(itemValue)}>
            {specializationOptions.map((option) => (
              <Picker.Item key={option} label={option} value={option} />
            ))}
          </Picker>
        </View>

        {/* Clinic/Hospital Name */}
        <Text className="mb-1 text-lg font-semibold">Clinic/Hospital Name</Text>
        <TextInput
          value={clinicName}
          onChangeText={setClinicName}
          placeholder="Enter clinic/hospital name"
          className="mb-4 w-full rounded-md border border-gray-300 bg-white px-4 py-3 shadow-sm"
        />

        {/* Experience */}
        <Text className="mb-1 text-lg font-semibold">Experience</Text>
        <TextInput
          value={experience}
          onChangeText={setExperience}
          placeholder="e.g., 15 years"
          className="mb-4 w-full rounded-md border border-gray-300 bg-white px-4 py-3 shadow-sm"
        />

        {/* Registration Number */}
        <Text className="mb-1 text-lg font-semibold">Medical Registration Number</Text>
        <TextInput
          value={registrationNumber}
          onChangeText={setRegistrationNumber}
          placeholder="Enter registration number"
          className="mb-6 w-full rounded-md border border-gray-300 bg-white px-4 py-3 shadow-sm"
        />

        {/* Submit Button */}
        <Pressable
          className="items-center rounded-md bg-blue-600 py-3"
          onPress={() => console.log('Profile Saved')}>
          <Text className="text-lg font-bold text-white">Save Profile</Text>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
}
