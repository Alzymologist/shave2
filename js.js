// Meguka password: 000000
// traffic science trophy travel sound exercise there excess myth gravity feed they

mainpath='/';
mainrand='?'+Math.random();
mainjs='/js/';
mainjson='/php/json.php';// '/ALZYMOLOGIST/shave/json.php';

admin_logins=["lleo","test1"]; // ага, щаз, а то я их не проверю на бэкенде, это вообще отладочная фуйня

// page_onstart.push("GO();");

/*
function myTest(){
	AJE(function(j){ dier(j); },{action:'Test_recount_all'});
//    JA.Find('nanomagnets');
//    JA.Find('fuck');
//    JA.CommentsTo(1);
//        AJE( function(j){ dier(j); } ,{action:'CommentsTo',pid:1});
//        AJE(function(j){ dier(j) },{action:'CommentTest'});
}
*/

async function GO(){
    nonav=1; // отключить встроенную навигацию движка

    // задать нужный дизайн всплывающих окон
    wintempl="<div id='{id}_body'>{s}</div><i id='{id}_close' title='Close' class='can4'></i>";
    wintempl_cls='pop4 zoomIn animated';

    if(!idd('mys')) return; // если это другая страница сайта, то дальше не делать

    await JA.Load_PD_engine(); // подгрузить и настроить библиотеку работы с блокчейном
}




