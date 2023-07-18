<?php

# важные настройки для PHP
    ini_set('session.use_trans_sid', 0);
    ini_set('session.use_cookies', 0);

    $HTTPS=(isset($_SERVER['HTTPS']) && 'off'!=$_SERVER['HTTPS'] || isset($_SERVER['HTTP_X_FORWARDED_PROTO']) && 'https'==$_SERVER['HTTP_X_FORWARDED_PROTO']?'https':'http');
    $a="1"; if(ini_get('register_globals')!=false) foreach(array_merge($_GET,$_POST,$_REQUEST,$_COOKIE) as $n=>$l) unset(${$n});

# Если memcache не установлен, оставьте false (отключен), иначе все повиснет! Если установлен - включите параметры соединения:
    $memcache = false;
    // if(($memcache=function_exists('memcache_connect'))) { $a=intval(ini_get('memcache.default_port')); if($a) $memcache=memcache_connect('localhost',$a); }
# параметры mysql
    $msq_host = "localhost";
    $msq_login = "root";
    $msq_pass = "Rfgbnjirf";
    $msq_basa = "shave";
    $msq_charset = "cp1251";
    $blogdir = ""; // имя папки блога при установке движка в корень сайта
# место, где система хранит директорию блога
    $host = rtrim($_SERVER["DOCUMENT_ROOT"],'/').'/';
    $filehost = $host.$blogdir; // физический адрес файла на сервере
# прочие параметры
    $wwwcharset = "windows-1251"; // кодировка страниц блога
    $ttl=60; // время кэша MySQL
?>