// vim: ts=4 et sts=4 sw=4

import { State } from "phaser";
import TitleText from "./title_text";

export default class MenuState extends State {
    create() {
        const { centerX, centerY } = this.game.world;
        const text = new TitleText(
            this.game, centerX, centerY, "Hello, world!"
        );
        text.anchor.set(0.5);

        // const play_btn = this.game.add.button(
        //     160, 320, "play", () => this.game.state.start("Game")
        // );
        // play_btn.anchor.setTo(0.5,0.5);
    }
}
