<?php

if($_SERVER['QUERY_STRING']=='list') {
//    phpinfo();
    header("Content-Type: text/html; charset=utf-8");
    highlight_string(file_get_contents($_SERVER['SCRIPT_FILENAME']));
    exit;
}

// header("Content-type: text/plain; charset=utf-8");
// die( bredogon_score() );

function fake_score() { global $TP;

$tmpl=trim("
{АБСТРАКТНОЕ}
Метод - {МЕТОД}.
Исполнение - {ИСПОЛНЕНИЕ}.
Новизна - {НОВИЗНА}.
Оценка - {ОЦЕНКА}
{ОБЪЯСНЮ}
");

$e=explode("\n","

ОБЪЯСНЮ
1 Мы бы на вашем месте {ДЕЛАЛИ}{ИБО}
1 Если б мы {ДЕЛАЛИ}, {СТАЛОБЫ}
1 {РЕКОМЕНДУЮ} {ИМПЕРАТИВ}{Z}
1 {СКАЖУ}
1 {ФИНАЛ} {ФАКТЫ}
1 {НАПОСЛЕДОК}
1 {ЛИЧНОЕ}

СКАЖУ
6 Это не статья, это {ЭПИТЕТЖ}{Z}
9 Такой труд-{ЭПИТЕТМ} я могу написать {ВРЕМЯ}{Z}
1 Конечно, на вкус и цвет товарищей нет.
1 Это мое мнение.
1 Остаюсь при своем мнении.
1 Извините за стариковскую прямоту.
1 Я такие исследования не люблю.
1 Автор - бездарность{Z}
1 Я бы на вашем месте больше никогда ничего не писал{Z}
1 Исследовтеля из вас не выйдет.
1 Такое в приличном журнале не публикуют, извините.
9 Но главный вопрос - а что собственно хотел сказать автор?
9 Чего ради все это намешано?

ИМПЕРАТИВ
1 не пишите больше ничего
1 перестаньте писать
1 выкиньте и сделайте работу заново
1 попробуйте поработать головой
1 поймите, наука - это не ваше

РЕКОМЕНДУЮ
1 Мой вам совет:
1 Совет доцента:
1 Вот что я вам скажу:
1 Мнение со стороны -
1 Вы бы {ДЕЛАЛИ},
1 Поверьте опыту:
1 Поверьте на слово:
1 Рекомендую:
1 Совет:
1 Просто совет:

СТАЛОБЫ
1 я б еще понял{Z}
1 может и был бы толк{Z}
1 цены б вам не было{Z}
1 можно было бы о чем-то говорить{Z}
1 это бы имело смысл, а так - извините{Z}
1 я бы подумал о публикациях{Z}
1 даже это бы не спасло{Z}
1 получил бы оценку выше{Z}
1 можно было говорить о защите{Z}
1 можно было бы думать о научной степени{Z}
1 я бы решил что вы {АВТОРИТЕТ}{Z}
1 это был бы новый {АВТОРИТЕТ}{Z}
1 я бы решил, что вы {АВТОРИТЕТ}{Z}
1 я б сказал, что это {АВТОРИТЕТ}{Z}

Z
1 !
5 .
1 ...
1  :-)

АВТОРИТЕТ
1 Ломоносов
1 Менделеев
1 Гриша Перельман
1 Виктор Петрик
1 кто-то из Госдумы
1 кто-то из РАН
1 кто-то с нашей кафедры
1 кто-то из общепризнанных

ДЕЛАЛИ
1 сократили
1 бросили работу
1 подчистили
1 подредактировали
1 оставили только факты
1 подучили русский язык
1 не считали себя учеными
1 понимали о чем пишем
1 старались тщательнее проверять
1 переделали выводы
1 убрали чужие заимствования
1 читал больше классических работ
1 постеснялись такое выдвигать
1 никому это не показывали
1 хорошо учились в школе
1 учили бы предмет
1 делали всё неспеша
1 не допускали ошибок

ИБО
1 , потому что вышел {ЭПИТЕТМ}.
1 , чтоб не срамиться.
1 , а то получился {ЭПИТЕТМ}.
1 , ибо получается {ЭПИТЕТЖ}.

ЛИЧНОЕ
3 Автор еще очень молод.
2 Я прав, автор - женщина?
4 Писала баба, уверен!
3 Явно писала девушка с комплексами.
3 У автора явные проблемы в личной жизни.
3 Первые научные опыты?
2 Автор зануда.
3 Проба пера.
4 Извините, серьезная наука не для вас.
1 У нас на кафедре таких заставляли мыть пол.
5 В молодости мы все писали подобную чушь после пьянок.
2 И эти люди надеются на грант?!
4 Встретить бы авторов - и в рыло! Чиста для профилактики...
2 Таких деятелей следует стерилизовать в детстве.
4 Это уже болезнь.
1 Похоже на научную работу, но тем хуже для неё.

ФИНАЛ
1 Резюме невразумительно.
1 Выводов фактически нет.
1 С концовкой беда.
1 Извечная беда - нет прикладного смысла.
2 Ну и что в сухом остатке?
1 Это называется исследование?

ФАКТЫ
1 Аргументация невразумительная.
1 Факты недостоверны.
1 Главная идея не доведена до ума.
1 Данные - высосаны из пальца.

НАПОСЛЕДОК
1 Тем не менее, может порекомендую для публикации.
1 Короче - никому читать не советую!
1 И много у вас таких, извините, \"работ\"?

ОЦЕНКА
1 1
4 2
5 3
2 4
1 5

МЕТОД
1 хромает
1 заурядный
1 устаревший
1 хаотический
1 бессистемный
1 не понимаю как можно так работать

ИСПОЛНЕНИЕ
1 ох, сложное
1 корявое
1 нескладное
1 неровное
1 вполне себе
1 с пивком потянет
1 еще один студент писал
1 даже не знаю как оценить
2 ни то ни се

НОВИЗНА
1 отсутствует
1 так себе
1 на троечку
1 забавно
1 есть кое-что
1 уже было
1 сотню раз было
1 не обнаружена
1 тоска..

АБСТРАКТНОЕ
3 Ну, мы прочли.
3 Уф... с трудом осилили.
5 Скука.
6 Сказать особо нечего.
6 Ну что сказать?
4 По порядку:
2 Итак, приступим.
2 Я догадываюсь кто это заказывал...
1 Понимаю, что грант отрабатывали.
3 Тяжело будет сформулировать, но попробую:
2 Где-то я уже это читал?

ЭПИТЕТМ
1 мусор
2 дилетантизм
1 бред
1 полный ужас
1 ужас

ПОЛНЫЙ_ЭПИТЕТ
1 возмутительная {ЭПИТЕТЖ}
1 удивительная {ЭПИТЕТЖ}
1 зануднейшая {ЭПИТЕТЖ}
1 некомпетентная {ЭПИТЕТЖ}
1 дилетантская {ЭПИТЕТЖ}
1 безнадежная {ЭПИТЕТЖ}

ЭПИТЕТЖ
1 мерзость
1 похабщина
1 бездарность
1 тягомотина
1 скучища
1 некомпетентность
1 дилетантщина

ВРЕМЯ
1 за академический час
1 за пару вечеров
1 за неделю
1 сотню за вечер

");


  $TP=array(); $m=''; foreach($e as $i=>$s) { $s=rtrim($s);
    if($s=='') $m='';
    elseif($m=='') $m=$s;
    else {
	if(!isset($TP[$m])) $TP[$m]=array();
	list($num,$txt)=explode(" ", $s, 2);
	if(1*$num == 0 || empty($txt)) die("Error in str %$i `$m`:[$s]");
	$txt=str_replace("  ","\n",$txt);
	$TP[$m][] = array($num,$txt);
    }
  }

  $akey=array_keys($TP);
  foreach($akey as $name) {
    $GLOBALS['preg_replace_callback_name']=$name;
    $tmpl = preg_replace_callback("/\{".$name."\}/",function() {
	global $TP;
        $name=$GLOBALS['preg_replace_callback_name'];

		$var = array();	$old = 0;
		foreach($TP[$name] as $i=>$s) {
	    	    if(gettype($s)!='array') die("\n !array name=$name [$i]: ".$s);
	    	    if(!isset($s[1])) die("\n array name=$name [$i]: ".print_r($s,1));
			$old += $s[0];
			$var = array_pad($var, $old, $s[1]);
		}
		return str_replace("\\n", "\n", $var[rand(0, count($var)-1)]);
	}, $tmpl);
  }

return $tmpl."\n";
}
?>