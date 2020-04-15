function score(player1Points, player2Points) {
    if (isWinOrAdvantage(player1Points, player2Points)) {
        if (player1Points !== player2Points) {
            const delta = Math.abs(player1Points - player2Points);
            return `${winOrAdvantage(delta)} player ${winningPlayer(player1Points, player2Points)}`;
        }
    }

    if (player2Points === player1Points) {
        return (player1Points >= 3 ? "Deuce" : scoreFor(player1Points) + "-All");
    }

    return scoreFor(player1Points) + "-" + scoreFor(player2Points);
}

function isWinOrAdvantage(player1Points, player2Points) {
    return Math.max(player1Points, player2Points) >= 4;
}

function winOrAdvantage(delta) {
    return (delta > 1) ? `Win for` : `Advantage`;
}

function winningPlayer(player1Points, player2Points) {
    return (player1Points > player2Points ? "1" : "2");
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