import { DHItemSheet } from "../module/item/sheet/sheet.js";  

function registerSheets() {
    console.log ("Daggerheart | Registering Sheets");
    Items.unregisterSheet("core", ItemSheet);
    Items.registerSheet("dh", DHItemSheet, { makeDefault: true } );

    //DocumentsSheetConfig.registerSheet(CONFIG.DH.Token.DocumentClass, "dh", CONFIG.DH.TOKEN.SheetClass, { makeDefault: true});
}

export { registerSheets }