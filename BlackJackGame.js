class BlackJackGame {
    constructor() {
        this.player = new BlackJackPlayer("Leon");
        this.dealer = new BlackJackPlayer("Dealer");
        this.players = [this.player, this.dealer];    
        this.deck = new Deck();
        this.deck.shuffle();
    }

    play() {
        let deck = this.deck;

        this.dealer.hit(deck);
        this.dealer.hit(deck);
        this.player.hit(deck);
        this.player.hit(deck);
    }

    toString() {
        return JSON.stringify(this);
    }
}

