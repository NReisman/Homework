(function(){
    
 

    function get(selector) {
        return document.querySelector(selector);
      }
    const messageBox = get('#messageBox');
    const okbutton =  document.getElementById('okBtn');

    okbutton.addEventListener('click', () => {
        okbutton.remove();
      });
    


})();

