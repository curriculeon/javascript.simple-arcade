import { BlackJackPlayer } from "./BlackJackPlayer.mjs";

// Dealer can do everythiong that a BlackJackPlayer can do plus more
// Add additional functionalities in the class below
export class BlackJackDealer extends BlackJackPlayer {
    constructor(name) {
        super(name, []);
    }
}