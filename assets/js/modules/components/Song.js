import React from 'react';

import getRandomInt from 'helpers/getRandomInt';

import SongActions from 'modules/actions/SongActions';

class Song extends React.Component {

    constructor(props) {

        super(props);

        this.state = {
        };

        this.SongActions = new SongActions;

        this.key;

        if (this.props.raw.mbid) {
            this.key = this.props.raw.mbid;
        } else {
            this.key = getRandomInt(5, 20000) + '_' + getRandomInt(5, 30700);
        }

    }

    handleSelection(event) {
        this.SongActions.updateSong(this);
    }

    render () {

        return (
            <li className="song_listing__item" key={this.key}>
                <div className="song__wrapper" onClick={this.handleSelection.bind(this)}>
                    <h2 className="song__title">{this.props.raw.name}</h2>
                </div>
            </li>
        );

    }

}

export default Song;
