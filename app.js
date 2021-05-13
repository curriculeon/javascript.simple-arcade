let blackJackGame = null;
let deck = null;
let player = null;
let dealer = null;


function startblackjack() {
	blackJackGame = new BlackJackGame();
	document.getElementById("btnStart").value = "restart";
	document.getElementById("status").style.display = "none";

	console.log(blackJackGame.toString())
    blackJackGame.play();
	blackJackGame.players.forEach(player => {
		players.viewHand();
	})
}