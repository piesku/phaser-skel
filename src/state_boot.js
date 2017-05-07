// vim: ts=4 et sts=4 sw=4

import { State, ScaleManager } from "phaser";

export default class BootState extends State {
    preload() {
        // this.game.load.image("loading", "assets/loading.png");
    }

    create() {
        this.scale.scaleMode = ScaleManager.SHOW_ALL;
        this.game.state.start("Load");
    }
}
