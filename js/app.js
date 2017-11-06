$(document).ready(function($){
    $("ul.tree").hide();
    $("li.folder").click(function() {
       $(this).each(function () {
          if (this.style.backgroundColor !== ""){
              this.style.backgroundColor = "";
          } else {
              this.style.backgroundColor = "grey";
          }
       }); 
        });
    $("li.folder").dblclick(function () {
        $(this).next("ul").toggle("fast");
    });
});