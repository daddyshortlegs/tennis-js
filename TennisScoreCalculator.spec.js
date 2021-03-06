const score = require("./TennisScoreCalculator").score;

describe("Tennis Calculator", () => {
    it("should score simple scores", () => {
        expect(score(1, 0)).toEqual("Fifteen-Love");
        expect(score(0, 1)).toEqual("Love-Fifteen");
        expect(score(2, 0)).toEqual("Thirty-Love");
        expect(score(0, 2)).toEqual("Love-Thirty");
        expect(score(2, 1)).toEqual("Thirty-Fifteen");
        expect(score(1, 2)).toEqual("Fifteen-Thirty");
        expect(score(3, 0)).toEqual("Forty-Love");
        expect(score(0, 3)).toEqual("Love-Forty");
    });

    it("should score ties", () => {
        expect(score(0, 0)).toEqual("Love-All");
        expect(score(1, 1)).toEqual("Fifteen-All");
        expect(score(2, 2)).toEqual("Thirty-All");
        expect(score(3, 3)).toEqual("Deuce");
        expect(score(4, 4)).toEqual("Deuce");
    });

    it("should score winner", () => {
        expect(score(4, 0)).toEqual("Win for player 1");
        expect(score(4, 1)).toEqual("Win for player 1");
        expect(score(4, 2)).toEqual("Win for player 1");
        expect(score(0, 4)).toEqual("Win for player 2");
        expect(score(1, 4)).toEqual("Win for player 2");
        expect(score(2, 4)).toEqual("Win for player 2");
    });

    it("should be an advantage", () => {
        expect(score(4, 3)).toEqual("Advantage player 1");
        expect(score(3, 4)).toEqual("Advantage player 2");
        expect(score(8, 7)).toEqual("Advantage player 1");
        expect(score(7, 8)).toEqual("Advantage player 2");

    });
});