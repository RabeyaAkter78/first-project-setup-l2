import app from "./app";
import Config from "./app/Config";
import mongoose from "mongoose";


main().catch(err => console.log(err));

async function main() {

    try {
        await mongoose.connect(Config.database_url as string);

        app.listen(Config.port, () => {
            console.log(`Example app listening on port ${Config.port}`)
        })
    } catch (error) {
        console.log(error);
    }
}

main();


