import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Tabs from './Tabs';
import ViewBill from '../components/patient/ViewBill';
import PatientProfileScreen from 'components/patient/patient-profile/PatientDetailProfile';
import CreatePrescription from 'components/home/CreatePrescription';
import { NewPatients } from 'components/patient/NewPatient';
import Appointments from 'components/home/Appointments';
import FollowUp from 'components/home/FollowUpHome';
import ViewReportScreen from 'components/patient/ViewReport';
import GenerateBill from 'components/Bills/GenerateBill';
import AddLabTest from 'components/patient/patient-detail-tab/AddLabTest';
import AddVisit from 'components/patient/patient-detail-tab/AddVisit';
import InvoiceScreen from 'components/patient/ViewBill';
import Notifications from 'components/home/Notifications';
import NewAppointment from 'components/appointment/NewAppointment';

export type RootStackParamList = {
  Tabs: undefined;
  ViewBill: { billId: number };
  PatientProfile: { patientId: string } | undefined;
  NewPatient: undefined;
  Prescription: undefined;
  Appointments: undefined;
  FollowUp: undefined;
  ViewReport: undefined;
  GenerateBill: undefined;
  AddLabTest: undefined;
  AddVisit: undefined;
  Invoice: undefined;
  Notifications: undefined;
  NewAppointments: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Tabs" component={Tabs} />
      <Stack.Screen name="ViewBill" component={ViewBill} />
      <Stack.Screen name="PatientProfile" component={PatientProfileScreen} />
      <Stack.Screen name="NewPatient" component={NewPatients} />
      <Stack.Screen name="Prescription" component={CreatePrescription} />
      <Stack.Screen name="Appointments" component={Appointments} />
      <Stack.Screen name="FollowUp" component={FollowUp} />
      <Stack.Screen name="ViewReport" component={ViewReportScreen} />
      <Stack.Screen name="GenerateBill" component={GenerateBill} />
      <Stack.Screen name="AddLabTest" component={AddLabTest} />
      <Stack.Screen name="AddVisit" component={AddVisit} />
      <Stack.Screen name="Invoice" component={InvoiceScreen} />
      <Stack.Screen name="Notifications" component={Notifications} />
      <Stack.Screen name="NewAppointments" component={NewAppointment} />
    </Stack.Navigator>
  );
};

export default RootNavigator;
