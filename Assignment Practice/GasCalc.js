$(startup);

function startup(){
    $("#sub").click(get);
}


function calc(lit, cost){
    var totalprice=lit*cost;
    return totalprice.toFixed(2);
}
function get(){
    var litres=$("#li").val();
    var price=$("#price").val();
    $("#output").html("$"+calc(litres, price));
}

