import Events from 'events';

import AppDispatcher from 'modules/Dispatcher/AppDispatcher';
import SongConstants from 'modules/Constants/SongConstants';

class SongStore extends Events.EventEmitter {
    constructor () {
        super();

        this.songs = {};
        this.CHANGE_EVENT = 'change';

        return AppDispatcher.register((payload) => {
            var action = payload.action,
                text;

            switch (action.actionType) {
                case SongConstants.SONG_CREATE:
                    this.create(song);
                    console.log(song);
                    this.emitChange();
                    break;

                case SongConstants.SONG_UPDATE:
                    this.update(song.id);
                    this.emitChange();
                    break;
            }

            return true; // No errors. Needed by promise in Dispatcher.
        })
    }

    create (song) {
        // Using the current timestamp in place of a real id.
        var id = Date.now();
        console.log(this.songs);

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
        this.emit(this.CHANGE_EVENT);
    }

    /**
    * @param {function} callback
    */
    addChangeListener (callback) {
        this.on(this.CHANGE_EVENT, callback);
    }

    /**
    * @param {function} callback
    */
    removeChangeListener (callback) {
        this.removeListener(this.CHANGE_EVENT, callback);
    }
}

export default SongStore;
