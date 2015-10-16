import React from 'react';

import forBand from 'modules/forBand';

import SongList from 'modules/SongList';

class ArtistForm extends React.Component {

    constructor(props) {

        super(props);

        this.state = {
            value: '',
            songs: {toptracks: {track: []}},
        };

    }

    getSongs(artist) {

        forBand(artist)
        .then((songs) => {
            this.setState({songs});
        })

    }

    handleChange(event) {
        this.setState({value: event.target.value});

        return this.getSongs(event.target.value);
    }

    render () {

        return (
            <div>
                <form>
                    <label htmlFor="artist">El artist</label>
                    <input type="text" name="artist" id="artist" value={this.state.value} onChange={this.handleChange.bind(this)} />
                    <button>Go get my songs</button>
                </form>
                <SongList raw={this.state.songs} />
            </div>
        );

    }

}

export default ArtistForm;
