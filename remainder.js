//Deal Cards for player 2
for (var i = 0; i < 5; i++) {
	var num = Math.floor(Math.random() * cards.length);
	player2Cards.push(cards[num]);
	cards.splice(num, 1)
}
console.log("Cards dealt for Player 2");

var x = Math.floor(Math.random()* player1Cards.length)
droppedCard = player1Cards[x]

// console.log("Player 1 Cards:")
// console.log(player1Cards);

// console.log("Player 2 Cards:")
// console.log(player2Cards);

// console.log("Cards left:")
// console.log(cards)

setTimeout(function() {
	console.log("Player 1 drops card:");
	console.log(droppedCard);

	setTimeout(function() {
		console.log("Player 2 thinking...");
		//Player 2 deciding what card to throw
		//Iterate over each card and compare it to the dropped card
		var possibleCards = []
		player2Cards.forEach(function (card) {
			if (card.type === droppedCard.type) {
				possibleCards.push(card);
			}
		})
		console.log(possibleCards)
	}, 1000);
}, 2000);



// for (var i = 0; i < player1Cards.length; i++) {
// 	if (player2Cards[i].type = droppedCard.type);
// 	possibleCards.push(player2Cards[i])

// }