import alt from 'app/alt';

import SongConstants from 'modules/constants/RoundConstants';

class RoundActions {

    constructor() {}

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

    getAll () {

        this.dispatch({})

    }

}

export default alt.createActions(RoundActions);
