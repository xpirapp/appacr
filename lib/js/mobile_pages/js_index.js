//Var's

var iUser = 0;

var userId, userTipo, userGrupo, userNome, userEmail, userLogin, userSenha, userTelefone, userDataChegada, userOrigem, userCia, userVoo, userSaida, userChegada, userDestino, userLocalizador, userEticket, userTransfer, userStatus;

$(window).load(function() {
	
	$('#bt_cadastro').click(function()
	{
		if($("#login").val() == '')
		{
			handleAlert('Alerta!', 'Por favor preencher todos os campos!');
		}
	});		
});


///verificando se já existe usuarios cadastrados no SQLLite
function handleFirstGetUsersDb()
{
	db.transaction(handleFirstGetUsersDbTransaction, handleDbError);
}

function handleFirstGetUsersDbTransaction(tx, result)
{
	var sql = "select * from tb_usuarios";
	tx.executeSql(sql, [], handleFirstGetUsersDbSuccess);
	
	
	function handleFirstGetUsersDbSuccess(tx, results) {
		
		//console.log('---------USUARIOS---------');
		var len = results.rows.length;
		
		if(len == 0) handleGetUsersDb();
		else  window.location = "app_home.html";
	 }
	
}


//Buscando usuários no Banco de dados.
function handleGetUsersDb()
{
	
	$.getJSON(ExternalURL+'adm/lib/php/sm_usuarios.php?acao=select&format=json',function(data){
		
		
		if(data.mensagem == 'fail')
		{
			alert('E#002 - Informe o Desenvolvedor');//Erro ao selecionar os usuários no banco- adm/lib/php/sm_usuarios.php
		}
		else
		{
			
			$.each(data.mensagem, function() { 
			
				$('#ulUsuarios')
				.append('<li><a href="#" onClick="handleValidaUser('+data.mensagem[iUser][0]+', \''+data.mensagem[iUser][2]+'\')">'+data.mensagem[iUser][4]+' - '+data.mensagem[iUser][2]+'</a></li>'); 
				
				iUser++;
				});
				
				$('#ulUsuarios').listview('refresh');
			}
	});
	
}

//handlerGetUserData
function handlerGetUserData(e)
{
	
	/*if($('#login input').val() == '')
	{
		
		alert('Ops! Campos em branco.');
	}
	else
	{*/
		var login = $('#logins').val();
		$.getJSON(ExternalURL+'adm/lib/php/sm_login.php?acao=login&login='+e+'&format=json',function(data){//&callback=?
				
				
				if(data.mensagem == 'fail')
				{
					alert('E-mail incorreto!');
				}
				else
				{
					userId = data.mensagem[0]['usuariosId'];
					userTipo = data.mensagem[0]['usuariosTipo'];
					userGrupo = data.mensagem[0]['usuariosGrupo'];
					userNome = data.mensagem[0]['usuariosNome'];
					userEmail = data.mensagem[0]['usuariosEmail'];
					userLogin = data.mensagem[0]['usuariosLogin'];
					userSenha = data.mensagem[0]['usuariosSenha'];
					userTelefone = data.mensagem[0]['usuariosStatus'];
					userDataChegada = data.mensagem[0]['usuariosDataVolta'];
					userOrigem = data.mensagem[0]['usuariosOrigem'];
					userCia = data.mensagem[0]['usuariosCia'];
					userVoo = data.mensagem[0]['usuariosVoo'];
					userSaida = data.mensagem[0]['usuariosSaida'];
					userChegada = data.mensagem[0]['usuariosChegada'];
					userDestino = data.mensagem[0]['usuariosDestino'];
					userLocalizador = data.mensagem[0]['usuariosLocalizador'];
					userEticket = data.mensagem[0]['usuariosEticket'];
					userTransfer = data.mensagem[0]['usuariosTransfer'];
					userStatus = data.mensagem[0]['usuariosStatus'];
					
					
	
					if(userStatus == 0)
					{
						//handleGetSalas();
						db.transaction(handleInsertDadosDBase, handleDbError);
						
					}
					else
					if(userStatus == 1)
					{
						window.location = "app_home.html";//
						//db.transaction(handleInsertDadosDBabse, handleDbError);
					}
					else
					if(userStatus == 2)
					{
						handleUpdateDadosDBabse();
					}
				
				}
		});
	//}
}

