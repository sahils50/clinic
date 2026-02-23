import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { ArrowLeft } from 'lucide-react-native';
import HeroButton from 'components/common/buttons/HeroButton';

export default function ViewReportScreen() {
  return (
    <LinearGradient
      colors={['rgba(162, 236, 255, 0.89)', '#FFFFFF']}
      locations={[0.03, 0.55]}
      start={{ x: 0.5, y: 0 }}
      end={{ x: 0.5, y: 1 }}
      style={{ flex: 1 }}>
      <ScrollView className="flex-1 px-5 pt-12">
        {/* Back Button */}
        <TouchableOpacity className="mb-6">
          <ArrowLeft size={28} />
        </TouchableOpacity>

        {/* Title */}
        <Text className="mb-6 text-center text-2xl font-bold">CBC Report</Text>

        {/* Patient Info Card */}
        <View className="mb-8 rounded-2xl bg-white p-5 shadow-md">
          <Text className="text-lg font-semibold text-gray-800">Jane Smith</Text>
          <Text className="text-sm text-gray-600">25 year, Female</Text>
          <Text className="mt-1 text-sm text-gray-600">+82347478</Text>
          <Text className="mt-3 text-sm text-gray-500">Order date: 18 Jul 2024</Text>
        </View>

        {/* Results Table */}
        <View className="overflow-hidden rounded-2xl bg-white shadow-md">
          {/* Table Header */}
          <View className="flex-row border-b border-gray-200 bg-gray-50">
            <Text className="flex-1 px-5 py-4 text-sm font-semibold text-gray-700">Test</Text>
            <Text className="flex-1 px-5 py-4 text-center text-sm font-semibold text-gray-700">
              Result
            </Text>
            <Text className="flex-1 px-5 py-4 text-right text-sm font-semibold text-gray-700">
              Reference Range
            </Text>
          </View>

          {/* Table Rows */}
          {/* Hemoglobin - Normal */}
          <View className="flex-row border-b border-gray-100">
            <Text className="flex-1 px-5 py-4 text-base text-gray-800">Hemoglobin</Text>
            <Text className="flex-1 px-5 py-4 text-center text-base text-gray-800">13.5 g/dL</Text>
            <Text className="flex-1 px-5 py-4 text-right text-base text-gray-600">
              12.0 - 15.5 g/dL
            </Text>
          </View>

          {/* RBC - Abnormal (Red) */}
          <View className="flex-row border-b border-gray-100">
            <Text className="flex-1 px-5 py-4 text-base text-gray-800">RBC</Text>
            <Text className="flex-1 px-5 py-4 text-center text-base font-bold text-red-600">
              6.32 mil/µL
            </Text>
            <Text className="flex-1 px-5 py-4 text-right text-base text-gray-600">
              3.80 - 5.20 mil/µL
            </Text>
          </View>

          {/* WBC - Abnormal (Green? but screenshot shows green, likely high) */}
          <View className="flex-row border-b border-gray-100">
            <Text className="flex-1 px-5 py-4 text-base text-gray-800">WBC</Text>
            <Text className="flex-1 px-5 py-4 text-center text-base font-bold text-green-600">
              6,800 cells/µL
            </Text>
            <Text className="flex-1 px-5 py-4 text-right text-base text-gray-600">
              4,000 - 11,000 cells/µL
            </Text>
          </View>

          {/* Platelets - Abnormal (Green? screenshot shows green highlight) */}
          <View className="flex-row">
            <Text className="flex-1 px-5 py-4 text-base text-gray-800">Platelets</Text>
            <Text className="flex-1 px-5 py-4 text-center text-base font-bold text-green-600">
              350,000 µL
            </Text>
            <Text className="flex-1 px-5 py-4 text-right text-base text-gray-600">
              150,000 - 450,000 µL
            </Text>
          </View>
        </View>

        {/* Spacer before button */}
        <View className="h-10" />

        {/* Save as PDF Button - Using HeroButton */}
        <View className="mb-8 items-center">
          <HeroButton
            title="Save as PDF"
            onPress={() => {
              // No functionality needed as per request
            }}
            className="rounded-full shadow-lg"
          />
        </View>
      </ScrollView>
    </LinearGradient>
  );
}
