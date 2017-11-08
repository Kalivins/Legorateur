<?php   
        //On récupère les dossiers/fichiers et leurs infos
      $dir = $_POST['toinou'];
        if (isset($dir)) {
          if(empty($dir)){
            $dir = "../";
          } else {
            $dir = $_POST['toinou'];
          }
            
          } else{
            $dir="../";
        }
        foreach($files = new DirectoryIterator($dir) as $f) {                                
               if($f->isDot()) continue;                              
               $arbo[] = [
                   "filename" => $f->getfilename(),
                   "pathname" => $f->getpathname(),
                   "path" => $dir,
                   "type" => $f->gettype(),
                   "extension" => $f->getextension(),
                   "isDirectory" => $f->isdir(),
                   "isFile" => $f->isfile(),
               ];
            header('Content-type: application/json');
        }
        // Trier les résultat dossier fichiers
        $folders = []; //Créer un tableau pour mettre les dossiers
        $files = []; //Créer un tableau pour mettre les fichiers
        foreach($arbo as $file){
            if($file["type"] == "dir"){
              $folders[]=$file;              //Pour chaque fichiers ou dossier scanner on regarde leur type
            }else {                          //Et on les classes dans le tableau correspondant
              $files[]=$file;
            }
        }

  $final=array_merge($folders, $files);  //On merge les tableaux pour que les dossiers apparaissent en premier, et ensuite les fichiers 

echo json_encode($final);
?>