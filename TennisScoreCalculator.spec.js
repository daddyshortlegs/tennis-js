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

    });
});