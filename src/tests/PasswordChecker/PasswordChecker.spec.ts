import { PasswordChecker, PasswordErrors } from "../../app/PasswordChecker/PasswordChecker";

describe('PasswordChecker test suite', () => {
    
    let sut: PasswordChecker;

    beforeEach(() => {
        sut = new PasswordChecker();
    });

    it('Password with less than 8 chars is invalid', () => {
        const act = sut.checkPassword('1234567');
        expect(act.valid).toBe(false);
        expect(act.reasons).toContain(PasswordErrors.SHORT);
    });
    
    it('Password with more than 8 chars is valid', () => {
        const act = sut.checkPassword('12345678');
        expect(act.reasons).not.toContain(PasswordErrors.SHORT);
    });

    it('Password with no upper case letter is invalid', () => {
        const act = sut.checkPassword('abcd');
        expect(act.valid).toBe(false);
        expect(act.reasons).toContain(PasswordErrors.NO_UPPER_CASE);
    });
    
    it('Password with upper case letter is valid', () => {
        const act = sut.checkPassword('abcD');
        expect(act.reasons).not.toContain(PasswordErrors.NO_UPPER_CASE);
    });

    it('Password with no lower case letter is invalid', () => {
        const act = sut.checkPassword('ABCD');
        expect(act.reasons).toContain(PasswordErrors.NO_LOWER_CASE);
    });

    it('Password with lower case letter is valid', () => {
        const act = sut.checkPassword('ABCDa');
        expect(act.reasons).not.toContain(PasswordErrors.NO_LOWER_CASE);
    });

    it('Complex password is valid', () => {
        const act = sut.checkPassword('1234abcD');
        expect(act.reasons).toHaveLength(0);
        expect(act.valid).toBe(true);
    
    });

    it('Admin password with no number is invalid', () => {
        const act = sut.checkAdminPassword('abcdABCD');
        expect(act.reasons).toContain(PasswordErrors.NO_NUMBER);
        expect(act.valid).toBe(false);
    });

    it('Admin password with no number is valid', () => {
        const act = sut.checkAdminPassword('abcdABCD');
        expect(act.reasons).toContain(PasswordErrors.NO_NUMBER);
        expect(act.valid).toBe(false);
    });
});