import { InteractionResponseType, InteractionType, verifyKeyMiddleware } from "discord-interactions";
import express, { Router } from "express";
import { DiscordMiddleware } from "./utils/DiscordVerifications.middleware";

const router: Router = Router()

const postRoutes: Array<string> = [
    '/interactions',
    '/terms-of-service',
    '/help'
]

router.post(postRoutes, (request, response, next) => {

    response.send({
        type: InteractionResponseType.PONG
    })
    
})

export { router }

