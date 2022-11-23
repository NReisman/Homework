/* global google */
//jshint -W119
(function () {
    'use strict';


    const loc = { lat: 40.09584720509516, lng: -74.22222707431865 };

    const map = new google.maps.Map(
        document.getElementById("map"),
        {
            zoom: 4,
            center: loc,
        }
    );

    let markers = [];
    const drawingManager = new google.maps.drawing.DrawingManager({
        drawingMode: google.maps.drawing.OverlayType.MARKER,
        drawingControl: true,
        drawingControlOptions: {
            position: google.maps.ControlPosition.TOP_CENTER,
            drawingModes: [
                google.maps.drawing.OverlayType.MARKER,
                google.maps.drawing.OverlayType.CIRCLE,
                google.maps.drawing.OverlayType.POLYGON,
                google.maps.drawing.OverlayType.POLYLINE,
                google.maps.drawing.OverlayType.RECTANGLE,
            ],
        },
        markerOptions: {
            icon: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
        },
        circleOptions: {
            fillColor: "#ffff00",
            fillOpacity: 0.2,
            strokeWeight: 5,
            clickable: false,
            editable: true,
            zIndex: 1,
        },
    });

    drawingManager.setMap(map);

    // google.maps.event.addListener(drawingManager, 'overlaycomplete', e => {
    //     console.log('overlay complete', e);

    //     markers.push(e.overlay.getPosition());

    //     localStorage.setItem('markers', JSON.stringify(markers));
    // });


    const savedMarkers = localStorage.getItem('markers');
    if (savedMarkers) {
        const theMarkers = JSON.parse(savedMarkers);
        theMarkers.forEach(marker => {
            new google.maps.Marker({
                position: marker,
                map: map,
                animation: google.maps.Animation.DROP,
                icon: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png'
            });
            markers.push(marker);
        });
    }

    let circles = JSON.parse(localStorage.getItem('circles')) || [];
    circles.forEach(circle => {
        new google.maps.Circle(circle).setMap(map);
    });

    drawingManager.addListener('overlaycomplete', e => {
        // google.maps.event.addListener(drawingManager, 'overlaycomplete', e => {
        console.log('overlay complete', e);

        switch (e.type) {
            case 'marker':
                markers.push(e.overlay.getPosition());
                localStorage.setItem('markers', JSON.stringify(markers));
                break;
            case 'circle':
                circles.push({ center: e.overlay.getCenter(), radius: e.overlay.getRadius() });
                localStorage.setItem('circles', JSON.stringify(circles));
                break;

        }
    });

    //   drawingManager.addListener('markercomplete', e => {
    //     markers.push(e.getPosition());
    //     localStorage.setItem('markers', JSON.stringify(markers));
    //   });

    //   drawingManager.addListener('circlecomplete', e => {
    //     circles.push({ center: e.getCenter(), radius: e.getRadius() });
    //     localStorage.setItem('circles', JSON.stringify(circles));
    //   })
}());