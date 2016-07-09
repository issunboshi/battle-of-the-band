import React from 'react';

import getRandomInt from 'helpers/getRandomInt';

import SongActions from 'modules/actions/SongActions';

class Song extends React.Component {

    constructor(props) {

        super(props);

        this.state = {
        };

        if (this.props.song.mbid) {
            this.key = this.props.song.mbid;
        } else {
            this.key = getRandomInt(5, 20000) + '_' + getRandomInt(5, 30700);
        }

        this.handleSelection = this.handleSelection.bind(this);

    }

    handleSelection(event) {
        SongActions.addToNextRound(this);

    }

    render () {

        return (
            <li className="song_listing__item" key={this.key}>
                <button className="song__wrap" onClick={this.handleSelection}>
                    {this.props.song.name}
                </button>
            </li>
        );

    }

}

export default Song;
