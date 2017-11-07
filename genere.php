<?php   
        //On récupère les dossiers/fichiers et leurs infos
      $dir = $_POST['toinou'];
        if (isset($dir)) {
          if(empty($dir)){
            $dir = "../";
          } else {
            $dir = $_POST['toinou'];
          }
          else{
            $dir="../";
          }

        }
        $dir = "../";
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
echo json_encode($arbo);
?>