import alt from 'app/alt';

import Events from 'events';

import SongConstants from 'modules/constants/SongConstants';
import SongActions from 'modules/actions/SongActions';

const CHANGE_EVENT = 'change';

class SongStore {

    constructor() {
        this.songs = {};

        this.bindListeners({
            create: SongActions.CREATE_SONG
        });
    }

    create (song) {
        // Using the current timestamp in place of a real id.
        var id = Date.now();

        this.songs[id] = {
            id: song.mbid,
            data: song
        };
    }

    update (id, song) {
        this.songs[id] = song;
    }

    getAll () {
        return this.songs;
    }

}

export default alt.createStore(SongStore, 'SongStore');
