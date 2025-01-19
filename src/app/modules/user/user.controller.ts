import httpStatus from 'http-status';
import { NextFunction, Request, Response } from "express";
import { UserService } from "./user.service";
import sendResponse from "../../utils/sendResponse";

const createStudent = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { password, student: studentData } = req.body;

        // const zodparseData = studentValidationSchema.parse(studentData);

        const result = await UserService.createStudentIntoDB(
            password,
            studentData,
        );


        sendResponse(res, {
            statusCode: httpStatus.OK,
            success: true,
            message: "student created successfully",
            data: result
        });

    } catch (error) {
        next(error)
    }
};
export const UserControllers = {
    createStudent,
}