import { getStringInfo, StringUtils, toUpperCase } from "../app/Utils";

describe('Utils test suite', () => {   
    
    describe('StringUtils tests', () => {
        
        let sut: StringUtils;

        beforeEach(() => {
            sut = new StringUtils();
            console.log('Setup');
        });
        
        afterEach(() => {
            console.log('Teardown');
        });
        
        it('Should return correct upperCase', () => {
            const sut = new StringUtils();
            const actual = sut.toUpperCase('abc');
            expect(actual).toBe('ABC');
            
            console.log('Actual test');
        });
    });

    it('should return uppercase', () => {
        // Arrange
        const sut = toUpperCase;
        const expected = 'ABC';

        // Act
        const actual = sut('abc');

        // Assert
        expect(actual).toBe(expected);

    });

        // Parametrized tests
        describe('ToUpperCase examples', () => {
            it.each([
                {input: 'abc', expected: 'ABC'},
                {input: 'My-String', expected: 'MY-STRING'},
                {input: 'def', expected: 'DEF'},
            ])('$input toUpperCase should be $expected', ({input, expected}) => {
                const actual = toUpperCase(input);
                expect(actual).toBe(expected);
            });
        });
    
    describe('getStringInfo for arg My-String should', () => {
        test('return right length', () => {
            const actual = getStringInfo('My-String');
            expect(actual.length).toBe(9);
            expect(actual.characters).toHaveLength(9);
        });

        test('return right lower case', () => {
            const actual = getStringInfo('My-String');
            expect(actual.lowerCase).toBe('my-string');  
        });

        test('return right upper case', () => {
            const actual = getStringInfo('My-String');
            expect(actual.uppercase).toBe('MY-STRING');
        });

        test('return extraInfo as empty object', () => {
            const actual = getStringInfo('My-String');
            expect(actual.extraInfo).toEqual({});
        });

        test('return defined extraInfo', () => {
            const actual = getStringInfo('My-String');
            expect(actual.extraInfo).toBeDefined();
        });

        test('return right characters', () => {
            const actual = getStringInfo('My-String');
            expect(actual.characters).toEqual(['M', 'y', '-', 'S', 't', 'r', 'i', 'n', 'g']);
        });
    });
});