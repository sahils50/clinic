import HeroButton from 'components/common/buttons/HeroButton';
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';

type Charge = {
  id: number;
  name: string;
  amount: number;
};

type PaymentMode = 'CASH' | 'UPI' | 'CARD';

const GenerateBill: React.FC = () => {
  const [charges, setCharges] = useState<Charge[]>([
    { id: 1, name: 'Consultation Fee', amount: 500 },
    { id: 2, name: 'Atorvastatin', amount: 300 },
    { id: 3, name: 'Blood Test', amount: 700 },
  ]);

  const [extraName, setExtraName] = useState<string>('');
  const [extraAmount, setExtraAmount] = useState<string>('');
  const [paymentMode, setPaymentMode] = useState<PaymentMode>('CASH');
  const [discount, setDiscount] = useState<number>(0);

  const subtotal = charges.reduce((sum, item) => sum + item.amount, 0);
  const totalPayable = subtotal - discount;

  const addExtraCharge = () => {
    if (!extraName || !extraAmount) return;

    setCharges((prev) => [
      ...prev,
      {
        id: Date.now(),
        name: extraName,
        amount: Number(extraAmount),
      },
    ]);

    setExtraName('');
    setExtraAmount('');
  };

  return (
    <ScrollView className="flex-1 bg-gray-100 px-4">
      {/* Header */}
      <Text className="mt-6 text-center text-3xl font-bold text-indigo-900">Generate Bill</Text>

      {/* Charges Card */}
      <View className="mt-6 rounded-xl bg-white p-2 shadow">
        {charges.map((item) => (
          <View key={item.id} className="flex-row justify-between border-b border-gray-200 py-3">
            <Text className="text-gray-700">{item.name}</Text>
            <Text className="font-semibold text-gray-900">₹ {item.amount}</Text>
          </View>
        ))}
      </View>

      {/* Add Extra Charge */}
      <View className="mt-6 rounded-xl bg-white p-2 shadow">
        <Text className="mb-3 text-lg font-semibold text-indigo-900">+ Add Extra Charge</Text>

        <TextInput
          placeholder="Charge Name"
          value={extraName}
          onChangeText={setExtraName}
          className="mb-3 rounded-lg border border-gray-300 px-3 py-2"
        />

        <TextInput
          placeholder="Amount (₹)"
          keyboardType="numeric"
          value={extraAmount}
          onChangeText={setExtraAmount}
          className="mb-4 rounded-lg border border-gray-300 px-3 py-2"
        />

        <View className="flex-row justify-end gap-4">
          <TouchableOpacity
            className="rounded-lg px-4 py-2"
            onPress={() => {
              setExtraName('');
              setExtraAmount('');
            }}>
            <Text className="text-gray-600">Cancel</Text>
          </TouchableOpacity>

          <TouchableOpacity className="rounded-lg bg-indigo-600 px-4 py-2" onPress={addExtraCharge}>
            <Text className="font-semibold text-white">Add</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Payment Mode */}
      <View className="mt-6 rounded-xl bg-white p-3 shadow">
        <Text className="mb-3 text-lg font-semibold text-indigo-900">Payment Mode</Text>

        <View className="flex-row justify-between">
          {(['CASH', 'UPI', 'CARD'] as PaymentMode[]).map((mode) => (
            <TouchableOpacity
              key={mode}
              onPress={() => setPaymentMode(mode)}
              className={`rounded-lg px-4 py-2 ${
                paymentMode === mode ? 'bg-indigo-600' : 'border border-gray-300'
              }`}>
              <Text
                className={`font-semibold ${
                  paymentMode === mode ? 'text-white' : 'text-gray-700'
                }`}>
                {mode}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      {/* Bill Summary */}
      <View className="mt-6 rounded-xl bg-white p-4 shadow">
        <View className="flex-row justify-between py-2">
          <Text className="text-gray-600">Subtotal</Text>
          <Text className="font-semibold">₹ {subtotal}</Text>
        </View>

        <View className="flex-row justify-between py-2">
          <Text className="text-gray-600">Discount</Text>
          <Text className="font-semibold">₹ {discount}</Text>
        </View>

        <View className="mt-2 flex-row justify-between border-t pt-3">
          <Text className="text-lg font-bold">Total Payable</Text>
          <Text className="text-lg font-bold text-indigo-700">₹ {totalPayable}</Text>
        </View>
      </View>

      {/* Preview Button */}
      <View className='mt-4  m-auto '>
        <HeroButton title="Preview Bill" onPress={() => {}} />
      </View>
    </ScrollView>
  );
};

export default GenerateBill;
