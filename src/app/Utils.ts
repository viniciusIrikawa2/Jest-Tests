export class StringUtils {
    public toUpperCase(arg: string){
        if(!arg){
            throw new Error('Invalid argument!');
        }
        return toUpperCase(arg);
    }
};

export type StringInfo = {
    lowerCase: string,
    uppercase: string,
    characters: string[],
    length: number,
    extraInfo: Object | undefined,
}

export const toUpperCase = (arg: string) => {
    return arg.toUpperCase();
};

export const getStringInfo = (arg: string): StringInfo => {
    return {
        lowerCase: arg.toLowerCase(),
        uppercase: arg.toUpperCase(),
        characters: Array.from(arg),
        length: arg.length,
        extraInfo: {},
    }
};