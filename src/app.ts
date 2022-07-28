import  express from "express";
import { router } from "./routes";
import 'dotenv/config';

const app = express();

const port: string | number = process.env.PORT || 3000;

app.use(router)

app.listen(port, () => {
    console.log(`Running at port ${port}`);
})
