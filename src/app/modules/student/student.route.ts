import express from 'express';


import { StudentsController } from "./student.controller";
const router = express.Router()

//will call controller function



router.get('/', StudentsController.getAllStudents);
router.get('/:studentID', StudentsController.getSingleStudnet);
router.delete('/:studentID', StudentsController.deleteStudnet);


export const StudentRoutes = router;