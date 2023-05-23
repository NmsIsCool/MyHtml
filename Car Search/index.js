$(startup);
url="https://codepen.io/hgledhill/pen/ExabzxN.js"


function startup(){
    cars= $.getJSON(url);
    console.log(cars);
}