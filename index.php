<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Explorateur de fichiers</title>
    <link rel="stylesheet" href="css/bootstrap.css">
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
  <?php
function scan($dir) {
    if(is_dir($dir)) {
        $files = scandir($dir);
        unset($files[0], $files[1]);
        natcasesort($files);
        echo '<ul>';
        foreach($files as $f) {
            if(is_dir($dir.$f)) {
                echo '<li class="folder">'.$f.'</li>';
                echo '<ul class="tree">';
                scan($dir.$f."/");
                echo '</ul>';
            }
        }
        echo '</ul>';
        echo '<ul>';
          foreach($files as $f) {
            if(is_file($dir.$f)) {
                echo '<li class="file" rel="'.$dir.$f.'">'.$f.'</li>';
            }
        }
        echo '</ul>';
    }
}
scan('../');
?>
    <script src="js/jquery.min.js"></script>
    <script src="js/bootstrap.js"></script> 
    <script src="js/app.js"></script>
</body>
</html>