import { Init } from './init.js';

export const DhHooks = {
    listen() {
        console.log("Daggerheart | Listening for hooks")
        const listeners = [
            Init
        ]
        for (const listener of listeners) listener.listen();
    }
}