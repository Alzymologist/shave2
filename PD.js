if(typeof(mainjs)=='undefined') mainjs='/extended/polkadot/';

page_onstart.push("PD.init()");
// page_onstart.push("if(unic==4)setTimeout(balda_query,1000)");
//page_onstart.push('setTimeout(function(){PD.progress.on()},1000)');
// page_onstart.push("setTimeout(function(){idd('TUT').click()},3000)");
// page_onstart.push("setTimeout(async function(){var s=await PD.id0x('bafkr4ielaghuj2mwkr6twr7rbbdnslrh7ozbelhjrky4gap6gd7a4gwg3e') + '����';idie(s);},1000)");

/*
MoneyTransfer: 2727851410
Post: 1989841400
React: 1989841400
ReactDoi: 1989841280
RefferToDoi: 1989841550
*/

PD={
    wwwClassSet: function(cls,x) { document.querySelectorAll(cls).forEach((e)=>{ PD.wwwset(e,x) }); },
    wwwset: function(e,x) { if(e.value!=undefined) e.value=x; else e.innerHTML=x; },

    my: { ACC: false, NAME: false, BALANCE: false }, // ������� ���������������� �������

    www_select_my: function(e) {
	PD.my={
	    ACC: e.value,
	    NAME: (
		JA.ALLFRIENDS && JA.ALLFRIENDS[e.value] ? JA.ALLFRIENDS[e.value]
		: e.querySelector("OPTION[value='"+e.value+"']").innerHTML.replace(/^[^\/]+\//g,'')
	    ),
	    BALANCE: PD.BALANCES[e.value],
	};

	PD.wwwClassSet(".ALICES_ACC", h(PD.my.ACC) );
	PD.wwwClassSet(".ALICES_NAME", h(PD.my.NAME) );
	document.querySelectorAll(".ALICES_BALANCE").forEach((e)=>{
		e.className="ALICES_BALANCE balance_"+h(PD.my.ACC);
		PD.wwwset(e, h(PD.my.BALANCE) );
	});
    },

    USERS: {
/*
        ALICE:	 	'5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY',
                    //   5DfhGyQdFobKM8NsWvEeAKk5EQQgYe9AydgJ7rMB6E1EqRzV
        BOB:		'5FHneW46xGXgs5mUiveU4sbTyGBzmstUspZC92UhjJM694ty',
        ALICE_STASH:	'5GNJqTPyNqANBkUVMN1LPPrxXnFouWXoe2wNSmmEoLctxiZY',
        BOB_STASH:	'5HpG9w8EBLe5XCrbczpwq5TSXvedjrBGCwqxK1iQ7qUsSWFc',
        CHARLIE:	'5FLSigC9HGRKVhB9FiEo4Y3koPsNmBmLJbpXg2mp1hXcS59Y',
        DAVE:	 	'5DAAnrj7VHTznn2AWBemMuyBwZWs6FNFjdyVXUeYum3PTXFy',
        EVE:	 	'5HGjWAeFDfFCWPsjFQdVV2Msvz2XtMktvgocEZcCj68kUMaw',
	FERDIE:	 	'5CiPPseXPECbkjWCa6MnjNokrgYjMqmKndv2rSnekmSK2DjL',
*/
    },

    BALANCES: {},

//    ACCOUNT: {    },

    WSS: '', // wss://....
    api: false, // POLKADOT

    testmode: false,

    idie: function(s) {
	var e=idd('pd_log');
	if(e) dobavil(e,s); else idie(s);
    },

    // ���� ����� �������� ���� ������� ��� ������
    onready: async function(){
        PD.tobuka( await PD.entries('peerReview','scientificRecord') );
	PD.www_update();
	if(await PD.wallet_view()) {
	    PD.www_init_balance_table();
	    PD.www_update();
	}
    },


    wallet_init: async function() {
	if(typeof(polkadotExtensionDapp)!='undefined') return true;
	await LOADS_promice([
            mainjs+'bundle-polkadot-util.js',
            mainjs+'bundle-polkadot-util-crypto.js',
            mainjs+'bundle-polkadot-extension-dapp.js'
        ],1);
	return false;
    },

    wallet_view: async function() {
	await this.wallet_init();
        // Wallets
        // var wallets=await polkadotExtensionDapp.web3Enable('bundle-testing');
        var wallets=await polkadotExtensionDapp.web3Enable('my cool dapp');

	var o;
        if( !wallets.length ) o="Wallets not found: you have to install extention";
	else {
            o="<div class='r'>Wallets "+wallets.length+": ";
	    for(var l of wallets) o+=" "+green(l.name); // +" &nbsp; "+l.version;
            // Accounts
	    var accounts = await polkadotExtensionDapp.web3Accounts();
    	    o+=' Accounts '+accounts.length+":</div><table border='0'>";
	    // this.ACCOUNT={};
	    for(var l of accounts) {
		var name = l.meta.source.replace(/\-js$/,'')+"/"+l.meta.name;
		o+="<tr class='r'>"
		+"<td>"+green(h(name))+"</td>"
		+"<td style='font-family:monospace !important;padding:0 10px 0 10px;' onclick='cpbuf(this.innerHTML)'>"+h(l.address)+"</td>"
		+"<td style='text-align:right;color:green' class='balance_"+h(l.address)+"'>"+ajaxmgif+"</td>"
		+"</tr>";
        	// l.meta.name l.meta.source l.type l.meta.genesisHash
		PD.about_acc(l.address); // .then((x)=>{idie(x)});
		// this.ACCOUNT[ name ] = l.address;
		this.USERS[ name ] = l.address;
	    }
	    o+="</table>";
	    PD.www_init_select();
	}
	if(idd('wallet_table')) zabil('wallet_table',o); else idie(o);

        return wallets.length;
    },

// ===================================

    progress: {
	handle: false,
	x: 0,
	max: 500,
	name: 'PS-progress',
	on: function(text) {
	    this.x=1;
	    this.handle=setInterval(function(){
		var i = ++PD.progress.x;
		progress(PD.progress.name,i,PD.progress.max,text+' '+i+'/'+PD.progress.max);
		if(PD.progress.x >= PD.progress.max) PD.progress.off();
	    },50);
	},
	off: function() {
	    clearInterval(this.handle);
	    progress(this.name);
	},
    },

    IPFS: async function(){
	if(typeof(IPFS)=='undefined') { await LOADS_promice(mainpath+'IPFS.js'); await IPFS.init(); }
    },

    www_init_select: function(){
	var options='';
	// for(var x in this.ACCOUNT) options+="<option value='"+h(this.ACCOUNT[x])+"'>"+h(x)+"</option>";
// dier(this.USERS);

	for(var x in this.USERS) options+="<option value='"+h(this.USERS[x])+"'>"+h(x)+"</option>";
	options+="<option value=''>---</option>";
	document.querySelectorAll("SELECT.ALICES").forEach((e)=>{
	    e.innerHTML=options;
	    var n=e.getAttribute('ramsave'); if(n!='') {
		e.value=f_read(n);
		PD.www_select_my(e); // � ��������� ����
	    }
	});
    },


    www_init_balance_table: function() {
	// ���������� ������� �������
	var e;
	if(e=idd('balance_table')) {
	    var u={}; for(var n in this.USERS) { var west=this.USERS[n]; if(!u[west]) u[west]=[];
		u[west].push((n.indexOf('/')<0 ? h(n) : green(h(n)) ));
	    }
	    var o=''; for(var west in u) {
		o="<tr>"
		+"<td>"+(u[west].reverse().join('<br>'))+"</td>"
		+"<td onclick='cpbuf(this.innerHTML)' style='font-family:monospace !important;padding:0 10px 0 10px;'>"+h(west)+"</td>"
		+"<td class='balance_"+h(west)+"' align='right'></td>"
		+"<td class='nonce_"+h(west)+"' align='right'></td>"
		+"<td class='comment_"+h(west)+"' align='right'></td></tr>"+o;
	    }
	    zabil(e,"<table cellspacing=10 border=0 class='r'><tr>"
		+"<th>���</th>"
		+"<th>�������</th>"
		+"<th>������</th>"
		+"<th>nonce</th>"
		+"<th>���������</th>"
		+"</tr>"+o+"</table>");
	}
    },

    www_init: function(){
	// <select class='ALICES'> - �������� option ���� ������
	var o='',e;

	// ���������� ����� ����� ������ ����:
	if(e=idd('wss_address')) zabil(e,
	    "<input onchange='PD.reconnect(this.value)' type='input' id='WSS' ramsave='WSS' size='30' placeholder='wss://node-shave.zymologia.fi'>"
	    +" <span id='PD-connected'></span>"
	    +"<div class='br'>"
	    +"Genesis Hash: <span id='PD-genesis'></span>"
	    +"<div id='PD-hash'></div>"
	);


	// ���������� ����� ���������
	if(e=idd('form_money')) zabil(e,"<form><i class='e_ledgreen'></i> Money transfer: <select ramsave='moneyFrom' name='FROM' class='ALICES'></select>"
	    +" �����: <input ramsave='moneySumm' type='text' name='summ'>"
	    +" <input type='button' class='mv0' value='SUBMIT' onclick='PD.www_money(this)'>"

	    +"<br>����: <select ramsave='moneyTo' name='TO' class='ALICES'></select>"
	    +"<br>����: <input type='text' size='45' ramsave='moneyToAddr' name='TOaddr'>"

	    +"<div id='pr_money'></div>"
	    +"</form>"
	);

	// 1. post(id, authors)
	// �� ����� (Alice)
	// ������� ����� id 32 ����� (0x0000000000000000000000000000000000000000000000000000000000000000)
	// � ������ ������� ������ �� 0 �� �������������, �������� �������������: (Charlie, Charlie, Charlie)
	// � ��� �����?
	if(e=idd('form_post')) zabil(e,"<form><i class='e_ledgreen'></i> post(id, authors): <select ramsave='postFrom' name='FROM' class='ALICES'></select>"
	    +"<br>id �������: <input disabled=1 type='text' size='65' name='ID' placeholder='��� �������� hash ����� ������ � ipfs'>"
	    +"<p><textarea ramsave='postTEXT' name='text' cols='60' rows='5' placeholder='����� ������'></textarea>"
	    +"<br>�����1: <select ramsave='postAutor1' name='AUTOR1' class='ALICES'></select>"
	    +" �����2: <select ramsave='postAutor2' name='AUTOR2' class='ALICES'></select>"
	    +" �����3: <select ramsave='postAutor3' name='AUTOR3' class='ALICES'></select>"
	    +" �����4: <select ramsave='postAutor4' name='AUTOR4' class='ALICES'></select>"
	    +"<br><input type='button' class='mv0' value='SUBMIT' onclick='PD.www_post(this)'>"
	    +"<div id='pr_post'></div>"
	    +"</form>");

	// 2. react(id, opinion)
	// �� ����� (Alice)
	// �� ������� id 32 ����� (0x0000000000000000000000000000000000000000000000000000000000000000))
	// ������ ���� �� ������� (Thwart, Endorse)
	// ��� �� �������.
	// 2. ���������� ����� react(id, opinion)
	if(e=idd('form_react')) zabil(e,"<form><i class='e_ledgreen'></i> react(id, opinion): <select ramsave='reactFrom' name='FROM' class='ALICES'></select>"
	    +"<br>id �������: <input ramsave='reactID' type='text' size='65' name='ID' placeholder='0x0000000000000000000000000000000000000000000000000000000000000000'>"
	    +"<br><select ramsave='reactReact' name='react'><option value='Thwart'>Thwart</option><option value='Endorse'>Endorse</option></select>"
	    +" <input type='button' class='mv0' value='SUBMIT' onclick='PD.www_react(this)'>"
	    +"<div id='pr_react'></div>"
	    +"</form>");

	// 3. reactToDoi(doi, opinion)
	// �� ����� (Alice)
	// �� ������� doi, �������� ����� ������ ���� �� 0 �� ����� (https://natribu.org)
	// ������ ���� �� ������� (Thwart, Endorse)
	// ��� ��� ���������� �� �����������? ��� �� ������ ������� ������, ����� ����� ���� 32?
	if(e=idd('form_reactDoi')) zabil(e,"<form><i class='e_ledgreen'></i> reactToDoi(doi, opinion): <select ramsave='reactDoiFrom' name='FROM' class='ALICES'></select>"
	    +"<br>Doi �������: <input ramsave='reactDoiDOI' type='text' size='65' name='DOI' placeholder='https://natribu.org'>"
	    +"<br><select ramsave='reactDoiReact' name='react'><option value='Thwart'>Thwart</option><option value='Endorse'>Endorse</option></select>"
	    +" <input type='button' class='mv0' value='SUBMIT' onclick='PD.www_reactDoi(this)'>"
	    +"<div id='pr_reactDoi'></div>"
	    +"</form>");

	// 4. refferToDoi(newer, older)
	// �� ����� (Alice)
	// ������� ����� id 32 ����� (0x0000000000000000000000000000000000000000000000000000000000000000)
	// � doi, �������� ����� ������ ���� �� 0 �� �����
	// � ��� �����?
	// �������������� ������� � ��������� doi ���� blake3, �������� �� �����-�� �����������? ������ ����� �� �����?
	if(e=idd('form_reffer')) zabil(e,"<form><i class='e_ledgreen'></i> refferToDoi(newer, older): <select ramsave='refferFrom' name='FROM' class='ALICES'></select>"
	    +"<br>id �������: <input ramsave='refferID' type='text' size='65' name='ID' placeholder='0x0000000000000000000000000000000000000000000000000000000000000000'>"
	    +"<br>Doi �������: <input ramsave='refferDOI' type='text' size='65' name='DOI' placeholder='https://natribu.org'>"
	    +"<br><input type='button' class='mv0' value='SUBMIT' onclick='PD.www_reffer(this)'>"
	    +"<div id='pr_reffer'></div>"
	    +"</form></div>");

	PD.www_init_balance_table();

    },

    init: async function() {
	this.www_init();
	await LOADS_promice([
            mainjs+'bundle-polkadot-util.js',
            mainjs+'bundle-polkadot-util-crypto.js',
            mainjs+'bundle-polkadot-types.js',
            // mainjs+'bundle-polkadot-extension-dapp.js',
            mainjs+'bundle-polkadot-api.js',
            mainjs+'bundle-polkadot-keyring.js'
	],1);
	await this.connect();
	await this.onready();
    },

    setwss: function(wss) {
	if(wss) this.WSS=wss;
	if(!this.WSS || this.WSS=='') {
	    this.WSS=( (idd('WSS') && idd('WSS').value) ? idd('WSS').value
	    : 'wss://node-shave.zymologia.fi' ); // default
	}
    },

    reconnect: async function(wss) {
	if(this.api) await this.api.disconnect();
	this.setwss(wss);
	this.api=false;
	this.connect();
    },



    onPreConnect: async function() {
	var d=idd('PD-connected');
	if(d) zabil(d,ajaxgif+" <span class='br'>"+this.WSS+"</span>"); else ajaxon();
    },

    onConnect: async function() {
	var d=idd('PD-connected');
	var s=green('connected: '+h(this.WSS));
	if(d) zabil(d,s); else { PD.idie(s); ajaxoff(); }

	d=idd('PD-genesis'); if(d) zabil(d,this.api.rx.genesisHash);

    	// ������������� �� �������: subscribeNewHeads subscribeFinalizedHeads subscribeAllHeads
    	const unsubscribe = await this.api.rpc.chain.subscribeAllHeads((header) => {
	 var e=idd('PD-hash'); if(e) {
		var w=e.querySelectorAll('DIV'); if(w.length > 4) clean(w[0]);
		dobavil(e,"<tt style='padding:0 !important'>"+header.number+" "+header.parentHash+"</tt>");
	    }
    	});
    	//const unsubscribe1 = await this.api.rpc.chain.subscribeNewHeads((header) => { dier(header); });
    	//const unsubscribe2 = await this.api.rpc.chain.subscribeFinalizedHeads((header) => { dier(header); });
    },

    connect: async function(wss) {
	if(this.api) return true;
	this.setwss(wss);

	await this.onPreConnect();

	// ����������� � ����������
    	this.Prov = new polkadotApi.WsProvider(this.WSS);
    	this.api = await polkadotApi.ApiPromise.create({ provider: this.Prov });

	await this.onConnect();

	return false;
    },



    // ��������� ����� �� Westend � 0x...
    // 5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY -> 0xd43593c715fdd31c61141abd04a99fd6822c8558854ccde39a5684e7a56da27d
    west2id: function(west){
	// return polkadotUtil.u8aToHex(polkadotKeyring.decodeAddress(west));
	try{ return polkadotUtil.u8aToHex(polkadotKeyring.decodeAddress(west));	}
	catch(err) { idie(h(west)+' '+red(''+err)); }
    },

    // ��������� ����� �� 0x... � Westend
    // 0xd43593c715fdd31c61141abd04a99fd6822c8558854ccde39a5684e7a56da27d -> 5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY
    id2west: function(id) { return polkadotKeyring.encodeAddress(id); },

    is_id: function(x) {
	if(!x.substring) { idie("PD.is_id() error: x=["+h(''+x)+"]"); return false; }
	return x.length=66 && x.substring(0,2)=='0x';
    },
    is_acc: function(x) {
	if(!this.USERS[x]) x = x.replace(/^\/+/g,'').toUpperCase();
	return this.USERS[x];
    },

    // ��� �� �� ������, ������ westend 5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY
    west: function(x) {
	if(this.is_id(x)) return this.id2west(x); // id?
	var i; if(i=this.is_acc(x)) return i; // acc?
	return x; // west
    },

    // ��, ��� �� ������, � west
    all2west: async function(x) { if(x===undefined || x===null) return x;
	return this.west(await this.id0x(x));
    },

    // ������� id 0x0000000000000000000000000000000000000000000000000000000000000137 �� ����� 137
    mk_id0x: function(x) { x=''+1*x;
	return '0x'+Array(65-x.length).join('0')+x;
    },

    // ��� �� �� ������, ������ 0xd43593c715fdd31c61141abd04a99fd6822c8558854ccde39a5684e7a56da27d
    // 7, bafkr4ielaghuj2mwkr6twr7rbbdnslrh7ozbelhjrky4gap6gd7a4gwg3e, QmZUGEHtoi9pRt7a4TRwVAwqxs9QMW63Ukr28KiA1vJNQk
    id0x: async function(x) { if(x===undefined || x===null || PD.is_id(x)) return x;
	if(x===0 || 1*x) return PD.mk_id0x(x); // ���� ������ �����
	if( x.substring(0,2)=='Qm' || x.substring(0,4)=='bafk' ) { await this.IPFS(); return IPFS.cid2hex(x); }
	return this.west2id(this.west(x)); // ���������� � west, ��� �� ��� �� ����, � ����� ������� id
    },

    // ��� �� �� ������, ������ ��� ALICE
    acc: function(x) {
	x=this.west(x); // ���������� � west, ��� �� ��� �� ����
	for(var i in this.USERS) if(x==this.USERS[i]) return i;
	return 'UNKNOWN';
    },

    // ������ ����������� ��� �������
    about_acc: async function(west) {
	west=this.west(west,1); // ���������� west
	return this.connect().then((x) => {
	    // ������� �� ���� ������� ������ �����, ��� ��� ���� �����-�� �������� ����
	    document.querySelectorAll("SELECT.ALICES OPTION[value='']").forEach((e)=>{clean(e)});

	    return this.api.query.system.account( this.west2id(west) ).then((e) => {
		var ara={ nonce: 1*(''+e.nonce), balance: 1*(e.data.free), west: west };

		document.querySelectorAll('.balance_'+west).forEach((e)=>{e.innerHTML=ara.balance});

		document.querySelectorAll("OPTION[value='"+west+"']").forEach((e)=>{
		    e.innerHTML='('+ara.balance+') '+e.innerHTML.replace(/^\(\d+\)\s+/gi,'');
		});

		// PD.BALANCES[PD.acc(west)]=ara.balance;
		PD.BALANCES[west]=ara.balance;
		if(PD.my.ACC==west) PD.my.BALANCE=ara.balance;

		// ���������, ��� �� ������� ���������
	    	for(var x in PD.USERS) { if(typeof(PD.BALANCES[PD.USERS[x]])=='undefined') return ara; }
		PD.onBalances();
		return ara;
	    })
        });
    },

    onBalances: function(){},

    www_update: async function(){
      for(var name in PD.USERS) { var west=PD.USERS[name];
	var about = await this.about_acc(name);
	document.querySelectorAll('.balance_'+west).forEach((e)=>{e.innerHTML=about.balance});
	document.querySelectorAll('.nonce_'+west).forEach((e)=>{e.innerHTML=about.nonce});
	document.querySelectorAll('.comment_'+west).forEach((e)=>{
	    var x='balance_'+west;
	    var old=1*f_read(x); f_save(x,about.balance);
	    var x=about.balance-old; x=(x>=0 ? green(x) : red(x));
	    zabil(e,x);
	    e.innerHTML=x;
	});
      }
    },

    www_money: async function(e) { // ��������� ����� � �����
	e=e.form.elements;
	var Y = {
	    FROM: e['FROM'].value,
	    TO: ( e['TOaddr'].value != '' ? e['TOaddr'].value : e['TO'].value ),
	    summ: e['summ'].value,
	};
	await this.Money_promice( Y );
	this.about_acc(Y.TO);
	this.about_acc(Y.FROM);
	salert('chain: '+h(Y.chain),5000);
    },

    www_post: async function(e) { // ��������� react
	e=e.form.elements;
	var Y = {
	    s: e['text'].value,
	    FROM: e['FROM'].value,
	    authors: [],
	};
	for(var i of e) { if(i.name.indexOf('AUTOR')===0 && i.value!='') Y.authors.push(i.value); }

	// �������� � IPFS
	await PD.IPFS();
        Y.ipfs = await IPFS.save(Y.s);
	if(! Y.ipfs ) idie('Error ipfs!');
	e['ID'].disabled=0; e['ID'].value=e['ID'].placeholder=Y.ipfs; e['ID'].disabled=1;
	// �������� � ��������
	await PD.Post_promice( Y );
	salert('chain: '+h(Y.chain),5000);
	getEnt('scientificRecord');
    },

    www_react: async function(e) { // ��������� react
	e=e.form.elements;
	var Y = {
	    FROM: e['FROM'].value,
	    id: e['ID'].value,
	    react: e['react'].value,
	};
	await PD.React_promice( Y );
	salert('chain: '+h(Y.chain),5000);
    },

    www_reactDoi: async function(e) { // ��������� react
	e=e.form.elements;
	var Y = {
	    FROM: e['FROM'].value,
	    doi: e['DOI'].value,
	    react: e['react'].value,
	};
	await PD.ReactDoi_promice( Y );
	salert('chain: '+h(Y.chain),5000);
    },

    www_reffer: async function(e) { // ��������� react
	e=e.form.elements;
	var Y = {
	    FROM: e['FROM'].value,
	    doi: e['DOI'].value,
	    id: e['ID'].value,
	};
	await PD.RefferToDoi_promice( Y );
	dier(Y);
	salert('chain: '+h(Y.chain),5000);
    },

/*
pr_did: function(s) {
    var did='did'+Math.random();
    PD.idie(s+" <span id='"+did+"'>"+ajaxgif+"</span>");
    return did;
},


pr_status: function(did,events,status) {
    if(status.isInBlock) {
        var o='<dd>Included at block hash: '+status.asInBlock.toHex();
        events.forEach(({ event: { data, method, section }, phase }) => {
	  o+='<div><dd>'+phase+': ['+section+' / '+method+'] '+data+"</div>";
	});
	PD.idie("<div class='r'>"+o+"</div>");
    } else if(status.isFinalized) {
	zabil(did,'Finalized: '+green(status.asFinalized.toHex()) );
	this.www_update();
	// unsub();
    }
},

    oper: async function(promice,did) {
	try { var txHash = await promice; }
	catch(err) {
	    if(did) zabil(did,red(err));
	    dier(red(err));
	}
    },
*/

    // ������� ���� ������ ��� �������
    Pair: function(x) {
	x=this.acc(x); x='//'+x.substring(0,1).toUpperCase()+x.substring(1).toLowerCase();
	const keyring = new polkadotKeyring.Keyring({ type: 'sr25519' });
	return keyring.addFromUri(x);
    },

    // ���������, ������ �� ����� ����������
    checky: async function( Y ) {
	Y.summ = Y.summ | 0;
	Y.cost = Y.cost | 0;
	if(Y.cost && (Y.balance + Y.summ) < Y.cost) {
	    idie(red("Not enough money?")
		+"<table border='0' cellspacing='10'>"
		    +"<tr><td>Your balance:</td><td align='right'>"+h(Y.balance)+"</td></tr>"
		    +"<tr><td>Need:</td><td align='right'>"+h(Y.cost + 1*Y.summ)+"</td></tr>"
		+"</table>"
	     );
	    return false;
	}

	var p = (Y.injector===false
		? await Y.transfer.paymentInfo(Y.arg1)
		: await Y.transfer.paymentInfo(Y.arg1,Y.injector)
	);
	Y.fee = p.partialFee;
	Y.feeHuman = Y.fee.toHuman();
	if(Y.fee > Y.balance) {
	    idie(red("Not enough money")
		+"<table border='0' cellspacing='10'>"
		    +"<tr><td>Your balance:</td><td align='right'>"+h(Y.balance)+"</td><td></td></tr>"
		    +"<tr><td>Need:</td><td align='right'>"+h(Y.fee + 1*Y.summ)+"</td><td>("+h(Y.feeHuman)
			+(Y.summ?" + "+Y.summ:'')
		    +")</td></tr>"
		    +"<tr><td>Add:</td><td align='right'>"+h(Y.fee+1*Y.summ-Y.balance)+"</td><td></td></tr>"
		+"</table>"
	     );
	    return false;
	}
	return true;
    },

    ontransfer: function(w,Y) {
	if(w.status=='Ready') { PD.progress.on(''); }
	if(w.status.isFinalized) { PD.progress.off(); Y.chain=w.status.asFinalized.toHex(); Y.resolve( Y.chain ); }
    },

    pair: async function( Y ) {
	try {
	    Y.injector = await polkadotExtensionDapp.web3FromAddress(Y.FROM);
	    Y.arg1 = Y.FROM;
	    Y.arg2 = {signer:Y.injector.signer};
	} catch(err) {
	    Y.injector = false;
	    Y.arg1 = PD.Pair(Y.FROM);
	    Y.arg2 = Y.nonce;
	}
    },

    operation: async function( Y, transfer ) {
	Y.transfer = transfer;
	var x = await PD.about_acc(Y.FROM); Y.balance = x.balance; Y.nonce = x.nonce;
	await PD.pair( Y );
	if( !(await PD.checky( Y )) ) return reject('Error Balance');
        Y.txHash = await Y.transfer.signAndSend(Y.arg1,Y.arg2,function(w){PD.ontransfer(w,Y)});
    },

    // ��������� �����
    Money_promice: async function( Y ) { return new Promise( async function(resolve, reject) {
      try {
	Y.cost=2727851410; Y.resolve=resolve; Y.reject=reject;
	// ��������
	if(!(Y.summ=1*Y.summ) || Y.summ>=Number.MAX_SAFE_INTEGER) throw new Error("Wrong summ, use: 1 .. "+Number.MAX_SAFE_INTEGER);
	// ����
	await PD.connect();
	PD.operation( Y, PD.api.tx.balances.transfer( PD.west(Y.TO) , Y.summ) );
     } catch(err) { idie(red(err)); return reject(''+err); }
    } );
    },

    // 1. post(id, authors)
    // �� ����� (Alice)
    // ������� ����� id 32 ����� (0x0000000000000000000000000000000000000000000000000000000000000000)
    // � ������ ������� ������ �� 0 �� �������������, �������� �������������: (Charlie, Charlie, Charlie)
    // � ��� �����?
    Post_promice: function( Y ){ return new Promise( async function(resolve, reject) {
      try {
	Y.cost=1989841400; Y.resolve=resolve; Y.reject=reject;
	// ��������
	if(typeof(Y.authors)!='object') Y.authors=[Y.authors];
	Y.wests=[]; var fromw=PD.west(Y.FROM);
	for(var i in Y.authors) { // ��������� ������� � west ��������, ��������� �� ������� FROM � �������
	    var w=PD.west(Y.authors[i]);
	    if(w!=fromw && !in_array(w,Y.wests)) Y.wests.push(w);
	    else delete(Y.authors[i]);
	} Y.authors=Y.authors.filter(a=>a);
        // if(Y.authors.length==0) { var s="Error post authors"; idie(s); reject(s); }
	Y.ipfs0x = await PD.id0x(Y.ipfs);
	// ����
        await PD.connect();
	PD.operation( Y, PD.api.tx.peerReview.post( Y.ipfs0x , Y.wests ) );
      } catch(err) { idie(red(err)); return reject(''+err); }
     } );
    },

    // 2. react(id, opinion)
    // �� ����� (Alice)
    // �� ������� id 32 ����� (0x0000000000000000000000000000000000000000000000000000000000000000))
    // ������ ���� �� ������� (Thwart, Endorse)
    // ��� �� �������.
    React_promice: async function( Y ) { return new Promise( async function(resolve, reject) {
      try {
	Y.cost=1989841400; Y.resolve=resolve; Y.reject=reject;
	// ��������
        if(!in_array(Y.react,['Thwart','Endorse'])) return idie("Error react");
	Y.id0x = await PD.id0x(Y.id);
	// ����
        await PD.connect();
	PD.operation( Y, PD.api.tx.peerReview.react(Y.id0x,Y.react) );
      } catch(err) { idie(red(err)); return reject(''+err); }
     } );
    },

    // 3. reactToDoi(doi, opinion)
    // �� ����� (Alice)
    // �� ������� doi, �������� ����� ������ ���� �� 0 �� ����� (https://natribu.org)
    // ������ ���� �� ������� (Thwart, Endorse)
    // ��� ��� ���������� �� �����������? ��� �� ������ ������� ������, ����� ����� ���� 32?
    ReactDoi_promice: async function( Y ) { return new Promise( async function(resolve, reject) {
      try {
	Y.cost=1989841280; Y.resolve=resolve; Y.reject=reject;
	// ��������
        if(!in_array(Y.react,['Thwart','Endorse'])) return idie("Error react");
	// ����
        await PD.connect();
	PD.operation( Y, PD.api.tx.peerReview.reactToDoi(Y.doi,Y.react) );
      } catch(err) { idie(red(err)); return reject(''+err); }
     } );
    },

// 4. refferToDoi(newer, older)
// �� ����� (Alice)
// ������� ����� id 32 ����� (0x0000000000000000000000000000000000000000000000000000000000000000)
// doi, �������� ����� ������ ���� �� 0 �� �����
// � ��� �����?
// �������������� ������� � ��������� doi ���� blake3, �������� �� �����-�� �����������? ������ ����� �� �����?
    RefferToDoi_promice: async function( Y ) { return new Promise( async function(resolve, reject) {
      try {
	Y.cost=1989841550; Y.resolve=resolve; Y.reject=reject;
	// ��������
	Y.id0x = await PD.id0x(Y.id);
	// ����
        await PD.connect();
	PD.operation( Y, PD.api.tx.peerReview.refferToDoi(Y.id0x,Y.doi) );
      } catch(err) { idie(red(err)); return reject(''+err); }
     } );
    },


// �����������
initial: function(x) {
    return ( x && x.length && x.initialU8aLength && (x.length == x.initialU8aLength) ? x=''+x : x);
},

rej: function(s) {
    var x;
    try { x=JSON.parse(s); } catch(e) { x=s; }
    return this.initial(x); // .toHuman();
},

// ������ �� ���� entries
entries: async function(pallet,action,id) {
    await PD.connect();
    var le;

// id=false;

    if(id) {
//    idie("api.query[\""+pallet+"\"][\""+action+"\"].entries(\""+id+"\");");
//    le = await this.api.query[pallet][action].entries(id);
// ���, ��-�����, ���� ������
    le = await this.api.query[pallet][action](id);

// le = [[,]];

// this.api.query.peerReview.scientificRecord
//    dier(le);
}
    else le = await this.api.query[pallet][action].entries();

// dier(le);

    // if(action=='scientificRecord') PD.scientificRecord=[];
// idie('id='+id);
// idie('action='+action);
// dier(this.api.query[pallet][action]);
// dier(le);

    var o=[]; for(var w of le) {
	var name=w[0].method;
	var data;
	if(name=='scientificRecord') {

	    var raw=w[1].toHuman();
	    var value=[]; for(var i of raw.coauthors) value.push("<i class='e_"+(i.confirmed ? 'ledgreen' : 'ledred')+"'></i>"+this.acc(i.author));

	    data = this.rej(w[0].args);
	    await this.IPFS();
	    data = IPFS.hex2url(data);
	    data = "<a onclick='return IPFS.View(this)' href='"+h(data)+"'>"+h(data)+"</a>";

	    o.push({
		from: this.acc(raw.manager),
		from_raw: ''+raw.manager,
		data: data,
		value: value.join(', '),
		meta: 'eee2'+ ''+w[0].meta,
		name: name,
	    });

	} else {
	    if(this.rej(w[0].args[1]).ipfs) {
		data = h(this.rej(w[0].args[1]).ipfs);
		name="<i class='e_ledgreen'></i> "+h(name)+" ipfs";
	    } else if(this.rej(w[0].args[1]).doi) {
		data = h(polkadotUtil.hexToString( this.rej(w[0].args[1]).doi ) );
		data = "<a href='"+data+"' target='_blank'>"+data+"</a>";
		name="<i class='e_ledblue'></i> "+h(name)+" doi";
	    }
	    else data='ERROR';

	    o.push({
		from: this.rej(w[0].args[0]),
		data: data,
		value: w[1].toHuman(),
		meta: ''+w[0].meta,
		name: name,
	    });
	}
    }
    return o;
},


// ������ �� ���� entries RAW
entries_raw: async function(pallet,action,id,val) {
    await PD.connect();
    var le;

    if(id) {
	if(action=="opinionRecord") {
	    if(!val) {
		le=await this.api.query[pallet][action].entries(id); // ����� ������ �� ACC
	    } else {
		le=await this.api.query[pallet][action](id, ( PD.is_id(val) ? { Ipfs : val } : { Doi : val } ) ); // ����� �� ACC � Doi/Ipfs
		le = [[{method:action,args:id},le]];
	    }
	} else if(action=="scientificRecord") {
            le = await this.api.query[pallet][action](await PD.id0x(id));
    	    le = [[{method:action,args:id},le]];
	} else return idie("Error entries_raw() - wrong action");
    } else {
	le = await this.api.query[pallet][action].entries();
    }

    var o=[]; for(var w of le) {
	var ara={};
	if(w[0].method=='scientificRecord') {
	    var raw=w[1].toHuman(); if(!raw) return []; // �����
	    ara.authors=[]; for(var i of raw.coauthors) ara.authors.push(i.author);
	    if(!id) ara.data=''+this.rej(w[0].args); // � �� ���������
	    // ara.fromName=this.acc(raw.manager);
	    ara.from=raw.manager;
	} else {
	    if(this.rej(w[0].args[1]).ipfs) {
		ara.mode = 'ipfs';
		ara.data = ''+this.rej(w[0].args[1]).ipfs;
	    } else if(this.rej(w[0].args[1]).doi) {
		ara.mode = 'doi';
		ara.data = ''+polkadotUtil.hexToString( this.rej(w[0].args[1]).doi );
	    }
	    if(id==undefined) ara.from = this.rej(w[0].args[0]);
	    ara.value = w[1].toHuman();
	}
	o.push(ara);
    }
    return o;
},






































// ������ �� ���� keys
keys: async function(pallet,action,id) {
    await PD.connect();
    var le;
    if(id) le = await this.api.query[pallet][action].keys(id);
    else le = await this.api.query[pallet][action].keys();
    // if(!le.length) return idie('�� �������');
    var o=[]; le.forEach((w) => { // [{section:x,args:y}, value]
	//var ara={
	//    args: [this.rej(w.args[0]), this.rej(w.args[1])],
	//    raw: ''+w,
	//    meta: this.rej(w.meta.type),
	//    doc: w.section+'.'+w.method+' = '+w.outputType+' '+this.rej(w.meta.doc),
	//};
	// var ara=[this.rej(w.args[0]), this.rej(w.args[1]).ipfs];
	o.push({
	    from: this.rej(w.args[0]),
	    data: this.rej(w.args[1]).ipfs
	});
    });
    return o;
},

tobuka: function(o) {

    var tmpl="<tr class='r'>"
+"<td>{#i}</td>"
+"<td>{name}</td>"
+"<td>{#from}</td>"
+"<td>{data}</td>"
+"<td>{value}</td>"
// +"<td>{#meta}</td>"
+"</tr>";

    var w=idd('buka'); if(w) {
	var s=''; for(var i in o) {
	    s+=mpers(tmpl,{
		i: h(i),
		from: PD.acc(o[i].from),
		data: o[i].data,
		value: o[i].value,
		// meta: o[i].meta,
		name: o[i].name,
	    });
	}
	zabil(w,"<table cellspacing='10' border='0'>"+s+"</table>");
    } else dier(o);

},

};



async function getEnt(x,id,tw) { ajaxon(); PD.tobuka([]);
	var o;
	if(!id) o = await PD.entries('peerReview',x);
	else if(!tw) o = await PD.entries('peerReview',x,id);
	else o = await PD.entries('peerReview',x,id,tw);
	ajaxoff();
	PD.tobuka(o);
}
async function getKey(x,id) { PD.tobuka([]); PD.tobuka( await PD.keys('peerReview',x) ); }

// ======================================================================

