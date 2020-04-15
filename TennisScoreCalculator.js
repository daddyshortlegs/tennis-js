function score(player1Points, player2Points) {

    let maxScore = Math.max(player1Points, player2Points);

    if (maxScore >= 4) {
        if (player1Points > player2Points) {
            return decideWinner(player1Points, player2Points);
        }

        if (player2Points > player1Points) {
            return decideWinner(player1Points, player2Points);
        }
    }

    if (player2Points === player1Points) {
        return (player1Points >= 3 ? "Deuce" : scoreFor(player1Points) + "-All");
    }

    return scoreFor(player1Points) + "-" + scoreFor(player2Points);
}

function decideWinner(player1Points, player2Points) {
    const delta = Math.abs(player1Points - player2Points);
    const playerName = (player1Points > player2Points ? "1" : "2");

    if (delta > 1) {
        return `Win for player ${playerName}`;
    }
    if (delta === 1) {
        return `Advantage player ${playerName}`;
    }
}

function scoreFor(points) {
    const names = {
        0: "Love",
        1: "Fifteen",
        2: "Thirty",
        3: "Forty"
    }

    return names[points];
}

module.exports = { score };