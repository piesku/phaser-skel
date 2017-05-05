// vim: ts=4 et sts=4 sw=4

import { State } from "phaser";
import TitleText from "./title_text";

export default class Hello extends State {
    create() {
        const { centerX, centerY } = this.game.world;
        const text = new TitleText(
            this.game, centerX, centerY, "Hello, world!"
        );
        text.anchor.set(0.5);
    }
}
