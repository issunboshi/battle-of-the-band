import React from 'react';

import SongList from 'modules/components/SongList';

class Round extends React.Component {

    constructor(props) {

        super(props);

        this.state = {
        };
    }

    render() {

        if (Object.keys(this.props.raw).length === 0) {
            return null;
        } else {
            let brackets = [];

            while (Object.keys(this.props.raw).length > 0) {
                brackets.push(<SongList raw={this.props.raw.splice(0, 2)} />)
            }

            return (
                <div className="round">
                    {brackets}
                </div>
            )
        }

    }

}

export default Round;
