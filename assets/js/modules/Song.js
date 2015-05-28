import React from 'react';

class Song extends React.Component {

    render () {

        return (

            <div className="song__wrapper">
                <h2 className="song__title">{this.props.raw.name}</h2>
                <h3 className="song__meta_title">{this.props.raw.artist.name}</h3>
            </div>

        );

    }

}

export default Song;
