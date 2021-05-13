
function createPlayersUI() {
	document.getElementById("players").innerHTML = "";
	for (var i = 0; i < players.length; i++) {
		var div_player = document.createElement("div");
		var div_playerid = document.createElement("div");
		var div_hand = document.createElement("div");
		var div_points = document.createElement("div");

		div_points.className = "points";
		div_points.id = "points_" + i;
		div_player.id = "player_" + i;
		div_player.className = "player";
		div_hand.id = "hand_" + i;

		div_playerid.innerHTML = "Player " + players[i].ID;
		div_player.appendChild(div_playerid);
		div_player.appendChild(div_hand);
		div_player.appendChild(div_points);
		document.getElementById("players").appendChild(div_player);
	}
}


function renderPlayerCard(card) {
    renderCard(card, 1);
}

function renderDealerCard(card) {
    renderCard(card, 1);
}

function renderCard(card, player) {
	var hand = document.getElementById("hand_" + player);
	hand.appendChild(getCardUI(card));
}

function getCardUI(card) {
	var cardUiElement = document.createElement("div");
	let icon = "&".concat(card.suit.toLowerCase());
	if (card.suit == "Diamonds") {
		icon = "&diams;";
	}
	cardUiElement.className = "card";
	cardUiElement.innerHTML = card.Value + "<br/>" + icon;
	return cardUiElement;
}