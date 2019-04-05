(function (w, d) {

    const _results = d.getElementById('jsSearchResults');
    const _resultsList = _results.querySelector('.m-list');
    const _resultsListItems = _resultsList.querySelectorAll('li:not(.dropdown-header)');
    const _resultsListItemAnchors = _resultsList.querySelectorAll('li:not(.dropdown-header) a');

    const _input = d.getElementById('jsSearchInput');
    const _isOnId = (path, id) => path.some(element => element.id === id);
    
    let selected = false;

    
    function _setElementSelected(item) {
        item.classList.add('selected');
        selected = item;
    }

    function _unsetElementSelected(item) {
        item.classList.remove('selected')
        selected=false;
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

        // Set the first list element unless we already have an element set
        if(!selectedListItem) {
            _setElementSelected(_resultsListItems[0]);
            return;
        }

        // If we have a selected element, unselect it, and select the next one.
        const next = selectedListItem.nextElementSibling;

        if (next) {
            _unsetElementSelected(selectedListItem);
            _setElementSelected(next);
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

        // get all items in n array and lopp sht bakwards
        
        const previous = selectedListItem.previousElementSibling;

        if (previous) {
            _unsetElementSelected(selectedListItem);
            _setElementSelected(previous);
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
        console.log('follow link');
    }

    if (!_input || !_results) return;

    console.log(_resultsListItems);

    _input.addEventListener('keyup', function (evt) {
        const key = evt.key;
        const keyCode = evt.keyCode;
        const jsSearchInputValue = _input.value;

        // if an item is selected, and enter key is clicked. We 
        // should follow that link..
        if (keyCode == 13 && !selected) return;
        else if(keyCode==27) _input.blur;
        else if (keyCode == 13 && selected) _followLink();
        else if (keyCode == 40) _arrowKeyDown();
        else if (keyCode == 38) _arrowKeyUp();
        else _filter();
        console.log(evt.key);
        console.log(evt.keyCode);
        console.log(jsSearchInputValue);
    })



    d.addEventListener('click', function (mouseEvent) {
        _toggleResults(mouseEvent.path);
    })

    _input.addEventListener('submit', function (evt) {
        evt.preventDefault();
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
        selected=false;
        _results.classList.remove('-open');
    })


})(window, document);