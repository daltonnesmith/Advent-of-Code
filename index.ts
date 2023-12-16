/**
 * Run application using: ts-node index.ts
 */
import * as fs from "fs";

function Main(): void {
    // Replace 'path/to/input.txt' with the actual path to your downloaded input file
    const inputFilePath =
        "C:/Users/dalto/OneDrive/Desktop/Advent of Code/DayOneData.txt";
    const inputData = readInputFile(inputFilePath);
    const textArray = splitTextArray(inputData);
    const arrayToSum = stringToArrayProcessor();

    /**
     * Answer to day one of advent code: 54597
     */
    const sum = arrayToSum.reduce((acc, current) => acc + current, 0);

    /**
     * Answer to day one of advent code: 273501360
     * @returns array of numbers from the input file
     */
    function stringToArrayProcessor(): number[] {
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

    /**
     * Read text files
     * @param filePath the path to the designated .txt file
     * @returns string of text in file
     */
    function readInputFile(filePath: string): string {
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
    function splitTextArray(input: string): string[] {
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
}

Main();
