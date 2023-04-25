


$(startup);
var mynum, compnum;
var tries=0;

function startup(){
    $("#btnmatch").click(match);
}

function match(){
    mynum=$("txtnum").val();
    if (mynum<1 || mynum>100){
        alert("Invalid Number - Must be between 1 and 100");
        compnum=Math.floor(Math.random()*100+1);
    }
    while(true){
        compnum=Math.floor(Math.random()*100)+1;
        tries+=1
        $("#listmatch").append("<option>"+compnum+"</option>");
        if(compnum==mynum) break;
    }
    $("#lbltries").html("Tries to match: "+tries);
}