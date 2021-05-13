class BlackJackGame {
    constructor() {
        this.player = new BlackJackPlayer("Leon");
        this.dealer = new BlackJackDealer();
        this.players = [player, dealer];
        this.deck = new Deck();
    }

    play() {
        this.deck.shuffle();
        this.dealer.hit(deck);
        this.dealer.hit(deck);
        this.player.hit(deck);
        this.player.hit(deck);
    }

    toString() {
        return {
            "players":this.players,
            "deck":this.deck
        };
    }
}

