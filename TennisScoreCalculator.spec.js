function score(player1Points, player2Points) {
    return "Love-Love";
}

describe("Tennis Calculator", () => {
    it("should score simple scores", () => {
        let result = score(0, 0);
        expect(result).toEqual("Love-Love");
    });
});