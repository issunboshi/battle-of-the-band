import React from 'react';
import Song from 'modules/components/Song';

class SongList extends React.Component {

    constructor(props) {

        super(props);

        this.state = {
        };
    }

    render() {

        var songs = this.props.raw.toptracks.track.map((song, index) => {
            return <Song raw={song} />

        });

        return <ol className="song_listing">{songs}</ol>

    }

}

export default SongList;