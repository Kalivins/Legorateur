<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Explorateur de fichiers</title>
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
   
    <script src="https://code.jquery.com/jquery-3.2.1.min.js"></script> 
    <script src="js/app.js"></script>
</body>
</html>
<?php
function scan($dir) {
    if(is_dir($dir)) {
        $files = scandir($dir);
        unset($files[0], $files[1]);
        natcasesort($files);
        foreach($files as $f) {
            if(is_dir($dir.$f)) {
                echo '<li class="folder">'.$f.'</li>';
                echo '<ul class="tree">';
                scan($dir.$f."/");
                echo '</ul>';
            }
        }
          foreach($files as $f) {
            if(is_file($dir.$f)) {
                echo '<li class="file" rel="'.$dir.$f.'">'.$f.'</li>';
            }
        }
    }
}
scan('../');
?>
