import React from 'react';
import Song from 'modules/Song';
import forBand from 'modules/forBand';

class SongList extends React.Component {

    constructor(props) {

        super(props);

        this.state = {
            songs: {tracks: {track: []}},
        };

    }

    componentDidMount() {

        forBand()
        .then((songs) => {

            this.setState({songs});

        })

    }

    render() {

        var songs = this.state.songs.tracks.track.map((song) => {

            return <li className="song_listing__item" key={song.mbid + Math.random()}><Song raw={song} /></li>

        });

        return <ul className="song_listing">{songs}</ul>

    }

}

export default SongList;
