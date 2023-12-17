// logic.ts
import * as fs from "fs";

export class MyLogic {
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

/**
 * Read text files
 * @param filePath the path to the designated .txt file
 * @returns string of text in file
 */
export function readInputFile(filePath: string): string {
    try {
        return fs.readFileSync(filePath, "utf-8");
    } catch (error) {
        console.error("Error reading input file:");
        process.exit(1);
    }
}

/**
 * Split text into an array
 * @param input string of text
 * @returns array of strings
 */
export function splitTextArray(input: string): string[] {
    // Split the input string by newline characters
    const lines = input.split("\r\n");

    // Filter out empty lines
    const nonEmptyLines = lines.filter((line) => line.trim() !== "");

    // Split each non-empty line by spaces
    const resultArray: string[] = [];
    nonEmptyLines.forEach((line) => {
        const words = line.split(" ");
        resultArray.push(...words);
    });

    return resultArray;
}

/**
 * Answer to day one of advent code: 273501360
 * @returns array of numbers from the input file
 */
export function stringToArrayProcessor(textArray: string[]): number[] {
    let editString = "";
    let resultArray: number[] = [];

    textArray.forEach((x) => {
        for (let i = 0; i < x.length; i++) {
            let isNumber = !isNaN(Number(x[i]));
            if (isNumber) {
                if (editString.length < 2) {
                    editString += x[i];
                } else if (editString.length === 2) {
                    editString = editString.substring(0, 1);
                    editString += x[i];
                }
            }
            // if the string only has one number duplicate it
            if (editString.length < 2) {
                const duplicate = editString;
                editString += duplicate;
            }
        }
        resultArray.push(parseInt(editString));
        editString = "";
    });

    // Return the final result
    return resultArray;
}
