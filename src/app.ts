
import express, { Application, Request, Response } from "express"
import cors from "cors"
import { StudentRoutes } from "./app/modules/student/student.route";
import { userRoutes } from "./app/modules/user/user.route";
const app: Application = express()

// parser:
app.use(express.json());
app.use(cors());

//Application routes:
// app.use('/api/v1/students', StudentRoutes);
app.use('/api/v1/users', userRoutes);




const getAController = (req: Request, res: Response) => {
    const a = 10;
    res.send(a);
}

app.get('/', getAController)

export default app;