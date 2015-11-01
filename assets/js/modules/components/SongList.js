import React from 'react';

import Song from 'modules/components/Song';

class SongList extends React.Component {

    constructor(props) {

        super(props);

        this.state = {
        };
    }

    render() {

        if (Object.keys(this.props.raw).length === 0) {
            return null;
        } else {
            var songs = this.props.raw.map((song, index) => {
                return <Song key={Math.random()} raw={song} />
            });
        }

        return <ol className="bracket">{songs}</ol>

    }

}

export default SongList;
