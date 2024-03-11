class DHItemSheet extends ItemSheet {
    /** @override */
    static get defaultOptions() {
        return mergeObject(super.defaultOptions, {
            classes: ["dh", "sheet", "item"],
            width: 650,
            height: 510,
            tabs: [{navSelector: ".tabs", contentSelector: ".sheet-body", initial: "overview"}],
            dragDrop: [{dragSelector: null, dropSelector: null}]
        });
    }

    /** @override */
    get template() {
        return `systems/dh/static/templates/item/${this.item.data.type}-sheet.hbs`;
    }

    /** @override */
    getData() {
        const data = super.getData();
        data.config = CONFIG.DH;
        return data;
    }
}

export { DHItemSheet }