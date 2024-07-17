import { PasswordChecker } from "../../app/PasswordChecker/PasswordChecker";

describe('PasswordChecker test suite', () => {
    
    let sut: PasswordChecker;

    beforeEach(() => {
        sut = new PasswordChecker();
    });

    it('Password with less than 8 chars is invalid', () => {
        const act = sut.checkPassword('12345');
        expect(act).toBe(false);
    });
    
    it('Password with more than 8 chars is valid', () => {
        const act = sut.checkPassword('12345678Aa');
        expect(act).toBe(true);
    });

    it('Password with no upper case letter is invalid', () => {
        const act = sut.checkPassword('1234abcd');
        expect(act).toBe(false);
    });

    it('Password with upper case letter is valid', () => {
        const act = sut.checkPassword('1234abcdA');
        expect(act).toBe(true);
    });

    it('Password with no lower case letter is invalid', () => {
        const act = sut.checkPassword('1234ABCD');
        expect(act).toBe(false);
    });

    it('Password with lower case letter is valid', () => {
        const act = sut.checkPassword('1234ABCDa');
        expect(act).toBe(true);
    });

});