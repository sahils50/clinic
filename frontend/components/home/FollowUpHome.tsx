import React, { useState } from 'react';
import { View, Text, TextInput, ScrollView, TouchableOpacity, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import HeroButton from 'components/common/buttons/HeroButton';

const FollowUp: React.FC = () => {
  // State for inputs
  const [patient, setPatient] = useState<string>('');
  const [followUpDate, setFollowUpDate] = useState<string>('');
  const [reason, setReason] = useState<string>('');

  const handleSave = () => {
    // Example: simple alert on save
    Alert.alert('Follow Up Saved', `Patient: ${patient}\nDate: ${followUpDate}\nReason: ${reason}`);
  };

  return (
    <SafeAreaView className="flex-1 p-5">
      <Text className=" text-center text-3xl font-bold text-indigo-900">Follow-Up</Text>

      <View className="mt-[5%] rounded-tl-[9%] rounded-tr-[9%] bg-white p-6  ">
        {/* Patient Name */}
        <Text className="mb-2 text-lg font-semibold text-gray-800">Patient Name</Text>
        <TextInput
          placeholder="Enter patient name"
          value={patient}
          onChangeText={setPatient}
          className="mb-4 w-full rounded-xl border border-gray-300 bg-white px-4 py-3 shadow-sm"
        />

        {/* Follow Up Date */}
        <Text className="mb-2 text-lg font-semibold text-gray-800">Follow Up Date</Text>
        <TextInput
          placeholder="DD/MM/YYYY"
          value={followUpDate}
          onChangeText={setFollowUpDate}
          className="mb-4 w-full rounded-xl border border-gray-300 bg-white px-4 py-3 shadow-sm"
        />

        {/* Reason */}
        <Text className="mb-2 text-lg font-semibold text-gray-800">Reason</Text>
        <TextInput
          placeholder="Enter reason for follow up"
          value={reason}
          onChangeText={setReason}
          className="mb-6 w-full rounded-xl border border-gray-300 bg-white px-4 py-3 shadow-sm"
          multiline
        />

        {/* Save Button */}
        <View className="mx-auto">
          <HeroButton title="Verify" onPress={() => {}} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default FollowUp;
