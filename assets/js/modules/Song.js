import React from 'react';

class Song extends React.Component {

    constructor(props) {

        super(props);

        this.state = {
        };

    }

    handleClick(event) {
        this.setState({selected: !this.state.selected});
    }

    render () {

        if(!this.state.selected) {
            return (

                <div className="song__wrapper" onClick={this.handleClick.bind(this)}>
                    <h2 className="song__title">{this.props.raw.name}</h2>
                    <h3 className="song__meta_title">{this.props.raw.artist.name}</h3>
                </div>

            );
        }

        else {
            return null;
        }

    }

}

export default Song;
