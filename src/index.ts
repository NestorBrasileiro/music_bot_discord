
import  express, { Response, Request }  from "express";import { verifyDiscordRequest } from "./utils/discordVerifications";
 "express";

const app = express();
const port: string | number = process.env.PORT || 3000;

app.use(express.json({ verify: verifyDiscordRequest(process.env.APP_PK as string)})) // verification needs to be refactored

app.get("/", (request: Request, response: Response) => {

    console.log(`Ping recebido às ${ new Date().toLocaleTimeString('pt-br')}`)

    response.sendStatus(200)

})

app.listen(port, () => {
    console.log(`Running at port ${port}`);
})


