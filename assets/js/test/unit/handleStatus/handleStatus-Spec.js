import handleStatus from 'helpers/handleStatus';
import _ from 'lodash';

describe("handleStatus", () => {
    var okResponse, badResponse;

    beforeEach(() => {
        okResponse = {status: 200, statusText: "ok"};
        badResponse = {status: 404, statusText: "Not found"};
    });

    it("Should return the response object if the status is less than or equal to 200", () => {

        expect(handleStatus(okResponse) == okResponse).toBeTruthy();

    });

    it("Should throw an error if the status is not greater than 200", () => {

        expect(
            () => {
                handleStatus(badResponse)
            }
        )
        .toThrowError('Not found');

    });

});
