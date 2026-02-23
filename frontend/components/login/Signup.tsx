import { View, Text, TextInput, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import HeroButton from 'components/common/buttons/HeroButton';
export default function SignUpScreen() {
  return (
    <SafeAreaView className="flex-1 bg-white px-6">
      {/* Title */}
      <Text className="mt-12 text-center text-3xl font-bold text-[#0B1B5C]">Sign Up</Text>
      <Text className="mb-8 mt-2 text-center text-gray-500">Create an account to get started.</Text>

      {/* Full Name */}
      <Text className="mb-2 text-sm text-gray-600">Full name</Text>
      <TextInput
        placeholder="Enter full name"
        className="mb-5 rounded-lg border border-gray-300 px-3 py-3 text-base"
      />

      {/* Email */}
      <Text className="mb-2 text-sm text-gray-600">Email</Text>
      <TextInput
        placeholder="Enter email"
        keyboardType="email-address"
        className="mb-5 rounded-lg border border-gray-300 px-3 py-3 text-base"
      />

      {/* Password */}
      <Text className="mb-2 text-sm text-gray-600">Password</Text>
      <TextInput
        placeholder="Enter password"
        secureTextEntry
        className="mb-3 rounded-lg border border-gray-300 px-3 py-3 text-base"
      />

      {/* Show Password */}
      <View className="mb-8 flex-row items-center">
        <View className="mr-2 h-4 w-4 rounded border border-gray-400" />
        <Text className="text-gray-600">Show Password</Text>
      </View>

      {/* Sign Up Button */}
      <View className="items-center">
        <HeroButton
          title="Sign Up"
          onPress={() => {
            console.log('Sign up pressed');
          }}
        />
      </View>

      {/* Divider */}
      <View className="my-6 flex-row items-center">
        <View className="h-[1px] flex-1 bg-gray-300" />
        <Text className="mx-3 text-gray-500">Or</Text>
        <View className="h-[1px] flex-1 bg-gray-300" />
      </View>

      {/* Google Sign Up */}
      <Pressable className="flex-row items-center justify-center rounded-lg border border-gray-300 py-3">
        <Text className="mr-2 text-lg">G</Text>
        <Text className="font-medium text-gray-700">Sign Up with Google</Text>
      </Pressable>

      {/* Login link */}
      <View className="mt-6 flex-row justify-center">
        <Text className="text-gray-600">Already have an account? </Text>
        <Pressable>
          <Text className="font-semibold text-[#365EF2]">Log In</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}
