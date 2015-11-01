import alt from 'app/alt';

import Events from 'events';

import SongActions from 'modules/actions/SongActions';

class SongStore {

    constructor() {
        this.songs = {};

        this.bindListeners({
            create: SongActions.CREATE_SONGS
        });
    }

    create (songs) {
        this.songs = songs.object;
    }

    update (id, song) {
        this.songs[id] = song;
    }

    getAll () {
        return this.songs;
    }

}

export default alt.createStore(SongStore, 'SongStore');