JA={
    test: async function() {

    // работа с лайками:

    // var o=await JA.LOAD_ID(); // все opinion (from, value, data, mode)
    // var o=await JA.LOAD_ID( "5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY" ); // все opinion от юзера (value, data, mode)
    // var o=await JA.LOAD_ID( "5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY", "https://natribu.org" ); // все opinion от юзера к записи

    // работа со статьями:

    // var o = await JA.LOAD_SC(); // все статьи (from, data, authors)
    // var o = await JA.LOAD_SC( await ( PD.id0x('bafkr4ibvjr4sylprtbmml4wdeofszeefg4n6rkd22elxsafh3ailjkpxwu') ) ); // PD.mk_id0x(7) // все статьи (from, authors)

    // Save Scantific Recird
    // var uid = await SAVE_SC(id,[author,author,...]);

    // Save React to ID or DOI
    // var uid = await SAVE_ID(ID,React); // Endorse/Thwart

    // загрузить список моих френдов
    await JA.PD_getFRIENDS();

    // загрузить (когда-нибудь) массив имен
    JA.PD_getAllNAMES();

    // и запустить
    if(idd('myfind').value==idd('myfind').placeholder) idd('myfind').value='';
    JA.Find(idd('myfind').value);
    },



    onReady: async function() {
	JA.test();
	return;

        // Если в хэше задано что-то
    	var x=decodeURI(document.location.hash);

        if(x!='') {
	    x=x.replace(/^\#/g,'');
	    idd('myfind').value=x;
	    JA.Find(x);
	} else {
	    // Открыть последний поиск
	    JA.onStart();
	    setTimeout(function(){
		if(idd("mys").innerHTML != '') return;
		var x=idd('myfind').value; if(x != '') JA.Find(x);
	    },1000);
	}

	JA.PingNews(20000); // пингать новое каждые 20 секунд
	JA.OffsetLoadInterval(); // запустить подгрузку при доматывании до страницы
    },

    shave_login:'', // это надо убрать
    shave_cookie:'', // это надо убрать

    ALLFRIENDS:false, // все юзеры
    FRIENDS:[], // мои френды
    FRIENDSREV:false, // ???

    BookMarklet:function(){ ohelpc('Bukmarklet','set Bukmarklet url',"javascript:(function(){alzymologist_cookie='"+JA.shave_cookie+"';var%20s=document.createElement('script');s.type='text/javascript';s.src='//node-shave.zymologia.fi"+mainpath+"doi.js?'+Math.random();document.getElementsByTagName('body')[0].appendChild(s)})();void(0);");},

//          _                _
//         | |    ___   __ _(_)_ __
//         | |   / _ \ / _` | | '_ \
//         | |__| (_) | (_| | | | | |
//         |_____\___/ \__, |_|_| |_|
//                     |___/

    // Найти в блокчейне имя аккаунта или массив всех аккаунтов (если ACC не указан)
    PD_getNAMES: async function(ACC) {
	ajaxon();
        var o = await PD.entries_raw('peerReview', 'opinionRecord', ACC);
	var u={}; for(var x of o) { if(0===x.data.indexOf('MyName:')) u[x.from]=x.data.replace(/^MyName\:/g,''); }
        ajaxoff();
	return (ACC==undefined?u:u[ACC]);
    },

    PD_getAllNAMES: async function() { JA.ALLFRIENDS = await JA.PD_getNAMES(); },

    www_LoginSave: async function(e) {
	// есть reactToDoi, куда можно в качестве Doi записать "RealName:Вася Пупкин"
	var uid=await SAVE_ID('MyName:'+e.form.login.value, 'Endorse');
    },

    formLogin: async function(){
    // alert('formlogin');return;
	melpc(
	    "<div style='max-width:400px;'>"+
	    "<h2>Login</h2>"+
	    "<form>"+

"<div class='nobr'>"+
"<i class='e_ledred substrate_status' onclick='JA.substrateInfo()'></i>"+
"&nbsp;"+
"<select name='PDhash' ramsave='substrateAccount' class='ALICES' onchange='PD.www_select_my(this)'></select>"+
"</div>"+

"<table border='0' cellspacing='10'>"+

"<tr><td>ID: </td><td class='br ALICES_ACC'></td></tr>"+
"<input type='hidden' class='ALICES_ACC' name='ACC'>"+

"<tr><td>Balance: </td><td class='ALICES_BALANCE'></tr>"+
"<tr><td>Name: </td><td><input type='text' class='ALICES_NAME' name='login' size='20'></td></tr>"+

"<tr><td></td><td><input type='submit' value='Save' onclick=\"JA.www_LoginSave(this); return false;\"></td></tr>"+
	    "</table></form>"+
	    "</div>");
//	await JA.Load_PD_engine(); // подгрузить и настроить библиотеку работы с блокчейном
    },

/*
    loginset: function(login,cookie){
	if(login || login==='') {
    	    JA.shave_login=login; f_save('shave_login',JA.shave_login);
	    JA.shave_cookie=cookie; f_save('shave_cookie',JA.shave_cookie);
	} else {
	    JA.shave_login=f_read('shave_login'); if(!JA.shave_login) JA.shave_login=''; // false
	    JA.shave_cookie=f_read('shave_cookie'); // false
	}
	[...document.querySelectorAll('.rname')].forEach(p => p.innerHTML=h(JA.shave_login));
    },

    // JA.Logout();
    Logout: function(){ JA.loginset('',''); salert('Logout',500); },

    // JA.newLogin('Pavel','Prikol123');
    newLogin: function(login,password){
        AJE(function(j){
	    JA.loginset(j.login,j.cookie); mclean(); salert('User created: '+h(j.login),500);
	},{action:arguments.callee.name,login:login,password:password});
    },

    // JA.Login('lleo','Prikol123');
    Login: function(login,password){
        AJE(function(j){
	    JA.loginset(j.login,j.cookie); mclean(); salert('Logged as '+h(j.login),500); JA.onStart();
	},{action:arguments.callee.name,login:login,password:password});
    },
*/
    onStart: function(){
//	 if(idd('mys') && JA.shave_login!='' ) { JA.Find('MyFriends'); JA.Find('MyLikes'); }
    },

/*
    aboutLogin: function(login,password){
        AJE(function(j){
	    dier(j);
	},{action:'listLogin'});
    },
*/

//          _____ _           _
//         |  ___(_)_ __   __| |
//         | |_  | | '_ \ / _` |
//         |  _| | | | | | (_| |
//         |_|   |_|_| |_|\__,_|
//

    prLikes: function(j,array,offset) {
//        if(JA.FRIENDS===false) { return JA.loadFriends(function(){JA.prLikes(j,array,offset)}); }
//        if(JA.FRIENDSREV===false) { JA.FRIENDSREV={}; for(var i in JA.FRIENDS) JA.FRIENDSREV[JA.FRIENDS[i]]=i;	}

	 var es={},i=0;
	 for(var i=0;i<j.total;i++) { var e=j[i];
	    if(offset!=undefined) offset++;
	    // Author
	    es[' '+e.id]=(offset?"<div class='ofs'>"+offset+".</div>":'')
		+"<b>"+h(JA.FRIENDSREV[e.uid])+"</b> set "
		    +(e.like=='like'?"<font color='green'>LIKE</font>":"<font color='red'>DISLIKE</font>")
		+"</div>"
		+" to <div class='ll' onclick=\"JA.Find('"+h(e.DOI)+"')\">"+h(e.author)+"</div>"
		// +" «"+h(e.about).replace(/\n/g,'<br>')+"»"
		// +"<div class='rama'>"+print_r(e)+"</div>"
		+"</div>";
	 }
	if(array) return es;
	var s=''; for(i in es) s+="<div class='snippet' pid='"+h(i).replace(/\s/g,'')+"'>"+es[i]+"</div>";
	return s;
    },


    getInfoForDOI: async function(DOI) {

	var likes=0,dislikes=0;
	for(var f of JA.FRIENDS) {
	    var like = await JA.LOAD_ID( f, DOI );
	    if(like=='Endorse') likes++;
	    else if(like=='Thwart') dislikes++;
	}

	var e=document.querySelector("DIV.snippet[pid='"+DOI+"']");
	if(!e) return setTimeout("JA.getInfoForDOI(\""+h(DOI)+"\")",1000);

	e.querySelector('.kna').style.display=(1*likes+1*dislikes ? 'inline-block' : 'none');
	e.querySelector('.kxp').innerHTML=(likes ? likes : '');
	e.querySelector('.kxm').innerHTML=( dislikes ? dislikes : '');

//	А комментов у нас пока нет!
//	e.querySelector('.commentscount').style.display='inline-block';
//	e.querySelector('.commentscount').innerHTML='55';
//	e.style.border="3px dotted red";
    },

    prList: function(j,array,offset) {
	 var SORT=[];
	 var es={},i=0;
	 while(j[i]) { SORT.push({index:i,comments:1*j[i].commTO}); i++; }
	 SORT.sort(function(b,a){return 1*a.comments - 1*b.comments;});

	 for(var k of SORT) { var e=j[k.index];
	    if(offset!=undefined) offset++;
	    // Author

	    if(!e.DOI) e.DOI='shave.'+e.id;

	    JA.getInfoForDOI(e.DOI);

//	    es[' '+e.id] =
	    es[e.DOI] =
		( e.commFROM ? "<div class='ss toid'><i class='mv e_yes' onclick='JA.CommentsFrom(this)'></i></div>":'')
	    +(offset?"<div class='ofs'>"+offset+".</div>":'')
	    +"<div class='ss author'>"+h(e.author)+"</div>"
	    // Date
	    +"<div class='ss'>Date"+(e.Date_name?" ("+h(e.Date_name)+")":'')+": "+h(JA.doDate(e.Date))+"</div>"
	    // DOI
	    +(e.raw?
		 "<div class='ss'>DOI: <a target='_blank' href='http://dx.doi.org/"+h(e.DOI)+"' pid='"+h(e.id)+"' class='DOI'>"+h(e.DOI)+"</a></div>"
		:"<div style='display:block' pid='"+h(e.id)+"' class='DOI'></div>"
	    )
	    // Abstract
	    +"<div class='ss abstract'>"+h(e.about).replace(/\n/g,'<br>')+"</div>"
	    // More
	    +(e.raw?
		"<div class='ll r' onclick='oclo(this)'>[more]</div>"
		+"<div style='margin:10px;display:none;max-width:"+(getWinW()-200)+"px' class='ss r rama'>"
		// +olddat+"<hr>"
		+print_r(JSON.parse(e.raw),0,3).replace(/\n/g,'<br>')+'</div>'
		:''
	    )
	    // knPanel
	    +"<div class='knPanel'>"

/*
	    +"<i class='kna mv0' onclick='JA.LakeList(this)' style='display:"+(1*e.Like+1*e.Dislike?'inline-block':'none')+"'></i>"
	    +"<i class='knp mv0' onclick='JA.Lake(this,1)'></i><i class='kxp'>"+(1*e.Like?e.Like:'')+"</i>"
	    +"<i class='knm mv0' onclick='JA.Lake(this,0)'></i><i class='kxm'>"+(1*e.Dislike?e.Dislike:'')+"</i>"
	    +"<button class='btn-hover color-5 mv0' onclick='JA.CommAdd(this)'>Comment</button>"
	    +"<div onclick='JA.CommentsTo(this)' class='commentscount mv0'"
		+( 1*e.commTO ? "style='display:inline-block'>"+e.commTO : ">")
		+"</div>"
*/

	    +"<i class='kna mv0' onclick='JA.LakeList(this)' style='display:none'></i>"
	    +"<i class='knp mv0' onclick='JA.Lake(this,1)'></i><i class='kxp'></i>"
	    +"<i class='knm mv0' onclick='JA.Lake(this,0)'></i><i class='kxm'></i>"
//	    +"<button class='btn-hover color-5 mv0' onclick='JA.CommAdd(this)'>Comment</button>"
//	    +"<div onclick='JA.CommentsTo(this)' class='commentscount mv0'></div>"

// админское старое
//	    +(in_array(JA.shave_login,admin_logins)?"<i class='mv del_kn e_cancel1' onclick='JA.CommDel(this)'></i>":'')

	    +"</div>";

	    // погодите, нам нужен список френдов ещё...
	    // idie("DOI: ["+h(e.DOI)+"]");
	 }

//	dier(es);

	if(array) return es;
	var s=''; for(i in es) s+="<div class='snippet' pid='"+h(i).replace(/\s+/g,'')+"'>"+es[i]+"</div>";
	return s;
    },

    addPR: function(e,es){
	for(var i in es) newdiv(es[i],{cls:'snippet',attr:{pid:(''+i).replace(/\s/g,'')}},e,'last');
    },

    prNEWDIV: function(j) {
	var id='mySearch:'+j.query;

	newdiv(
	    "<div class='z'>"
	    +"Search: <span class='myQuery'>"+h(j.query)+"</span>"
	    +" results <span class='myStart'>"+h(j.start)+"</span>"
	    +"/<span class='myTotal'>"+h(j.total)+"</span>"
	    +" <span class='myPerpage'>"+h(j.perpage)+"</span>"
	    +"</div>"
	    ,{cls:'newsearch',id:id},idd('mys'),0);

	JA.addPR( idd(id), j.query=='MyLikes'
		? JA.prLikes(j,1,0)
		: JA.prList(j,1,0)
	);
    },

    Find: function(txt){
	if(txt=='' || txt==idd('myfind').placeholder) return;

	if(txt!='MyFriends' && txt!='MyLikes') setTimeout(function(){document.location.hash=txt;},10);
	// CLose all previus window
        idd('mys').querySelectorAll('DIV.newsearch').forEach((p)=>{ lleo_a(p,'zoomOut',function(){clean(p)}); });
        AJE(function(j){
	 progress2();
	 if(!j.total) return;
	 idd("checkbox").checked = false; // чтобы закрыть хуйню в мобильной версии
	 if(!j.query) return salert('Error results',1500);
	 JA.prNEWDIV(j);
       },{action:arguments.callee.name,txt:txt});
    },

//          _____     _                _
//         |  ___| __(_) ___ _ __   __| |___
//         | |_ | '__| |/ _ \ '_ \ / _` / __|
//         |  _|| |  | |  __/ | | | (_| \__ \
//         |_|  |_|  |_|\___|_| |_|\__,_|___/
//

    // веб-редактирование списке френдов
    www_FriendChange(e) {
	var key, west=e.closest('DIV').querySelector('SPAN').getAttribute('tiptitle');
	if( e.checked ) { // добавить
	    if(!in_array(west,JA.FRIENDS)) JA.FRIENDS.push(west);
	} else { // убрать
	    if(key=in_array(west,JA.FRIENDS)) delete JA.FRIENDS[key];
	}
	JA.PD_saveFriends();
    },

    // Найти  мой список френдов
    PD_getFRIENDS: async function(ACC) {
	var s=f_read('MyFriends');
	JA.FRIENDS = (s ? s.split(',') : []);
    },

    // Сохранить мой список френдов
    PD_saveFriends: async function() {
	// чистка массива
	JA.FRIENDS.sort();
	var o={}; for(var i of JA.FRIENDS) { if(i!='' && i!='undefined' && i!=undefined) o[i]=1; }
	JA.FRIENDS=Object.keys(o);
	// сохранить
	f_save('MyFriends',JA.FRIENDS.join(','));
	// clean('edit_friends');
    },




    // Save Scantific Recird
    SAVE_SC: async function(id,authors){
	id = await PD.id0x(id); // перевести в формат 0x00000
        var Y = {
    	    FROM: PD.my.ACC,
            authors: authors,
	    ipfs: id,
        };
        await PD.Post_promice( Y );
        return Y.chain; // salert('chain: '+h(Y.chain),5000);
    },


    // Save React to ID or DOI
    SAVE_ID: async function(ID,React){
        var Y = { FROM: PD.my.ACC, react: React };
	if(PD.is_id(ID)) {
	    Y.id=ID;
	    await PD.React_promice( Y );
	} else {
	    Y.doi=ID;
            await PD.ReactDoi_promice( Y );
	}
        return Y.chain;
    },

// L O A D

    LOAD_ID: async function(ACC,ID) {
//    var o = await PD.entries_raw("peerReview", "opinionRecord", PD.my.ACC, "https://natribu.org");
//       var o = await PD.entries_raw("peerReview", "opinionRecord", PD.my.ACC); // , "https://natribu.org");
//	ACC = PD.my.ACC;
//	ID = false;
	ACC = await PD.all2west(ACC);  // перевести в формат WEST
	// ID = await PD.id0x(ID);
	var o = await PD.entries_raw('peerReview', 'opinionRecord', ACC, ID);
	if(!o.length) return [];
	if(ID) return o[0].value;
	return o;
    },

    // Save Scantific Recird
    LOAD_SC: async function(x) {
	x = await PD.id0x(x); // перевести в формат 0x00000
	var o=await PD.entries_raw('peerReview', 'scientificRecord', x);
	if(!o.length) return [];
	return o;
    },



    PD_FindKey: async function(txt){
	// Взять список моих френдов
	await JA.PD_getFRIENDS();
	// Взять список всех френдов
	if(JA.ALLFRIENDS===false) JA.ALLFRIENDS = await JA.PD_getNAMES();
	var s=''; for(var l in JA.ALLFRIENDS) s+="<label><div><input type='checkbox'"
		+( in_array(l,JA.FRIENDS) ? ' checked' : '' )
		+" onchange='JA.www_FriendChange(this)'"
		+">&nbsp;<span alt='"+h(l)+"'>"+h(JA.ALLFRIENDS[l])+"</span></div></label>";
	// s+="<br><input type='button' onclick='JA.PD_saveFriends()' value='Save'>";
	s="<div id='friends' style='max-width:500px;'>"+s+"</div>";
	ohelpc('edit_friends','Friends',s); // idd('loginfind').focus();
    },


    PD_FriendChange: function(e) {
	var login=e.closest('LABEL').querySelector('.Friend').innerHTML;
	var ch=(e.checked ? 1: 0);
	// AJE(function(j){ JA.loadFriends() },{action:'setFriend',login:login,value:ch});
    },

    Friends: function(){
	// if(JA.FRIENDS===false) return JA.loadFriends(function(){JA.Friends()});
	var s=''; for(var l in JA.FRIENDS) s+="<div><label><input type='checkbox' checked"
		+" onchange='JA.FriendChange(this)'"
		+">&nbsp;<span class='Friend'>"+h(l)+"</span></label></div>";
	clean('idie');
	idie(s,'My friends');
    },


//           ____                                     _
//          / ___|___  _ __ ___  _ __ ___   ___ _ __ | |_
//         | |   / _ \| '_ ` _ \| '_ ` _ \ / _ \ '_ \| __|
//         | |__| (_) | | | | | | | | | | |  __/ | | | |_
//          \____\___/|_| |_| |_|_| |_| |_|\___|_| |_|\__|
//
    doDate: function(d) {
	if(d.indexOf('-')>=0 || 1*d < 4000) return d;
	d=new Date(1000*d); return d.getFullYear()+'-'+dd(d.getMonth()+1)+'-'+dd(d.getDate())
	+" "+dd(d.getHours())
	+":"+dd(d.getMinutes())
	+":"+dd(d.getSeconds());
    },
    getID: function(e) { return e.closest('.snippet').getAttribute('pid'); },
    getDOI: function(e) { var i=e.closest('.snippet').querySelector('.DOI'); return (i?i.innerHTML:''); },

    CommDel: function(e) { // Del commentary to Object.e
        var id=JA.getID(e), DOI=JA.getDOI(e);
	if(!confirm('Delete #'+id+" "+h(DOI)+"?")) return;

	AJE(function(j){
	    if(j.response=='OK') return clean(e.closest('.snippet'));
	    dier(j);
	},{action:arguments.callee.name,pid:id});
    },


    comment_templ: false,
    CommAdd: async function(e) { // Add commentary to Object.e
        if(!PD.my.ACC) return JA.formLogin();
	// --------- нарисовать окно комментария -----------------
    	    if(!JA.comment_templ) JA.comment_templ=AGET(mainpath+"comment.htm"); // Load template if need
            var id=JA.getID(e), hid='comm'+id, DOI=JA.getDOI(e);
	    var author=e.closest('.snippet').querySelector('.author').innerHTML;
            ohelpc(hid,'Comment to: '+h(author), mpers(JA.comment_templ,{id:id,DOI:DOI}) );
	    var p=document.querySelector(".commentform TEXTAREA");
    	    p.style.width=(getWinW()*0.9)+'px';
    	    p.style.height=(getWinH()*0.7)+'px';
    	    center(hid);
    	    var v=f_read('comment'); if(v!='') p.value=v;
    	    p.focus();
	// -------------------------------
	JA.Load_PD_engine(); // подгрузить и настроить библиотеку работы с блокчейном
    },

    delDubleNode: function(j,e) {
	// Del dubles
	var x=-1,p,P; while(j[++x]) {
	    P=document.querySelectorAll("DIV.snippet[pid='"+j[x].id+"']");
	    // if parent - no del
	    if(e && (p=e.closest("DIV.snippet[pid='"+j[x].id+"']")) ) { j[x]=false; continue; }
	    for(var p of P) {
	        lleo_a(p,'zoomOut',function(){clean(p)});
	        p.style.border='10px solid green';
	    }
	}
	return j;
    },

    CommentsTo: function(e) {
	var w=e.closest('.snippet');
	clean(w.querySelector(".commPlace"));
	AJE(function(j){
	    JA.delDubleNode(j);
	    var s=JA.prList(j);
	    newdiv(s,{cls:'commPlace'},w,'last');
	},{action:arguments.callee.name,pid:JA.getID(e)});
	// clean(e);
    },

    // РЎС‚Р°РІРёРј Р»Р°Р№РєРё Р·Р°РјРµС‚РєР°Рј
    Like: function(e,like) {
	AJE(function(j){
	    var w=e.closest('.snippet');
	    w.querySelector('.kxp').innerHTML=(1*j.Like?j.Like:'');
	    w.querySelector('.kxm').innerHTML=(1*j.Dislike?j.Dislike:'');
	    w.querySelector('.kna').style.display=(1*j.Like+1*j.Dislike?'inline-block':'none');
	},{action:arguments.callee.name,pid:JA.getID(e),like:like});
    },

    LikeList: function(e) {
	AJE(function(j){
	    ohelpc('LikeList','Like list',"<table border=0 cellspacing='20' cellpadding='0' style='min-width:300px'><tr valign='top'>"
		+"<td><i class='knp'></i><i class='kxp'>"+j.Like+"</i><br>"+j.LikeList.join("<br>")+"</td>"
		+"<td><i class='knm'></i><i class='kxm'>"+j.Dislike+"</i><br>"+j.DislikeList.join("<br>")+"</td>"
		+"</tr></table>");
	},{action:arguments.callee.name,pid:JA.getID(e)});
    },







    Lake: async function(e,like) { // потому что Like занято предыдущей версией
        if(!PD.my.ACC) return JA.formLogin();
	// --------- нарисовать окно комментария -----------------
    	    if(!JA.like_templ) JA.like_templ=AGET(mainpath+"like.htm"); // Load template if need
            var id=JA.getID(e), DOI=JA.getDOI(e), React=(like?"Endorse":"Thwart");
            ohelpc('Like_'+DOI,'React to: '+h(DOI), mpers(JA.like_templ,{id:id,DOI:DOI,React:React}) );
	// -------------------------------
	await JA.Load_PD_engine(); // подгрузить и настроить библиотеку работы с блокчейном

	if(!PD.my.ACC) await PD.init();

	// Endorse - одобряем, Thwart - отрицаем
        var Y = { FROM: PD.my.ACC, doi: DOI, react: React };

        await PD.ReactDoi_promice( Y );
	clean('Like_'+DOI);
	JA.getInfoForDOI(DOI); // обновить инфо по этому DOI
        // salert('chain: '+h(Y.chain),5000);
	return;

	return idie("<i class='substrate_status' style='display:inline-block; animation: 3s linear 0s infinite normal none running circle;'></i> &nbsp; "
+"тут будет лайк блокчейна:"
// +"<br>react(id, opinion): ["+JA.getDOI(e)+"], ["+like+"]"
+"<br>reactToDoi(doi=["+JA.getDOI(e)+"], opinion=["+like+"])"
);
	/*
	AJE(function(j){
	    var w=e.closest('.snippet');
	    w.querySelector('.kxp').innerHTML=(1*j.Like?j.Like:'');
	    w.querySelector('.kxm').innerHTML=(1*j.Dislike?j.Dislike:'');
	    w.querySelector('.kna').style.display=(1*j.Like+1*j.Dislike?'inline-block':'none');
	},{action:arguments.callee.name,pid:JA.getID(e),like:like});
	*/
    },

    LakeList: function(e) {
	return idie('тут будет лайклист блокчейна');
	/*
	AJE(function(j){
	    ohelpc('LikeList','Like list',"<table border=0 cellspacing='20' cellpadding='0' style='min-width:300px'><tr valign='top'>"
		+"<td><i class='knp'></i><i class='kxp'>"+j.Like+"</i><br>"+j.LikeList.join("<br>")+"</td>"
		+"<td><i class='knm'></i><i class='kxm'>"+j.Dislike+"</i><br>"+j.DislikeList.join("<br>")+"</td>"
		+"</tr></table>");
	},{action:arguments.callee.name,pid:JA.getID(e)});
	*/
    },
















    CommentsFrom: function(e) {
	var pid=JA.getID(e);
	var w=e.closest('.snippet');
	var lev=1*w.style.paddingLeft;
	w.style.paddingLeft=(lev+100)+'px';
        AJE(function(j){
	 j=JA.delDubleNode(j,w);
	 var s=JA.prList(j);
	 newdiv(s,{cls:'commFrom'},w,0);
	 var W=w.querySelector('.commFrom')
	 W.style.marginLeft='-130px';
	 // lleo_a(W,'zoomOut',function(){lleo_a(W,'zoomIn');});
       },{action:arguments.callee.name,pid:pid});
       clean(e);
    },


    onNewComment: function(j) { return idie('Disabled');
	f_save('comment','');
	clean('comm'+j.toid); ЕЕЕЕЕЕЕЕЕЕЕЕЕЕЕЕЕЕЕЕЕЕЕЕЕЕЕЕЕ
	var p=document.querySelector(".snippet .DOI[pid='"+j.toid+"']");
	JA.CommentsTo(p);
    },


// PolkaDOT

    onNewComment_PD: function(j) {
	j.login=JA.shave_login;
	dier(j);

//text = Р­С…, РњРёС€Р°..
//id = 1
//action = newComment
// action = newComment
// toid = 1
// id = 255
 	return false;

	// f_save('comment','');
	// clean('comm'+j.toid); ЕЕЕЕЕЕЕЕЕЕЕЕЕЕЕЕЕЕЕЕЕЕЕЕЕЕЕЕЕ
	var p=document.querySelector(".snippet .DOI[pid='"+j.toid+"']");
	JA.CommentsTo(p);
    },


// ПОДГРУЗКА ПРИ ПРОКРУТКЕ
    lasttop: 0,
    domotal: 0,
    OffsetLoadInterval_id: false,
    OffsetLoadInterval: function() { // запустить подгрузку при доматывании до страницы
    if(JA.OffsetLoadInterval_id) { clearInterval(JA.OffsetLoadInterval_id); JA.OffsetLoadInterval_id=false; }

      setInterval(function(){ // пределы - от 1(<getWinH()) до getDocH() - getWinH(), взять за 100%
	if(idd('md')) return;
  try {
    var hh=getScrollH();
    if(hh == JA.lasttop) return;
    // ppage("hh="+hh+" wH="+getWinH()+" dH="+getDocH());
    JA.lasttop=hh;
    if(JA.domotal) return;

    var Q=idd('mys');
    if(!Q) return;

    if( hh > 0.8*( getDocH()-getWinH() ) ) {
        JA.domotal=1;

	progress2();
	var name='progress2';

	Q=Q.querySelectorAll('DIV.newsearch')[0];
	    var query=Q.querySelector('.myQuery').innerHTML;
	    var start=1*(Q.querySelector('.myStart').innerHTML);
	    var total=1*(Q.querySelector('.myTotal').innerHTML);
	    var perpage=1*(Q.querySelector('.myPerpage').innerHTML);
        var offset=start+perpage;

	if(offset >= total) {
	    newdiv("<div style='text-align:center;font-size:16px;font-weight:bold;padding:10px;'>the end</div>",{},Q,'last');
	    return;
	}

	newdiv("<center><div id='"+name+"_tab' style='text-align:left;width:"+Math.floor(getWinW()/2)+"px;border:1px solid #666;margin-bottom:30px;'>\
<div id='"+name+"_bar' style='width:10px;height:10px;background-color:red;'></div>\
</div></center>",{class:'LoadNew',id:name},Q,'last');

        AJE(function(j){
	    var Q=idd('mys').querySelectorAll('DIV.newsearch')[0];
            // поправить данные
	    Q.querySelector('.myStart').innerHTML=1*(j.start);
	    Q.querySelector('.myPerpage').innerHTML=1*(j.perpage);
	    JA.addPR( Q, JA.prList(j,1,offset) );
	    JA.domotal=0;
	},{action:'Find',txt:Q.querySelector('.myQuery').innerHTML,offset:offset});

    }
 } catch(err){}
},200);

},


// ======= пингать новое каждые 20 секунд
PingNews_id: false,
PingNews: function(time) {
    if(JA.PingNews_id) { clearInterval(JA.PingNews_id); JA.PingNews_id=false; }

    JA.PingNews_id=setInterval(function(){
	if(idd('md')) return;
	AJE(function(j){ var d=j.DOIS; if(d!='') {
	    if(d.indexOf("\n")>=0) d=d.split("\n")[0];
	    JA.Find(d);
	}
    },{action:'getDOIS'}); },time);
},














// Подгрузить если надо юбиблиотеку PD
Load_PD_engine: async function() { // подгрузить и настроить библиотеку работы с блокчейном
	if(typeof(PD)=='object') {
	    PD.onConnect();
	    PD.onready();
	    return true;
	}

	await LOADS_promice(mainpath+'PD.js'+mainrand);

	// Настройки:

	// перед коннектом нарисовать всюду желтый шарик, включить анимацию
	PD.onPreConnect=async function(){
	    document.querySelectorAll('I.substrate_status').forEach((e)=>{
		    e.style.display='inline-block';
		    e.style.animation='circle 3s linear infinite';
		    e.className='e_ledyellow substrate_status';
	    });
	};

	// после успешного коннекта нарисовать всюду красный шарик
	PD.onConnect=async function(){
	    document.querySelectorAll('I.substrate_status').forEach((e)=>{
		    e.className='e_ledred substrate_status';
	    });
	};

	// после успешного соединения с кошельком нарисовать всюду зеленый шарик и остановить вращение
	PD.onBalances=async function(){
	    document.querySelectorAll('I.substrate_status').forEach((e)=>{
		    e.className='e_ledgreen substrate_status';
		    e.style.animation='none';
	    });
	    JA.onReady();

	};

	// найти приложения-кошельки, ведь без них никак
	PD.wallet_view=async function() {
            await PD.wallet_init();
            var wallets=await polkadotExtensionDapp.web3Enable('my cool dapp');

            if( !wallets.length ) {
		    melpc(
"<div style='max-width:400px;padding:30px;'>\
<h2>Wallets not found</h2>\
<br>You need Desktop Browser with Wallet extention. For example:\
<br><br><a href='https://github.com/polkadot-js/extension'>polkadot{.js}</a> extension:\
<br><br><ul>\
<li>On Chrome, install via <a href='https://chrome.google.com/webstore/detail/polkadot%7Bjs%7D-extension/mopnmbcafieddcagagdcbnhejhlodfdd'>Chrome web store</a></li>\
<li>On Firefox, install via <a href='https://addons.mozilla.org/en-US/firefox/addon/polkadot-js-extension/'>Firefox add-ons</a></li>\
</ul>\
<br><a href='https://www.subwallet.app/'>Subwallet</a> extension:\
<br><br><ul>\
<li><a href='https://www.subwallet.app/'>https://www.subwallet.app</a></li>\
</ul>");
	    	    return false;
	    }

	    var accounts = await polkadotExtensionDapp.web3Accounts();
	    for(var l of accounts) {
	            var name = l.meta.source.replace(/\-js$/,'')+"/"+l.meta.name;
	            PD.about_acc(l.address);
    		    PD.USERS[ name ] = l.address;
	    }

    	    PD.www_init_select();
	    return wallets.length;
	};

	PD.onready=async function() {
		// если не нашлось кошельков
		if(! await PD.wallet_view()) clean('comm1');
	};

        await PD.init();
	return true;
    },


// ===========================


getEnt: async function(x,id,tw) { ajaxon();
	await JA.Load_PD_engine(); // подгрузить и настроить библиотеку работы с блокчейном
	ohelpc('buka',"Polkadot View "+h(x),"<div id='buka'></div>");
	PD.tobuka([]);
        var o;
        if(!id) o = await PD.entries('peerReview',x);
        else if(!tw) o = await PD.entries('peerReview',x,id);
        else o = await PD.entries('peerReview',x,id,tw);
        ajaxoff();
        PD.tobuka(o);
}



}; // JA


//                         _
//          _ __ ___   ___| |_ __  ___
//         | '_ ` _ \ / _ \ | '_ \/ __|
//         | | | | | |  __/ | |_) \__ \
//         |_| |_| |_|\___|_| .__/|___/
//                          |_|


mclean=function() {
    var e=document.querySelector('.md');
    if(!e) e=document.querySelector('#md');

    if(e) {
        addEvent(e,'animationend',function(){clean(e)});
        e.classList.remove('ifadeIn');
        e.classList.add('ifadeOut'); // e.classList.add('zoomOut');
    }
}

function melpc(s) { return ohelpc('md','',s); }

//           ____            _    _
//          / ___|___   ___ | | _(_) ___
//         | |   / _ \ / _ \| |/ / |/ _ \
//         | |__| (_) | (_) |   <| |  __/
//          \____\___/ \___/|_|\_\_|\___|
//

function cookie_policy(){
    var s=
    "<div style='max-width:400px;'>"+
    "<h2>Cookie policy</h2>\n\n"+
    "We don't use fucking Cookies because it's mammoth shit."
	    +" Only dumbass use Cookies in "+(new Date().getFullYear())+". We use LocalStorage. Do you agree?"
	    +"<center><input type='button' class='agree' value='Agree' onclick='cookie_agree(this)'>"
	    +"<input type='button' class='agree' value='Disagree' onclick='cookie_disagree(this)'></center>"
    +"</div>"

    var x=f_read('alzymoid');
    if(x===false) {
	cookie_agree=function(e){ mclean(); f_save('alzymoid','none'); };
	cookie_disagree=function(){ document.location.href='https://natribu.org/fi'; };
	melpc(s);
    }
}



function oclo(e) { e=e.nextSibling.style; e.display=(e.display=='none'?'block':'none'); }


function set_doi_count(dois) {
        var p=document.querySelectorAll('.snippet .DOI');
        for(var e of p) {
	    var n=dois[e.innerHTML];
            if(n) {
		e=e.closest('.snippet').querySelector('.commentscount');
		e.innerHTML=n;
		e.style.display='inline-block';
    	    }
	}
}






function lleo_noa(e) { e.className=(e.className||'').replace(/ *[a-z0-9]+ animated/gi,''); };

function lleo_a(e,i,fn){
    lleo_noa(e);
    var c=e.className;
    e.className=(c==''?i:c+' '+i)+' animated';
    var fs=function(){
	lleo_rE(e,'animationend',fs);
	lleo_noa(e);
	if(fn)fn();
    };
    lleo_aE(e,'animationend',fs);
}

function lleo_aE(e,evType,fn){if(e.addEventListener){e.addEventListener(evType,fn,false);return true;}if(e.attachEvent){var r=e.attachEvent('on'+evType,fn);return r;} e['on'+evType]=fn; }
function lleo_rE(e,evType,fn){if(e.removeEventListener){e.removeEventListener(evType,fn,false);return true;}if(e.detachEvent)e.detachEvent('on'+evType,fn);}

function dd(i) { return (1*i>9?i:'0'+i); }

progress2=function(now,total) { name='progress2';
    if(!idd(name)) { if(!total) return;
 newdiv("<div id='"+name+"_tab' style='width:"+Math.floor(getWinW()/2)+"px;border:1px solid #666;'>\
<div id='"+name+"_bar' style='width:0;height:10px;background-color:red;'></div>\
</div>",{cls:'progreshave',id:name});
    } else if(!total) return clean(name);
    var proc=Math.floor(1000*(now/total))/10;
    var W=1*idd(name+'_tab').style.width.replace(/[^\d]+/g,'');
    idd(name+'_bar').style.width=Math.floor(proc*(W/100))+'px';
};

ppage=function(txt) { name='ppage';
    if(!idd(name)) {
	if(txt==undefined) return;
	newdiv(txt,{cls:'progreshave',id:name});
    } else {
	if(txt==undefined) return clean(name);
	zabil(name,txt);
    }
};


function passwordCtrl(e) {
    var v=e.closest('.password').querySelector('INPUT');
    if(v.type == 'password'){ e.classList.add('view'); v.type='text'; }
    else { e.classList.remove('view'); v.type='password'; }
    return false;
}


// AJE ajax

// JSON multipart AJAX: https://tokmakov.msk.ru/blog/item/182
AJEinterval=false;
AJEprogress=0;
function AJE(fnn,ara) {
    if(AJEinterval) { clearInterval(AJEinterval); AJEinterval=false; }
    AJEprogress=0;
    AJEinterval=setInterval(function(){
	if(++AJEprogress>500) { clearInterval(AJEinterval); AJEinterval=false; }
	if(AJEprogress>10) progress2(AJEprogress,500);
    },50);

    ara.cookie=JA.shave_cookie;
    AJ(mainjson,function(j){
	    if(AJEinterval) { clearInterval(AJEinterval); AJEinterval=false; }
	    progress2();
	if(j===false) return salert("Server error",500);
	try{
	    j=JSON.parse(j);
	    if(j.error) {
		if(j.error == "login error") return JA.formLogin();
		return idie(  (j.message?h(j.message).replace(/\n/g,"<p>"):''),"Error: "+h(j.error) );
	    }

	    if(j.act) {
		if(j.act=='dier') return dier(j,'Server dier console');
		if(j.act=='idie') return idie(j,'Server idie console');
	    }
	    fnn(j);
	} catch(e) {
	    idie('Json Error: '+h(e.name+":"+h(e.message).replace(/\n/g,"<p>"))+"<p>"+h(e.stack).replace(/\n/g,"<p>"));
	}
    },JSON.stringify(ara));
    return false;
}

GO();