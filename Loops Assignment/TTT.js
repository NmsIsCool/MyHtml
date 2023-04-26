$(startup);
var buttons="";
var turn="X";
var gameover=false;

function startup(){
    //make 9 buttons with a "-" and IDs=btn1 to btn9
    for (var x=1; x<=9; x++){
        buttons+="<button id='btn"+x+"'>-</button";
    }
    //put buttons in bzone div
    $("#bzone").html(buttons);
    //attach all buttons to the same go function
    $("button").click(go);
}  

function go(){
    if(gameover){
        gameover=false;
        restart();
        return;
    }
    var content=$(this).html();

    if(content==="-"){
        
    }
}