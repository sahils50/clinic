import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, Linking } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Download, Share2, ArrowLeft } from 'lucide-react-native';
import HeroButton from 'components/common/buttons/HeroButton';

export default function PrescriptionPreviewScreen() {
  const handleShareViaWhatsApp = () => {
    // Example: Open WhatsApp with a pre-filled message (you can customize)
    const message = encodeURIComponent(
      "Hi, here's my prescription from Dr. XYZ dated April 8, 2024."
    );
    const url = `whatsapp://send?text=${message}`;
    Linking.openURL(url).catch(() => {
      alert('WhatsApp is not installed on this device.');
    });
  };

  const handleDownloadPDF = () => {
    // Placeholder for PDF download logic
    alert('PDF download coming soon!');
  };

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
          <ArrowLeft size={28} color="#0EA5E9" />
        </TouchableOpacity>

        {/* Title */}
        <Text className="mb-6 text-center text-2xl font-bold ">Prescription Preview</Text>

        {/* Doctor & Patient Card */}
        <View className="mb-6 rounded-2xl bg-white p-5 shadow-md">
          <Text className="text-lg font-semibold text-gray-800">Dr. XYZ</Text>
          <Text className="text-sm text-gray-600">Health Clinic</Text>
          <Text className="mb-4 text-sm text-gray-500">123, Clinic St, Springfield</Text>

          <View className="flex-row items-start justify-between">
            <View>
              <Text className="text-base font-medium text-gray-800">Jane Smith</Text>
              <Text className="text-sm text-gray-600">25 years . Female</Text>
            </View>
            <View className="items-end">
              <Text className="text-sm font-medium text-gray-800">April 8, 2024</Text>
              <Text className="text-sm text-gray-600">Hypertension</Text>
            </View>
          </View>
        </View>

        {/* Medicines */}
        <Text className="mb-4 text-xl font-bold text-gray-800">Medicines</Text>
        <View className="mb-6 rounded-2xl bg-white p-5 shadow-md">
          <View className="flex-row items-center justify-between">
            <View>
              <Text className="text-base font-semibold text-gray-800">Atorvastatin</Text>
              <Text className="text-sm text-gray-600">10 mg</Text>
            </View>
            <Text className="text-sm text-gray-700">1-0-1</Text>
            <Text className="text-sm text-gray-700">5 days</Text>
          </View>
        </View>

        {/* Advice */}
        <Text className="mb-4 text-xl font-bold text-gray-800">Advice</Text>
        <View className="mb-6 rounded-2xl bg-white p-5 shadow-md">
          <Text className="text-base leading-6 text-gray-700">Adopt a low sodium diet.</Text>
          <Text className="mt-2 text-base leading-6 text-gray-700">
            Regular exercise is recommended
          </Text>
        </View>

        {/* Test */}
        <Text className="mb-4 text-xl font-bold text-gray-800">Test</Text>
        <View className="mb-6 rounded-2xl bg-white p-5 shadow-md">
          <Text className="text-base text-gray-800">Lipid Profile</Text>
        </View>

        {/* Follow-up */}
        <Text className="mb-2 text-lg font-semibold text-gray-800">Follow-up :</Text>
        <Text className="mb-10 text-base text-gray-700">13/04/2024</Text>

        {/* Action Buttons */}
        <View className="mb-10 items-center space-y-4">
          {/* Secondary Button: Download PDF */}
          <HeroButton
            title="Download PDF"
            onPress={handleDownloadPDF}
            className="rounded-full shadow-sm"
          />
          {/* Primary Hero Button: Share via WhatsApp */}
          <HeroButton
            title="Share via WhatsApp"
            onPress={handleShareViaWhatsApp}
            className="rounded-full"
          />
        </View>
      </ScrollView>
    </LinearGradient>
  );
}
