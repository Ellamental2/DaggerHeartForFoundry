import { DH } from "../config/config.js";
import { registerSheets } from "../sheets.js";

export const Init = {
    listen() {
        Hooks.on("init", () => {
            console.log("Daggerheart | Initializing")
            CONFIG.DH = DH;
            registerSheets();
        });
    }
}