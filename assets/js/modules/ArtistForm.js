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

        this.typingTimer;

    }

    getSongs(artist) {

        forBand(artist)
        .then((songs) => {
            this.setState({songs});
        })

    }

    handleChange(event) {

        clearTimeout(this.typingTimer);

        this.setState({value: event.target.value});
        // this.typingTimer = setTimeout(()=> {

        //     return this.getSongs(event.target.value);
        // }, 1000);

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
