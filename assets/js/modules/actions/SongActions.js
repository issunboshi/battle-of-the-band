import appDispatcher from 'modules/dispatcher/AppDispatcher';
import SongConstants from 'modules/constants/SongConstants';

class SongActions {

    constructor() {
    }

    createSong (object) {
        appDispatcher.dispatch({
            actionType: SongConstants.SONG_CREATE,
            song: object
        })
    }

    updateSong (object) {
        appDispatcher.dispatch({
            actionType: SongConstants.SONG_UPDATE,
            song: object
        })
    }
}

export default SongActions;
