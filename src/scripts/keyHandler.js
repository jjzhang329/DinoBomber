export default class KeyHandler {
    constructor(){
        this.keys = [];

        window.addEventListener("keydown", (e) => {
            this.keys[e.code] = true;
        })
        window.addEventListener("keyup", (e) => {
            delete this.keys[e.code];
        })
    }
}
