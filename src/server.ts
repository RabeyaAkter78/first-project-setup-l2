import app from "./app";
import Config from "./app/Config";
import mongoose from "mongoose";


main().catch(err => console.log(err));

async function main() {

    try {
        await mongoose.connect('mongodb://localhost:27017/studentsDB' as string);

        app.listen(5000, () => {
            console.log(`Example app listening on port ${Config.port}`)
        })
    } catch (error) {
        console.log(error);
    }
}




