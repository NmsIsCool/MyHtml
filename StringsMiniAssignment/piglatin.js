$(startup);

function startup(){
    $("#go").click(go);
}

function go(){
    var word=$("#word").val();
    
    var fletter=word[0];
    
    var translator=word.slice(1);
    
    var tword=translator+fletter+"ay";
    
    $("#output").html(tword);

    

    
    
}