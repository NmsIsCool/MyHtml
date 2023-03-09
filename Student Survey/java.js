$(startup)
var rating=5;
var numsportchosen=0;
var sportlist;
var size, price;
var totalcost;
function startup(){
   $("#ratingslider").change(updaterating);
   $("#btnsubmit").click(submit);
   $("#btnreset").click(reset);
   
   function submit(){
    numsportchosen=0;
    sportlist=""
    if($("#hockeybox").prop(checked)){
        numsportchosen+=1;
        sportlist+="Hockey | ";
    }
    if($("#soccerbox").prop("checked")){
        numsportchosen+=1;
        sportlist+="Soccer | ";
    }
    if($("#footballbox").prop("checked")){
        numsportchosen+=1;
        sportlist+="Football";
    }

    $("#resultbox").html("You chose " + numsportchosen + " sports: " + sportlist +"<br>");

    if($("#smallrad").prop("checked")){
        size="Small";
        price=10;
    }
    else if($("#mediumrad").prop("checked")){
        size="Medium";
        price=15;
    }
    else if($("#largerad").prop("checked")){
        size="Large";
        price=20;
    }
    $("#resultbox").append("<br>You ordered a "+size+" shirt at $"+price+" / shirt");
    totalcost=price*numsportchosen;
   $("#resultbox").append("<hr><br>Total Cost: $"+totalcost.toFixed(2));
   }

   function updaterating(){
    rating=$("#ratingslider").val();
    rating=Number(rating);
    $("#ratingsbox").html(rating);
   }
   
}