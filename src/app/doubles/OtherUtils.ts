import { v4 } from "uuid";

export type StringInfo = {
    lowerCase: string,
    uppercase: string,
    characters: string[],
    length: number,
    extraInfo: Object | undefined,
}

type LoggerServiceCallback = (arg: string) => void;

export const toUpperCase = (arg: string) => {
    return arg.toUpperCase();
};

export const toLowerCaseWithId = (arg: string) => {
    return arg.toLowerCase() + v4();
};

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

export class OtherStringUtils{

    private callExternalService() {
        console.log('Calling external service...');
    };

    public toUpperCase(arg: string){
        return arg.toUpperCase();
    };

    public logString(arg: string){
        console.log(arg);        
    };
};