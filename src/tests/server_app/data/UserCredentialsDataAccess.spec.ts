import { DataBase } from "../../../app/server_app/data/DataBase";
import { UserCredentialsDataAccess } from "../../../app/server_app/data/UserCredentialsDataAccess";
import { Account } from "../../../app/server_app/model/AuthModel";

const insertMock = jest.fn();
const getByMock = jest.fn();

jest.mock('../../../app/server_app/data/DataBase', () => {
    return {
        DataBase: jest.fn().mockImplementation(() => {
            return {
                insert: insertMock,
                getBy: getByMock,
            }
        })
    }
})

describe('UserCredentialsDataAccess test suite', () => {
    let sut: UserCredentialsDataAccess;

    const someAccount: Account = {
        id: '',
        userName: 'john',
        password: '321',
    };

    const someID = '1423';

    beforeEach(() => {
        sut = new UserCredentialsDataAccess();
        expect(DataBase).toHaveBeenCalledTimes(1);
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    it('should add user and return the id', async() => {
        insertMock.mockResolvedValueOnce(someID);

        const actualID = await sut.addUser(someAccount);

        expect(actualID).toBe(someID);
        expect(insertMock).toHaveBeenCalledWith(someAccount);

    });

    it('should return the user by id', async() => {
        getByMock.mockResolvedValueOnce(someAccount);

        const actualUser = await sut.getUserById(someID);

        expect(actualUser).toEqual(someAccount);
        expect(getByMock).toHaveBeenCalledWith('id', someID);
    });

    it('should return the user by name', async() => {
        getByMock.mockResolvedValueOnce(someAccount);

        const actualUser = await sut.getUserByUserName(someAccount.userName);

        expect(actualUser).toEqual(someAccount);
        expect(getByMock).toHaveBeenCalledWith('userName', someAccount.userName);
    });
});