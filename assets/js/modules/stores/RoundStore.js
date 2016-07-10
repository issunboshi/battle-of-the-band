import alt from 'app/alt';

import Events from 'events';

import RoundActions from 'modules/actions/RoundActions';

class RoundStore {

    constructor() {

        this.rounds      = [];

        // Ensure we listen for actions
        this.bindListeners({
            create:         RoundActions.CREATE_SONGS,
            addTo:          RoundActions.ADD_TO,
            get:            RoundActions.GET,
            getAll:         RoundActions.GET_ALL
        });

    }

    create (songs) {

        this.rounds = songs.object;

    }

    addTo (id, songs) {

        this.rounds[id].push(songs);

    }

    get (id) {

        return this.rounds[id];

    }

    getAll () {

        return this.rounds;

    }

}

export default alt.createStore(RoundStore, 'RoundStore');
