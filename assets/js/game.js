const game = {
	mysteryWord: '',
	wordBank: ["crack", "shot", "game", "string", "freedom", "afraid", "they", "social", "sale", "butter", "flew", "plural", "sit", "brought", "for", "religious", "police", "couple", "dark", "plain", "beauty", "of", "applied", "clothes", "purple", "slight", "constantly", "active", "frog", "made", "taste", "carbon", "closer", "hit", "voyage", "folks", "kept", "hay", "thirty", "successful", "present", "thought", "rush", "sharp", "mainly", "earn", "everyone", "suit", "vast", "list", "western", "indicate", "donkey", "rope", "familiar", "third", "quite", "bent", "motion", "exactly", "sure", "nodded", "car", "back", "dear", "education", "did", "spread", "species", "engineer", "until", "purpose", "leader", "process", "think", "rhythm", "expect", "else", "once", "everybody", "tax", "oldest", "hide", "party", "nest", "sound", "improve", "lower", "simply", "please", "vegetable", "worried", "willing", "who", "needs", "ranch", "slip", "letter",
		"typical", "simply", "meet", "how", "particular", "passage", "gently", "remember", "particles", "took", "everyone", "height", "matter", "iron", "end", "themselves", "hurried", "regular", "city", "man", "nearer", "yet", "solve", "club", "suddenly", "physical", "scene", "describe", "studying", "before", "office", "hunter", "tie", "strip", "other", "such", "save", "slightly", "draw", "seems", "rush", "grabbed", "slipped", "outside", "even", "so", "trade", "substance", "ball", "frequently", "tank", "ready", "forest", "second", "well", "lake", "equator", "society", "according", "price", "tax", "simple", "noun", "win", "operation", "he", "any", "support", "noise", "neighbor", "kitchen", "told", "affect", "scientific", "sugar", "mistake", "rate", "sing", "scientific", "loose", "am", "disappear", "breakfast", "wide", "horse", "believed", "piece", "drawn", "riding", "giving", "unhappy", "nearly", "magnet", "sides", "tomorrow", "wait", "tight", "sang"
	],
	guessedLetters: [],
	won: false,
	wordSelect: function () {
		return game.wordBank[Math.floor(Math.random() * game.wordBank.length)]
	},
	drawBlank: function () {
		var blank = document.createElement('div');
		blank.className = 'blank';
		blank.textContent = '_';
		document.querySelector('#game').appendChild(blank);
	},
	keyPressed: function (e) {
		let keyChar = String.fromCharCode(e.keyCode);
		let arr = [];
		game.guessedLetters.push(keyChar);
		for (var i = 0; i < game.mysteryWord.length; i++) {
			if (game.mysteryWord[i] == keyChar) {
				document.querySelector('#game').children[i].textContent = keyChar;
			}
			arr.push(document.querySelector('#game').children[i].textContent);
		}

		function isBlank(element) {
			return element === '_';
		}
		if (arr.some(isBlank)) {
			game.won = false;
		} else {
			game.won = true;
		}
		if (game.won == true) {
			game.win();
		}
		document.querySelector('#guessed').textContent += keyChar;
	},
	win: function () {
		let banner = document.createElement('div');
		banner.textContent = 'you won!';
		document.querySelector('#game').appendChild(banner);
		document.removeEventListener('keypress', game.keyPressed);
	},

	reset: function () {
		guessedLetters = [];
		document.querySelector('#game').innerHTML = '';
		document.querySelector('#guessed').innerHTML = '';
	},
}


document.querySelector('#new-game').onclick = function () {
	game.reset();
	game.mysteryWord = game.wordSelect();
	for (var i = 0; i < game.mysteryWord.length; i++) {
		game.drawBlank();
	}
}

document.addEventListener('keypress', game.keyPressed);