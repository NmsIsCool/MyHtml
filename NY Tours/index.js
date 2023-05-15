$(startup);
var pic;
var info = ["<h3>Central Park</h3><hr><br>New York's largest park. Located in the upper part of the borough of Manhattan.",
"<h3>Empire State Building</h3><hr><br>Once it was New York's tallest building, it is located in the mid-town or the middle of Manhattan",
"<h3>Statue of Liberty</h3><hr><br> A gift from France, located in the harbor off the coast at the bottom of Manhattan"];

function startup(){
    hideAll();
    $("#btnpark").click({picid: $("#cpark")}, showpic);
    $("#btnempire").click({picid: $("#empire")}, showpic);
    $("#btnstatue").click({picid: $("#statue")}, showpic);
    $("#cpark").click(reveal);
    $("#empire").click(reveal);
    $("#statue").click(reveal);
    $("#cpark").click({tag: info[0]},reveal);
    $("#empire").click({tag: info[1]},reveal);
    $("#statue").click({tag: info[2]},reveal);
    $("#info").click({tag: ""} ,reveal);
}

function reveal(event){
    $(this).slideToggle();
    $("#info").html(event.data.tag);
    $("#info").fadeToggle(1000);
}

function showpic(event){
    hideAll();
    pic=event.data.picid;
    pic.show().animate({"left": "70px"});
}

function hideAll(){
    $("img").hide().css("left", "10px");
    $("#info").hide();
}





