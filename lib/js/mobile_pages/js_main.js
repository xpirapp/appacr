// JavaScript Document


var iUser = 0;
var idSelected=0;

var UserId, userTipo, userGrupo, userNome, userEmail, userPdf, userLogin, userSenha, userTelefone, userDataChegada, userOrigem, userCia, userVoo, userSaida, userChegada, userDestino, userLocalizador, userEticket, userTransfer, userStatus;

var nomeUser;

////----------State Machine --------\\\\
function handleStateMachineMain(e)
{
	
	switch(e)
	{
		case 'handleCadUser':
			  handleCadUser();
			  break;
			 
			 
		case 'getUserOnSql':
			  db.transaction(handleGetUserOnDb, handleDbError);
			  break;
			 
			 
		case 'handleGetUsersOnMysql':
			  handleGetUsersOnMysql();
			  break;
			 
			 
		case 'handlerGetDataUserSelected':
			  handlerGetDataUserSelected();
			  break;
			  
		case 'GetUserDataOnSqlLite':
			  db.transaction(GetUserDataOnSqlLite, handleDbError);
			  break;
			 
	}
	
}


///------ Primeiro Passo ------///
function handleGetUserOnDb(tx, result)
{
	
	var sql = "select * from tb_usuarios";
	tx.executeSql(sql, [], handleGetUserOnDbSuccess);
	
	
	function handleGetUserOnDbSuccess(tx, results) {
		
		var len = results.rows.length;
		
		if(len > 0) 
		{
			var employee = results.rows.item(0);
			
			userId = employee.usuariosId;
			userNome = employee.usuariosNome;
			userEmail = employee.usuariosEmail;
			$.mobile.changePage( "#home", { transition: "pop"});
			
		}
	 }
	
}


///------ Segundo Passo ------///
/*function handleGetUsersOnMysql()
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
				.append('<li><a href="#" onClick="handleValidaUser('+data.mensagem[iUser][0]+', \''+data.mensagem[iUser][2]+'\')">'+data.mensagem[iUser][4]+'</a></li>'); 
				
				iUser++;
				});
				
				$('#ulUsuarios').listview('refresh');
			}
	});
}*/


///------ Terceiro Passo ------///
/*function handlerGetDataUserSelected()
{
	
	$.getJSON(ExternalURL+'adm/lib/php/sm_login.php?acao=login&login='+idSelected+'&format=json',function(data){//&callback=?
				
				
				if(data.mensagem == 'fail')
				{
					//alert('E-mail incorreto!');
					handleAlert('Alerta!', 'Houve um erro, tente novamente ou informe o técnico.');
				}
				else
				{
					userId = data.mensagem[0]['usuariosId'];
					//userTipo = data.mensagem[0]['usuariosTipo'];
					userNome = data.mensagem[0]['usuariosNome'];
					userEmail = data.mensagem[0]['usuariosEmail'];
					//userTelefone = data.mensagem[0]['usuariosStatus'];
					//userDataChegada = data.mensagem[0]['usuariosDataVolta'];
					//userOrigem = data.mensagem[0]['usuariosOrigem'];
					//userCia = data.mensagem[0]['usuariosCia'];
					//userVoo = data.mensagem[0]['usuariosVoo'];
					//userSaida = data.mensagem[0]['usuariosSaida'];
					//userChegada = data.mensagem[0]['usuariosChegada'];
					//userDestino = data.mensagem[0]['usuariosDestino'];
					//userLocalizador = data.mensagem[0]['usuariosLocalizador'];
					//userEticket = data.mensagem[0]['usuariosEticket'];
					//userTransfer = data.mensagem[0]['usuariosTransfer'];
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
						//handleUpdateDadosDBabse();
					}
				
				}
		});
}*/


///------ GetUserDataOnSqlLite ------///
function GetUserDataOnSqlLite(tx, result)
{
	var sql = "select * from tb_usuarios LIMIT 1";
	tx.executeSql(sql, [], handleGetUserOnSqlLiteSuccess);
	
	
	function handleGetUserOnSqlLiteSuccess(tx, results) {
		
		var len = results.rows.length;
		var employee = results.rows.item(0);
		
		
		if(len == 0) handleAlert('Alerta!', 'Houve um erro, talvez o usuário não esteja cadastrado.');
		else
		{
			UserId = employee.usuariosId;
			nomeUser = employee.usuariosNome;
		}
	 }
}





///---Methods
/*function handleValidaUser(a,b)
{
	if(confirm('Tem certeza que deseja cadastrar este usuário?'))
	{
		
		//idUser = a;
		
		//$.mobile.changePage( "#PageViewSalas", { transition: "fade"});
		
		idSelected = a;
		
		handleStateMachineMain('handlerGetDataUserSelected');
		//handlerGetUserData(a)
	}
}*/


function handleCadUser()
{
	var nome = $('#fieldNome').val();
	var email = $('#fieldEmail').val();
	//var crm = $('#fieldCrm').val();
	//var fone = $('#fieldTelefone').val();
		
	if($("#ulCadastroUser input:text").val() == '')
	{
		alert('Por favor preencher todos os campos!');
	}
	else
	{
		
		$.post(ExternalURL+"adm/lib/php/sm_usuarios.php", {acao:'insert',_nome: nome, _email:email, format:'json' }, 
		function(data)
		{
			
			if(data == 'fail')
				{
					alert('Erro ao cadastrar o usuário. Informe um técnico.');
				}
				else
				{
					
					
					
					$.getJSON(ExternalURL+"adm/lib/php/sm_usuarios.php", {acao:'selectRow',_email:email, format:'json' }, 
					function(data)
					{
						
						if(data.mensagem == 'fail')
						{
							alert('Erro ao efetuar o cadastro, tente novamente.');
							
							
						}
						else
						{
							
							userId = data.mensagem[0]['usuariosId'];
							userNome = data.mensagem[0]['usuariosNome'];
							userEmail = data.mensagem[0]['usuariosEmail'];
							userPdf = data.mensagem[0]['usuariosPdf'];
							db.transaction(handleInsertDadosDBase, handleDbError);
							
						}
					});
	
				}
		});
	}
}

function handleDbError(tx, error)
{
	alert('handleDbError');
	//handleAlert('Atenção!', 'Houve um erro, tente novamente ou informe o técnico.');
}


function handleInsertDadosDBase(tx, result)
{

	alert(userPdf);
	tx.executeSql("INSERT INTO tb_usuarios (usuariosId, usuariosNome, usuariosPdf, usuariosEmail,usuariosStatus) VALUES  ("+userId+", '"+userNome+"', '"+userPdf+"', '"+userEmail+"', 1)");
	alert('Cadastro realizado com sucesso.');
	//window.location = "app_home.html";
	$.mobile.changePage( "#home", { transition: "fade"});
}