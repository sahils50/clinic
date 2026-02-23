// VisitCompletedScreen.tsx
import React from 'react';
import { View, Text, TouchableOpacity, SafeAreaView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { ChevronLeft } from 'lucide-react-native';
import HeroButton from 'components/common/buttons/HeroButton';
const VisitCompletedScreen: React.FC = () => {
  const handleGenerateBill = () => {
    console.log('Generate Bill pressed');
  };

  return (
    <LinearGradient
      colors={['rgba(162, 236, 255, 0.89)', '#FFFFFF']}
      locations={[0.03, 0.55]}
      start={{ x: 0.5, y: 0 }}
      end={{ x: 0.5, y: 1 }}
      style={{ flex: 1 }}>
      <SafeAreaView className="flex-1">
        {/* Back Button */}
        <TouchableOpacity className="ml-4 mt-4">
          <ChevronLeft color="#000" size={28} />
        </TouchableOpacity>

        {/* Title */}
        <Text className="mt-8 text-center text-2xl font-bold text-blue-900">
          Visit Completed{'\n'}Successfully
        </Text>

        {/* Patient Card - Horizontal Layout */}
        <View className="mx-6 mt-10 flex-row items-center rounded-2xl bg-white p-6 shadow-lg">
          {/* Profile Picture */}
          <View className="mr-6 h-24 w-24 items-center justify-center rounded-full bg-gray-300">
            <Text className="text-3xl font-bold text-gray-600">JS</Text>
          </View>

          {/* Patient Info */}
          <View className="flex-1">
            <Text className="text-xl font-semibold text-gray-900">Jane Smith</Text>
            <Text className="mt-1 text-base text-gray-600">25 years • Female</Text>
            <Text className="mt-2 text-base text-gray-600">+9174893375</Text>
          </View>
        </View>

        {/* Summary Section */}
        <View className="mx-6 mt-8 flex-1">
          <Text className="mb-6 text-xl font-bold">Summary</Text>

          <View className="mb-4 flex-row justify-between">
            <Text className="text-gray-700">Visit Type</Text>
            <Text className="font-medium text-blue-600">New</Text>
          </View>

          <View className="mb-4 flex-row justify-between">
            <Text className="text-gray-700">Diagnosis</Text>
            <Text className="font-medium text-orange-600">Fever</Text>
          </View>

          <View className="mb-4 flex-row justify-between">
            <Text className="text-gray-700">Medicines</Text>
            <Text className="font-medium">3</Text>
          </View>

          <View className="mb-4 flex-row justify-between">
            <Text className="text-gray-700">Tests</Text>
            <Text className="font-medium">Blood Test</Text>
          </View>

          <View className="mb-8 flex-row justify-between">
            <Text className="text-gray-700">Follow-up</Text>
            <Text className="font-medium">13 Apr 2024</Text>
          </View>

          {/* Generate Bill Button */}
          <View className="mt-4 items-center">
            <HeroButton
              title="Generate Bill"
              onPress={handleGenerateBill}
              className="w-full max-w-md rounded-full"
              width={undefined}
              height={56}
            />
          </View>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default VisitCompletedScreen;
