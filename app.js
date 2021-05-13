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
		player.viewHand();
	});

	createPlayersUI();
}


function createPlayersUI() {
	document.getElementById("players").innerHTML = "";
	blackJackGame.players.forEach(player => {
		let playerNumber = player.name;
		var div_player = document.createElement("div");
		var div_playerid = document.createElement("div");
		var div_hand = document.createElement("div");
		var div_points = document.createElement("div");

	
		div_player.className = "player";
		div_points.className = "points";
		div_player.id = "player_" + playerNumber;
		div_points.id = "points_" + playerNumber;		
		div_hand.id = "hand_" + playerNumber;

		div_playerid.innerHTML = "Player " + playerNumber;

		div_player.appendChild(div_playerid);
		div_player.appendChild(div_hand);
		div_player.appendChild(div_points);
		document.getElementById("players").appendChild(div_player);
	});
}

