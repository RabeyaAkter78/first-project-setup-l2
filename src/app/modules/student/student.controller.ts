/* eslint-disable @typescript-eslint/no-explicit-any */
import httpStatus from 'http-status';

import { NextFunction, Request, Response } from "express";
import { StudentServices } from "./student.service";
import sendResponse from "../../utils/sendResponse";

const getAllStudents = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await StudentServices.getAllStudentsFromDB();
        res.status(200).json({
            success: true,
            message: "students are retrieved successfully",
            data: result,
        })

    } catch (error: any) {
        next(error)
    }
};

const getSingleStudnet = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { studentID } = req.params;
        const result = await StudentServices.getSingleStudentFromDB(studentID);
        sendResponse(res, {
            statusCode: httpStatus.OK,
            success: true,
            message: "student is retrieved successfully",
            data: result
        });
    } catch (error: any) {
        next(error)
    }
};
const deleteStudnet = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { studentID } = req.params;
        const result = await StudentServices.deleteStudentFromDB(studentID);
        sendResponse(res, {
            statusCode: httpStatus.OK,
            success: true,
            message: "student is deleted successfully",
            data: result
        });
    } catch (error: any) {
        next(error)
    }
}


export const StudentsController = {
    getAllStudents,
    getSingleStudnet,
    deleteStudnet
}