<?php   
        //On récupère les dossiers/fichiers et leurs infos
        foreach($files = new DirectoryIterator("../") as $f) {                                
               if($f->isDot()) continue;                              
               $arbo[] = [
                   "filename" => $f->getfilename(),
                   "pathname" => $f->getpathname(),
                   "type" => $f->gettype(),
                   "extension" => $f->getextension(),
                   "isDirectory" => $f->isdir(),
                   "isFile" => $f->isfile(),
               ];
            header('Content-type: application/json');
        }
echo json_encode($arbo);
?>