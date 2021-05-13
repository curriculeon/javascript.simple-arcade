class Game {
	constructor() {
		this.suits = ["Spades", "Hearts", "Diamonds", "Clubs"];
		this.values = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
		this.deck = new Array();
		this.players = new Array();
		this.currentPlayer = 0;
	}

	createDeck() {
		deck = new Array();
		for (var i = 0; i < this.values.length; i++) {
			for (var x = 0; x < this.suits.length; x++) {
				var weight = parseInt(values[i]);
				if (values[i] == "J" || this.values[i] == "Q" || this.values[i] == "K") weight = 10;
				if (values[i] == "A") weight = 0; // we will come back to this in getPoints()
				var card = {
					Value: this.values[i],
					Suit: this.suits[x],
					Weight: weight
				};
				deck.push(card);
			}
		}
	}

	createPlayers(num) {
		players = new Array();
		for (var i = 1; i <= num; i++) {
			var hand = new Array();
			var player = {
				Name: "Player " + i,
				ID: i,
				Points: 0,
				Hand: hand
			};
			players.push(player);
		}
	}

	createPlayersUI() {
		document.getElementById("players").innerHTML = "";
		for (var i = 0; i < this.players.length; i++) {
			var div_player = document.createElement("div");
			var div_playerid = document.createElement("div");
			var div_hand = document.createElement("div");
			var div_points = document.createElement("div");

			div_points.className = "points";
			div_points.id = "points_" + i;
			div_player.id = "player_" + i;
			div_player.className = "player";
			div_hand.id = "hand_" + i;

			div_playerid.innerHTML = "Player " + this.players[i].ID;
			div_player.appendChild(div_playerid);
			div_player.appendChild(div_hand);
			div_player.appendChild(div_points);
			document.getElementById("players").appendChild(div_player);
		}
	}

	// Random this.deck shuffle -- Fisher-Yates algorithm
	// https://medium.com/@nitinpatel_20236/how-to-shuffle-correctly-shuffle-an-array-in-javascript-15ea3f84bfb
	shuffle() {
		// switch the this.values of two random cards
		for (let i = this.deck.length - 1; i > 0; i--) {
			let j = Math.floor(Math.random() * i);
			let temp = this.deck[i];
			deck[i] = this.deck[j];
			deck[j] = temp;
		}
	}

	startblackjack() {
		document.getElementById("btnStart").value = "restart";
		document.getElementById("status").style.display = "none";
		// deal 2 cards to every player object
		currentPlayer = 0;
		createDeck();
		shuffle();
		createPlayers(2);
		createPlayersUI();
		dealHands();
		document.getElementById("player_" + this.currentPlayer).classList.add("active");
	}

	dealHands() {
		// alternate handing cards to each player
		// 2 cards each
		for (var i = 0; i < 2; i++) {
			for (var x = 0; x < this.players.length; x++) {
				var card = this.deck.pop();
				players[x].Hand.push(card);
				renderCard(card, x);
				updatePoints();
			}
		}
		updateDeck();
	}

	renderCard(card, player) {
		var hand = document.getElementById("hand_" + player);
		hand.appendChild(getCardUI(card));
	}

	getCardUI(card) {
		var cardUiElement = document.createElement("div");
		let icon = "&".concat(card.suit.toLowerCase());
		if (card.suit == "Diamonds") {
			icon = "&diams;";
		}
		cardUiElement.className = "card";
		cardUiElement.innerHTML = card.Value + "<br/>" + icon;
		return cardUiElement;
	}

	// returns the number of points that a player has in hand
	// calculates if there are any aces
	// depending on initial point count, if aces are present, a value of either 1 or 11 will be added to the player's total points
	// if there are no aces, points will be calculated by their pre-assigned weights
	getPoints(playerNumber) {
	return game.players[playerNumber].getHandTotal();
	}

	updatePoints() {
		for (var i = 0; i < this.players.length; i++) {
			getPoints(i);
			document.getElementById("points_" + i).innerHTML = this.players[i].Points;
		}
	}

	hitMe() {
		// pop a card from the this.deck to the current player
		// check if current player new points are over 21
		let this.currentPlayer = game.players[currentPlayerNumber]
		let topMostCard = this.deck.removeAndFetchTopMostCard();
		currentPlayer.addCard(topMostCard);
		renderCard(topMostCard, this.currentPlayerNumber);
		updatePoints();
		updateDeck();
		check();
	}

	stay() {
		// move on to next player, if any
		if (currentPlayer != this.players.length - 1) {
			document
				.getElementById("player_" + this.currentPlayer)
				.classList
				.remove("active");

			currentPlayer += 1;

			document
				.getElementById("player_" + this.currentPlayer)
				.classList
				.add("active");
		} else {
			end();
		}
	}

	end() {
		var winner = -1;
		var score = 0;

		for (var i = 0; i < this.players.length; i++) {
			if (players[i].Points > score && this.players[i].Points < 22) {
				winner = i;
			}

			score = this.players[i].Points;
		}

		document.getElementById("status").innerHTML =
			"Winner: Player " + this.players[winner].ID;
		document.getElementById("status").style.display = "inline-block";
	}

	check() {
		if (players[currentPlayer].Points > 21) {
			document.getElementById("status").innerHTML =
				"Player: " + this.players[currentPlayer].ID + " LOST";
			document.getElementById("status").style.display = "inline-block";
			end();
		}
	}

	updateDeck() {
		document.getElementById("deckcount").innerHTML = this.deck.length;
	}

	init() {
		createDeck();
		shuffle();
		createPlayers(1);
	}
}

let game = new Game();

window.addEventListener("load", game.init);
