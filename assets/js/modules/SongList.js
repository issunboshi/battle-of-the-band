import React from 'react';
import Song from 'modules/Song';

class SongList extends React.Component {

    constructor(props) {

        super(props);

        this.state = {songs: []};

    }

    componentDidMount() {

        fetch('http://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=74df684fe83434197d014cc81be46a7a&format=json')
        .then((response) => {

            return response.json()

        })
        .catch((exception) => {

            console.log('parsing failed', exception)

        })
        .then((songs) => {

            this.setState({songs});

        })

    }

    render() {

        var songs = this.state.songs.map((song) => {

            return <li className="song_listing__item" key={song.mbid}><Song raw={song} /></li>

        });

        return <ul className="song_listing">{songs}</ul>

    }

}

export default SongList;
