import { calculateComplexity, toUpperCaseWithCallback } from "../../app/doubles/OtherUtils";

describe('OtherUtils test suite', () => {
    it('Calculates complexity', () => {
        const someInfo = {
            length: 5,
            extraInfo: {
                field1: 'Some info',
                filed2: 'Some info2'
            },
        }
        const actual = calculateComplexity(someInfo as any);
        expect(actual).toBe(10);

    });

    it('ToUpperCase - calls callback for invalid argument', () => {
        const actual = toUpperCaseWithCallback('', () => {});
        expect(actual).toBeUndefined();
    });

    it('ToUpperCase - calls callback for valid argument', () => {
        const actual = toUpperCaseWithCallback('abc', () => {});
        expect(actual).toBe('ABC');
    });
});