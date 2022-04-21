//Game of Cards Simulation
//Define Cards
//Generate five random cards player 1
//Generate another five random cards for player 2
//Let player1 drop a random card.
//Let player2 look through cards and find a card that is same and bigger than player1's card.
//If none exists, player2 drops any card
//Reiterate until player2 beats player1's card.
//Leader at the end of the round wins the points.

//declaring of cards.

//SPADES
// Define Cards
// Define Cards
let cards = [
	//Hearts
	{ name: "6 of Hearts", type: "heart", value: 6, winValue: 3 },
	{ name: "7 of Hearts", type: "heart", value: 7, winValue: 2 },
	{ name: "8 of Hearts", type: "heart", value: 8, winValue: 1 },
	{ name: "9 of Hearts", type: "heart", value: 9, winValue: 1 },
	{ name: "10 of Hearts", type: "heart", value: 10, winValue: 1 },
	{ name: "Jack of Hearts", type: "heart", value: 11, winValue: 1 },
	{ name: "Queen of Hearts", type: "heart", value: 12, winValue: 1 },
	{ name: "King of Hearts", type: "heart", value: 13, winValue: 1 },
	{ name: "Ace of Hearts", type: "heart", value: 14, winValue: 1 },
	//Spades
	{ name: "6 of Spades", type: "spade", value: 6, winValue: 3 },
	{ name: "7 of Spades", type: "spade", value: 7, winValue: 2 },
	{ name: "8 of Spades", type: "spade", value: 8, winValue: 1 },
	{ name: "9 of Spades", type: "spade", value: 9, winValue: 1 },
	{ name: "10 of Spades", type: "spade", value: 10, winValue: 1 },
	{ name: "Jack of Spades", type: "spade", value: 11, winValue: 1 },
	{ name: "Queen of Spades", type: "spade", value: 12, winValue: 1 },
	{ name: "King of Spades", type: "spade", value: 13, winValue: 1 },
	{ name: "Ace of Spades", type: "spade", value: 14, winValue: 1 },
	//Clubs
	{ name: "6 of Clubs", type: "club", value: 6, winValue: 3 },
	{ name: "7 of Clubs", type: "club", value: 7, winValue: 2 },
	{ name: "8 of Clubs", type: "club", value: 8, winValue: 1 },
	{ name: "9 of Clubs", type: "club", value: 9, winValue: 1 },
	{ name: "10 of Clubs", type: "club", value: 10, winValue: 1 },
	{ name: "Jack of Clubs", type: "club", value: 11, winValue: 1 },
	{ name: "Queen of Clubs", type: "club", value: 12, winValue: 1 },
	{ name: "King of Clubs", type: "club", value: 13, winValue: 1 },
	{ name: "Ace of Clubs", type: "club", value: 14, winValue: 1 },
	//Diamonds
	{ name: "6 of Diamonds", type: "diamond", value: 6, winValue: 3 },
	{ name: "7 of Diamonds", type: "diamond", value: 7, winValue: 2 },
	{ name: "8 of Diamonds", type: "diamond", value: 8, winValue: 1 },
	{ name: "9 of Diamonds", type: "diamond", value: 9, winValue: 1 },
	{ name: "10 of Diamonds", type: "diamond", value: 10, winValue: 1 },
	{ name: "Jack of Diamonds", type: "diamond", value: 11, winValue: 1 },
	{ name: "Queen of Diamonds", type: "diamond", value: 12, winValue: 1 },
	{ name: "King of Diamonds", type: "diamond", value: 13, winValue: 1 },
	{ name: "Ace of Diamonds", type: "diamond", value: 14, winValue: 1 },
]

player1 = {
	name: "Player 1",
	cards: [],
	cardNames: []
}
player2 = {
	name: "Player 2",
	cards: [],
	cardNames: []
}

let droppedCard
let CurrentlyActiveCard
let nextPlayer = player2
let leadingPlayer = player1


