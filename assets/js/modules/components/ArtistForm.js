import React from 'react';

import forBand from 'helpers/forBand';

import SongList from 'modules/components/SongList';

class ArtistForm extends React.Component {

    constructor(props) {

        super(props);

        this.state = {
            artist: '',
            songs: {toptracks: {track: []}},
        };

        this.typingTimer;

    }

    getSongs(artist) {

        forBand(artist)
        .then((songs) => {
            console.log(songs);
            this.setState({songs});
        })

    }

    handleChange(event) {

        clearTimeout(this.typingTimer);

        this.setState({artist: event.target.value});

        this.typingTimer = setTimeout(()=> this.getSongs(this.state.artist), 1000);

    }

    render () {

        return (
            <div>
                <form>
                    <label htmlFor="artist">El artist</label>
                    <input type="text" name="artist" id="artist" value={this.state.artist} onChange={this.handleChange.bind(this)} />
                </form>
                <SongList raw={this.state.songs} />
            </div>
        );

    }

}

export default ArtistForm;
