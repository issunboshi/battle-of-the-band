import React from 'react';
import Song from 'modules/Song';

class SongList extends React.Component {

    constructor(props) {

        super(props);

        this.state = {
        };
    }

    render() {

        var songs = this.props.raw.toptracks.track.map((song) => {

            return <Song raw={song} />

        });

        return <ol className="song_listing">{songs}</ol>

    }

}

export default SongList;
