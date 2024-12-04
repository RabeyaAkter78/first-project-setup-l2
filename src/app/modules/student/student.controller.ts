import { student } from './student.interface';
import { Request, Response } from "express";
import { StudentServices } from "./student.service";

const createStudent = async (req: Request, res: Response) => {
    try {
        const { student: studentData } = req.body;
        const result = await StudentServices.createStudentIntoDB(studentData)
        //send response
        res.status(200).json({
            success: true,
            message: "student created successfully",
            data: result,
        })

    } catch (error) {
        console.log(error)
    }
};

const getAllStudents = async (req: Request, res: Response) => {
    try {
        const result = await StudentServices.getAllStudentsFromDB();
        res.status(200).json({
            success: true,
            message: "students are retrieved successfully",
            data: result,
        })

    } catch (error) {
        console.log(error)
    }
};

const getSingleStudnet = async (req: Request, res: Response) => {
    try {
        const {studentID} = req.params;
        const result = await StudentServices.getSingleStudentFromDB(studentID);
        res.status(200).json({
            success: true,
            message: "student is retrieved successfully",
            data: result,
        })
    } catch (error) {
        console.log(error)
    }
}


export const StudentsController = {
    createStudent,
    getAllStudents,
    getSingleStudnet
}