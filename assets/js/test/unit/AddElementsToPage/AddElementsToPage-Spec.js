import AddElementsToPage from 'modules/AddElementsToPage';
import _ from 'lodash';

describe("AddElementsToPage", () => {

    var myDOMGenerator, listingEl, nodes, listingElDom;

    beforeEach(() => {

        setFixtures(sandbox({class: 'js-song_list', id: 'jobListing'}));

        listingElDom = document.querySelectorAll('.js-song_list')[0];

        myDOMGenerator = new AddElementsToPage();

    });

    describe("#clearChildren", () => {

        it('Should remove all child nodes within an element', (done) => {

            myDOMGenerator.clearChildren(listingElDom);

            expect($j('.js-song_list > *').length).toEqual(0);

            done();

        });

    });

    describe("#addChildrenToDom", () => {

        it('Should add 2 child DOM elements to the parent element when given an array of child nodes', (done) => {

            nodes = [{"type": "li", "id": "1", "title": "Job number 1", "content": "Lorem ipsum dolor.", "class": "song_list__item"}, {"type": "li", "id": "2", "title": "Job number 2", "content": "Lorem ipsum dolor.", "class": "song_list__item"}];

            myDOMGenerator.addChildrenToDom(listingElDom, nodes, true);

            expect($j('.js-song_list > .song_list__item').length).toEqual(2);

            done();

        });

        it('Should call the #clearChildren() method when shouldClearExisting is set to true', (done) => {

            nodes = [{"type": "li", "id": "1", "title": "Job number 1", "content": "Lorem ipsum dolor.", "class": "song_list__item"}, {"type": "li", "id": "2", "title": "Job number 2", "content": "Lorem ipsum dolor.", "class": "song_list__item"}];

            spyOn(myDOMGenerator, 'clearChildren');

            myDOMGenerator.addChildrenToDom(listingElDom, nodes, true);

            expect(myDOMGenerator.clearChildren).toHaveBeenCalled();

            done();

        });

        it('Should not call the #clearChildren() method when shouldClearExisting is set to false', (done) => {

            nodes = [{"type": "li", "id": "1", "title": "Job number 1", "content": "Lorem ipsum dolor.", "class": "song_list__item"}, {"type": "li", "id": "2", "title": "Job number 2", "content": "Lorem ipsum dolor.", "class": "song_list__item"}];

            spyOn(myDOMGenerator, 'clearChildren');

            myDOMGenerator.addChildrenToDom(listingElDom, nodes, false);

            expect(myDOMGenerator.clearChildren).not.toHaveBeenCalled();

            done();

        });

    });

});
