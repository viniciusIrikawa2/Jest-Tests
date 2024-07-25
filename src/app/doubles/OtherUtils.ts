import { string } from "yargs";

export type StringInfo = {
    lowerCase: string,
    uppercase: string,
    characters: string[],
    length: number,
    extraInfo: Object | undefined,
}

export const calculateComplexity = (stringInfo: StringInfo) => {
    return Object.keys(stringInfo.extraInfo).length * stringInfo.length;
};