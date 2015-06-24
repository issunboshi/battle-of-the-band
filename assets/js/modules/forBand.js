function forBand() {
    let url = 'http://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=74df684fe83434197d014cc81be46a7a&format=json';

    return fetch(url).then(response => response.json())
}

export default forBand;
