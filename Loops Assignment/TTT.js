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
         $(this).html(turn);
         if(turn=="X"){
            turn="O";}else {turn="X";}
         }
        }
function restart(){
    for(var x=1; x<=9; x++){
        $("#btn"+x).html("-");
        $("#btn"+x).css("background", "#DDD");
    }
}

function checkwin(a,b,c){
    var box1 =$("#btn"+a).html();
    var box2 =$("#btn"+b).html();
    var box3 =$("#btn"+c).html();

    if(box1+box2+box3=="XXX"){
        $("#btn"+a).css("background", "red");
        $("#btn"+b).css("background", "red");
        $("#btn"+c).css("background", "red");
        alert("X wins - click any square to start a new game");
        gameover=true;
    }
    if(box1+box2+box3=="OOO"){
        $("#btn"+a).css("background", "red");
        $("#btn"+b).css("background", "red");
        $("#btn"+c).css("background", "red");
        alert("O wins - click any square to start a new game");
        gameover=true;
    }
    
}
checkwin(1,2,3);
checkwin(4,5,6);
checkwin(7,8,9);
checkwin(1,4,7);
checkwin(2,5,8);
checkwin(3,6,9);
checkwin(1,5,9);
checkwin(3,5,7);
    
