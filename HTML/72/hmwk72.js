let i = 0;
let x = 1;
function change() {
    let doc = document.getElementById("demo");
    let text = document.getElementById("demo");
    let color = ["red", "blue", "brown", "green","lightblue"];
    text.style.color=color[x];
    doc.style.backgroundColor = color[i];
    i = (i + 1) % color.length;
    x = (x + 1) % color.length;
  
  }
  setInterval(change, 1000);