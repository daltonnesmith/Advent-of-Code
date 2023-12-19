/**
 * Run application using: ts-node index.ts
 */

import * as MyLogic from "./MyLogic";

function Main(): void {
    const inputFilePath =
        "C:/Users/dalto/OneDrive/Desktop/Advent of Code/DayOneData.txt";
    /**
     * Advent of Code Day One - Solution
     */
    //#region Day One
    // Replace 'path/to/input.txt' with the actual path to your downloaded input file
    // const inputData = MyLogic.readInputFile(inputFilePath);
    // const textArray = MyLogic.splitTextArray(inputData);
    // const arrayToSum = MyLogic.stringToArrayProcessor(textArray);

    /**
     * Answer to day one of advent code: 54597
     */
    // const sum = arrayToSum.reduce((acc, current) => acc + current, 0);
    // console.log("Answer to day one of advent code: " + sum);
    //#endregion

    /**
     * Advent of Code Day Two - Solution
     */
    //#region Day Two

    const inputData = MyLogic.readInputFile(inputFilePath);
    const textArray = MyLogic.splitTextArray(inputData);

}

Main();
