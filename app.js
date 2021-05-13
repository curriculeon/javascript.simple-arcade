let blackJackGame = null;
let currentPlayerNumber = 0;

function startblackjack() {
	blackJackGame = new BlackJackGame();
	document.getElementById("btnStart").value = "restart";
	document.getElementById("status").style.display = "none";
    blackJackGame.play();
	createPlayersUI();
	updateDeck();
	renderCards();
}

function renderCards() {
	blackJackGame.players.forEach(player => {
		player.cards.forEach(card => {
			renderCard(card, player.name);
		});
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
}

function stay() {
	// move on to next player, if any
	if(!blackJackGame.isCurrentPlayerLastPlayer()) {
		let currentPlayer = blackJackGame.currentPlayer;
		let currentPlayerName = currentPlayer.name;
		let elementId = "player_" + currentPlayerName;
		
		document.getElementById(elementId).classList.remove("active");
		blackJackGame.setCurrentPlayer();
		document.getElementById(elementId).classList.add("active");
	} else {
		end();
	}
}

function createPlayersUI() {
	document.getElementById("players").innerHTML = "";
	blackJackGame.players.forEach(player => {
		let playerName = player.name;
		
		// create new web-elements
		let div_player = document.createElement("div");
		let div_playerid = document.createElement("div");
		let div_hand = document.createElement("div");
		let div_points = document.createElement("div");

		// modify the statee of newly created web-elements
		div_player.className = "player";
		div_points.className = "points";
		div_player.id = "player_" + playerName;
		div_points.id = "points_" + playerName;		
		div_hand.id = "hand_" + playerName;
		div_playerid.innerHTML = "Player " + playerName;

		// inject new web-elements into the DOM
		div_player.appendChild(div_playerid);
		div_player.appendChild(div_hand);
		div_player.appendChild(div_points);
		document.getElementById("players").appendChild(div_player);
	});
}



function renderCard(card, playerName) {
	let playerHandId = "hand_" + playerName;
	let hand = document.getElementById(playerHandId);
	let cardUiElement = document.createElement("div");
	cardUiElement.className = "card";
	cardUiElement.innerHTML = card.getPrimaryCardValue() + "<br/>" + card.getIcon();
	hand.appendChild(cardUiElement);
}

function updatePoints() {
	blackJackGame.players.forEach(player => {
		let playerName = player.name;
		let points = player.getHandTotal();
		player.viewHand();
		document.getElementById("points_" + playerName).innerHTML = points;
	})
}


function updateDeck() {
	let deck = blackJackGame.deck;
	let cards = deck.cards;
	let numberOfCards = cards.length;

	document.getElementById("deckcount").innerHTML = numberOfCards;
}

function check() {
	if (blackJackGame.currentPlayer.getHandTotal() > 21) {
		let statusElement = document.getElementById("status");
		statusElement.innerHTML = "Player: " + blackJackGame.currentPlayer.name + " LOST";			
		statusElement.style.display = "inline-block";
		end()
	}
}




function end() {
	let winner = blackJackGame.dealer;
	let dealerScore = blackJackGame.dealer.getHandTotal();
	let playerScore = blackJackGame.player.getHandTotal();
	if (playerScore > dealerScore && playerScore < 22) {
		winner = player;
	}
	document.getElementById("status").innerHTML = "Winner: Player " + winner.name;
	document.getElementById("status").style.display = "inline-block";
}