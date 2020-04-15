function score(player1Points, player2Points) {
    if (player2Points === player1Points) {
        if (player1Points >= 3) {
            return "Deuce";
        }
        return scoreFor(player1Points) + "-All";
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