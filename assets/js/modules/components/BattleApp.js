import React from 'react';

import SongStore from 'modules/stores/SongStore';

import ArtistForm from 'modules/components/ArtistForm';

import Round from 'modules/components/Round';

function getSongsState() {
    return {
        songs: SongStore.getState().songs
    }
}

class BattleApp extends React.Component {

    constructor () {
        super();

        this.state = getSongsState();
        this.onChange = this.onChange.bind(this);
    }

    componentDidMount () {
        SongStore.listen(this.onChange);
    }

    componentWillUnmount () {
        SongStore.unlisten(this.handleChange);
    }

    onChange (state) {
        this.setState(state);
    }

    render () {
        return (
            <div>
                <ArtistForm raw={this.state.songs} />
                <Round raw={this.state.songs} />
            </div>
        )
    }
}

export default BattleApp;
