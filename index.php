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
function arbo($dir) {                                   //On declare la fonction qui permet de recuperer l'arborescence du dossier
    if(is_dir($dir)) {                                 // On vérifie que le dossier existe
        $files = scandir($dir);                  // On stocke ds la variable files la liste des fichiers present dans le dossier
        unset($files[0], $files[1]);          // On retire les points du tableaux
        natcasesort($files);                    // permet de classer les dossiers ds le tableau par nom         
        echo "<ul>";
        foreach($files as $f) {                          // permet de retirer les valeurs du tableau files ds la variable F      
            if(is_dir($dir.$f)) {                        //on verifie que le chemin du dossier existe
                echo '<li class="folder">'.$f.'</li>';           //on liste nos dossier
                echo '<ul class="tree">';                          //liste les fichiers
                arbo($dir.$f."/");                        // on appelle la fonction SCAN  pour pouvoir acceder au dossier  
                echo "</ul>";
            }
        }
        echo '</ul>';                              
        echo '<ul>';
          foreach($files as $f) {                                                     //on recupere et on affiche les sous dossier du haut
            if(is_file($dir.$f)) {
                echo '<li class="file" rel="'.$dir.$f.'">'.$f.'<a href="'.$dir.$f.'"
   download="'.$dir.$f.'">Télécharger</a> <a href="'.$dir.$f.'">Ouvrir</a> </li>';
            }
        }
        echo '</ul>';
    }
}
arbo('../');                                       
?>
    <script src="js/jquery.min.js"></script>
    <script src="js/bootstrap.js"></script> 
    <script src="js/app.js"></script>
</body>
</html>