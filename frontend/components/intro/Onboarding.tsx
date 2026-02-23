import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { ChevronRight } from 'lucide-react-native';

const { width } = Dimensions.get('window');

const steps = [
  {
    title: 'Manage Your Clinic Effortlessly',
    description:
      'Digitize patient records, prescriptions, billing & lab reports - all in one place.',
    image: require('../../assets/login/image1.png'),
  },
  {
    title: 'Schedule Appointments Easily',
    description: 'Book, reschedule, and manage patient appointments with just a few taps.',
    image: require('../../assets/login/image2.png'),
  },
  {
    title: 'Secure & Always Available',
    description: 'Access your clinic data anytime, anywhere with bank-level security.',
    image: require('../../assets/login/image3.png'),
  },
];

export default function Onboarding() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleDotPress = (index: number) => {
    setActiveIndex(index);
  };

  const handleNext = () => {
    if (activeIndex < steps.length - 1) {
      setActiveIndex(activeIndex + 1);
    } else {
      // Onboarding complete - navigate to login/main app
      console.log('Get Started!');
    }
  };

  const currentStep = steps[activeIndex];

  return (
    <View className="flex-1 bg-cyan-50">
      {/* Image Section - Light blue background like screenshot */}
      <View className="flex-1 items-center justify-center bg-cyan-50 px-8 pt-20">
        <Image source={currentStep.image} className="h-96 w-full" resizeMode="contain" />
      </View>

      {/* Content Section */}
      <View className="flex-none rounded-t-3xl bg-white px-8 pb-10 pt-12 shadow-2xl">
        {/* Title */}
        <Text className="text-center text-3xl font-bold leading-tight text-gray-900">
          {currentStep.title}
        </Text>

        {/* Description */}
        <Text className="mt-4 text-center text-base leading-6 text-gray-600">
          {currentStep.description}
        </Text>

        {/* Dots Indicator - Clickable */}
        <View className="mb-10 mt-8 flex-row items-center justify-center">
          {steps.map((_, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => handleDotPress(index)}
              className="mx-2"
              activeOpacity={0.7}>
              <View
                className={`h-2 w-2 rounded-full ${
                  activeIndex === index ? 'w-6 bg-cyan-500' : 'bg-gray-300'
                } transition-all duration-300`}
              />
            </TouchableOpacity>
          ))}
        </View>

        {/* Next Button with Gradient */}
        <TouchableOpacity onPress={handleNext} activeOpacity={0.9}>
          <LinearGradient
            colors={['#06B6D4', '#0891B2']} // Cyan gradient matching screenshot
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            className="flex-row items-center justify-center rounded-full py-4 shadow-lg">
            <Text className="mr-3 text-lg font-semibold text-white">
              {activeIndex === steps.length - 1 ? 'Get Started' : 'Next'}
            </Text>
            <ChevronRight color="white" size={24} />
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </View>
  );
}
