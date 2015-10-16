import React from 'react';

class Song extends React.Component {

    constructor(props) {

        super(props);

        this.state = {
        };

    }

    handleClick(event) {
        this.setState({selected: !this.state.selected});
        console.log()
    }

    render () {
        console.log(this.props.raw);
        if(!this.state.selected) {
            return (
                <li className="song_listing__item" key={this.props.raw.mbid + Math.random()}>
                    <div className="song__wrapper" onClick={this.handleClick.bind(this)}>
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
