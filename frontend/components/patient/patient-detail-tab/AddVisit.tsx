import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import HeroButton from 'components/common/buttons/HeroButton';

export default function AddVisit() {
  const [symptoms, setSymptoms] = useState('');
  const [bp, setBp] = useState('');
  const [pulse, setPulse] = useState('');
  const [weight, setWeight] = useState('');
  const [temperature, setTemperature] = useState('');
  const [diagnosis, setDiagnosis] = useState('');
  const [isNewDiagnosis, setIsNewDiagnosis] = useState(true);
  const [notes, setNotes] = useState('');
  const [loading, setLoading] = useState(false);

  const handleContinue = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      console.log('Visit data saved – proceeding to prescription...');
    }, 2000);
  };

  return (
    <LinearGradient
      colors={['rgba(162, 236, 255, 0.89)', '#FFFFFF']}
      locations={[0.03, 0.55]}
      start={{ x: 0.5, y: 0 }}
      end={{ x: 0.5, y: 1 }}
      className="flex-1 px-4 pt-8">
      {/* Title */}
      <Text className="mb-8 mt-12 text-center text-2xl font-bold text-gray-800">Add Visit</Text>

      {/* Scrollable content */}
      <ScrollView
        className="flex-1"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 24, paddingBottom: 60 }}>
        {/* Symptoms */}
        <View className="mb-6">
          <Text className="mb-2 text-lg font-semibold text-gray-700">Symptoms</Text>
          <TextInput
            className="rounded-2xl bg-white px-5 py-4 text-base shadow-sm"
            placeholder="Symptoms"
            placeholderTextColor="#9ca3af"
            multiline
            textAlignVertical="top"
            value={symptoms}
            onChangeText={setSymptoms}
          />
        </View>

        {/* Vitals - Fixed Layout */}
        <View className="mb-6">
          <Text className="mb-2 text-lg font-semibold text-gray-700">Vitals</Text>

          {/* First Row: BP & Pulse */}
          <View className="mb-4 flex-row justify-between">
            <View className="mr-3 flex-1">
              <TextInput
                className="rounded-2xl bg-white px-5 py-4 text-base shadow-sm"
                placeholder="BP"
                placeholderTextColor="#9ca3af"
                keyboardType="numeric"
                value={bp}
                onChangeText={setBp}
              />
            </View>
            <View className="ml-3 flex-1">
              <TextInput
                className="rounded-2xl bg-white px-5 py-4 text-base shadow-sm"
                placeholder="Pulse"
                placeholderTextColor="#9ca3af"
                keyboardType="numeric"
                value={pulse}
                onChangeText={setPulse}
              />
            </View>
          </View>

          {/* Second Row: Weight & Temperature */}
          <View className="flex-row justify-between">
            <View className="mr-3 flex-1">
              <TextInput
                className="rounded-2xl bg-white px-5 py-4 text-base shadow-sm"
                placeholder="Weight"
                placeholderTextColor="#9ca3af"
                keyboardType="numeric"
                value={weight}
                onChangeText={setWeight}
              />
            </View>
            <View className="ml-3 flex-1">
              <TextInput
                className="rounded-2xl bg-white px-5 py-4 text-base shadow-sm"
                placeholder="Temperature"
                placeholderTextColor="#9ca3af"
                keyboardType="numeric"
                value={temperature}
                onChangeText={setTemperature}
              />
            </View>
          </View>
        </View>

        {/* Diagnosis */}
        <View className="mb-6">
          <Text className="mb-2 text-lg font-semibold text-gray-700">Diagnosis</Text>
          <TextInput
            className="rounded-2xl bg-white px-5 py-4 text-base shadow-sm"
            placeholder="Diagnosis"
            placeholderTextColor="#9ca3af"
            multiline
            textAlignVertical="top"
            value={diagnosis}
            onChangeText={setDiagnosis}
          />

          {/* New / Follow-up Radio Group */}
          <View className="mt-6 flex-row items-center justify-center gap-12">
            <TouchableOpacity
              onPress={() => setIsNewDiagnosis(true)}
              className="flex-row items-center gap-3"
              activeOpacity={0.7}>
              <View
                className={`h-6 w-6 items-center justify-center rounded-full border-2 ${
                  isNewDiagnosis ? 'border-blue-600' : 'border-gray-500'
                }`}>
                {isNewDiagnosis && <View className="h-4 w-4 rounded-full bg-blue-600" />}
              </View>
              <Text className="text-base font-medium text-gray-700">New</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => setIsNewDiagnosis(false)}
              className="flex-row items-center gap-3"
              activeOpacity={0.7}>
              <View
                className={`h-6 w-6 items-center justify-center rounded-full border-2 ${
                  !isNewDiagnosis ? 'border-blue-600' : 'border-gray-500'
                }`}>
                {!isNewDiagnosis && <View className="h-4 w-4 rounded-full bg-blue-600" />}
              </View>
              <Text className="text-base font-medium text-gray-700">Follow-up</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Notes */}
        <View className="mb-8">
          <Text className="mb-2 text-lg font-semibold text-gray-700">Notes</Text>
          <TextInput
            className="rounded-2xl bg-white px-5 py-4 text-base shadow-sm"
            placeholder="Notes"
            placeholderTextColor="#9ca3af"
            multiline
            textAlignVertical="top"
            value={notes}
            onChangeText={setNotes}
          />
        </View>

        {/* Continue Button */}
        <View className="items-center px-6">
          <HeroButton
            title="Continue to Prescription"
            onPress={handleContinue}
            loading={loading}
            disabled={loading}
            className="w-full rounded-full shadow-lg"
            height={56}
          />
        </View>
      </ScrollView>
    </LinearGradient>
  );
}
