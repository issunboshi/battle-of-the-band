import React from 'react';

import SongStore from 'modules/stores/SongStore';

import ArtistForm from 'modules/components/ArtistForm';

import SongList from 'modules/components/SongList';

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
                <ArtistForm />
                <SongList raw={this.state.songs} />
            </div>
        )
    }
}

export default BattleApp;
