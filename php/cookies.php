<?php
    if(isset($_REQUEST["iniciar"])) {
        $usuario = $_REQUEST["usuario"];

        setcookie("usuario", $usuario, time()+3600);

        /*header("location: ./validarcookies.php");*/
    }
?>