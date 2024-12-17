
import Joi from "joi"
// creating a schema validation using Joi:

const userNameValidationSchema = Joi.object({
    firstName: Joi.string()
        .max(20)
        .trim()
        .regex(/^[A-Z][a-z]*$/)
        .required()
        .messages({
            'string.empty': 'First name is required',
            'string.max': 'First name must be less than 20 characters',
            'string.pattern.base': 'First name must start with a capital letter',
        }),
    middleName: Joi.string().optional(),
    lastName: Joi.string()
        .regex(/^[a-zA-Z]+$/)
        .required()
        .messages({
            'string.empty': 'Last name is required',
            'string.pattern.base': '{#value} is not supported',
        }),
});

// Joi schema for guardian
const guardianValidationSchema = Joi.object({
    fatherName: Joi.string().required().messages({ 'string.empty': 'Father name is required' }),
    fatherOccupation: Joi.string().required().messages({ 'string.empty': 'Father occupation is required' }),
    fatherContactNo: Joi.string().required().messages({ 'string.empty': 'Father contact number is required' }),
    motherName: Joi.string().required().messages({ 'string.empty': 'Mother name is required' }),
    motherOccupation: Joi.string().required().messages({ 'string.empty': 'Mother occupation is required' }),
    motherContactNo: Joi.string().required().messages({ 'string.empty': 'Mother contact number is required' }),
});

// Joi schema for localGuardian
const localGuardianValidationSchema = Joi.object({
    name: Joi.string().required().messages({ 'string.empty': 'Name is required' }),
    occupation: Joi.string().required().messages({ 'string.empty': 'Occupation is required' }),
    contactNo: Joi.string().required().messages({ 'string.empty': 'Contact number is required' }),
    address: Joi.string().required().messages({ 'string.empty': 'Address is required' }),
});

// Joi schema for Student
const studentValidationSchema = Joi.object({
    id: Joi.string().required().messages({ 'string.empty': 'ID is required' }),
    name: userNameValidationSchema.required().messages({ 'object.base': 'Name is required' }),
    gender: Joi.string()
        .valid('male', 'female', 'other')
        .required()
        .messages({
            'any.only': '{#value} is not supported',
            'string.empty': 'Gender is required',
        }),
    dateOfBirth: Joi.string().optional(),
    email: Joi.string()
        .email()
        .required()
        .messages({
            'string.empty': 'Email is required',
            'string.email': '{#value} is not supported',
        }),
    contactNumber: Joi.string().required().messages({ 'string.empty': 'Contact number is required' }),
    emergencyContactNo: Joi.string().required().messages({ 'string.empty': 'Emergency contact number is required' }),
    bloodGroup: Joi.string()
        .valid('A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-')
        .required()
        .messages({
            'any.only': "Blood group should be one of 'A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'",
            'string.empty': 'Blood group is required',
        }),
    presentAddress: Joi.string().required().messages({ 'string.empty': 'Present address is required' }),
    permanentAddress: Joi.string().required().messages({ 'string.empty': 'Permanent address is required' }),
    guardian: guardianValidationSchema.required().messages({ 'object.base': 'Guardian is required' }),
    localGuardian: localGuardianValidationSchema.required().messages({ 'object.base': 'Local guardian is required' }),
    profileImg: Joi.string().optional(),
    isActive: Joi.string()
        .valid('active', 'blocked')
        .default('active')
        .messages({ 'any.only': '{#value} is not supported' }),
});

export default studentValidationSchema;