import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import HeroButton from 'components/common/buttons/HeroButton';

type SavedNote = {
  id: string;
  timestamp: string;
  note: string;
};

type PatientNotesProps = {
  savedNotes?: SavedNote[]; // Optional mock data
};

const PatientNotes = ({ savedNotes = [] }: PatientNotesProps) => {
  const [note, setNote] = useState('');
  const [isSaved, setIsSaved] = useState(false);

  const handleSave = () => {
    if (note.trim()) {
      // In real app: save to backend/state
      setIsSaved(true);
      setNote('');
      // Hide message after 3 seconds
      setTimeout(() => setIsSaved(false), 3000);
    }
  };

  const currentTime = new Date().toLocaleString('en-US', {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
  });

  return (
    <View className="flex-1 px-6 pt-4">
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Note Input Card */}
        <View className="mb-6 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
          <TextInput
            value={note}
            onChangeText={setNote}
            placeholder="Write internal notes about the patient here..."
            placeholderTextColor="#9CA3AF"
            multiline
            textAlignVertical="top"
            className="min-h-32 text-base text-gray-800"
          />

          {/* Saved Confirmation */}
          {isSaved && (
            <View className="mt-4 flex-row items-center">
              <Text className="mr-2 text-sm text-green-600">All changes saved.</Text>
              <Text className="text-sm text-gray-500">Today, {currentTime}</Text>
            </View>
          )}

          {/* Save Button */}
          <View className="mt-4 items-end">
            <HeroButton title="Save Note" onPress={handleSave} height={38} className="px-8" />
          </View>
        </View>

        {/* Saved Notes Section */}
        {savedNotes.length > 0 && (
          <View>
            <Text className="mb-4 text-lg font-semibold text-gray-900">Saved Notes</Text>

            {savedNotes.map((item) => (
              <View
                key={item.id}
                className={`mb-5 pb-5 ${savedNotes.length > 1 ? 'border-b border-gray-200' : ''}`}>
                <Text className="mb-1 text-sm text-gray-500">{item.timestamp}</Text>
                <Text className="text-base leading-6 text-gray-800">{item.note}</Text>
              </View>
            ))}
          </View>
        )}
      </ScrollView>
    </View>
  );
};

export default PatientNotes;
