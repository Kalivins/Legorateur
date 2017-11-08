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
             if(!path == "") {
                var pathBack = path.split("\\");
                var lastPath = pathBack.pop();
                var link = pathBack.join('/');
                console.log(link);
                $('.explore').append("<a class='back' data='"+link+"'>Retour</a>");
                 
            }
            $(".explore").append('<ul class="row test"></ul>');
            data.forEach(function (index){
            if(index.isDirectory){
             $(".test").append("<div data='"+index.pathname+"' class='col-md-2 col-lg-2 folder item'><img src='images/folderR.svg'><li>"+index.filename+"</li><a href='#' class='liens_invisible'>Ouvrir</a> </div>");
            } 
            
            if(index.isFile){
                $(".test").append("<div data='"+index.pathname+"' class='col-md-2 col-lg-2 folder itemF'><img class='sv' src='images/fileR.svg'><p class='extension'>"+index.extension+"</p><li class='file'>"+index.filename+"</li><div class='lien'><a href='"+index.pathname+"' download='"+index.filename+"'>Télécharger</a> <a target='_blank' href='"+index.pathname+"'>Ouvrir</a></div></div>");
            }
        });
            $('.folder').fadeIn(500);
             $(".item").hover(function(){
        $(this).each(function (){
            if(this.style.backgroundColor !== ""){
                $(this).css("background", "");
            } else {
                $(this).css("background", "rgba(0,0,0,0.2)");
            }
        });
    });
            $(".itemF").hover(function(){
        $(this).each(function (){
            if(this.style.backgroundColor !== ""){
                $(this).css("background", "");
            } else {
                $(this).css("background", "rgba(0,0,0,0.3)");
            }
        });
    });
            $(".back").click(function(){
                var rLink = $(this).attr('data');
                $('.explore').append(" → "+lastPath+"");
               $(".explore").empty();
                generation(rLink);
            });
            $(".item").dblclick(function(){
                
                var name = $(this).text();
                var path = $(this).attr("data");
                    console.log(path);
               $(".explore").empty();
               generation(path);
                });
            }
        });
}