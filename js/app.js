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
                $('.explore').append("<a class='back btn btn-default' role='button' data='"+link+"'><img src='images/left-arrow.svg' width='20' height='20'> Retour</a>");
                 
            }
            $(".explore").append('<ul class="row test"></ul>');
            data.forEach(function (index){
            if(index.isDirectory){
             $(".test").append("<div data='"+index.pathname+"' class='col-md-2 col-lg-2 folder item'><img src='images/folderR.svg'><li class='d text-center'>"+index.filename+"</li></div>");
            } 
            
         if(index.isFile){
              if(index.extension == 'php'){
                $(".test").append("<div data='"+index.pathname+"' class='col-md-2 col-lg-2 file itemF'><img class='sv text-center' src='images/svg/php.svg'><li class='file text-center'>"+index.filename+"</li><br><a class='btn btn-danger' role='button' href='"+index.pathname+"' download='"+index.filename+"'>Télécharger</a><a class='btn btn-danger' role='button' href='"+index.pathname+"'>Ouvrir</a></div>");
            }

            if(index.extension == 'ai'){
              $(".test").append("<div data='"+index.pathname+"' class='col-md-2 col-lg-2 file itemF'><img class='sv' src='images/svg/ai.svg'><li class='file text-center'>"+index.filename+"</li><br><a class='btn btn-danger' role='button' href='"+index.pathname+"' download='"+index.filename+"'>Télécharger</a> <a class='btn btn-danger' role='button' href='"+index.pathname+"'>Ouvrir</a></div>");
          }

            if(index.extension == 'html'){
            $(".test").append("<div data='"+index.pathname+"' class='col-md-2 col-lg-2 file itemF'><img class='sv' src='images/svg/html.svg'><li class='file text-center'>"+index.filename+"</li><br><a class='btn btn-danger' role='button' href='"+index.pathname+"' download='"+index.filename+"'>Télécharger</a> <a class='btn btn-danger' role='button' href='"+index.pathname+"'>Ouvrir</a></div>");
          }

            if(index.extension == 'css'){
            $(".test").append("<div data='"+index.pathname+"' class='col-md-2 col-lg-2 file itemF'><img class='sv' src='images/svg/css.svg'><li class='file text-center'>"+index.filename+"</li><br><a class='btn btn-danger' role='button' href='"+index.pathname+"' download='"+index.filename+"'>Télécharger</a> <a class='btn btn-danger' role='button' href='"+index.pathname+"'>Ouvrir</a></div>");
          }

            if(index.extension == 'js'){
            $(".test").append("<div data='"+index.pathname+"' class='col-md-2 col-lg-2 file itemF'><img class='sv' src='images/svg/js.svg'><li class='file text-center'>"+index.filename+"</li><br><a class='btn btn-danger' role='button' href='"+index.pathname+"' download='"+index.filename+"'>Télécharger</a> <a class='btn btn-danger' role='button' href='"+index.pathname+"'>Ouvrir</a></div>");
          }

            if(index.extension == 'ico'){
            $(".test").append("<div data='"+index.pathname+"' class='col-md-2 col-lg-2 file  itemF'><img class='sv' src='images/svg/ico.svg'><li class='file text-center'>"+index.filename+"</li><br><a class='btn btn-danger' role='button'href='"+index.pathname+"' download='"+index.filename+"'>Télécharger</a><a class='btn btn-danger' role='button' href='"+index.pathname+"'>Ouvrir</a></div>");
          }

            if(index.extension == 'jpg'){
            $(".test").append("<div data='"+index.pathname+"' class='col-md-2 col-lg-2 file itemF'><img class='sv' src='images/svg/jpg.svg'><li class='file text-center'>"+index.filename+"</li><br><a class='btn btn-danger' role='button' href='"+index.pathname+"' download='"+index.filename+"'>Télécharger</a> <a class='btn btn-danger' role='button' href='"+index.pathname+"'>Ouvrir</a></div>");
          }

          if(index.extension == 'svg'){
          $(".test").append("<div data='"+index.pathname+"' class='col-md-2 col-lg-2 file itemF'><img class='sv' src='images/svg/svg.svg'><li class='file text-center'>"+index.filename+"</li><br><a class='btn btn-danger' role='button' href='"+index.pathname+"' download='"+index.filename+"'>Télécharger</a> <a class='btn btn-danger' role='button' href='"+index.pathname+"'>Ouvrir</a></div>");
        }

          if(index.extension == 'txt'){
            $(".test").append("<div data='"+index.pathname+"' class='col-md-2 col-lg-2 file itemF'><img class='sv' src='images/svg/txt.svg'><li class='file text-center'>"+index.filename+"</li><br><a class='btn btn-danger' role='button' href='"+index.pathname+"' download='"+index.filename+"'>Télécharger</a> <a class='btn btn-danger' role='button' href='"+index.pathname+"'>Ouvrir</a></div>");
          }

          if(index.extension == 'ttf'){
            $(".test").append("<div data='"+index.pathname+"' class='col-md-2 col-lg-2 file itemF'><img class='sv' src='images/svg/ttf.svg'><li class='file text-center'>"+index.filename+"</li><br><a class='btn btn-danger' role='button' href='"+index.pathname+"' download='"+index.filename+"'>Télécharger</a> <a class='btn btn-danger' role='button' href='"+index.pathname+"'>Ouvrir</a></div>");
          }

          if(index.extension == 'psd'){
            $(".test").append("<div data='"+index.pathname+"' class='col-md-2 col-lg-2 file itemF'><img class='sv' src='images/svg/psd.svg'><li class='file text-center'>"+index.filename+"</li><br><a class='btn btn-danger' role='button' href='"+index.pathname+"' download='"+index.filename+"'>Télécharger</a> <a class='btn btn-danger' role='button' href='"+index.pathname+"'>Ouvrir</a></div>");
          }

          if(index.extension == 'pdf'){
            $(".test").append("<div data='"+index.pathname+"' class='col-md-2 col-lg-2 file itemF'><img class='sv' src='images/svg/pdf.svg'><li class='file text-center'>"+index.filename+"</li><br><a class='btn btn-danger' role='button' href='"+index.pathname+"' download='"+index.filename+"'>Télécharger</a> <a class='btn btn-danger' role='button' href='"+index.pathname+"'>Ouvrir</a></div>");
          }

          if(index.extension == 'mdt'){
            $(".test").append("<div data='"+index.pathname+"' class='col-md-2 col-lg-2 file itemF'><img class='sv' src='images/svg/mdt.svg'><li class='file text-center'>"+index.filename+"</li><br><a class='btn btn-danger' role='button' href='"+index.pathname+"' download='"+index.filename+"'>Télécharger</a> <a  class='btn btn-danger' role='button'href='"+index.pathname+"'>Ouvrir</a></div>");
          }

      }
        });
            $('.folder').fadeIn(500);
             $(".item").hover(function(){
        $(this).each(function (){
            if(this.style.backgroundColor !== ""){
                $(this).css("background", "");
            } else {
                $(this).css("background", "");
            }
        });
    });
            $(".itemF").hover(function(){
        $(this).each(function (){
            if(this.style.backgroundColor !== ""){
                $(this).css("background", "");
            } else {
                $(this).css("background", "");
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