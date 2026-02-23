import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from 'Screens/RootNavigator';

type BottomActionBarProps = {
  onAddVisit?: () => void;
  onCreatePrescription?: () => void;
  onAddLabTest?: () => void;
};

const BottomActionBar = ({
  onAddVisit,
  onCreatePrescription,
  onAddLabTest,
}: BottomActionBarProps) => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  return (
    <View className="flex-row border-t border-gray-300 bg-white">
      <TouchableOpacity
        onPress={onAddVisit}
        className="flex-1 items-center justify-center py-5"
        activeOpacity={0.7}>
        <Text className="mb-1 text-3xl">+</Text>
        <Text
          className="text-sm font-medium text-gray-700"
          onPress={() => navigation.navigate('AddVisit')}>
          Add Visit
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate('Prescription')}
        className="flex-1 items-center justify-center py-5"
        activeOpacity={0.7}>
        <Text className="mb-1 text-3xl">📝</Text>
        <Text className="text-sm font-medium text-gray-700">Create Prescription</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate('AddLabTest')}
        className="flex-1 items-center justify-center py-5"
        activeOpacity={0.7}>
        <Text className="mb-1 text-3xl">🧪</Text>
        <Text className="text-sm font-medium text-gray-700">Add Lab Test</Text>
      </TouchableOpacity>
    </View>
  );
};

export default BottomActionBar;
