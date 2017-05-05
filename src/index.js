// vim: ts=4 et sts=4 sw=4

import { Game, AUTO } from "phaser";
import Hello from "./state_hello";

class MyGame extends Game {
    constructor() {
        super(500, 500, AUTO, "game");
        this.state.add("Hello", Hello, false);
        this.state.start("Hello");
    }
}

new MyGame();
