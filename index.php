<?php
function scan($dir) {
    if(is_dir($dir)) {
        $files = scandir($dir);
        unset($files[0], $files[1]);
        natcasesort($files);
        foreach($files as $f) {
            if(is_dir($dir.$f)) {
                echo '<a href="'.$dir.$f.'"><li class="folder">'.$f.'</li></a>';
                echo '<ul class="tree">';
                scan($dir.$f."/");
                echo '</ul>';
            }
        }
          foreach($files as $f) {
            if(is_file($dir.$f)) {
                echo '<a href="'.$dir.$f.'"><li class="file" rel="'.$dir.$f.'">'.$f.'</li></a>';
            }
        }
    }
}
scan('../');
?>
