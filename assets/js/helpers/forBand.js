import apiKeys from 'private/apiKeys.json!json';

function forBand(artist) {
    if (artist && apiKeys.lastFM) {
        let url = `http://ws.audioscrobbler.com/2.0/?method=artist.gettoptracks&artist=${artist}&api_key=${apiKeys.lastFM}&format=json&limit=32`;

        return fetch(url).then(response => response.json());
    } else {
        return Promise.reject(new Error('artist or apiKeys.lastFM not defined'))
        .then(function(error) {
        }, function(error) {
            console.log(error); // Stacktrace
        });
    }
}

export default forBand;