//handlerGetUserData
function handlerGetUserData2(e)
{
	
	/*if($('#login input').val() == '')
	{
		
		alert('Ops! Campos em branco.');
	}
	else
	{*/
		var login = $('#logins').val();
		$.getJSON(ExternalURL+'adm/lib/php/sm_login.php?acao=login&login='+e+'&format=json',function(data){//&callback=?
				
				
				if(data.mensagem == 'fail')
				{
					alert('E-mail incorreto!');
				}
				else
				{
					userId = data.mensagem[0]['usuariosId'];
					userTipo = data.mensagem[0]['usuariosTipo'];
					userGrupo = data.mensagem[0]['usuariosGrupo'];
					userNome = data.mensagem[0]['usuariosNome'];
					userEmail = data.mensagem[0]['usuariosEmail'];
					userLogin = data.mensagem[0]['usuariosLogin'];
					userSenha = data.mensagem[0]['usuariosSenha'];
					userTelefone = data.mensagem[0]['usuariosStatus'];
					userDataChegada = data.mensagem[0]['usuariosDataVolta'];
					userOrigem = data.mensagem[0]['usuariosOrigem'];
					userCia = data.mensagem[0]['usuariosCia'];
					userVoo = data.mensagem[0]['usuariosVoo'];
					userSaida = data.mensagem[0]['usuariosSaida'];
					userChegada = data.mensagem[0]['usuariosChegada'];
					userDestino = data.mensagem[0]['usuariosDestino'];
					userLocalizador = data.mensagem[0]['usuariosLocalizador'];
					userEticket = data.mensagem[0]['usuariosEticket'];
					userTransfer = data.mensagem[0]['usuariosTransfer'];
					userStatus = data.mensagem[0]['usuariosStatus'];
					
					
				}
				$("#user_id").val(userId);
				$("#user_nome").val(userNome);
				$("#user_grupo").val(userGrupo);
				$("#user_status").val(userStatus);
				
				/*
				$("#user_origem").val(userOrigem);
				$("#user_cia").val(userCia);
				$("#user_voo").val(userVoo);
				$("#user_saida").val(userSaida);
				$("#user_chegada").val(userChegada);
				$("#user_destino").val(userDestino);
				$("#user_localizador").val(userLocalizador);
				$("#user_eticket").val(userEticket);
				$("#user_transfer").val(userTransfer);
				*/
				
				$('#user_bt').click(
					function()
					{
						handleUpDate();
					}
				);
				
				$.mobile.changePage( "#PageViewDados", { transition: "fade"});
				
		});
	//}
}

function handleUpDate()
{
	//alert(userId+' '+$("#user_nome").val()+' ' +$("#user_grupo").val()+' '+$("#user_status").val());
	$.getJSON(ExternalURL+'adm/lib/php/sm_usuarios.php?acao=update&id='+userId+'&nome='+$("#user_nome").val()+'&grupo='+$("#user_grupo").val()+'&status='+$("#user_status").val()+'&format=json',function(data){//&callback=?
		
		alert(data.mensagem);
	});
}

//handleDbError
function handleDbError(tx, error)
{
	alert('handleDbError2');
}



/*function handleGetSalas()
{
	$('#ulSalas').html('');
	$.getJSON(ExternalURL+'adm/lib/php/sm_salas.php?acao=selectSalas&grupo='+userGrupo+'&format=json',function(data){
		
		
		if(data.mensagem == 'fail')
		{
			alert('E#001. Informe o desenvolvedor');//Erro na gravação dos dados - adm/lib/php/sm_usuarios.php
		}
		else
		{	
			
			//Salvando todos os dados das salas no SqlLite
			dadosSalas = data.mensagem;
			
			$('#ulSalas')
				.append('<li data-theme="c" data-role="list-divider">Selecione uma Sala</li>');
				
			for(var i=0; i< dadosSalas.length; i++)
			{
				var dados= dadosSalas[i].split('|');
				
					$('#ulSalas')
					.append('<li><a href="#" onclick="handleInsertAllData(\''+dados[0]+'\', \''+userId+'\')">'+
					'<h1>Sala: <strong>'+dados[2]+'</strong></h1>'+
					'<p>Cadastrados: '+dados[3]+'</p>'+
					'</a></li>');
				
			}
				$('#ulSalas').listview('refresh');
				$('[type="button"]').button();
			//db.transaction(handleInsertDataUsuarios_Salas, handleDbError);
			
		}
	});
}*/

function handleInsertAllData(idSala, idUser, c)
{
	
	db.transaction(handleInsertDadosDBase,  handleDbError);
	
}
//handleUpdateDadosDBabse
function handleInsertDadosDBase(tx, result)
{
	
	tx.executeSql("INSERT INTO tb_usuarios (usuariosId, usuariosTipo, usuariosGrupo, usuariosNome, usuariosEmail, usuariosLogin, usuariosTelefone, usuariosDataChegada, usuariosOrigem, usuariosCia, usuariosVoo, usuariosHoraSaida,usuariosHoraChegada, usuariosDestino,usuariosLocalizador, usuariosEticket, usuariosTransfer, usuariosStatus) VALUES  ('"+userId+"','"+userTipo+"', '"+userGrupo+"','"+userNome+"', '"+userEmail+"','"+userLogin+"','"+userTelefone+"','"+userDataChegada+"', '"+userOrigem+"','"+userCia+"','"+userVoo+"','"+userSaida+"', '"+userChegada+"','"+userDestino+"', '"+userLocalizador+"','"+userEticket+"', '"+userTransfer+"', '"+userStatus+"')");
	
	//db.transaction(handleInsertDataUsuarios_Salas, handleDbError);
	/*$.getJSON(ExternalURL+'adm/lib/php/sm_usuarios.php?acao=alocar_dados&id='+userId+'&grupo='+userGrupo+'&format=json',function(data){
		
		//alert(data.mensagem);
		if(data.mensagem == 'fail')
		{
			alert('E#001. Informe o desenvolvedor');//Erro na gravação dos dados - adm/lib/php/sm_usuarios.php
		}
		else
		{	
			//Salvando todos os dados das salas no SqlLite
			dadosSalas = data.mensagem;
			//alert(dadosSalas);
			db.transaction(handleInsertDataUsuarios_Salas, handleDbError);
			
		}
	});*/
	
	
	
}
