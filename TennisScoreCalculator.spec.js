const score = require("./TennisScoreCalculator").score;

describe("Tennis Calculator", () => {
    it("should score simple scores", () => {
        expect(score(0, 0)).toEqual("Love-Love");
        expect(score(1, 0)).toEqual("Fifteen-Love");
        expect(score(0, 1)).toEqual("Love-Fifteen");
        expect(score(2, 0)).toEqual("Thirty-Love");
        expect(score(0, 2)).toEqual("Love-Thirty");
    });
});