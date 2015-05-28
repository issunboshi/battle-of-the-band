import decideSong from 'modules/decideSong';

describe("decideSong", () => {

    beforeEach(() => {

        setFixtures(sandbox({class: 'js-song', id: 'song1'}));

    });

    it('Should detect a click on a song DOM item', (done) => {

        var firstSong = $j('.js-song').first(),
            firstSongID = '#' + firstSong.attr('id'),
            spyEvent = spyOnEvent(firstSongID, 'click');

        firstSong.click();

        expect('click').toHaveBeenTriggeredOn(firstSongID);

        expect(spyEvent).toHaveBeenTriggered();

        done();

    });

});
