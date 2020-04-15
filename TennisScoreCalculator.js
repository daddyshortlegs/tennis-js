function score(player1Points, player2Points) {
    if (player1Points === 1) {
        return "Fifteen-Love";
    }
    return "Love-Love";
}

module.exports = { score };