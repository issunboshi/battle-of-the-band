import {initiateJS} from 'modules/bootstrap';

describe("Bootstrap", function () {

    describe("initiateJS", function () {

        it("should add a class to the html element and return that the class is present", function () {

            expect(initiateJS()).toBeTruthy();

        });

    });

});
