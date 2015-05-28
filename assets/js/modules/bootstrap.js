import addClass from 'helpers/addClass';

/**
 * Add .js to the html element
 * @return {Function} Return the addClass function to add the js class to the HTML element
 */
function initiateJS() {

    var htmlEl = document.querySelectorAll('html')[0];

    return addClass(htmlEl, 'js');
}

export {initiateJS};
