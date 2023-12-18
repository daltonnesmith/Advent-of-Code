// logic.ts
import * as fs from "fs";

/**
 * Regex to check for consecutive numbers and shared first/last letter
 */
export function extractNumbers(words: string[]): number[] {
    const numberMapping: { [key: string]: string } = {
        zero: "0",
        one: "1",
        two: "2",
        three: "3",
        four: "4",
        five: "5",
        six: "6",
        seven: "7",
        eight: "8",
        nine: "9",
    };

    // Helper function to extract numeric value from a single word
    //TODO: refactor this has an error - currently only returns the string words and not the numbers
    function extractNumberFromWord(word: string): number {
        for (const key of Object.keys(numberMapping)) {
            word = word.replace(new RegExp(key, "g"), numberMapping[key]);
        }
        return parseInt(word, 10);
    }

    // Map each word to its numeric value
    const numericValues = words.map(extractNumberFromWord);

    // return only the first and last value of each word
    return numericValues.map((value) => {
        const stringValue = value.toString();
        return (
            parseInt(stringValue[0] + stringValue[stringValue.length - 1]) || 0
        );
    });
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
