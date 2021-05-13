let blackJackGame = null;
let currentPlayerNumber = 0;

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



function hitMe() {
	// pop a card from the this.deck to the current player
	// check if current player new points are over 21
	currentPlayer = blackJackGame.currentPlayer;
	let topMostCard = blackJackGame.deck.removeAndFetchTopMostCard();
	currentPlayer.addCard(topMostCard);
	renderCard(topMostCard, currentPlayer.name);
	updatePoints();
	updateDeck();
	check();
	blackJackGame.setCurrentPlayer();
}


function renderCard(card, player) {
	let handId = "hand_" + player;
	console.log(handId);
	let hand = document.getElementById(handId);
	hand.appendChild(getCardUI(card));
}


function getCardUI(card) {
	let cardUiElement = document.createElement("div");
	let icon = card.suit.toLowerCase();
	cardUiElement.className = "card";
	cardUiElement.innerHTML = card.getPrimaryCardValue() + "<br/>" + icon;
	return cardUiElement;
}


function updatePoints() {
	for (var i = 0; i < this.players.length; i++) {
		getPoints(i);
		document.getElementById("points_" + i).innerHTML = this.players[i].Points;
	}
}


function getPoints(playerNumber) {
	return blackJackGame.players[playerNumber].getHandTotal();
}



function updateDeck() {
	let deck = blackJackGame.deck;
	let cards = deck.cards;
	let numberOfCards = cards.length;

	document.getElementById("deckcount").innerHTML = numberOfCards;
}

function check() {
	if (blackJackGame.currentPlayer.getHandTotal() > 21) {
		document.getElementById("status").innerHTML =
			"Player: " + this.players[currentPlayer].ID + " LOST";
		document.getElementById("status").style.display = "inline-block";
		end();
	}
}