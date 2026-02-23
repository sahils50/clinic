import { View, Text, Image } from 'react-native';
import { useState } from 'react';
import HeroButton from 'components/common/buttons/HeroButton';

const onboardingData = [
  {
    title: 'Welcome',
    description: 'Manage everything in one place',
    image: require('../assets/image 1.png'),
  },
  {
    title: 'Patients',
    description: 'Track patient records easily',
    image: require('../assets/image 2.png'),
  },
  {
    title: 'Billing',
    description: 'Simple and fast billing',
    image: require('../assets/image 3.png'),
  },
];

export default function OnboardingScreen({ onFinish }: { onFinish: () => void }) {
  const [index, setIndex] = useState(0);
  const item = onboardingData[index];

  const next = () => {
    if (index < onboardingData.length - 1) {
      setIndex(index + 1);
    } else {
      onFinish(); // switch to Tabs
    }
  };

  return (
    <View className="flex-1 items-center justify-center px-6">
      <Image source={item.image} className="mb-8 h-64 w-full" resizeMode="contain" />

      <Text className="mb-2 text-2xl font-bold">{item.title}</Text>
      <Text className="mb-10 text-center text-gray-500">{item.description}</Text>

      <HeroButton
        title={index === onboardingData.length - 1 ? 'Get Started' : 'Next'}
        onPress={next}
      />
    </View>
  );
}
