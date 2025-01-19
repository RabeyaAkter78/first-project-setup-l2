

import express, { Application, Request, Response } from "express"
import cors from "cors";
import cookieParser from 'cookie-parser';
import globalErrorHandler from "./app/middlewares/globalErrorHandler";
import notFound from "./app/middlewares/notFound";
import router from "./app/routes";
const app: Application = express()

// parser:
app.use(express.json());
app.use(cookieParser());
// app.use(cors({ origin: '*' }));
app.use(cors({ origin: 'http://localhost:5174' }));

//Application routes:
app.use('/api/v1', router);




const test = (req: Request, res: Response) => {
    const a = 200;
    res.sendStatus(a);
}

app.get('/', test);

app.use(globalErrorHandler);
// not found
app.use(notFound)



export default app;