//Specifically used for login next button in login screen
//The styling can be overridden by passing className prop
import { Pressable, Text, ActivityIndicator } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

type LoginButtonProps = {
  title: string;
  onPress: () => void;
  disabled?: boolean;
  loading?: boolean;
  width?: number;
  height?: number;
  className?: string;
};

export default function LoginButton({
  title,
  onPress,
  disabled = false,
  loading = false,
  width = 307,
  height = 50,
  className = '',
}: LoginButtonProps) {
  return (
    <Pressable
      onPress={onPress}
      disabled={disabled || loading}
      style={{ width, height, borderRadius: 30 }}
      className={className}>
      <LinearGradient
        colors={['#3580EA', '#50DCEC']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={{ borderRadius: 30 }}
        className={`
          flex-1
          items-center
          justify-center
          ${disabled ? 'opacity-50' : 'opacity-100'}
        `}>
        {loading ? (
          <ActivityIndicator color="#FFFFFF" />
        ) : (
          <Text className="text-base font-semibold text-white">{title}</Text>
        )}
      </LinearGradient>
    </Pressable>
  );
}
