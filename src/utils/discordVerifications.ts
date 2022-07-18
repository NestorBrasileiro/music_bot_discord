import { Encoding } from "crypto";
import { Request, Response } from "express";

export function verifyDiscordRequest (clientKey: string) {

    return (request: Request, response: Response, buffer: Buffer, encoding: Encoding): boolean => {

        // here requests will be verified
        return true;

    }
}


