import 'fetch';
import React from 'react';

import SongList from 'modules/SongList';

class Battle extends React.Component {
    render() {
        return (
            <div>
                <SongList />
            </div>
        )
    }
}

React.render(<Battle />, document.querySelectorAll('.js-song_off')[0]);
