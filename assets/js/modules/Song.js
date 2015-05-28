import React from 'react';

class Song extends React.Component {
    render () {
        return (
            <div>
                <h2>{this.props.raw.name}</h2>
                <h3>{this.props.raw.artist.name}</h3>
            </div>
        );
    }
}

export default Song;
