import Config from "../../Config";
import { TStudent } from "../student/student.interface";
import { Student } from "../student/student.models";
import { TUser } from "./user.interface";
import { User } from "./user.models";

const createStudentIntoDB = async (password: string, studentData: TStudent) => {

    // Create a user object:
    const userData: Partial<TUser> = {}
    // if password is not given, use default password:
    userData.password = password || (Config.default_password as string)
    // set studnet role:
    userData.role = 'student'
    //set manually generated id:
    userData.id = '2030100001'

    // create a user
    const newUser = await User.create(userData);
    // create a student:
    if (Object.keys(newUser).length) {
        // set id,_id as user

        studentData.id = newUser.id;
        studentData.user = newUser._id //reference id
        const newStudent = await Student.create(studentData);
        return newStudent

    }

};



export const UserService = {
    createStudentIntoDB,
}