function generateRandomNumber(range) {
	let num = Math.floor(Math.random() * range)
	return num
}

function removeItemOnce(arr, value) {
	var index = arr.indexOf(value);
	if (index > -1) {
		arr.splice(index, 1);
	}
}

function dealCards(player) {
	for (var i = 0; i < 5; i++) {
		var num = generateRandomNumber(cards.length)
		player.cards.push(cards[num]);
		player.cardNames.push(cards[num].name)
		cards.splice(num, 1);
	}
	console.log(`Cards dealt for ${player.name}:`)
	console.log(player.cardNames)
	console.log(`====================================`)
}

function displayWinner() {
	console.log("=====================================")
	console.log("=====================================")
	console.log(`*****   ${leadingPlayer.name} Wins!!!!!!!!!  *****`)
	console.log("=====================================")
	console.log("=====================================")
}


function dropOneCard(player, playerCards) {
	let randomCardIndex = generateRandomNumber(playerCards.length - 1)
	droppedCard = playerCards[randomCardIndex]

	removeItemOnce(player.cards, droppedCard)
	console.log(`${player.name} dropped ${droppedCard.name}.`)
	if (player === leadingPlayer) {
		setActiveCard(droppedCard)
	}
	return droppedCard
}

function setActiveCard(card) {
	CurrentlyActiveCard = card
}

function setNextPlayer() {
	if (nextPlayer === player1) {
		nextPlayer = player2
	} else if (nextPlayer === player2) {
		nextPlayer = player1
	}
}


function dropTwoCards(player, higherCards) {

	let i = generateRandomNumber(higherCards.length - 1)
	let chosenCard = higherCards[i]
	console.log(`${player.name} replied ${droppedCard.name} with ${chosenCard.name}`)
	droppedCard = chosenCard

	//Remove ChosenCard from play cards array
	removeItemOnce(player.cards, chosenCard)

	//Drop New Card
	dropOneCard(player, player.cards)
	setActiveCard(droppedCard)
	leadingPlayer = player
}


function replyDroppedCard(player, { possibleCards, higherPossibleCards }) {
	if(leadingPlayer === player) {
		dropOneCard(player, player.cards)
		return
	}


	if (higherPossibleCards.length > 0) {
		dropTwoCards(player, higherPossibleCards)
	}
	else if (possibleCards.length > 0) {
		dropOneCard(player, possibleCards)
	} else {
		dropOneCard(player, player.cards)
	}
}


function analyseCurrentlyActiveCard(player, currentCard) {
	console.log(`${player.name} Thinking....`);

	var possibleCards = []
	var higherPossibleCards = []

	//Iterate over player cards and decide which ones he can throw
	player.cards.forEach(function (card) {
		if (card.type === currentCard.type) {
			possibleCards.push(card);
		}
	})
	possibleCards.forEach((possibleCard) => {
		possibleCard.value > currentCard.value ? higherPossibleCards.push(possibleCard) : ""
	})

	return {
		possibleCards: possibleCards,
		higherPossibleCards: higherPossibleCards
	}
}


function beginPlayingLoop() {
	for (let i of cards) {
		if (player1.cards.length < 1 && player2.cards.length < 1) {
			displayWinner()
			return
		}

		replyDroppedCard(nextPlayer, analyseCurrentlyActiveCard(nextPlayer, CurrentlyActiveCard))
		setNextPlayer()
		console.log(`Currently Leading: ${CurrentlyActiveCard.name} by ${leadingPlayer.name}`)
		console.log("***")
	}
}


function startGame() {

	setTimeout(() => {
		console.log("GAME STARTED")
		console.log("============")
		
	}, 1000);


	setTimeout(() => {
		dealCards(player1)
	}, 2000)

	setTimeout(() => {
		dealCards(player2)
	}, 3000)

	setTimeout(() => {
		dropOneCard(player1, player1.cards)
	}, 5000);

	setTimeout(() => {
		beginPlayingLoop()
	}, 7000);
}

startGame();
