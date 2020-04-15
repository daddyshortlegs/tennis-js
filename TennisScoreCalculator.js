function score(player1Points, player2Points) {
    const delta = Math.abs(player1Points - player2Points);
    if (player1Points === 4) {
        if (delta > 1) {
            return "Win for player 1";
        }
        if (delta === 1) {
            return "Advantage player 1";
        }
    }

    if (player2Points === 4) {
        if (delta > 1) {
            return "Win for player 2";
        }
    }


    if (player2Points === player1Points) {
        return (player1Points >= 3 ? "Deuce" : scoreFor(player1Points) + "-All");
    }

    return scoreFor(player1Points) + "-" + scoreFor(player2Points);
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