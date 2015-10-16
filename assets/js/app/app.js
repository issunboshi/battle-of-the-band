import 'fetch';
import React from 'react';

import ArtistForm from 'modules/ArtistForm';

class Battle extends React.Component {
    render() {
        return (
            <div>
                <ArtistForm />
            </div>
        )
    }
}

React.render(<Battle />, document.querySelectorAll('.js-song_off')[0]);
