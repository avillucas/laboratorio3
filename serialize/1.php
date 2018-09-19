<?php 
if(isset($_POST))
{
    $nombre = $_POST['nombre'];
    $edad   = $_POST['edad']  ;
    sleep(5);
    echo json_encode(['nombre'=>$nombre, 'edad'=>$edad], true);
}