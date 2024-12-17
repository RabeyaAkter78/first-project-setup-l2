import validator from 'validator';
import { Schema, model, connect } from 'mongoose';
import {
  guardian,
  localGuardian,
  Student,
  userName,
} from './student.interface';

const userNameSchema = new Schema<userName>({
  firstName: {
    type: String,
    required: [true, 'first name is required'],
    maxlength: [20, 'first name must be less than 20 characters'],
    trim: true,
    // validate: {
    //   validator: function (value: string) {
    //     const fristNameStr = value.charAt(0).toUpperCase() + value.slice(1);
    //     return fristNameStr === value;
    //   },
    //   message: 'first name must start with capital letter',
    // }
  },
  middleName: {
    type: String,
  },
  lastName: {
    type: String,
    required: [true, 'last name is required'],
    // validate: {
    //   validator: (value: string) =>
    //     validator.isAlpha(value),
    //   message: '{VALUE} is not supported'

    // }
  },
});
const guardianSchema = new Schema<guardian>({
  fatherName: {
    type: String,
    required: [true, 'father name is required'],
  },
  fatherOccupation: {
    type: String,
    required: [true, 'father occupation is required'],
  },
  fatherContactNo: {
    type: String,
    required: [true, 'father contact number is required'],
  },
  motherName: {
    type: String,
    required: [true, 'mother name is required'],
  },
  motherOccupation: {
    type: String,
    required: [true, 'mother occupation is required'],
  },
  motherContactNo: {
    type: String,
    required: [true, 'mother contact number is required'],
  },
});

const localGuardianSchema = new Schema<localGuardian>({
  name: {
    type: String,
    required: [true, 'name is required'],
  },
  occupation: {
    type: String,
    required: [true, 'occupation is required'],
  },
  contactNo: {
    type: String,
    required: [true, 'contact number is required'],
  },
  address: {
    type: String,
    required: [true, 'address is required'],
  },
});
const studentSchema = new Schema<Student>({
  id: { type: String, required: true, unique: true }, //unique refess to not duplicate
  name: {
    type: userNameSchema,
    required: [true, 'name is required'],
  },
  gender: {
    type: String,
    enum: {
      values: ['male', 'female', 'other'],
      message: '{VALUE} is not supported',
    },
    required: true,

  },
  dateOfBirth: { type: String },
  email: {
    type: String,
    required: [true, 'email is required'],
    unique: true,
    // validate:{
    //   validator:(value:string)=>validator.isEmail(value),
    //   message:'{VALUE} is not supported'
    // }
  },
  contactNumber: {
    type: String,
    required: [true, 'contact number is required'],
  },
  emergencyCOntactNo: {
    type: String,
    require: [true, 'emergency contact number is required'],
  },
  bloodGroup: {
    type: String,
    enum: {
      values: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
      message: "blood group should be 'A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'",
    },
    required: true,
  },
  presentAddress: {
    type: String,
    require: [true, 'present address is required'],
  },
  permanentAddress: {
    type: String,
    require: [true, 'permanent address is required'],
  },
  guardian: {
    type: guardianSchema,
    required: [true, 'guardian is required'],
  },
  localGuardian: {
    type: localGuardianSchema,
    required: [true, 'local guardian is required'],
  },
  profileImg: {
    type: String,
  },
  isActive: {
    type: String,
    enum: ['active', 'blocked'],
    default: 'active'
  },
});

export const StudentModel = model<Student>('Student', studentSchema);
