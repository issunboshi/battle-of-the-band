import React from 'react';

import SongStore from 'modules/stores/SongStore';

import ArtistForm from 'modules/components/ArtistForm';

class BattleApp extends React.Component {

    constructor () {
        super();

        this.Songs = new SongStore();

        return (
            this.getSongState()
        )
    }

    getSongState() {
        return {
            allSongs: this.Songs.getAll()
        };
    }

    componentDidMount () {
        SongStore.addChangeListener(this.handleChange);
    }

    componentWillUnmount () {
        SongStore.removeChangeListener(this.handleChange);
    }

    handleChange () {
        this.setState(this.getTodoState());
    }

    render () {
        return (
            <ArtistForm allSongs={this.state.Songs} />
        )
    }
}

export default BattleApp;
