function score(player1Points, player2Points) {
    if (player1Points === 1) {
        return "Fifteen-Love";
    }
    if (player2Points === 1) {
        return "Love-Fifteen";
    }
    return "Love-Love";
}

module.exports = { score };