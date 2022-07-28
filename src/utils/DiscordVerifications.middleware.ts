import { verifyKey } from "discord-interactions";
import { IncomingMessage, ServerResponse } from "http";

enum DISCORD_HEADERS {
    'X-Signature-Ed25519' = 'x-signature-ed25519',
    'X-Signature-Timestamp' = 'x-signature-timestamp'
}

export class DiscordMiddleware {

    async verifyRequest(request: IncomingMessage, response: ServerResponse, buffer: Buffer, encoding: string ) {

        try{
            
            const key: string | undefined = process.env.APP_PK;

            if(!key){
                throw new Error("App public key is mandatory to continue")
            }
            
            const signature: string = request.headers[DISCORD_HEADERS["X-Signature-Ed25519"]] as string;
    
            const timestamp: string = request.headers[DISCORD_HEADERS["X-Signature-Timestamp"]] as string;

            if(signature && timestamp){
                const isValidRequest: boolean = await verifyKey(buffer, signature, timestamp, key);
                console.log(isValidRequest)
                if(isValidRequest){
                    return;
                }

            }
            response.statusCode = 401;
            response.statusMessage = "Bad request";
            response.end()
            throw new Error("Bad request signature")


        }catch(error: any){
            if(error instanceof TypeError){
                console.error(error)
                response.statusCode = 422;
                response.statusMessage = "Unprocessable Entity";
                response.end()
            }
            response.statusCode = 500;
            response.statusMessage = "Internal Server Error";
            response.end()
            throw new Error(error.message)
        }
    }

}


