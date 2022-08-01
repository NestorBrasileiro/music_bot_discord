import { verifyKey } from 'discord-interactions';
import  express from "express";
import { router } from "./routes";
import 'dotenv/config';
import { DiscordMiddleware } from "./utils/DiscordVerifications.middleware";

const app = express();

const { verifyRequest } = new DiscordMiddleware()

const port: string | number = process.env.PORT || 3000;

app.use(express.json({ verify: verifyRequest }))

app.use(router)

app.listen(port, () => {
    console.log(`Running at port ${port}`);
})
