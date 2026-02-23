import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import HeroButton from 'components/common/buttons/HeroButton';

export default function ForgotPassword() {
  return (
    <SafeAreaView className="flex-1 justify-center bg-white px-6">
      <Text className="mb-2 text-3xl font-bold text-[#0B1A5A]">Forgot Password?</Text>

      <Text className="mb-8 text-gray-500">
        Enter your registered email or phone number to reset your password.
      </Text>

      <Text className="mb-2 text-gray-700">Phone Number</Text>
      <View className="mb-6 flex-row items-center rounded-lg border border-gray-300">
        <View className="border-r border-gray-300 px-4 py-3">
          <Text className="text-gray-700">+91</Text>
        </View>
        <TextInput
          placeholder="Enter phone number"
          keyboardType="phone-pad"
          className="flex-1 px-4 py-3"
        />
      </View>

      <Text className="mb-6 text-center text-gray-400">Or</Text>

      <Text className="mb-2 text-gray-700">Email</Text>
      <TextInput
        placeholder="Enter email"
        keyboardType="email-address"
        className="mb-8 rounded-lg border border-gray-300 px-4 py-3"
      />

      <View className="items-center">
        <HeroButton title="Send Reset Code" onPress={() => {}} />
      </View>

      <TouchableOpacity className="mt-6">
        <Text className="text-center text-gray-600">
          Back to <Text className="font-semibold text-blue-600">Login</Text>
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
