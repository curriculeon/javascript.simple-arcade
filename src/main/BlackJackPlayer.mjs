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
        let total = 0;
        this.cards.forEach(currentCard=> {
            let currentCardValue = currentCard.getPrimaryCardValue();
            total += currentCardValue
        })
        return total;
    }
    
    getHandState() {
        let handTotal = this.getHandTotal();
        if(handTotal == 21) {
            return "BLACKJACK!";
        } else if(handTotal > 21) {
            return "BUST";
        } else if(handTotal < 21) {
            return "UNDER";
        }
    }
}