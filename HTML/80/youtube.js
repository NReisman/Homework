// jshint -W119
// jshint -W117
<<<<<<< HEAD
=======
// jshint -W104
>>>>>>> 78c2f507724029828f3b83804ccea56a2e68ac79
(async function () {
  'use strict';

  const videoSelect = $('#videos');
  const videoElem = $("#videoElem");
  const titleElem = $('#title');
  const pictureElem = $('#picture');



  try {
    const response = await fetch('youtube.json');
    if (!response.ok) {
      throw new Error(`${response.status} ${response.statusText}`);
    }
    const videos = await response.json();
    videos.forEach(video => {

      videoSelect
        .append(`<option value="${video.id}">${video.title}</option>`);
    });

    videoSelect.change(async function (e) {
      console.log(e.target.value);
      console.log(videoSelect.val());
      console.log(this.value);

      try {
        const response = await fetch(`${this.value}.json`);
        if (!response.ok) {
          throw new Error(`${response.status} ${response.statusText}`);
        }
        const video = await response.json();
        pictureElem.show();
        videoElem.hide();



        titleElem.text(video.title);
        pictureElem.attr('src', video.picture);
        videoElem.attr('src', video.url);
        document.querySelector("#picture").addEventListener("click", () => {
          pictureElem.hide();
          videoElem.show();

          document.querySelector("#videoElem").play();
        });




      }
      catch (e) {
        console.error('oops', e);
      }
    });
  } catch (e) {
    console.error('oops', e);
  }



<<<<<<< HEAD
}());
=======
}());
>>>>>>> 78c2f507724029828f3b83804ccea56a2e68ac79
