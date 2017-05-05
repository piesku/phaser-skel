// vim: ts=4 et sts=4 sw=4

import { Text } from "phaser";

export default class TitleText extends Text {
    constructor(game, x, y, text) {
        super(game, x, y, text, {
            font: "45px Arial",
            fill: "#ff0",
            align: "center"
        });

        this.game.stage.addChild(this);
    }
}
