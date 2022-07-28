import { verifyKey } from 'discord-interactions';
import express, { NextFunction, Router, Request, Response } from "express";
import { DiscordMiddleware } from "./utils/DiscordVerifications.middleware";

const router: Router = Router()
const discordMiddleware = new DiscordMiddleware()

const routes: Array<string> = [
    '/about',
    '/actions',
    '/help'
]

router.use(routes, express.json( { verify: discordMiddleware.verifyRequest } ) )

export { router }

