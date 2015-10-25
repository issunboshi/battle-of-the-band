import AppDispatcher from 'modules/dispatcher/AppDispatcher';
import SongConstants from 'modules/constants/SongConstants';

class SongActions {

    constructor() {
    }

    createSong () {
        AppDispatcher.dispatch({
            actionType: SongConstants.TODO_CREATE,
            song: song
        })
    }

    updateSong (song) {
        AppDispatcher.dispatch({
            actionType: SongConstants.TODO_UPDATE,
            song: song
        })
    }
}

export default SongActions;
