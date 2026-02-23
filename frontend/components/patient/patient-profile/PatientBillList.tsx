import React from 'react';
import { View, Text } from 'react-native';
import HeroButton from 'components/common/buttons/HeroButton';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from 'Screens/RootNavigator';

type Bill = {
  id: string;
  invoiceNumber: string;
  date: string;
  amount: string;
  status: 'Paid' | 'Pending';
};

type PatientBillListProps = {
  bills: Bill[];
  onViewInvoice?: (billId: string) => void;
};

const PatientBillList = ({ bills, onViewInvoice }: PatientBillListProps) => {
  type NavigationProp = NativeStackNavigationProp<RootStackParamList>;
  const navigation = useNavigation<NavigationProp>();

  if (bills.length === 0) {
    return (
      <View className="mt-20 items-center">
        <Text className="text-lg text-gray-500">No bills yet</Text>
      </View>
    );
  }

  return (
    <View className="mt-4">
      {bills.map((bill) => (
        <View
          key={bill.id}
          className="mb-4 overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm">
          <View className="p-5">
            {/* Top Section: Invoice Info + Amount & Status */}
            <View className="mb-6 flex-row items-start justify-between">
              <View>
                <Text className="text-base font-medium text-gray-900">{bill.invoiceNumber}</Text>
                <Text className="mt-1 text-sm text-gray-600">{bill.date}</Text>
              </View>

              <View className="items-end">
                <Text className="text-xl font-bold text-gray-900">{bill.amount}</Text>
                <View
                  className={`mt-2 rounded-full px-3 py-1 ${
                    bill.status === 'Paid' ? 'bg-green-100' : 'bg-amber-100'
                  }`}>
                  <Text
                    className={`text-sm font-medium ${
                      bill.status === 'Paid' ? 'text-green-800' : 'text-amber-800'
                    }`}>
                    {bill.status}
                  </Text>
                </View>
              </View>
            </View>

            {/* View Invoice Button - Using your HeroButton */}
            <HeroButton
              title="View Invoice"
              onPress={() => navigation.navigate('Invoice')}
              width={90}
              height={34}
              className="self-start"
            />
          </View>
        </View>
      ))}
    </View>
  );
};

export default PatientBillList;
