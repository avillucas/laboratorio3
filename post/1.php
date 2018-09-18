<?php 
if(isset($_POST))
{
    $nombre = $_POST['nombre'];
    $edad   = $_POST['edad']  ;
    echo json_encode(['nombre'=>$nombre, 'edad'=>$edad], true);
}