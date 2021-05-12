import { BlackJackDealer } from "./BlackJackDealer.mjs";
import { BlackJackPlayer } from "./BlackJackPlayer.mjs";
import { Deck } from "./Deck.mjs";

export class BlackJackGame {
    constructor() {
        this.player = new BlackJackPlayer('KP');
        this.dealer = new BlackJackDealer();
    }

    play() {
        const deck = new Deck();
    }
}