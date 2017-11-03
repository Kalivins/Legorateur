jQuery(function($){
    $("ul.tree").hide();
    $("li.folder").click(function () {
        $(this).next("ul").toggle("fast");
    });
    $("li.file").click(function () {
        document.location = "dl.php?f="+$(this).attr("rel");
    });
});