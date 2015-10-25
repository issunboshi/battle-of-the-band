import Events from 'events';

import appDispatcher from 'modules/Dispatcher/AppDispatcher';
import SongConstants from 'modules/Constants/SongConstants';

const CHANGE_EVENT = 'change';

class SongStore extends Events.EventEmitter {

    constructor() {
        super();

        this.songs = {};
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

    emitChange () {
        this.emit(CHANGE_EVENT);
    }

    /**
    * @param {function} callback
    */
    addChangeListener (callback) {
        this.on(CHANGE_EVENT, callback);
    }

    /**
    * @param {function} callback
    */
    removeChangeListener (callback) {
        this.removeListener(CHANGE_EVENT, callback);
    }

}

const songStore = new SongStore();

songStore.dispatchToken = appDispatcher.register((action) => {
    switch (action.type) {

        case SongConstants.SONG_CREATE:
            this.create(song);
            this.emitChange();
            break;

        case SongConstants.SONG_UPDATE:
            this.update(song.id);
            this.emitChange();
            break;
    }
});

export default songStore;
