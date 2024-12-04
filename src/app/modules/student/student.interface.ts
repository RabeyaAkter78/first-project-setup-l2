// import { Schema, model, connect } from 'mongoose';

export type guardian = {
  fatherName: string;
  fatherOccupation: string;
  fatherContactNo: string;
  motherName: string;
  motherOccupation: string;
  motherContactNo: string;
};
export type localGuardian = {
  name: string;
  occupation: string;
  contactNo: string;
  address: string;
};
export type userName = {
  firstName: string;
  middleName: string;
  lastName: string;
};
export type Student = {
  id: string;
  name: userName;
  gender: 'male| female';
  email: string;
  dateOfBirth?: Student;
  contactNumber: string;
  emergencyCOntactNo: string;
  bloodGroup?: 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-';
  presentAddress: string;
  permanentAddress: string;
  guardian: guardian;
  localGuardian: localGuardian;
  profileImg?: string;
  isActive: 'active|blocked';
};
