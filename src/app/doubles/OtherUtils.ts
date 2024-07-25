export type StringInfo = {
    lowerCase: string,
    uppercase: string,
    characters: string[],
    length: number,
    extraInfo: Object | undefined,
}

type LoggerServiceCallback = (arg: string) => void;

export const calculateComplexity = (stringInfo: StringInfo) => {
    return Object.keys(stringInfo.extraInfo).length * stringInfo.length;
};

export const toUpperCaseWithCallback = (arg: string, callback: LoggerServiceCallback) => {
    if(!arg) {
        callback('Invalid argument!');
        return;
    }
    callback(`called function with ${arg}`);
    return arg.toUpperCase();
};