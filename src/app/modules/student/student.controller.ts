
import { Request, Response } from "express";
import { StudentServices } from "./student.service";

const getAllStudents = async (req: Request, res: Response) => {
    try {
        const result = await StudentServices.getAllStudentsFromDB();
        res.status(200).json({
            success: true,
            message: "students are retrieved successfully",
            data: result,
        })

    } catch (error: any) {
        res.status(500).json({
            success: false,
            message: "something went wrong",
            error: error
        })
    }
};

const getSingleStudnet = async (req: Request, res: Response) => {
    try {
        const { studentID } = req.params;
        const result = await StudentServices.getSingleStudentFromDB(studentID);
        res.status(200).json({
            success: true,
            message: "student is retrieved successfully",
            data: result,
        })
    } catch (error: any) {
        res.status(500).json({
            success: false,
            message: error.message || "something went wrong",
            error: error
        })
    }
};
const deleteStudnet = async (req: Request, res: Response) => {
    try {
        const { studentID } = req.params;
        const result = await StudentServices.deleteStudentFromDB(studentID);
        res.status(200).json({
            success: true,
            message: "student is deleted successfully",
            data: result,
        })
    } catch (error: any) {
        res.status(500).json({
            success: false,
            message: error.message || "something went wrong",
            error: error
        })
    }
}


export const StudentsController = {
    getAllStudents,
    getSingleStudnet,
    deleteStudnet
}