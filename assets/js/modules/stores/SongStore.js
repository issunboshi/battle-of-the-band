import Events from 'events';

import AppDispatcher from 'modules/Dispatcher/AppDispatcher';
import SongConstants from 'modules/Constants/SongConstants';

class SongStore extends Events.EventEmitter {
    constructor () {
        super();

        this.songs = {};
        this.CHANGE_EVENT = 'change';
    }

    create (object) {
        // Using the current timestamp in place of a real id.
        var id = Date.now();

        this.songs[id] = {
            id: id,
            data: object
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

    dispatcherIndex() {
        return AppDispatcher.register((payload) => {
            var action = payload.action,
                text;

            switch (action.actionType) {
                case SongConstants.SONG_CREATE:
                    this.create(song);
                    this.emitChange();
                    break;

                case SongConstants.SONG_UPDATE:
                    this.destroy(action.id);
                    this.emitChange();
                    break;
            }

            return true; // No errors. Needed by promise in Dispatcher.
        })
    }
}

export default SongStore;
