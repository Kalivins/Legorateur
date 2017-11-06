$(document).ready(function($){
    $("ul.tree").hide();
    $("li").hover(function(){
        $(this).each(function (){
            if(this.style.backgroundColor !== ""){
                $(this).css("background", "");
            } else {
                $(this).css("background", "grey");
            }
        });
    });
    $("li.folder").dblclick(function () {
        $(this).next("ul").toggle("fast");
    });
    $.get("index.php", function(data) {
   var response = [data];
        return response;
   
});
});