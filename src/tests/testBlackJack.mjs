import { BlackJackGame } from "../main/BlackJackGame.mjs";

export function testBlackJack() {
    // given
    let blackJackGame = new BlackJackGame();

    // when    
    blackJackGame.play();

    // then
    console.log(blackJackGame.toString());
}