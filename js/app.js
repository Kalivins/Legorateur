$(document).ready(function($){
    $("li").hover(function(){
        $(this).each(function (){
            if(this.style.backgroundColor !== ""){
                $(this).css("background", "");
            } else {
                $(this).css("background", "grey");
            }
        });
    });
    $.post("genere.php", function genere (data) {
   var arbo = data;
        $("ul").appendTo(".container").addClass('test'); 
        arbo.each(function (){
            if(this.isDirectory){
             $("<li><a data='"+this.pathname+"'>"+this.filename+"</a></li>").appendTo(".test").addClass('folder');   
            } if(this.isFile){
                $("<li>"+this.filename+"</li><a href='"+this.pathname+"' download='"+this.filename+"'>Télécharger</a> <a href='"+this.pathname+"'>Ouvrir</a>").appendTo(".test").addClass('file');
            }
        });
});
});