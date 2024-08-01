import { calculateComplexity, OtherStringUtils, toUpperCaseWithCallback } from "../../app/doubles/OtherUtils";

describe('OtherUtils test suite', () => {
    describe.only('OtherStringUtils tests with spies', () => {
        let sut: OtherStringUtils;

        beforeEach(() => {
            sut = new OtherStringUtils();
        })
    
        test('Use a spy to track calls', () => {
            const toUpperCaseSpy = jest.spyOn(sut, 'toUpperCase');
            sut.toUpperCase('asa');
            expect(toUpperCaseSpy).toHaveBeenCalledWith('asa');
        });

        test('Use a spy to track calls to other module', () => {
            const consoleLogSpy = jest.spyOn(console, 'log');
            sut.logString('abc');
            expect(consoleLogSpy).toHaveBeenCalledWith('abc');
        });

        test('Use a spy to replace the implementation of a method', () => {
            // passing "any" as a type to call a private method
            jest.spyOn(sut as any, 'callExternalService').mockImplementation(() => {
                console.log('calling mocked implementation'); 
            });
            (sut as any).callExternalService();
        });
    });

    describe('Tracking callbacks with Jest mocks', () => {
                
        const callBackMock = jest.fn();

        afterEach(() => {
            jest.clearAllMocks();
        });

        it('Calls callback for invalid argument - track calls', () => {
            const actual = toUpperCaseWithCallback('', callBackMock);
            expect(actual).toBeUndefined();
            expect(callBackMock).toHaveBeenCalledWith('Invalid argument!');
            expect(callBackMock).toHaveBeenCalledTimes(1);
        });

        it('Calls callback for valid argument - track calls', () => {
            const actual = toUpperCaseWithCallback('abc', callBackMock);
            expect(actual).toBe('ABC');
            expect(callBackMock).toHaveBeenCalledWith('called function with abc');
            expect(callBackMock).toHaveBeenCalledTimes(1);
        });
    });

    describe('Tracking callbacks', () => {
        let cbArgs = [];
        let timesCalled = 0;

        const callBackMock = (arg: string) => {
            cbArgs.push(arg);
            timesCalled++;    
        };

        afterEach(() => {
            // clearing tracking fields
            cbArgs = [];
            timesCalled = 0;
        });
        
        it('Calls callback for invalid argument - track calls', () => {
            const actual = toUpperCaseWithCallback('', callBackMock);
            expect(actual).toBeUndefined();
            expect(cbArgs).toContain('Invalid argument!');
            expect(timesCalled).toBe(1);
        });

        it('Calls callback for valid argument - track calls', () => {
            const actual = toUpperCaseWithCallback('abc', callBackMock);
            expect(actual).toBe('ABC');
            expect(cbArgs).toContain('called function with abc');
            expect(timesCalled).toBe(1);
        });
    });

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