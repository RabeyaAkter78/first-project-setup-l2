import { Request, Response } from "express";
import { UserService } from "./user.service";

const createStudent = async (req: Request, res: Response) => {
    try {
        const { password, student: studentData } = req.body;

        // const zodparseData = studentValidationSchema.parse(studentData);

        const result = await UserService.createStudentIntoDB(
            password,
            studentData,
        );

        //send response
        res.status(200).json({
            success: true,
            message: "student created successfully",
            data: result,
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "something went wrong",
            error: error
        })
    }
};
export const UserControllers = {
    createStudent,
}