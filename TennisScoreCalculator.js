function score(player1Points, player2Points) {

    let maxScore = Math.max(player1Points, player2Points);

    if (maxScore >= 4) {
        if (player1Points !== player2Points) {
            const delta = Math.abs(player1Points - player2Points);
            const playerName = (player1Points > player2Points ? "1" : "2");
            return (delta > 1) ? `Win for player ${playerName}` : `Advantage player ${playerName}`;
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