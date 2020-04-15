function score(player1Points, player2Points) {
    if (player1Points === 4 && player1Points > player2Points) {
        return "Win for player 1";
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