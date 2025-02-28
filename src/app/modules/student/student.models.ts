/* eslint-disable @typescript-eslint/no-this-alias */

import { Schema, model, } from 'mongoose';
import {
  StudentModel,
  Tguardian,
  TlocalGuardian,
  TStudent,
  TuserName,
} from './student.interface';

const userNameSchema = new Schema<TuserName>({
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
const guardianSchema = new Schema<Tguardian>({
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

const localGuardianSchema = new Schema<TlocalGuardian>({
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
const studentSchema = new Schema<TStudent, StudentModel>({
  id: { type: String, required: true, unique: true }, //unique refess to not duplicate
  user: {
    type: Schema.Types.ObjectId,
    required: [true, 'User id is required'],
    unique: true,
    ref: 'User'
  },

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
  emergencyContactNo: {
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

  isDeleted: {
    type: Boolean,
    default: false
  }
},
  {
    toJSON: {
      virtuals: true
    }
  });

// Virtuals:
studentSchema.virtual('fullName').get(function () {
  return (`${this.name.firstName} ${this.name.middleName} ${this.name.lastName}`)
})



// pre save middleware/hooks:will work on create() and save()



// query middleware:

studentSchema.pre('find', function (next) {
  this.find({ isDeleted: { $ne: true } })
  next();
});

studentSchema.pre('findOne', function (next) {
  // console.log(this)
  this.find({ isDeleted: { $ne: true } })
  next();
})
// aggregate middleware:
studentSchema.pre('aggregate', function (next) {
  this.pipeline().unshift({ $match: { isDeleted: { $ne: true } } })
  next();
});
// creating a custom static method:
studentSchema.statics.isUserExists = async function (id: string) {
  const existingUser = await Student.findOne({ id });
  return existingUser;
}
export const Student = model<TStudent, StudentModel>('Student', studentSchema);
