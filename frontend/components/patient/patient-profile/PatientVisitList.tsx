import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

type Visit = {
  id: string;
  date: string;
  title: string;
  hasFollowUpDue?: boolean;
};

type PatientVisitListProps = {
  visits: Visit[];
  onViewPrescription?: (visitId: string) => void;
};

const PatientVisitList = ({ visits, onViewPrescription }: PatientVisitListProps) => {
  if (visits.length === 0) {
    return (
      <View className="mt-20 items-center">
        <Text className="text-lg text-gray-500">No visits recorded yet</Text>
      </View>
    );
  }

  return (
    <View className="mt-4">
      {visits.map((visit, index) => (
        <View
          key={visit.id}
          className={`flex-row items-center justify-between py-6 ${
            index !== visits.length - 1 ? 'border-b border-gray-200' : ''
          }`}>
          {/* Left: Date + Title (VERTICALLY CENTERED) */}
          <View className="flex-1 justify-center pr-6">
            <Text className="text-lg font-semibold text-gray-900">{visit.date}</Text>
            <Text className="mt-1 text-gray-600">{visit.title}</Text>
          </View>

          {/* Right: Badge or Action */}
          <View className="justify-center">
            {visit.hasFollowUpDue ? (
              <View className="rounded-full bg-amber-100 px-4 py-2">
                <Text className="text-sm font-medium text-amber-800">Follow-up due</Text>
              </View>
            ) : (
              <TouchableOpacity activeOpacity={0.7} onPress={() => onViewPrescription?.(visit.id)}>
                <Text className="font-medium text-blue-600">View Prescription</Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
      ))}
    </View>
  );
};

export default PatientVisitList;
