import { PasswordChecker } from "../../app/PasswordChecker/PasswordChecker";

describe('PasswordChecker test suite', () => {
    
    let sut: PasswordChecker;

    beforeEach(() => {
        sut = new PasswordChecker();
    });

    it('Should do nothing for the moment', () => {
        sut.checkPassword();
    });

});