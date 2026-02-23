import { View, Text, TextInput, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import HeroButton from 'components/common/buttons/HeroButton';

export default function LoginScreen() {
  return (
    <SafeAreaView className="flex-1 bg-white px-6">
      {/* Title */}
      <Text className="mb-8 mt-12 text-center text-3xl font-bold text-[#0B1B5C]">Login</Text>

      {/* Phone Number */}
      <Text className="mb-2 text-sm text-gray-600">Phone Number</Text>
      <View className="flex-row items-center rounded-lg border border-gray-300 px-3">
        <Text className="mr-2 text-gray-700">+91</Text>
        <View className="mr-2 h-5 w-[1px] bg-gray-300" />
        <TextInput
          placeholder="Enter phone number"
          keyboardType="phone-pad"
          className="flex-1 py-3 text-base"
        />
      </View>

      {/* OR */}
      <Text className="my-5 text-center text-gray-500">Or</Text>

      {/* Email */}
      <Text className="mb-2 text-sm text-gray-600">Email</Text>
      <TextInput
        placeholder="Enter email"
        keyboardType="email-address"
        className="rounded-lg border border-gray-300 px-3 py-3 text-base"
      />

      {/* Password */}
      <View className="mt-5 flex-row items-center justify-between">
        <Text className="text-sm text-gray-600">Password</Text>
        <Pressable>
          <Text className="text-sm font-medium text-[#365EF2]">Forgot?</Text>
        </Pressable>
      </View>

      <TextInput
        placeholder="Enter password"
        secureTextEntry
        className="mt-2 rounded-lg border border-gray-300 px-3 py-3 text-base"
      />

      {/* Login Button */}
      <View className="mt-8 items-center">
        <HeroButton
          title="Login"
          onPress={() => {
            console.log('Login pressed');
          }}
        />
      </View>

      {/* Signup */}
      <View className="mt-6 flex-row justify-center">
        <Text className="text-gray-600">Don’t have an account? </Text>
        <Pressable>
          <Text className="font-semibold text-[#365EF2]">Sign Up</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}
