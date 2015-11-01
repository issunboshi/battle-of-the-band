import alt from 'app/alt';

import SongConstants from 'modules/constants/SongConstants';

class SongActions {

    constructor() {
    }

    createSongs (object) {
        this.dispatch({
            object
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
