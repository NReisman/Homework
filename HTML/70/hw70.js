(function (){
    "use strict";

    let buttonAmt = 1;

    const clickFunction = () => {

        const addButton = document.createElement('button');
        addButton.innerText= ` ${++buttonAmt} `;
        addButton.addEventListener("click", clickFunction);
        document.body.appendChild(addButton);
        
    };
    document.getElementById('one').addEventListener(`click`,clickFunction);

})();