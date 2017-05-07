// vim: ts=4 et sts=4 sw=4

import { Game, AUTO } from "phaser";
import BootState from "./state_boot";
import LoadState from "./state_load";
import MenuState from "./state_menu";

class MyGame extends Game {
    constructor() {
        super(600, 400, AUTO, "game");
        this.state.add("Boot", BootState, false);
        this.state.add("Load", LoadState, false);
        this.state.add("Menu", MenuState, false);
        this.state.start("Menu");
    }
}

new MyGame();
