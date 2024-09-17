import { getRequestBody } from "../../../app/server_app/utils/Utils";
import { IncomingMessage } from "http";

const requestMock = {
    on: jest.fn()
};

const someObject = {
    name: 'John',
    age: 30,
    city: 'Paris'
};

const someObjectAsString = JSON.stringify(someObject);

describe('getRequestBody test suite', () => {

    it('should return object for valid JSON', async () => {
        requestMock.on.mockImplementation((event, cb) => {
            if(event === 'data'){
                cb(someObjectAsString);
            }else {
                cb();
            }
        });

        const actual = await getRequestBody(requestMock as any as IncomingMessage);
        expect(actual).toEqual(someObject);
    });

    it('should throw error for valid JSON', async () => {
        requestMock.on.mockImplementation((event, cb) => {
            if(event === 'data'){
                cb('a' + someObjectAsString);
            }else {
                cb();
            }
        });

        await expect(getRequestBody(requestMock as any)).rejects.toThrow(SyntaxError);
    });

    it('should throw error for unexpected JSON', async () => {
        const someError = new Error('Something went wrong!');
        requestMock.on.mockImplementation((event, cb) => {
            if(event === 'error'){
                cb(someError);
            }
        });

        await expect(getRequestBody(requestMock as any)).rejects.toThrow(someError.message);

    });
});