(function (w, d) {

    const _results = d.getElementById('jsSearchResults');
    const _resultsList = _results.querySelector('.m-list');
    const _resultsListItems = _resultsList.querySelectorAll('li:not(.dropdown-header)');
    const _resultsListItemAnchors = _resultsList.querySelectorAll('li:not(.dropdown-header) a');

    const _input = d.getElementById('jsSearchInput');
    const _isOnId = (path, id) => path.some(element => element.id === id);
    
    let selected = false;

    function _setElementSelected(item) {
        item.classList.add('selected')
    }

    function _unsetElementSelected(item) {
        item.classList.remove('selected')
    }

    function _selectFirstElementInlist() {
        _setElementSelected(_resultsListItems[0]);
    }
    function _selectLastElementInlist() {
        const index = _resultsListItems.length - 1;
        _setElementSelected(_resultsListItems[index]);
    }

    

    function _toggleResults(path) {
        if (!_isOnId(path, 'jsSearch')) {
            _input.blur;
        } else {
            _results.classList.add('-open');
        }
    }

    /**
     * When we click the down arrow key, we need to move down the list.
     * If no element is selected when we click, the first element will
     * be set as selected.
     */
    function _arrowKeyDown() {
        
        const selectedListItem = _resultsList.querySelector('li.selected')

        if(!selectedListItem) {
            _selectFirstElementInlist();
            return;
        }

        const next = selectedListItem.nextElementSibling;

        if (next) {
            _setElementSelected(next);
            _unsetElementSelected(selectedListItem);
        }

    }

    /**
     * When we click the up arrow key, we need to move up the list.
     * If no element is selected when we click, the first element will
     * be set as selected.
     */
    function _arrowKeyUp() {
        const selectedListItem = _resultsList.querySelector('li.selected')
        if(!selectedListItem) {
            _selectLastElementInlist();
            return;
        }
        
        const previous = selectedListItem.previousElementSibling;

        if (previous) {
            _setElementSelected(previous);
            _unsetElementSelected(selectedListItem);
        }
    }

    function _filter() {

        const value = _input.value;
        for (let index = 0; index < _resultsListItemAnchors.length; index++) {
            const element = _resultsListItemAnchors[index];

            if (element.innerHTML.toLowerCase().indexOf(value.toLowerCase()) >= 0) {
                element.parentNode.classList.remove('-hide');
            } else {
                element.parentNode.classList.add('-hide');
            }

        }

    }

    function _followLink() 
    {

    }

    if (!_input || !_results) return;

    d.addEventListener('click', function (mouseEvent) {
        _toggleResults(mouseEvent.path);
    })

    _input.addEventListener('submit', function (evt) {
        evt.preventDefault();
    })

    _input.addEventListener('keyup', function (evt) {
        const key = evt.key;
        const keyCode = evt.keyCode;
        const jsSearchInputValue = _input.value;

        // if an item is selected, and enter key is clicked. We 
        // should follow that link..
        if (keyCode == 13 && !selected) return;
        if (keyCode == 13 && selected) followLink();
        else if (keyCode == 40) _arrowKeyDown();
        else if (keyCode == 38) _arrowKeyUp();
        else _filter();
        console.log(evt.key);
        console.log(evt.keyCode);
        console.log(jsSearchInputValue);
    })

    _input.addEventListener('focus', function (focusEvent) {
        _results.classList.add('-open');
    })
    _input.addEventListener('blur', function (focusEvent) {
        
        const selectedListItem = _resultsList.querySelector('li.selected')
        if (selectedListItem) {
            selectedListItem.classList.remove('selected');
        }
        for (let index = 0; index < _resultsListItemAnchors.length; index++) {
            _resultsListItemAnchors[index].parentNode.classList.remove('-hide');
        }
        _input.value = "";
        _input.blur;
        _results.classList.remove('-open');
    })


})(window, document);