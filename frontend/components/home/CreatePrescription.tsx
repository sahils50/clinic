import HeroButton from 'components/common/buttons/HeroButton';
import React from 'react';
import { View, Text, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const CreatePrescription: React.FC = () => {
  return (
    <SafeAreaView className="flex-1 p-2 ">
      <Text className="mt-4 text-center text-3xl font-bold text-indigo-900">
        Create Prescription
      </Text>

      <View className="mt-6 flex-1 rounded-tl-[9%] rounded-tr-[9%] p-2">
        {/* Medicines */}
        <Text className="mb-2 text-lg font-semibold text-gray-800">Medicines</Text>

        {/* Medicine Name */}
        <TextInput
          placeholder="Enter medicine name"
          className="mb-4 w-full rounded-xl border border-gray-300 bg-white px-4 py-3 shadow-sm"
        />

        {/* Dosage & Frequency */}
        <View className="mb-4 flex-row gap-3 ">
          <TextInput
            placeholder="Dosage (e.g. 1-0-1)"
            className="flex-1 rounded-xl border border-gray-300 bg-white  py-3 shadow-sm placeholder:p-2"
          />
          <TextInput
            placeholder="Frequency"
            className="flex-1 rounded-xl border border-gray-300 bg-white  py-3 shadow-sm placeholder:p-2"
          />
        </View>

        {/* Duration & Add Medicine */}
        <View className="mb-6 flex-row gap-2">
          <TextInput
            placeholder="e.g. 5 days"
            className="flex-1 rounded-xl border border-gray-300 bg-white  py-3 shadow-sm placeholder:p-2"
          />
          <TextInput
            placeholder="+ Add Medicine"
            editable={false}
            className="flex-1 rounded-xl border border-dashed border-indigo-400 bg-indigo-50  py-3 text-indigo-700 placeholder:p-2"
          />
        </View>

        {/* Advice */}
        <Text className="mb-2 text-lg font-semibold text-gray-800">Advice</Text>
        <TextInput
          placeholder="Enter any advice for the patient"
          multiline
          className="mb-4 w-full rounded-xl border border-gray-300 bg-white px-4 py-3 shadow-sm"
        />

        {/* Test */}
        <Text className="mb-2 text-lg font-semibold text-gray-800">Test</Text>
        <TextInput
          placeholder="Add test"
          className="mb-4 w-full rounded-xl border border-gray-300 bg-white px-4 py-3 shadow-sm"
        />

        {/* Follow Up */}
        <Text className="mb-2 text-lg font-semibold text-gray-800">Follow Up</Text>
        <TextInput
          placeholder="Select follow up date"
          className="mb-6 w-full rounded-xl border border-gray-300 bg-white px-4 py-3 shadow-sm"
        />

        {/* Button */}
        <View className="mt-4 items-center">
          <HeroButton title="Preview Prescription" onPress={() => {}} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default CreatePrescription;
