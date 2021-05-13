let blackJackGame = null;

function startblackjack() {
	blackJackGame = new BlackJackGame();
	document.getElementById("btnStart").value = "restart";
	document.getElementById("status").style.display = "none";

    blackJackGame.play();
	blackJackGame.players.forEach(player => {
		player.viewHand();
	});

	createPlayersUI();
	updateDeck();
}


function createPlayersUI() {
	document.getElementById("players").innerHTML = "";
	blackJackGame.players.forEach(player => {
		let playerNumber = player.name;
		// create new web-elements
		let div_player = document.createElement("div");
		let div_playerid = document.createElement("div");
		let div_hand = document.createElement("div");
		let div_points = document.createElement("div");

		// modify the statee of newly created web-elements
		div_player.className = "player";
		div_points.className = "points";
		div_player.id = "player_" + playerNumber;
		div_points.id = "points_" + playerNumber;		
		div_hand.id = "hand_" + playerNumber;
		div_playerid.innerHTML = "Player " + playerNumber;

		// inject new web-elements into the DOM
		div_player.appendChild(div_playerid);
		div_player.appendChild(div_hand);
		div_player.appendChild(div_points);
		document.getElementById("players").appendChild(div_player);
	});
}

function updateDeck() {
	let deck = blackJackGame.deck;
	let cards = deck.cards;
	let numberOfCards = cards.length;

	document.getElementById("deckcount").innerHTML = numberOfCards;
}