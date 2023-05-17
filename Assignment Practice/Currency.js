$(startup);
var convertTo, money, rate;
function startup(){
    $("#sub").click(obtain);
}

function obtain(){
    money=$("#CAD").val();
    rate=$("#rate").val();
    convertTo=$("#currency").val();
    Input()
    

}

function calc(var1, var2){
    return(var1*var2);
}

function Input(){
    $("#output").html("You will have: "+calc(money,rate)+" "+convertTo)
}
