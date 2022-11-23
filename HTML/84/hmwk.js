<<<<<<< HEAD
/* global $ */
(function () {
    'use strict';


    let dragging = false;
    let offset;
    let maxZ = 1;



    $(document).on('mousedown', '.part', e => {
        dragging = $(e.target);
        e.preventDefault();
        
        offset = { y: e.pageY, x: e.pageX, };
        dragging.css("zIndex", maxZ++);
    }).mousemove(e => {
        if (dragging) {
            dragging.css({ top: e.pageY - offset.y, left: e.pageX - offset.x });
        }
    }).mouseup(e => {
        console.log('mouse up', e);
        dragging = false;

    });

    function save() {
        let parts = $(".part");
        localStorage.setItem('parts', JSON.stringify(parts));

        JSON.parse(localStorage.getItem('parts'));

    }
    save();

    $(function () {
        $("#parts").resizable();
    });
}());

=======
/* global $ */
(function () {
    'use strict';


    let dragging = false;
    let offset;
    let maxZ = 1;



    $(document).on('mousedown', '.parts', e => {
        dragging = $(e.target);
        e.preventDefault();
        
        offset = { y: e.pageY, x: e.pageX, };
        dragging.css("zIndex", maxZ++);
    }).mousemove(e => {
        if (dragging) {
            dragging.css({ top: e.pageY - offset.y, left: e.pageX - offset.x });
        }
    }).mouseup(e => {
        console.log('mouse up', e);
        dragging = false;

    });

    function save() {
        let parts = $(".parts");
        localStorage.setItem('parts', JSON.stringify(parts));

        JSON.parse(localStorage.getItem('parts'));

    }
    save();
}());

>>>>>>> 78c2f507724029828f3b83804ccea56a2e68ac79
