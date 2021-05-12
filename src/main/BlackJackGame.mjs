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
        deck.shuffle();
        let dealerCard1 = deck.removeAndFetchTopMostCard();
        let dealerCard2 = deck.removeAndFetchTopMostCard();
        this.dealer.addCard(dealerCard1);
        this.dealer.addCard(dealerCard2);

        let playerCard1 = deck.removeAndFetchTopMostCard();
        let playerCard1 = deck.removeAndFetchTopMostCard();
        this.player.addCard(playerCard1);
        this.player.addCard(playerCard2);
    }
}

