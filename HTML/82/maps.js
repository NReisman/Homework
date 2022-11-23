/*global google*/
/*global $*/
//jshint -W119

(function () {
    //function initMap() {
    'use strict';


    const bmgLoc = { lat: 40.09584720509516, lng: -74.22222707431865 };
    const pcsLoc = { lat: 40.10893860891803, lng: -74.21750541929293 };

    const map = new google.maps.Map(document.getElementById('map'), {
        zoom: 18,
        center: bmgLoc,
        mapTypeId: google.maps.MapTypeId.HYBRID
    });

    const infoWindow = new google.maps.InfoWindow({
        /*content: `
        Beth Medrash Govoha (Hebrew: בית מדרש גבוה, Sephardi pronunciation: Beth Midrash Gavoha. lit: "High House of Learning"; also known as Lakewood Yeshiva or BMG) is a Haredi Jewish Lithuanian yeshiva in Lakewood Township, New Jersey. It was founded by Rabbi Aaron Kotler in 1943 and is the second-largest yeshiva in the world, after Mir Yeshiva in Jerusalem.[1][2] As of 2019, it had 6,715 students, 2,748 regular and 3,967 in Kollel status.[3] The principal Rosh yeshiva since 1982 is Rabbi Malkiel Kotler. Talmud and halakha studies in the institution are carried in the form of over 200 small groups, Chaburos, which consist of several students mentored by a veteran, each pursuing its own specific curriculum with an emphasis on individual learning.
        <br>
        <a href="https://en.wikipedia.org/wiki/Beth_Medrash_Govoha" target="_blank">more info</a>`*/
    });

    const bmgMarker = new google.maps.Marker({
        position: bmgLoc,
        map: map,
        title: 'BMG',
        animation: google.maps.Animation.DROP,
        //icon: 'bmg.jpg'
        icon: {
            url: 'bmg.jpg',
            scaledSize: new google.maps.Size(50, 50)
        }
    });

    bmgMarker.addListener('click', () => {
        infoWindow.setContent(`
      Beth Medrash Govoha (Hebrew: בית מדרש גבוה, Sephardi pronunciation: Beth Midrash Gavoha. lit: "High House of Learning"; also known as Lakewood Yeshiva or BMG) is a Haredi Jewish Lithuanian yeshiva in Lakewood Township, New Jersey. It was founded by Rabbi Aaron Kotler in 1943 and is the second-largest yeshiva in the world, after Mir Yeshiva in Jerusalem.[1][2] As of 2019, it had 6,715 students, 2,748 regular and 3,967 in Kollel status.[3] The principal Rosh yeshiva since 1982 is Rabbi Malkiel Kotler. Talmud and halakha studies in the institution are carried in the form of over 200 small groups, Chaburos, which consist of several students mentored by a veteran, each pursuing its own specific curriculum with an emphasis on individual learning.
      <br>
      <a href="https://en.wikipedia.org/wiki/Beth_Medrash_Govoha" target="_blank">more info</a>`);
        infoWindow.open(map, bmgMarker);
    });

    const pcsMarker = new google.maps.Marker({
        position: pcsLoc,
        map: map,
        title: 'PCS',
        animation: google.maps.Animation.BOUNCE
    });

    pcsMarker.addListener('click', () => {
        infoWindow.setContent(`
    Agudath Israel of America (Hebrew: אגודת ישראל באמריקה) (also called Agudah) is an American organization that represents Haredi Orthodox Jews.[2][3] It is loosely affiliated with the international World Agudath Israel.[4][5] Agudah seeks to meet the needs of the Haredi community, advocates[6] for its religious[7] and civil rights, and services its constituents through charitable, educational, and social service projects across North America.
    <a href="https://en.wikipedia.org/wiki/Agudath_Israel_of_America" target="_blank">more info</a>
    `);
        infoWindow.open(map, pcsMarker);
    });

    map.addListener('center_changed', () => {
        const newCenter = map.getCenter();
        console.log('center changed', newCenter.lat(), newCenter.lng());
    });

    const bounds = new google.maps.LatLngBounds();
    bounds.extend(bmgLoc);
    bounds.extend(pcsLoc);
    map.fitBounds(bounds);

    setTimeout(() => {
        map.setCenter(bmgLoc);
        //map.panTo(bmgLoc);
    }, 2000);

    /*const panorama = new google.maps.StreetViewPanorama(
      document.getElementById("pano"),
      {
        position: bmgLoc,
        pov: {
          heading: 34,
          pitch: 10,
        },
      }
    );
  
    map.setStreetView(panorama);*/
    //}
    
    // async function fetchGeonames() {
    //     try {
            
    //         const response = await fetch('http://api.geonames.org/wikipediaSearch?q=yeshiva&maxRows=10&username=slubowsky&type=json');
    //         if (!response.ok) {
    //             throw new Error(`${response.status} ${response.statusText}`);
    //         }
    //         const geonames = await response.json();
    //         return geonames;
    //     } catch (e) {
    //         console.error(e);
    //     }
    // }
    function fetchGeonames() {
        fetch('http://api.geonames.org/wikipediaSearch?q=yeshiva&maxRows=10&username=slubowsky&type=json')
            .then(res => res.json())
            .then(out =>
                console.log('Checkout this JSON! ', out));
        
}

     async function displayWiki() {
        const geonames =  await fetchGeonames();
         const geonamesList = $("#sidebar ul");
         console.log("${geoname.summary}");
         geonames.forEach(geoname => {
             const theLi = $(`<li>
           <span>${geoname.summary}</span>
           <span>${geoname.elevation}</span>
         </li>
      `).appendTo(geonamesList)
                 .click(function () {
                     
                     $('.active').removeClass('active');
                     theLi.addClass('active visited');
                 });
         });

        $('#sidebar').show();
    }

    displayWiki();
}());
