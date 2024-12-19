import { z } from "zod";

const userNameValidationSchema = z.object({
    firstName: z
        .string()
        .trim()
        .min(1, { message: "First name is required" })
        .max(20, { message: "First name must be less than 20 characters" })
        .refine(
            (value) => value.charAt(0) === value.charAt(0).toUpperCase(),
            { message: "First name must start with a capital letter" }
        ),
    middleName: z.string().optional(),
    lastName: z.string().min(1, { message: "Last name is required" }),
});

// Define guardian schema
const guardianValidationSchema = z.object({
    fatherName: z.string().min(1, { message: "Father's name is required" }),
    fatherOccupation: z
        .string()
        .min(1, { message: "Father's occupation is required" }),
    fatherContactNo: z
        .string()
        .min(1, { message: "Father's contact number is required" }),
    motherName: z.string().min(1, { message: "Mother's name is required" }),
    motherOccupation: z
        .string()
        .min(1, { message: "Mother's occupation is required" }),
    motherContactNo: z
        .string()
        .min(1, { message: "Mother's contact number is required" }),
});

// Define localGuardian schema
const localGuardianValidationSchema = z.object({
    name: z.string().min(1, { message: "Name is required" }),
    occupation: z.string().min(1, { message: "Occupation is required" }),
    contactNo: z.string().min(1, { message: "Contact number is required" }),
    address: z.string().min(1, { message: "Address is required" }),
});
const userNameSchema = z.object({
    firstName: z
        .string()
        .trim()
        .min(1, { message: "First name is required" })
        .max(20, { message: "First name must be less than 20 characters" })
        .refine(
            (value) => value.charAt(0) === value.charAt(0).toUpperCase(),
            { message: "First name must start with a capital letter" }
        ),
    middleName: z.string().optional(),
    lastName: z.string().min(1, { message: "Last name is required" }),
});

// Define guardian schema
const guardianSchema = z.object({
    fatherName: z.string().min(1, { message: "Father's name is required" }),
    fatherOccupation: z
        .string()
        .min(1, { message: "Father's occupation is required" }),
    fatherContactNo: z
        .string()
        .min(1, { message: "Father's contact number is required" }),
    motherName: z.string().min(1, { message: "Mother's name is required" }),
    motherOccupation: z
        .string()
        .min(1, { message: "Mother's occupation is required" }),
    motherContactNo: z
        .string()
        .min(1, { message: "Mother's contact number is required" }),
});

// Define localGuardian schema
const localGuardianSchema = z.object({
    name: z.string().min(1, { message: "Name is required" }),
    occupation: z.string().min(1, { message: "Occupation is required" }),
    contactNo: z.string().min(1, { message: "Contact number is required" }),
    address: z.string().min(1, { message: "Address is required" }),
});

// Define main student schema
const studentValidationSchema = z.object({
    id: z.string().min(1, { message: "ID is required" }),
    name: userNameValidationSchema,
    gender: z.enum(["male", "female", "other"], {
        errorMap: () => ({ message: "Gender must be 'male', 'female', or 'other'" }),
    }),
    dateOfBirth: z.string().optional(),
    email: z
        .string()
        .email({ message: "Invalid email address" })
        .min(1, { message: "Email is required" }),
    contactNumber: z
        .string()
        .min(1, { message: "Contact number is required" }),
    emergencyContactNo: z
        .string()
        .min(1, { message: "Emergency contact number is required" }),
    bloodGroup: z.enum(
        ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"],
        {
            errorMap: () => ({
                message:
                    "Blood group must be one of 'A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'",
            }),
        }
    ),
    presentAddress: z
        .string()
        .min(1, { message: "Present address is required" }),
    permanentAddress: z
        .string()
        .min(1, { message: "Permanent address is required" }),
    guardian: guardianValidationSchema,
    localGuardian: localGuardianValidationSchema,
    profileImg: z.string().optional(),
    isActive: z.enum(["active", "blocked"]).optional().default("active"),
});
export default studentValidationSchema;