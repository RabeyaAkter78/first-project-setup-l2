import { student } from './student.interface';
import { Request, Response } from "express";
import { StudentServices } from "./student.service";
import Joi from "joi"
// import studentValidationSchema from './student.validation';
import { z } from "zod";
import studentValidationSchema from './student.validation';

const createStudent = async (req: Request, res: Response) => {
    try {
        // valiudate using zod



        const { student: studentData } = req.body;
        // validate using Joi

        // const { error, value } = studentValidationSchema.validate(studentData);
        // console.log({ error }, { value });
        // validation using zod:
        const zodparseData= studentValidationSchema.parse(studentData)

        const result = await StudentServices.createStudentIntoDB(zodparseData);
        // if (error) {
        //     res.status(500).json({
        //         success: false,
        //         message: "something went wrong",
        //         error: error.details
        //     })
        // }
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
        const { studentID } = req.params;
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