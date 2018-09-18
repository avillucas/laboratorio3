<?php 

if(isset($_GET))
{
 $nombre = $_GET['nombre'];
 $edad = $_GET['edad'];
 echo json_encode(['nombre'=>$nombre, 'edad'=>$edad], true);
}