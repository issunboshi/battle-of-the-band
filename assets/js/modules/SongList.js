import React from 'react';
import Song from 'modules/Song';

class SongList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {songs: []};
    }

    componentDidMount() {
        return fetch('http://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=74df684fe83434197d014cc81be46a7a&format=json')
        .then(response => response.json())
        .then((songs) => {
            this.setState({songs: songs});
            console.log(this.state.songs);
        })
        .catch((err) => {
            console.log(err);
        });
    }

    render() {
        var songs = this.state.songs.map((song) => {
            return <li key={song.mbid}><Song raw={song} /></li>
        })
        return <ul>{songs}</ul>
    }
}

export default SongList;
