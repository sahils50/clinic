import React, { useState } from 'react';
import { View, Text, TextInput, Pressable, ScrollView, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export const NewPatients: React.FC<{ onBack?: () => void }> = ({ onBack }) => {
  const [fullName, setFullName] = useState<string>('');
  const [age, setAge] = useState<string>('');
  const [gender, setGender] = useState<string>('');
  const [showGenderDropdown, setShowGenderDropdown] = useState<boolean>(false);
  const [phone, setPhone] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [bloodGroup, setBloodGroup] = useState<string>('');
  const [allergies, setAllergies] = useState<string>('');

  const handleSubmit = () => {
    if (!fullName || !age || !gender || !phone) {
      Alert.alert('Error', 'Please fill all required fields');
      return;
    }

    const newPatient = { fullName, age, gender, phone, email, bloodGroup, allergies };
    console.log('New Patient:', newPatient);
    Alert.alert('Success', 'Patient added successfully!');
    // Clear form
    setFullName('');
    setAge('');
    setGender('');
    setPhone('');
    setEmail('');
    setBloodGroup('');
    setAllergies('');
  };

  return (
    <SafeAreaView className="flex-1 ">
      <ScrollView className="p-3">
        <Text className=" text-center text-3xl font-bold text-indigo-900">New Patient</Text>
        <View className="mt-[5%] rounded-tl-[30px] rounded-tr-[30px] bg-white p-4  ">
          {/* Full Name */}
          <Text className="mb-1 mt-4 text-lg font-semibold">Full Name </Text>
          <TextInput
            value={fullName}
            onChangeText={setFullName}
            placeholder="Enter full name"
            className="mb-4 w-full rounded-md border border-gray-300 bg-white px-4 py-4 shadow-sm"
          />

          {/* Age & Gender Side by Side */}
          <View className="mb-4 flex-row gap-4 space-x-4">
            {/* Age */}
            <View className="flex-1">
              <Text className="mb-1 text-lg font-semibold">Age </Text>
              <TextInput
                value={age}
                onChangeText={setAge}
                placeholder="Enter age"
                keyboardType="numeric"
                className="w-full rounded-md border border-gray-300 bg-white px-4 py-4 shadow-sm"
              />
            </View>

            {/* Gender Dropdown */}
            <View className="flex-1">
              <Text className="mb-1 text-lg font-semibold">Gender </Text>
              <Pressable
                onPress={() => setShowGenderDropdown(!showGenderDropdown)}
                className="w-full rounded-md border border-gray-300 bg-white px-4 py-4 shadow-sm">
                <Text className={`${gender ? 'text-black' : 'text-gray-400'}`}>
                  {gender || 'Select gender'}
                </Text>
              </Pressable>
              {showGenderDropdown && (
                <View className="absolute z-10 mt-14 w-full rounded-md border border-gray-300 bg-white shadow-md">
                  {['Male', 'Female', 'Other'].map((option) => (
                    <Pressable
                      key={option}
                      onPress={() => {
                        setGender(option);
                        setShowGenderDropdown(false);
                      }}
                      className="px-4 py-2">
                      <Text className="text-black">{option}</Text>
                    </Pressable>
                  ))}
                </View>
              )}
            </View>
          </View>

          {/* Phone */}
          <Text className="mb-1 text-lg font-semibold">Phone No </Text>
          <TextInput
            value={phone}
            onChangeText={setPhone}
            placeholder="Enter phone number"
            keyboardType="phone-pad"
            className="mb-4 w-full rounded-md border border-gray-300 bg-white px-4 py-4 shadow-sm"
          />

          {/* Email */}
          <Text className="mb-1 text-lg font-semibold">Email</Text>
          <TextInput
            value={email}
            onChangeText={setEmail}
            placeholder="Enter email"
            keyboardType="email-address"
            className="mb-4 w-full rounded-md border border-gray-300 bg-white px-4 py-4 shadow-sm"
          />

          {/* Blood Group */}
          <Text className="mb-1 text-lg font-semibold">Blood Group</Text>
          <TextInput
            value={bloodGroup}
            onChangeText={setBloodGroup}
            placeholder="Enter blood group (e.g., A+)"
            className="mb-4 w-full rounded-md border border-gray-300 bg-white px-4 py-4 shadow-sm"
          />

          {/* Allergies */}
          <Text className="mb-1 text-lg font-semibold">Allergies</Text>
          <TextInput
            value={allergies}
            onChangeText={setAllergies}
            placeholder="Enter allergies"
            className="mb-6 w-full rounded-md border border-gray-300 bg-white px-4 py-4 shadow-sm"
          />

          {/* Submit Button */}

          <Pressable
            onPress={handleSubmit}
            className="mb-6 items-center rounded-lg bg-indigo-600 py-3 shadow-md">
            <Text className="text-lg font-semibold text-white">Save Patient</Text>
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
