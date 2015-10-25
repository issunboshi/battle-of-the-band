import React from 'react';

import SongStore from 'modules/stores/SongStore';

import ArtistForm from 'modules/components/ArtistForm';

import SongList from 'modules/components/SongList';

class BattleApp extends React.Component {

    constructor () {
        super();

        this.SongStore = new SongStore();

        this.state = {
            songs: this.getSongState()
        }
    }

    getSongState() {
        return this.SongStore.getAll();
    }

    componentDidMount () {
        this.SongStore.addChangeListener(this.handleChange);
    }

    componentWillUnmount () {
        this.SongStore.removeChangeListener(this.handleChange);
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
