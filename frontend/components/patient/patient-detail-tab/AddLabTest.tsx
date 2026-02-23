import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, ScrollView, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { ChevronLeft, ChevronDown } from 'lucide-react-native';

const SimpleDropdown = ({ label, value, onValueChange, options }: any) => {
  const [open, setOpen] = useState(false);

  return (
    <View className="mb-4">
      <Text className="mb-2 font-medium text-gray-700">{label}</Text>
      <TouchableOpacity
        onPress={() => setOpen(!open)}
        className="flex-row items-center justify-between rounded-lg border border-gray-200 bg-white px-4 py-4 shadow-sm">
        <Text className="text-gray-800">{value || 'Select test'}</Text>
        <ChevronDown size={20} color="#666" />
      </TouchableOpacity>
      {open && (
        <View className="absolute z-10 mt-1 w-full rounded-lg border border-gray-200 bg-white shadow-lg">
          {options.map((opt: any) => (
            <TouchableOpacity
              key={opt.value}
              onPress={() => {
                onValueChange(opt.label);
                setOpen(false);
              }}
              className="border-b border-gray-100 px-4 py-3">
              <Text>{opt.label}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );
};

const AddLabTest = () => {
  const [tests, setTests] = useState([
    { test: 'Blood Test', price: '300' },
    { test: 'Blood Test', price: '300' },
  ]);

  const addTest = () => {
    setTests([...tests, { test: 'Blood Test', price: '300' }]);
  };

  return (
    <LinearGradient
      colors={['rgba(162, 236, 255, 0.89)', '#FFFFFF']}
      locations={[0.03, 0.55]}
      start={{ x: 0.5, y: 0 }}
      end={{ x: 0.5, y: 1 }}
      className="flex-1">
      <ScrollView className="flex-1 px-4 pt-8">
        {/* Header with back arrow and title */}
        <View className="mb-6 flex-row items-center">
          <TouchableOpacity className="mr-4">
            <ChevronLeft size={28} color="#000" />
          </TouchableOpacity>
          <Text className="text-2xl font-bold text-gray-800">Add Lab Test</Text>
        </View>

        {/* Patient Card */}
        <View className="mb-6 flex-row items-center rounded-2xl bg-white p-4 shadow-md">
          <View className="mr-4 h-16 w-16 overflow-hidden rounded-full bg-gray-300">
            <Image
              source={{ uri: 'https://via.placeholder.com/64' }} // Replace with actual avatar if available
              className="h-full w-full"
            />
          </View>
          <View>
            <Text className="text-lg font-semibold text-gray-800">Jane Smith</Text>
            <Text className="text-gray-600">25 years . Female</Text>
            <Text className="text-gray-600">+91784889375</Text>
          </View>
        </View>

        {/* Test Sections */}
        {tests.map((item, index) => (
          <View key={index} className="mb-6">
            <Text className="mb-3 text-lg font-semibold text-gray-800">Test</Text>
            <View className="rounded-2xl bg-white p-4 shadow-md">
              <SimpleDropdown
                label=""
                value={item.test}
                onValueChange={(val: string) => {
                  const newTests = [...tests];
                  newTests[index].test = val;
                  setTests(newTests);
                }}
                options={[
                  { label: 'Blood Test', value: 'blood' },
                  { label: 'Urine Test', value: 'urine' },
                  { label: 'X-Ray', value: 'xray' },
                  // Add more options as needed
                ]}
              />
              <Text className="mb-2 mt-4 font-medium text-gray-700">Price</Text>
              <View className="flex-row items-center rounded-lg border border-gray-200 bg-white px-4 py-3">
                <Text className="mr-1 text-2xl text-gray-700">₹</Text>
                <TextInput
                  className="flex-1 text-lg text-gray-800"
                  value={item.price}
                  keyboardType="numeric"
                  onChangeText={(text) => {
                    const newTests = [...tests];
                    newTests[index].price = text;
                    setTests(newTests);
                  }}
                />
              </View>
            </View>
          </View>
        ))}

        {/* Add Test Button */}
        <TouchableOpacity
          onPress={addTest}
          className="mb-8 flex-row items-center justify-center rounded-2xl bg-white py-4 shadow-md">
          <Text className="mr-2 text-lg font-semibold text-blue-600">+</Text>
          <Text className="text-lg font-semibold text-blue-600">Add Test</Text>
        </TouchableOpacity>

        {/* Final Add Test Button at bottom */}
        <TouchableOpacity className="mb-8 rounded-full bg-blue-600 py-4">
          <Text className="text-center text-lg font-semibold text-white">Add Test</Text>
        </TouchableOpacity>
      </ScrollView>
    </LinearGradient>
  );
};

export default AddLabTest;
