function score(player1Points, player2Points) {
    let p1Score = "Love";
    let p2score = "Love";
    if (player1Points === 1) {
        p1Score = "Fifteen";
    }
    if (player1Points === 2) {
        p1Score = "Thirty";
    }
    if (player2Points === 1) {
        p2score = "Fifteen";

    }
    return p1Score + "-" + p2score;
}

module.exports = { score };