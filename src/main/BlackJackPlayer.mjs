export class BlackJackPlayer {
    // a blackjack player should receive a name when created
    // a black jack player's hand is empty until receiving cards from a dealer
    constructor(name) {
        this.name = name;
        this.cards = [];
    }

    // prints the cards of the current BlackJackPlayer
    viewHand() {
        console.print(this.cards)
    }

    // add card to hand (presumably from deck or dealer)
    hit(incomingCard) {
        this.cards.push(incomingCard);
    }

    getHandTotal() {
        
    }
    
    getHandState() {
        if()
    }
}