import React from 'react';

import songStoreInstance from 'modules/stores/SongStore';

import ArtistForm from 'modules/components/ArtistForm';

import SongList from 'modules/components/SongList';

class BattleApp extends React.Component {

    constructor () {
        super();

        this.state = {
            songs: this.getSongState()
        }
    }

    getSongState() {
        return songStoreInstance.getAll();
    }

    componentDidMount () {
        songStoreInstance.addChangeListener(this.handleChange);
    }

    componentWillUnmount () {
        songStoreInstance.removeChangeListener(this.handleChange);
    }

    handleChange () {
        this.setState(this.getSongState());
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
