function score(player1Points, player2Points) {
    p1Score = getP1Score(player1Points);
    p2score = getP2Score(player2Points);
    return p1Score + "-" + p2score;
}

function getP1Score(player1Points) {
    let p1Score = "Love";
    if (player1Points === 1) {
        p1Score = "Fifteen";
    }
    if (player1Points === 2) {
        p1Score = "Thirty";
    }
    return p1Score;
}

function getP2Score(player2Points) {
    let p2score = "Love";
    if (player2Points === 1) {
        p2score = "Fifteen";
    }
    if (player2Points === 2) {
        p2score = "Thirty";
    }
    return p2score;
}

module.exports = { score };