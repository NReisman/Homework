/*global $ */
(function () {
"use strict";
$(#challah).click(function () {
    var jsonURL = "recipes.json";
    $.getJSON(jsonURL, function (json) 
    {
      var imgList= "";
  
      $.each(json.recipes, function () {
        imgList += '<li><img src= "' + this.photo + '"></li>';
      });
  
     $('#recipe').append(imgList);
    });
  });
})();
  