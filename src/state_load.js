// vim: ts=4 et sts=4 sw=4

import { State } from "phaser";

export default class LoadState extends State {
    preload() {
        // const loading_bar = this.add.sprite(160,240, "loading");
        // loading_bar.anchor.setTo(0.5,0.5);
        // this.load.setPreloadSprite(loading_bar);

        // this.game.load.image("play","assets/play.png");
    }

    create() {
        this.game.state.start("Menu");
    }
}
