(function (w, d) {

    const _results = d.getElementById('jsSearchResults');
    const _resultsList = _results.querySelector('.m-list');
    const _resultsListItems = _resultsList.querySelectorAll('li:not(.dropdown-header)');
    const _items = _resultsList.querySelectorAll('li:not(.dropdown-header) a');

    const _input = d.getElementById('jsSearchInput');
    const _isOnId = (path, id) => path.some(element => element.id === id);

    function _setElementSelected(item) {
        item.classList.add('selected')
    }

    function _unsetElementSelected(item) {
        item.classList.remove('selected')
    }

    function _selectFirstElementInlist() {
        _setElementSelected(_resultsListItems[0]);
    }

    function _resetList() {
        const selectedListItem = _resultsList.querySelector('li.selected')
        if (selectedListItem) {
            selectedListItem.classList.remove('selected');
        }
        _input.value = "";
        _input.blur;
        _results.classList.remove('-open');
        for (let index = 0; index < _items.length; index++) {
            _items[index].parentNode.classList.remove('-hide');
        }

    }

    function _toggleResults(path) {
        if (!_isOnId(path, 'jsSearch')) {
            _resetList();
        } else {
            _results.classList.add('-open');
        }
    }

    function _down() {
        const selectedListItem = _resultsList.querySelector('li.selected')
        const next = selectedListItem.nextElementSibling;

        if (next) {
            _setElementSelected(next);
            _unsetElementSelected(selectedListItem);
        }

    }

    function _up() {
        const selectedListItem = _resultsList.querySelector('li.selected')
        const previous = selectedListItem.previousElementSibling;

        if (previous) {
            _setElementSelected(previous);
            _unsetElementSelected(selectedListItem);
        }
    }

    function _filter() {

        const value = _input.value;
        console.log(_items.length);
        for (let index = 0; index < _items.length; index++) {
            const element = _items[index];

            console.log(element.innerHTML.toLowerCase().indexOf(value.toLowerCase()) >= 0);
            if (element.innerHTML.toLowerCase().indexOf(value.toLowerCase()) >= 0) {
                element.parentNode.classList.remove('-hide');

            } else {
                element.parentNode.classList.add('-hide');
            }

        }

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

        if (keyCode == 13) return;
        else if (keyCode == 40) _down();
        else if (keyCode == 38) _up();
        else _filter();
        console.log(evt.key);
        console.log(evt.keyCode);
        console.log(jsSearchInputValue);
    })

    _input.addEventListener('focus', function (focusEvent) {
        _results.classList.add('-open');
        _selectFirstElementInlist();
    })


})(window, document);