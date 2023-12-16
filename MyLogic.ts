// logic.ts
class MyLogic {
    private inputString: string;
    private isMatch: boolean;
    private pattern: RegExp;

    constructor(inputString: string) {
        this.inputString = inputString;
        // Regular expression to check for consecutive numbers and shared first/last letter
        this.pattern = /(\d+)|(\b\w(\w)\w*\2\w*\b)/;
        // Use test() to check if the pattern matches the input string
        this.isMatch = this.pattern.test(this.inputString);
    }

    checkMatch(): void {
        // Check if a match is found
        if (this.isMatch) {
            console.log("Match found");
        } else {
            console.log("Match not found");
        }
    }
}
