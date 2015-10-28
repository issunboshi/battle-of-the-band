import alt from 'app/alt';

import SongConstants from 'modules/constants/SongConstants';

class SongActions {

    constructor() {
    }

    createSong (object) {
        this.dispatch({
            actionType: SongConstants.SONG_CREATE,
            song: object
        })
    }

    updateSong (object) {
        this.dispatch({
            actionType: SongConstants.SONG_UPDATE,
            song: object
        })
    }
}

export default alt.createActions(SongActions);
