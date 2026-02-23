import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, Linking } from 'react-native';
import { Share, Download, Printer } from 'lucide-react-native';
import HeroButton from 'components/common/buttons/HeroButton';
const invoiceData = {
  clinicName: 'Healthy Life Clinic',
  doctor: 'Dr. XYZ',
  address: '123, Chinchwad Springfield',
  regNo: 'Reg. Num: 5677',
  patientName: 'Jane Smith',
  ageGender: '25 Years, Female',
  phone: '+91 784928755',
  items: [
    { description: 'Consultation Fee', quantity: 1, amount: 500.0 },
    { description: 'Atorvastatin', quantity: 1, amount: 400.0 },
  ],
  subtotal: 900.0,
  discount: 0.0,
  grandTotal: 950.0,
  paid: true,
};

const InvoiceScreen = ({ navigation }: any) => {
  // Add navigation if you're using React Navigation
  const generatePrintableHTML = () => {
    return `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Invoice - ${invoiceData.clinicName}</title>
        <script src="https://cdn.tailwindcss.com"></script>
        <style>
          body { font-family: system-ui, sans-serif; padding: 40px; background: white; }
          @media print { body { padding: 20px; } }
        </style>
      </head>
      <body class="max-w-4xl mx-auto">
        <div class="text-center mb-10">
          <h1 class="text-3xl font-bold text-green-600">${invoiceData.clinicName}</h1>
          ${invoiceData.paid ? '<p class="text-2xl font-bold text-green-600 mt-4">Paid</p>' : ''}
        </div>

        <div class="flex justify-between mb-10">
          <div>
            <p class="font-semibold text-lg">${invoiceData.doctor}</p>
            <p class="text-gray-600">${invoiceData.regNo}</p>
            <p class="text-gray-600">${invoiceData.address}</p>
          </div>
          <div class="text-right">
            <p class="font-semibold text-lg">${invoiceData.patientName}</p>
            <p class="text-gray-600">${invoiceData.ageGender}</p>
            <p class="text-gray-600">${invoiceData.phone}</p>
          </div>
        </div>

        <table class="w-full border border-gray-300 rounded-lg">
          <thead class="bg-gray-100">
            <tr>
              <th class="text-left p-4">Description</th>
              <th class="text-right p-4 w-32">Quantity</th>
              <th class="text-right p-4 w-40">Amount</th>
            </tr>
          </thead>
          <tbody>
            ${invoiceData.items
              .map(
                (item) => `
              <tr class="border-t border-gray-300">
                <td class="p-4">${item.description}</td>
                <td class="p-4 text-right">${item.quantity}</td>
                <td class="p-4 text-right">₹${item.amount.toFixed(2)}</td>
              </tr>
            `
              )
              .join('')}
            <tr class="border-t-2 border-gray-500 font-bold">
              <td class="p-4" colspan="2">Subtotal</td>
              <td class="p-4 text-right">₹${invoiceData.subtotal.toFixed(2)}</td>
            </tr>
            <tr class="font-bold">
              <td class="p-4" colspan="2">Discount</td>
              <td class="p-4 text-right">- ₹${invoiceData.discount.toFixed(2)}</td>
            </tr>
            <tr class="bg-green-50 text-lg font-bold">
              <td class="p-4" colspan="2">Grand Total</td>
              <td class="p-4 text-right">₹${invoiceData.grandTotal.toFixed(2)}</td>
            </tr>
          </tbody>
        </table>

        <div class="text-center text-gray-600 mt-8">
          Use browser: Print → Save as PDF | Share | Print
        </div>
      </body>
      </html>
    `;
  };

  const openInBrowser = async () => {
    const html = generatePrintableHTML();
    const encoded = encodeURIComponent(html);
    const dataUrl = `data:text/html,${encoded}`;

    const supported = await Linking.canOpenURL(dataUrl);
    if (supported) {
      await Linking.openURL(dataUrl);
    } else {
      alert('Cannot open invoice in browser on this device.');
    }
  };

  const handleDone = () => {
    // Replace with your navigation logic, e.g.:
    navigation?.goBack();
    // or navigation?.navigate('Home');
  };

  return (
    <ScrollView className="flex-1 bg-white">
      <View className="p-6">
        {/* Header */}
        <View className="mb-8 items-center">
          <Text className="text-2xl font-bold text-green-600">{invoiceData.clinicName}</Text>
          {invoiceData.paid && <Text className="mt-2 text-lg font-bold text-green-600">Paid</Text>}
        </View>

        {/* Doctor & Patient Info */}
        <View className="mb-8 flex-row justify-between">
          <View>
            <Text className="text-lg font-semibold">{invoiceData.doctor}</Text>
            <Text className="text-gray-600">{invoiceData.regNo}</Text>
            <Text className="text-gray-600">{invoiceData.address}</Text>
          </View>
          <View className="items-end">
            <Text className="text-lg font-semibold">{invoiceData.patientName}</Text>
            <Text className="text-gray-600">{invoiceData.ageGender}</Text>
            <Text className="text-gray-600">{invoiceData.phone}</Text>
          </View>
        </View>

        {/* Items Table */}
        <View className="mb-8 overflow-hidden rounded-lg border border-gray-300">
          <View className="flex-row bg-gray-100">
            <Text className="flex-1 p-3 font-semibold">Description</Text>
            <Text className="w-24 p-3 text-right font-semibold">Quantity</Text>
            <Text className="w-32 p-3 text-right font-semibold">Amount</Text>
          </View>
          {invoiceData.items.map((item, index) => (
            <View key={index} className="flex-row border-t border-gray-300">
              <Text className="flex-1 p-3">{item.description}</Text>
              <Text className="w-24 p-3 text-right">{item.quantity}</Text>
              <Text className="w-32 p-3 text-right">₹{item.amount.toFixed(2)}</Text>
            </View>
          ))}
          <View className="border-t-2 border-gray-400">
            <View className="flex-row">
              <Text className="flex-1 p-3 font-bold">Subtotal</Text>
              <Text className="w-56 p-3 text-right font-bold">
                ₹{invoiceData.subtotal.toFixed(2)}
              </Text>
            </View>
            <View className="flex-row">
              <Text className="flex-1 p-3 font-bold">Discount</Text>
              <Text className="w-56 p-3 text-right font-bold">
                - ₹{invoiceData.discount.toFixed(2)}
              </Text>
            </View>
            <View className="flex-row bg-green-50">
              <Text className="flex-1 p-3 text-lg font-bold">Grand Total</Text>
              <Text className="w-56 p-3 text-right text-lg font-bold">
                ₹{invoiceData.grandTotal.toFixed(2)}
              </Text>
            </View>
          </View>
        </View>

        {/* Action Buttons */}
        <View className="border-t border-gray-300 pt-6">
          <View className="mb-8 flex-row justify-around">
            <TouchableOpacity className="items-center" onPress={openInBrowser}>
              <Download size={24} color="#374151" />
              <Text className="mt-1 text-gray-700">Download PDF</Text>
            </TouchableOpacity>

            <TouchableOpacity className="items-center" onPress={openInBrowser}>
              <Share size={24} color="#374151" />
              <Text className="mt-1 text-gray-700">Share</Text>
            </TouchableOpacity>

            <TouchableOpacity className="items-center" onPress={openInBrowser}>
              <Printer size={24} color="#374151" />
              <Text className="mt-1 text-gray-700">Print</Text>
            </TouchableOpacity>
          </View>

          {/* Hero Done Button */}
          <View className="items-center">
            <HeroButton
              title="Done"
              onPress={handleDone}
              width={320}
              height={48}
              className="rounded-xl" // Optional: make it more rounded
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default InvoiceScreen;
