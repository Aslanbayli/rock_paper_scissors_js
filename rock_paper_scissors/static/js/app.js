function rpsGame(yourChoice) {
    console.log(yourChoice.id);

    let humanChoice, botChoice;
    humanChoice = yourChoice.id;
    botChoice = numberToChoice(randomToRPS());
    console.log(botChoice);

    results = decideWinner(humanChoice, botChoice);
    console.log(results);
    message = finalMessage(results);
    console.log(message);
    rpsForntEnd(yourChoice.id, botChoice, message);
}

function randomToRPS() {
    return Math.floor(Math.random() * 3);
}

function numberToChoice(num) {
    return ["rock", "paper", "scissors"][num];
}

function decideWinner(yourChoice, computerChoice) {
    let rpsDatabase = {
        rock: { scissors: 1, rock: 0.5, paper: 0 },
        paper: { rock: 1, paper: 0.5, scissors: 0 },
        scissors: { paper: 1, scissors: 0.5, rock: 0 }
    }

    let yourScore = rpsDatabase[yourChoice][computerChoice];
    let computerScore = rpsDatabase[computerChoice][yourChoice];

    return [yourScore, computerScore];
}

function finalMessage([yourScore, computerScore]) {
    if (yourScore === 0) {
        return { message: "You lost!", color: "red" };
    } else if (yourScore === 0.5) {
        return { message: "You tied!", color: "yellow" };
    } else {
        return { message: "You won!", color: "green" };
    }
}

function rpsForntEnd(humanImageChoice, botImageChoice, finalMessage) {
    let imagesDb = {
        rock: document.getElementById('rock').src,
        paper: document.getElementById('paper').src,
        scissors: document.getElementById('scissors').src
    }

    //remove all images
    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove();

    //create new images
    let humanDiv = document.createElement('div');
    let botDiv = document.createElement('div');
    let messageDiv = document.createElement('div');

    humanDiv.innerHTML = "<img src='" + imagesDb[humanImageChoice] + "' height=200 width=200 style='box-shadow: 0px 10px 50px rgba(37, 50, 233, 1)'>"
    messageDiv.innerHTML = "<h1 style='color: " + finalMessage['color'] + "; font-size: 60px; padding: 30px; '>" + finalMessage['message'] + "</h1>"
    botDiv.innerHTML = "<img src='" + imagesDb[botImageChoice] + "' height=200 width=200 style='box-shadow: 0px 10px 50px rgba(243, 38, 24, 1)'>"

    document.getElementById('flexbox-rps-div').appendChild(humanDiv);
    document.getElementById('flexbox-rps-div').appendChild(messageDiv);
    document.getElementById('flexbox-rps-div').appendChild(botDiv);
}
