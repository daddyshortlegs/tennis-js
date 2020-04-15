function score(player1Points, player2Points) {
    p1Score = scoreFor(player1Points);
    p2score = scoreFor(player2Points);
    return p1Score + "-" + p2score;
}

function scoreFor(points) {
    let text = "Love";
    if (points === 1) {
        text = "Fifteen";
    }
    if (points === 2) {
        text = "Thirty";
    }
    if (points === 3) {
        text = "Forty";
    }
    return text;
}

module.exports = { score };