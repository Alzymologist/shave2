<?php

# ������ ��������� ��� PHP
    ini_set('session.use_trans_sid', 0);
    ini_set('session.use_cookies', 0);

    $HTTPS=(isset($_SERVER['HTTPS']) && 'off'!=$_SERVER['HTTPS'] || isset($_SERVER['HTTP_X_FORWARDED_PROTO']) && 'https'==$_SERVER['HTTP_X_FORWARDED_PROTO']?'https':'http');
    $a="1"; if(ini_get('register_globals')!=false) foreach(array_merge($_GET,$_POST,$_REQUEST,$_COOKIE) as $n=>$l) unset(${$n});

# ���� memcache �� ����������, �������� false (��������), ����� ��� ��������! ���� ���������� - �������� ��������� ����������:
    $memcache = false;
    // if(($memcache=function_exists('memcache_connect'))) { $a=intval(ini_get('memcache.default_port')); if($a) $memcache=memcache_connect('localhost',$a); }
# ��������� mysql
    $msq_host = "localhost";
    $msq_login = "root";
    $msq_pass = "Rfgbnjirf";
    $msq_basa = "shave";
    $msq_charset = "cp1251";
    $blogdir = ""; // ��� ����� ����� ��� ��������� ������ � ������ �����
# �����, ��� ������� ������ ���������� �����
    $host = rtrim($_SERVER["DOCUMENT_ROOT"],'/').'/';
    $filehost = $host.$blogdir; // ���������� ����� ����� �� �������
# ������ ���������
    $wwwcharset = "windows-1251"; // ��������� ������� �����
    $ttl=60; // ����� ���� MySQL
?>