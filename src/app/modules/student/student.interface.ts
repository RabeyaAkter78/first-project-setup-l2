// import { Schema, model, connect } from 'mongoose';

import exp from "constants";
import { promises } from "dns";
import { Model } from "mongoose";


export type TuserName = {
  firstName: string;
  middleName?: string;
  lastName: string;
};
export type Tguardian = {
  fatherName: string;
  fatherOccupation: string;
  fatherContactNo: string;
  motherName: string;
  motherOccupation: string;
  motherContactNo: string;
};
export type TlocalGuardian = {
  name: string;
  occupation: string;
  contactNo: string;
  address: string;
};

export type TStudent = {
  id: string;
  password: string;
  name: TuserName;
  gender: 'male' | 'female' | 'other';
  email: string;
  dateOfBirth?: string;
  contactNumber: string;
  emergencyContactNo: string;
  bloodGroup?: 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-';
  presentAddress: string;
  permanentAddress: string;
  guardian: Tguardian;
  localGuardian: TlocalGuardian;
  profileImg?: string;
  isActive: 'active' | 'blocked';
  isDeleted: boolean;
};

// for creating static:

export interface StudentModel extends Model<TStudent> {
  isUserExists(id: string): Promise<TStudent | null>
}



// for creating instance

// export type StudentMethods = {
//   isUserExists(id: string): Promise<TStudent | null>
// };


// export type studentModel = Model<TStudent, Record<string, never>, StudentMethods>