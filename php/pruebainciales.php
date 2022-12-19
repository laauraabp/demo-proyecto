<?php
    $conexion = mysqli_connect("localhost","root","rootroot","pruebainiciales") or die("No se encuentra la base de datos");
    $usuario = $_REQUEST["usuario"];
    $clave = $_REQUEST["clave"];
    echo $usuario, $clave;
    $consulta = "select * from login where usuario = '$usuario' and clave = '$clave';";
?>