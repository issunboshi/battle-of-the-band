import _ from 'lodash';

class AddElementsToPage {

    constructor(targetSelector, nodes) {

        this.targetSelector = targetSelector;
        this.nodes = nodes;
        this.targetEl;
        this.childrenDom;
        this.itemDom;

    }

    /**
     * Remove children from the parent element
     * @param  {Object} el The DOM object clear
     * @return {Object}    The emptied object
     */
    clearChildren(el) {

        return el.innerHTML = '';

    }

    /**
     * Take an array of objets describing DOM nodes and append them to a parent element
     * @param {Object} parentDom           The DOM element to append the elements to
     * @param {Array} childNodes          Array of objects containing data on the DOM elements to be created and then appended
     * @param {Boolean} shouldClearExisting Set to true to clearing the existing child elements within the parent element
     */
    addChildrenToDom(parentDom, childNodes, shouldClearExisting) {

        if (shouldClearExisting === true) {

            this.clearChildren(parentDom);

        }

        return _.forEach(childNodes, (n, key) => {
            let item = n,
                itemDom = document.createElement(item.type);

            itemDom.className = item.class;

            itemDom.innerHTML = item.content;

            parentDom.appendChild(itemDom);

        });

    }

}

export default AddElementsToPage;
