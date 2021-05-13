export class Card {
    constructor(rank, suit) {
        this.rank = rank;
        this.suit = suit.toLowerCase();
    }

    isCardRed() {
        return ["hearts", "diamonds"].includes(this.suit.toLowerCase())
    }

    isCardAce() {
        return this.rank == "ace";
    }

    // all card's secondary value is equal to their primary value, except the `ace` card
    getPrimaryCardValue() {
        if(this.rank=="king") {
            return 10;
        } else if(this.rank == "queen") {
            return 10;
        } else if(this.rank == "jack") {
            return 10;
        } else if(this.isCardAce()) {
            return 1;
        }
    }

    // all card's secondary value is equal to their primary value, except the `ace` card
    getSecondaryCardValue() {
        if(!this.isCardAce()) {
            return this.getPrimaryCardValue();
        } else {
            return 11;   
        }
    }

    toString() {
        if(!this.isCardAce()) {
            return {
                "rank": this.rank,
                "suit": this.suit,
                "value": this.getPrimaryCardValue()
            };
        } else {
            return {
                "rank": this.rank,
                "suit": this.suit,
                "primaryValue": this.getPrimaryCardValue(),
                "secondaryValue": this.getPrimaryCardValue(),
            };
        }
    }
}