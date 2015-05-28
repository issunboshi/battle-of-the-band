/**
 * Handle AJAX/Fetch request responses in a common and consistent way
 * @param  {Object} The original response
 * @return {Object} The original response
 */
function handleStatus(response) {

    if (response.status >= 200 && response.status < 300) {

        return response;

    } else {

        throw new Error(response.statusText);

    }

}

export default handleStatus;
