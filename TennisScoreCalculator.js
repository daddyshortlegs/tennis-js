function score(player1Points, player2Points) {
    p1Score = scoreFor(player1Points);
    p2score = scoreFor(player2Points);
    return p1Score + "-" + p2score;
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