//Specifically used as big submit button
//The styling can be overridden by passing className prop
import { Pressable, Text, ActivityIndicator } from 'react-native';

type HeroButtonProps = {
  title: string;
  onPress: () => void;
  disabled?: boolean;
  loading?: boolean;
  width?: number;
  height?: number;
  className?: string;
};

export default function HeroButton({
  title,
  onPress,
  disabled = false,
  loading = false,
  width = 280,
  height = 41,
  className = '',
}: HeroButtonProps) {
  return (
    <Pressable
      onPress={onPress}
      disabled={disabled || loading}
      style={{ width, height }}
      className={`
        items-center
        justify-center
        rounded-md
        bg-[#365EF2]
        ${disabled ? 'opacity-50' : 'opacity-100'}
        ${className}
      `}>
      {loading ? (
        <ActivityIndicator color="#FFFFFF" />
      ) : (
        <Text className="text-base font-semibold text-white">{title}</Text>
      )}
    </Pressable>
  );
}
