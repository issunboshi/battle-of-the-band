import React from 'react';

import Song from 'modules/components/Song';

class SongList extends React.Component {

    constructor(props) {

        super(props);

        this.state = {
        };
    }

    render() {

        if (this.props.songs === undefined) {
            return null;
        }

        var songs = this.props.raw.toptracks.track.map((song, index) => {
            return <Song key={Math.random()} raw={song} />
        });

        return <ol className="song_listing">{songs}</ol>

    }

}

export default SongList;
