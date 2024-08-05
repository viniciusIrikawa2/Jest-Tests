jest.mock('../../app/doubles/OtherUtils', () => ({
    ...jest.requireActual('../../app/doubles/OtherUtils'),
    calculateComplexity: () => {return 10}
}));

jest.mock('uuid', () => ({
    v4: () => '123'
}));

import * as OtherUtils from '../../app/doubles/OtherUtils';

describe('Module tests', () => {
    it('calculate complexity', () => {
        const result = OtherUtils.calculateComplexity({} as any);
        expect(result).toBe(10);
    });

    it('keep other functions', () => {
        const result = OtherUtils.toUpperCase('abc');
        expect(result).toBe('ABC');
    });

    it('string with id', () => {
        const result = OtherUtils.toLowerCaseWithId('abc');
        expect(result).toBe('abc123');
    });
});