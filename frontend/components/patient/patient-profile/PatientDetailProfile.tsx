// screens/PatientProfileScreen.tsx
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import BottomActionBar from '../patient-detail-tab/PatientDetailsTab';
import PatientLabReportList from './PatientLabReportList';
import PatientVisitList from './PatientVisitList';
import PatientBillList from './PatientBillList';
import PatientNotes from './PatientNotes';

const mockVisits = [
  { id: '1', date: 'April 5, 2024', title: 'General Consultation', hasFollowUpDue: true },
  { id: '2', date: 'March 20, 2024', title: 'Follow-up' },
  { id: '3', date: 'February 12, 2024', title: 'Fever, Cough' },
  { id: '4', date: 'February 2, 2024', title: 'General Consultation' },
];
const mockLabReports = [
  {
    id: '1',
    testName: 'Blood Test',
    orderedOn: '08 Apr 2024',
    status: 'Pending' as const,
  },
  {
    id: '2',
    testName: 'CBC',
    orderedOn: '18 Jul 2024',
    status: 'Completed' as const,
  },
  {
    id: '3',
    testName: 'Lipid Profile',
    orderedOn: '08 Apr 2024',
    status: 'Pending' as const,
  },
  {
    id: '4',
    testName: 'X-Ray',
    orderedOn: '18 Jul 2024',
    status: 'Completed' as const,
  },
];
const mockBills = [
  {
    id: '1',
    invoiceNumber: 'Invoice #1030',
    date: '08 Apr 2024',
    amount: '₹100.00',
    status: 'Pending' as const,
  },
  {
    id: '2',
    invoiceNumber: 'Invoice #1030',
    date: '08 Mar 2024',
    amount: '₹120.00',
    status: 'Paid' as const,
  },
  {
    id: '3',
    invoiceNumber: 'Invoice #1030',
    date: '28 Feb 2024',
    amount: '₹120.00',
    status: 'Paid' as const,
  },
];
const mockNotes = [
  {
    id: '1',
    timestamp: 'Yesterday, 8:30 AM',
    note: 'Patient advised to follow low-salt diet.',
  },
  {
    id: '2',
    timestamp: '10/05/2024, 12:30 PM',
    note: 'Monitor blood pressure',
  },
];
const PatientProfileScreen = () => {
  const [activeTab, setActiveTab] = useState<'Visits' | 'Lab Reports' | 'Bills' | 'Notes'>(
    'Visits'
  );

  return (
    <LinearGradient
      colors={['rgba(162, 236, 255, 0.89)', '#FFFFFF']}
      locations={[0.03, 0.55]}
      start={{ x: 0.5, y: 0 }}
      end={{ x: 0.5, y: 1 }}
      className="flex-1">
      <View className="flex-1">
        {/* Header Section */}
        <View className="items-center pb-8 pt-12">
          <View className="mb-4 h-24 w-24 items-center justify-center rounded-full bg-gray-300">
            <Text className="text-5xl">👤</Text>
          </View>

          <Text className="text-2xl font-bold text-gray-800">Jane Smith</Text>
          <Text className="mt-1 text-lg text-gray-600">25, Female</Text>
          <Text className="mt-1 text-base text-gray-700">+2823427478</Text>

          <View className="mt-6 flex-row flex-wrap justify-center gap-3">
            <View className="rounded-full bg-gray-200 px-4 py-2">
              <Text className="font-medium text-gray-700">No Allergies</Text>
            </View>
            <View className="rounded-full bg-gray-200 px-4 py-2">
              <Text className="font-medium text-gray-700">Diabetes</Text>
            </View>
            <View className="rounded-full bg-gray-200 px-4 py-2">
              <Text className="font-medium text-gray-700">B+</Text>
            </View>
            <View className="rounded-full bg-gray-200 px-4 py-2">
              <Text className="font-medium text-gray-700">Metformin</Text>
            </View>
          </View>
        </View>

        {/* Tabs */}
        <View className="flex-row border-b border-gray-300 bg-white">
          {(['Visits', 'Lab Reports', 'Bills', 'Notes'] as const).map((tab) => (
            <TouchableOpacity
              key={tab}
              onPress={() => setActiveTab(tab)}
              className="flex-1 items-center py-4"
              activeOpacity={0.7}>
              <Text
                className={`pb-1 text-base font-medium ${
                  activeTab === tab ? 'border-b-4 border-blue-600 text-blue-600' : 'text-gray-600'
                }`}>
                {tab}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Content Area */}
        <ScrollView className="flex-1 bg-white px-6">
          {/* Visits Tab */}
          {activeTab === 'Visits' && (
            <PatientVisitList
              visits={mockVisits}
              onViewPrescription={(visitId) => {
                console.log('View prescription for visit:', visitId);
              }}
            />
          )}

          {/* Lab Reports Tab */}
          {activeTab === 'Lab Reports' && (
            <PatientLabReportList
              reports={mockLabReports}
              onViewReport={(reportId) => {
                console.log('View lab report:', reportId);
              }}
            />
          )}

          {/* Placeholder for Bills and Notes */}
          {activeTab === 'Bills' && (
            <PatientBillList
              bills={mockBills}
              onViewInvoice={(billId) => {
                console.log('View invoice:', billId);
                // Navigate to invoice details or open PDF/modal
              }}
            />
          )}
          {activeTab === 'Notes' && <PatientNotes savedNotes={mockNotes} />}
        </ScrollView>

        {/* Bottom Action Bar */}
        <BottomActionBar
          onAddVisit={() => console.log('Add Visit pressed')}
          onCreatePrescription={() => console.log('Create Prescription pressed')}
          onAddLabTest={() => console.log('Add Lab Test pressed')}
        />
      </View>
    </LinearGradient>
  );
};

export default PatientProfileScreen;
