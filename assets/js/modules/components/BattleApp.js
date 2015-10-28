import React from 'react';

import SongStore from 'modules/stores/SongStore';

import ArtistForm from 'modules/components/ArtistForm';

import SongList from 'modules/components/SongList';

class BattleApp extends React.Component {

    constructor () {
        super();

        this.state = {
            songs: SongStore.getState()
        }
    }

    componentDidMount () {
        SongStore.listen(this.onChange);
    }

    componentWillUnmount () {
        SongStore.unlisten(this.handleChange);
    }

    onChange (state) {
        this.state.songs = SongStore.getState;
    }

    render () {
        return (
            <div>
                <ArtistForm allSongs={this.state.songs} selectedSongs={this.state.songs} unSelectedSongs={this.state.songs} />
                <SongList raw={this.state.songs} />
            </div>
        )
    }
}

export default BattleApp;
