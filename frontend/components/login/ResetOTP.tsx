import { View, Text, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import HeroButton from 'components/common/buttons/HeroButton';

export default function OTP() {
  return (
    <SafeAreaView className="flex-1 bg-white px-6">
      {/* Title */}
      <Text className="mt-14 text-center text-3xl font-bold text-[#0B1B5C]">
        Enter{'\n'}Reset Code
      </Text>

      <Text className="mt-3 text-center text-gray-500">
        Please enter the 4-digit code sent to{'\n'}email/phone.
      </Text>

      {/* OTP Inputs */}
      <View className="mt-10 flex-row justify-between px-6">
        {[1, 2, 3, 4].map((_, index) => (
          <TextInput
            key={index}
            keyboardType="number-pad"
            maxLength={1}
            className="
              h-14 w-14
              rounded-lg
              border border-gray-300
              text-center
              text-xl
            "
          />
        ))}
      </View>

      {/* Verify Button */}
      <View className="mt-10 items-center">
        <HeroButton title="Verify" onPress={() => {}} />
      </View>

      {/* Resend */}
      <Text className="mt-6 text-center text-gray-500">
        Resend code in <Text className="font-medium text-gray-700">0:45</Text>
      </Text>
    </SafeAreaView>
  );
}
