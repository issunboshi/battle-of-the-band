import React from 'react';

import SongStore from 'modules/stores/SongStore';

import ArtistForm from 'modules/components/ArtistForm';

class BattleApp extends React.Component {

    constructor () {
        super();

        this.Songs = new SongStore();

        this.state = {
            songs: this.getSongState()
        }
    }

    getSongState() {
        return this.Songs.getAll();
    }

    componentDidMount () {
        this.Songs.addChangeListener(this.handleChange);
    }

    componentWillUnmount () {
        this.Songs.removeChangeListener(this.handleChange);
    }

    handleChange () {
        this.setState(this.getSongState());
    }

    render () {
        return (
            <ArtistForm allSongs={this.state.songs} selectedSongs={this.state.songs} unSelectedSongs={this.state.songs} />
        )
    }
}

export default BattleApp;
