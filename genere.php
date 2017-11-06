<?php
    function generate($dir){
        $files = new DirectoryIterator($dir);
        
        //On récupère les dossiers/fichiers et leurs infos
        foreach($files as $f) {                                
               if($f->isDot()) continue;                              
               $arbo = [
                   "filename" => $files->getfilename(),
                   "pathname" => $files->getpathname(),
                   "type" => $files->gettype(),
                   "isDir" => $files->is_dir(),
                   "isFile" => $files->is_file(),
               ]
            }
}                                      
?>