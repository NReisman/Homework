/* global $ */
//jshint -W119
//jshint -W104
(function () {
    'use strict';

    async function getPhotos() {
        try {
            const response = await fetch('photos.json');
            if (!response.ok) {
                throw new Error(`${response.status} ${response.statusText}`);
            }
            const photos = await response.json();
            return photos;
        } catch (e) {
            console.error(e);
        }
    }


    async function displayVideoList() {
        const photos = await getPhotos();
        const gallery = $("#gallery");
        gallery.hide();
        photos.forEach(photo => {
            const display = $(`<a href="${photo.source}" data-lightbox="my gallery" data-title="${photo.name}">
            <img src="${photo.source}"></a>`)
                .appendTo(gallery);


        });

        $("#btn").click(function () {
            $("#gallery").show();
        });

    }

    displayVideoList();
}());