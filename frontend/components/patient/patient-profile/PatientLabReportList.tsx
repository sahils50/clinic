import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RootStackParamList } from 'Screens/RootNavigator';

type LabReport = {
  id: string;
  testName: string;
  orderedOn: string;
  status: 'Pending' | 'Completed';
};

type PatientLabReportListProps = {
  reports: LabReport[];
  onViewReport?: (reportId: string) => void;
};

const PatientLabReportList = ({ reports, onViewReport }: PatientLabReportListProps) => {
  if (reports.length === 0) {
    return (
      <View className="mt-20 items-center">
        <Text className="text-lg text-gray-500">No lab reports yet</Text>
      </View>
    );
  }

  type NavigationProp = NativeStackNavigationProp<RootStackParamList>;
  const navigation = useNavigation<NavigationProp>();

  return (
    <View className="mt-4">
      {reports.map((report, index) => (
        <View
          key={report.id}
          className={`mb-4 rounded-2xl border border-gray-100 bg-white p-5 shadow-sm ${
            index !== reports.length - 1 ? '' : ''
          }`}>
          <View className="flex-row items-start justify-between">
            {/* Left: Test Name + Ordered Date */}
            <View className="flex-1">
              <Text className="text-lg font-semibold text-gray-900">{report.testName}</Text>
              <Text className="mt-1 text-sm text-gray-600">Ordered on: {report.orderedOn}</Text>
            </View>

            {/* Right: Status Badge */}
            <View
              className={`rounded-full px-4 py-2 ${
                report.status === 'Completed' ? 'bg-green-100' : 'bg-amber-100'
              }`}>
              <Text
                className={`text-sm font-medium ${
                  report.status === 'Completed' ? 'text-green-800' : 'text-amber-800'
                }`}>
                {report.status}
              </Text>
            </View>
          </View>

          {/* View Report Link */}
          <TouchableOpacity
            onPress={() => navigation.navigate('ViewReport')}
            className="mt-4 items-end">
            <Text className="font-medium text-blue-600">View Report</Text>
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );
};

export default PatientLabReportList;
