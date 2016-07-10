import alt from 'app/alt';

import SongConstants from 'modules/constants/RoundConstants';

class RoundActions {

    constructor() {
    }

    create (object) {
        this.dispatch({
            object
        })
    }

    addTo (object) {
        this.dispatch({
            object
        })
    }

    get (object) {
        this.dispatch({
            object
        })
    }

    getAll (object) {
        this.dispatch({
            object
        })
    }

}

export default alt.createActions(RoundActions);
