import { BlackJackPlayer } from "./BlackJackPlayer.mjs";

export class BlackJackDealer extends BlackJackPlayer {
    constructor(name) {
        this.name = name;
        this.cards = [];
    }


    addCards(cardsToBeAdded) {
        cardsToBeAdded.forEach(card => {
            this.addCard(card);
        })
    }

    addCard(singleCardToBeAdded) {
        this.cards.push(singleCardToBeAdded);
    }

    viewHand() {
        console.print(this.cards)
    }

    hit(incomingCard) {
        this.cards.push(incomingCard);
    }
}