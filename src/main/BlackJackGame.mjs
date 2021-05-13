import { BlackJackDealer } from "./BlackJackDealer.mjs";
import { BlackJackPlayer } from "./BlackJackPlayer.mjs";
import { Deck } from "./Deck.mjs";

export class BlackJackGame {
    constructor() {
        this.player = new BlackJackPlayer("Leon");
        this.dealer = new BlackJackDealer();
    }

    play() {
        const deck = new Deck();
        deck.shuffle();
        this.dealer.hit(deck);
        this.dealer.hit(deck);
        this.player.hit(deck);
        this.player.hit(deck);
    }
}

