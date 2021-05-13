class BlackJackGame {
    constructor() {
        this.player = new BlackJackPlayer("Leon");
        this.dealer = new BlackJackDealer();
        this.players = [this.player, this.dealer];    
        this.deck = new Deck();
        console.log(this.toString())
    }

    play() {
        let deck = this.deck;
        
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

