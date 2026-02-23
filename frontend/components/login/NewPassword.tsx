import { View, Text, TextInput, Pressable } from 'react-native';
import { useState } from 'react';
import HeroButton from 'components/common/buttons/HeroButton';

export default function CreateNewPasswordScreen() {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSavePassword = () => {
    // submit logic here
    console.log('Password saved');
  };

  const isDisabled = !password || !confirmPassword || password !== confirmPassword;

  return (
    <View className="flex-1 justify-center bg-white px-6">
      {/* Title */}
      <Text className="mb-8 text-center text-2xl font-bold text-[#0A0A23]">
        Create New{'\n'}Password
      </Text>

      {/* New Password */}
      <View className="mb-4">
        <Text className="mb-2 text-sm text-gray-600">New Password</Text>
        <TextInput
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          placeholder="Enter new password"
          className="
            h-11
            w-full
            rounded-md
            border
            border-gray-300
            px-3
            text-base
          "
        />
      </View>

      {/* Confirm Password */}
      <View className="mb-6">
        <Text className="mb-2 text-sm text-gray-600">Confirm Password</Text>
        <TextInput
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          secureTextEntry
          placeholder="Confirm new password"
          className="
            h-11
            w-full
            rounded-md
            border
            border-gray-300
            px-3
            text-base
          "
        />
      </View>

      {/* Save Password Button */}
      <HeroButton
        title="Save Password"
        onPress={handleSavePassword}
        width={280}
        height={41}
        className="self-center"
      />

      {/* Back to Login */}
      <Pressable className="mt-6 self-center">
        <Text className="text-sm text-gray-500">
          Back to <Text className="font-medium">Login</Text>
        </Text>
      </Pressable>
    </View>
  );
}
