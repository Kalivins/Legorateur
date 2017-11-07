$(document).ready(function($){
    generation();
});
    function generation(path = ""){
    $.ajax({
        url: "genere.php",
        type: "post",
        dataType: "json",
        data: {toinou: path},

        success: function (data){
            console.log(data[5]);
            $(".explore").append('<ul class="row test"></ul>');
            data.forEach(function (index){
            if(index.isDirectory){
             $(".test").append("<div data='"+index.pathname+"' class='col-md-2 col-lg-2 folder item'><img src='images/folderR.svg'><li>"+index.filename+"</li></div>");   
            } 
            
            if(index.isFile){
                $(".test").append("<div data='"+index.pathname+"' class='col-md-2 col-lg-2 folder itemF'><img class='sv' src='images/fileR.svg'><p class='extension'>"+index.extension+"</p><li class='file'>"+index.filename+"</li><br><a href='"+index.pathname+"' download='"+index.filename+"'>Télécharger</a> <a href='"+index.pathname+"'>Ouvrir</a></div>");
            }
        });
             $(".item").hover(function(){
        $(this).each(function (){
            if(this.style.backgroundColor !== ""){
                $(this).css("background", "");
            } else {
                $(this).css("background", "lightgray");
            }
        });
    });
            $(".itemF").hover(function(){
        $(this).each(function (){
            if(this.style.backgroundColor !== ""){
                $(this).css("background", "");
            } else {
                $(this).css("background", "silver");
            }
        });
    });
            $(".item").dblclick(function(){
                
                var name = $(this).text();
                console.log(name);

                var path = $(this).attr("data");

               $(".explore").empty();
               generation(path);
                
                });
            }
        });
}