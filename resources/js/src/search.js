const results = document.getElementById('jsSearchResults');
const resultsList = results.querySelector('.m-list');
const resultsListItems = resultsList.querySelectorAll('li:not(.dropdown-header)');

const input = document.getElementById('jsSearchInput');
const isOnId = (path, id) => path.some(element => element.id === id);

function setElementSelected(item){
    item.classList.add('selected')
}
function unsetElementSelected(item){
    item.classList.remove('selected')
}
function selectFirstElementInlist(){
    setElementSelected(resultsListItems[0]);
}
function toggleResults(path) {
    if (!isOnId(path, 'jsSearch')) {
        results.classList.remove('-open');
    } else {
        results.classList.add('-open');
    }
}

export default function () {

    
    if (!input || !results) return; 


    document.addEventListener('click', function (mouseEvent) {
        toggleResults(mouseEvent.path);
    })

    input.addEventListener('submit', function (evt) {
        evt.preventDefault();
    })

    input.addEventListener('keyup', function (evt) {
        const key = evt.key;
        const keyCode = evt.keyCode;
        const jsSearchInputValue = input.value;

        if (keyCode == 13) return;
        if(keyCode == 40) {
            down();
        };

        console.log(evt.key);
        console.log(evt.keyCode);
        console.log(jsSearchInputValue);
    })

    input.addEventListener('focus', function (focusEvent) {
        results.classList.add('-open');
        selectFirstElementInlist();
    })
    
}

// export default const olle={

//     console.log('hello');
// $(function () {

//     var form = $('#search');
//     var input = form.find('input');
//     var list = form.find('.results');
//     var items = list.find('a');
//     var selected = null;

//     // Don't submit on return.
//     form.on('submit', function () {
//         return false;
//     });

//     // Open search
//     input.on('focus', function () {
//         form.addClass('open');
//     });

//     // Close search.
//     $(window).click(function () {
//         form.removeClass('open');
//     });

//     form.click(function (e) {
//         e.stopPropagation();
//     });

//     // Handle simple searching
//     input.on('keydown', function (e) {

//         /**
//          * Capture the down arrow.
//          */
//         if (e.which == 40) {

//             if (selected) {

//                 /**
//                  * If we have a selection then
//        …          * push to the next visible option.
//                  */
//                 if (selected.nextAll('a:visible').length) {
//                     items.removeClass('active');
//                     selected = selected.nextAll('a:visible').first();
//                     selected.addClass('active');
//                 }
//             } else {

//                 /**
//                  * Otherwise select the first
//                  * visible option in the list.
//                  */
//                 selected = items.filter('a:visible').first();
//                 selected.addClass('active');
//             }
//         }

//         /**
//          * Capture the up arrow.
//          */
//         if (e.which == 38) {

//             if (selected) {

//                 /**
//                  * If we have a selection then push
//                  * to the previous visible option.
//                  */
//                 if (selected.prevAll('a:visible').length) {
//                     items.removeClass('active');
//                     selected = selected.prevAll('a:visible').first();
//                     selected.addClass('active');
//                 }
//             } else {

//                 /**
//                  * Otherwise select the last
//                  * visible option in the list.
//                  */
//                 selected = items.filter('a:visible').last();
//                 selected.addClass('active');
//             }
//         }

//         /**
//          * Capture the enter key.
//          */
//         if (e.which == 13) {

//             if (selected) {

//                 /**
//                  * If the key press was the return
//                  * key and we have a selection
//                  * then follow the link.
//                  */
//                 if (selected.hasClass('has-click-event') || selected.hasClass('ajax')) {
//                     selected.trigger('click');
//                 } else {

//                     /**
//                      * If nothing is selected
//                      * there's nothing to do.
//                      */
//                     if (!selected.length) {
//                         return false;
//                     }

//                     /**
//                      * If control or the meta key is
//                      * being held open a new window.
//                      */
//                     if (e.ctrlKey || e.metaKey) {
//                         window.open(selected.attr('href'), "_blank");
//                     } else {
//                         window.location = selected.attr('href');
//                     }

//                     input.val('');
//                     input.blur();
//                     form.removeClass('open');

//                     modal.find('.modal-content').append('<div class="modal-loading"><div class="active large loader"></div></div>');
//                 }
//             }
//         }

//         /**
//          * Capture up and down arrows.
//          */
//         if (e.which == 38 || e.which == 40) {

//             // store current positions in variables
//             var start = input[0].selectionStart,
//                 end = input[0].selectionEnd;

//             // restore from variables...
//             input[0].setSelectionRange(start, end);

//             e.preventDefault();
//         }

//         /**
//          * Capture the escape key.
//          */
//         if (e.which == 27) {

//             form.removeClass('open');

//             items
//                 .show()
//                 .removeClass('active');

//             input.val('').blur();
//         }
//     });

//     input.on('keyup', function (e) {

//         /**
//          * If the keyup was a an arrow
//          * up or down then skip this step.
//          */
//         if (e.which == 38 || e.which == 40) {
//             return;
//         }

//         var value = $(this).val();

//         /**
//          * Filter the list by the items to
//          * show only those containing value.
//          */
//         items.each(function () {
//             if ($(this).text().toLowerCase().indexOf(value.toLowerCase()) >= 0) {
//                 $(this).show();
//             } else {
//                 $(this).hide();
//             }
//         });

//         /**
//          * If we don't have a selected item
//          * then choose the first visible option.
//          */
//         if (!selected || !selected.is(':visible')) {
//             selected = items.filter(':visible').first();
//             selected.addClass('active');
//         }
//     });
// });

//}