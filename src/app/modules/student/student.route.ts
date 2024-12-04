import express from 'express';


import { StudentsController } from "./student.controller";
const router = express.Router()

//will call controller function



router.post('/create-student', StudentsController.createStudent);
router.get('/',StudentsController.getAllStudents);
router.get('/:studentID',StudentsController.getSingleStudnet);

export const StudentRoutes = router;