const score = require("./TennisScoreCalculator").score;

describe("Tennis Calculator", () => {
    it("should score simple scores", () => {
        let result = score(0, 0);
        expect(result).toEqual("Love-Love");
    });
});