import React from 'react';

import getRandomInt from 'helpers/getRandomInt';

class Song extends React.Component {

    constructor(props) {

        super(props);

        this.state = {
        };

    }

    handleSelection(event) {
        this.setState({selected: !this.state.selected});
    }

    render () {
        let key;

        if (this.props.raw.mbid) {
            key = this.props.raw.mbid;
        } else {
            key = getRandomInt(5, 20000) + '_' + getRandomInt(5, 30700);
        }

        if(!this.state.selected) {

            return (
                <li className="song_listing__item" key={key}>
                    <div className="song__wrapper" onClick={this.handleSelection.bind(this)}>
                        <h2 className="song__title">{this.props.raw.name}</h2>
                    </div>
                </li>
            );
        }

        else {
            return null;
        }

    }

}

export default Song;
