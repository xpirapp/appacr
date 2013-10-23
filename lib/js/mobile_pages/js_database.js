// JavaScript Document

//Var's
//var ip = '192.168.0.2:8888';//'eventoacr.com.br';'192.168.1.176'192.168.0.164:8888
var ip = 'eventoacr.com.br';
var db;
var ExternalURL = 'http://'+ip+'/';
//var ExternalURL = 'http://'+ip+'/www/MyProjects/Xpirapp/App_iPad/AppAcr/platforms/ios/www/';

//Create Db
function OpenDataBase()
{
	db = openDatabase('xpirapp_acr', '1.0', '@ralves_sql', 50 * 1024 * 1024);
}


function handleCreateDb(){
	db.transaction(handleDbSuccess, handleDbError);
}


//Db Error
function handleDbError(tx, error) {
	
	console.log("Database Error: " + error);
 }
 
function handleDbError2(tx, error) {
	
	console.log("Database Error2: " + error);
 }

//Db Success
function handleDbSuccess(tx, error) {
	
	
	//tx.executeSql('DROP TABLE IF EXISTS tb_estudos');
	//tx.executeSql('DROP TABLE IF EXISTS tb_estudos_tipo');
	//tx.executeSql('DROP TABLE IF EXISTS tb_aulas');
	//tx.executeSql('DROP TABLE IF EXISTS tb_palestras_data');
	//tx.executeSql('DROP TABLE IF EXISTS tb_palestras_palestrantes');
	//tx.executeSql('DROP TABLE IF EXISTS tb_palestrantes');
	
	//tx.executeSql('DROP TABLE IF EXISTS tb_palestras_data');
	//tx.executeSql('DROP TABLE IF EXISTS tb_usuarios');
	//tx.executeSql('DROP TABLE IF EXISTS tb_palestras');
	//tx.executeSql('DROP TABLE IF EXISTS tb_mynote');
	
	
	//Db Usuarios
	var sql = 
		"CREATE TABLE IF NOT EXISTS tb_usuarios( "+
		"usuariosId INT(11), " +//INTEGER PRIMARY KEY AUTOINCREMENT
		"usuariosTipo INT(11), " +
		"usuariosNome VARCHAR(50), " +
		"usuariosEmail VARCHAR(100), " +
		"usuariosLogin VARCHAR(100), " +
		"usuariosTelefone VARCHAR(100), " +
		"usuariosStatus INT(11) )";
		tx.executeSql(sql);
		
	//Palestras
	var sql = 
		"CREATE TABLE IF NOT EXISTS tb_palestras ( "+
		"palestrasId INTEGER PRIMARY KEY AUTOINCREMENT, " +
		"palestrasTipo INT(11), " +
		"palestrasDataId INT(11), " +
		"palestrasTitulo VARCHAR(150), " +
		"palestrasDescricao TEXT, " +
		"palestrasData TEXT, " +
		"palestrasHora TEXT, " +
		"palestrasStatus INT(11))";
		tx.executeSql(sql);
		
	//MyNote
	 var sql = 
		"CREATE TABLE IF NOT EXISTS tb_mynote( "+
		"mynoteId INTEGER PRIMARY KEY AUTOINCREMENT, " +
		"mynoteUserId INT(11), " +
		"mynotePalestraDadoId INT(11), " +
		"mynoteNote TEXT, " +
		"mynoteStatus INT(11))";
		tx.executeSql(sql);	
		
	
	//Db Palestras Data
	var sql = 
		"CREATE TABLE IF NOT EXISTS tb_palestras_data( "+
		"palestras_dataId INT(11), " +//INTEGER PRIMARY KEY AUTOINCREMENT
		"palestras_dataDia VARCHAR(100), " +
		"palestras_dataStatus INT(11) )";
		tx.executeSql(sql);
	
	//Verificando dados da tabela: Palestras
		var sqlPalestrasData = "select * from tb_palestras_data";
		tx.executeSql(sqlPalestrasData, [], getPalestrasData_success,handleDbError2);
		
			
	//Verificando dados da tabela: Palestras
		var sqlPalestras = "select * from tb_palestras";
		tx.executeSql(sqlPalestras, [], getPalestras_success,handleDbError2);
		
	/*//Aulas
	//var sql = 
		"CREATE TABLE IF NOT EXISTS tb_aulas ( "+
		"aulasId INTEGER PRIMARY KEY AUTOINCREMENT, " +
		"aulasPalestrantesNome VARCHAR(50), " +
		"aulasStatus INT(11) )";
		//tx.executeSql(sql);
		
	//Estudos
	//var sql = 
		"CREATE TABLE IF NOT EXISTS tb_estudos ( "+
		"estudosId INTEGER PRIMARY KEY AUTOINCREMENT, " +
		"estudosTipoId INT(11), " +
		"estudosAutor TEXT, " +
		"estudosTitulo TEXT, " +
		"estudosDescricao TEXT, " +
		"estudosStatus INT(11) )";
		//tx.executeSql(sql);
		
	//Estudos TIPO
	//var sql = 
		"CREATE TABLE IF NOT EXISTS tb_estudos_tipo ( "+
		"estudos_tipoId INTEGER PRIMARY KEY AUTOINCREMENT, " +
		"estudos_tipoNome VARCHAR(50), " +
		"estudos_tipoStatus INT(11) )";
		//tx.executeSql(sql);
		
		
	//Palestrantes
	var sql = 
		"CREATE TABLE IF NOT EXISTS tb_palestrantes ( "+
		"palestrantesId INTEGER PRIMARY KEY AUTOINCREMENT, " +
		"palestrantesTipo INT(11), " +
		"palestrantesNome VARCHAR(50), " +
		"palestrantesDescricao TEXT, " +
		"palestrantesFoto VARCHAR(50), " +
		"palestrantesStatus INT(11) )";
	tx.executeSql(sql);
	*/
	
	
	//Palestras_Palestrantes
	/*var sql = 
	"CREATE TABLE IF NOT EXISTS tb_palestras_palestrantes ( "+
		"palestras_palestrantesId INTEGER PRIMARY KEY AUTOINCREMENT, " +
		"palestras_palestrantesPalestrasId INT(11), " +
		"palestras_palestrantesPalestrantesId INT(11), " +
		"palestras_palestrantesStatus INT(11) )";
	tx.executeSql(sql);
	*/	
		
		
	 //Palestras Dados
	/* var sql = 
		"CREATE TABLE IF NOT EXISTS tb_palestras_dados ( "+
		"palestras_dadosId INTEGER PRIMARY KEY AUTOINCREMENT, " +
		"palestras_dadosPalestrasId INT(11), " +
		"palestras_dadosTitulo VARCHAR(150), " +
		"palestras_dadosDescricao TEXT, " +
		"palestras_dadosPalestrante VARCHAR(250), " +
		"palestras_dadosData TEXT, " +
		"palestras_dadosHora TEXT, " +
		"palestras_dadosStatus INT(11))";
		tx.executeSql(sql);
		*/	
			
	 //Documentos
	 /*var sql = 
		"CREATE TABLE IF NOT EXISTS tb_documentos( "+
		"documentosId INTEGER PRIMARY KEY AUTOINCREMENT, " +
		"documentosTitulo VARCHAR(150), " +
		"documentosPath TEXT, " +
		"documentosTipo VARCHAR(10), " +
		"documentosStatus INT(11))";
		//tx.executeSql(sql);*/
	
	
	 
			
	//Verificando dados da tabela: Palestras
		//var sqlPalestrasData = "select * from tb_palestras_data";
		//tx.executeSql(sqlPalestrasData, [], getPalestrasData_success,handleDbError2);
		
	
	
	//Verificando dados da tabela: Palestrantes
		//var sqlPalestrantes = "select * from tb_palestrantes";
		//tx.executeSql(sqlPalestrantes, [], getPalestrantes_success,handleDbError2);
		
	//Verificando dados da tabela: Palestras_Palestrantes
		//var sqlPalestrasPalestrantes = "select * from tb_palestras_palestrantes";
		//tx.executeSql(sqlPalestrasPalestrantes, [], getPalestrasPalestrantes_success,handleDbError2);
		
}


///////////Global Methods//////////////
 
function handlerEraseDbTransaction(tx, result)
{
	
	//tx.executeSql('DROP TABLE IF EXISTS tb_estudos');
	//tx.executeSql('DROP TABLE IF EXISTS tb_estudos_tipo');
	//tx.executeSql('DROP TABLE IF EXISTS tb_aulas');
	tx.executeSql('DROP TABLE IF EXISTS tb_usuarios');
	tx.executeSql('DROP TABLE IF EXISTS tb_palestras');
	tx.executeSql('DROP TABLE IF EXISTS tb_mynote');
	tx.executeSql('DROP TABLE IF EXISTS tb_palestras_palestrantes');
	tx.executeSql('DROP TABLE IF EXISTS tb_palestrantes');
	
	
	$.getJSON(ExternalURL+'adm/lib/php/sm_usuarios.php?acao=delete&idUser='+UserId+'&format=json',function(data){
		
		if(data.mensagem == 'fail')
		{
			alert('E#003 - Informe o Desenvolvedor');//Remover os dados do usuario do banco- adm/lib/php/sm_usuarios.php
		}
		else
		{
			window.location = "index.html";
		}
	});
	
	
}


/////////// ----  Palestras ---- //////////////
function getPalestras_success(tx, results)
	{
		
		 var len = results.rows.length;
		 var indicePalestras = 0;
		 
		 var sTx = tx;
		 
		 if(len ==0)
		 {
			
			$.getJSON(ExternalURL+'adm/lib/php/sm_palestras.php?acao=select&format=json',function(data){
				
				if(data.mensagem == 'fail')
				{
					alert('E#003 - Informe o Desenvolvedor');//Remover os dados do usuario do banco- adm/lib/php/sm_usuarios.php
				}
				else
				{
					
					db.transaction(handleInsertDataPalestras, handleDbPalestrasError);
					
					function handleDbPalestrasError(tx, result)
					{
						alert('Erro ao cadastrar as Palestras!');
					}
					
					function handleInsertDataPalestras(tx, result)
					{
						$.each(data.mensagem, function() { 
						
						tx.executeSql("INSERT INTO tb_palestras (palestrasId, palestrasTipo, palestrasDataId, palestrasTitulo, palestrasDescricao, palestrasHora,  palestrasStatus) VALUES ("+data.mensagem[indicePalestras][0]+", "+data.mensagem[indicePalestras][1]+", "+data.mensagem[indicePalestras][2]+", '"+html_entity_decode(data.mensagem[indicePalestras][3])+"', '"+html_entity_decode(data.mensagem[indicePalestras][4])+"','"+data.mensagem[indicePalestras][6]+"', 1)");
						//SALVAR NO BANCO
							console.log("Palestras: "+data.mensagem[indicePalestras][2]);
							indicePalestras++;
						
						});
						
					}
					
				}
			});
			
		 }
		 
	}
	
	 
/////////// ----  Palestras data---- //////////////
function getPalestrasData_success(tx, results)
	{
		
		 var len = results.rows.length;
		 var indicePalestrasDia = 0;
		 
		 var sTx = tx;
		 
		 if(len ==0)
		 {
			
			$.getJSON(ExternalURL+'adm/lib/php/sm_palestras.php?acao=selectDia&format=json',function(data){
				
				if(data.mensagem == 'fail')
				{
					alert('E#003 - Informe o Desenvolvedor');//Remover os dados do usuario do banco- adm/lib/php/sm_usuarios.php
				}
				else
				{
					
					db.transaction(handleInsertDataPalestrasDia, handleDbPalestrasDiaError);
					
					function handleDbPalestrasDiaError(tx, result)
					{
						alert('Erro ao cadastrar as PalestrasData!');
					}
					
					function handleInsertDataPalestrasDia(tx, result)
					{
						$.each(data.mensagem, function() { 
						
						tx.executeSql("INSERT INTO tb_palestras_data (palestras_dataId, palestras_dataDia, palestras_dataStatus) VALUES ("+data.mensagem[indicePalestrasDia][0]+", '"+html_entity_decode(data.mensagem[indicePalestrasDia][1])+"', 1)");
						//SALVAR NO BANCO
							console.log("Palestras Data: "+html_entity_decode(data.mensagem[indicePalestrasDia][1]));
							indicePalestrasDia++;
						
						});
					}
					
				}
			});
			
		 }
		 
	}
	
/////////// ----  Palestrantes ---- //////////////
/*function getPalestrantes_success(tx, results)
{
	
	 var len = results.rows.length;
	 var indicePalestrantes = 0;
	 var indiceAulas = 0;
	 
	 
	 if(len ==0)
	 {
		
		$.getJSON(ExternalURL+'adm/lib/php/sm_palestrantes.php?acao=select&format=json',function(data){
			
			if(data.mensagem == 'fail')
			{
				alert('E#003 - Informe o Desenvolvedor');//Remover os dados do usuario do banco- adm/lib/php/sm_usuarios.php
			}
			else
			{
				
				db.transaction(handleInsertDataPalestrantes, handleDbPalestrantesError);
				
				function handleDbPalestrantesError(tx, result)
				{
					alert('Erro ao cadastrar os Palestrantes!');
				}
				
				function handleInsertDataPalestrantes(tx, result)
				{
					$.each(data.mensagem, function() { 
					
					tx.executeSql("INSERT INTO tb_palestrantes (palestrantesId, palestrantesTipo, palestrantesNome, palestrantesDescricao, palestrantesFoto, palestrantesStatus) VALUES ("+data.mensagem[indicePalestrantes][0]+","+data.mensagem[indicePalestrantes][1]+", '"+data.mensagem[indicePalestrantes][2]+"', '"+data.mensagem[indicePalestrantes][3]+"', '"+data.mensagem[indicePalestrantes][4]+"', 1)");
					//SALVAR NO BANCO
						//console.log("Palestrantes: "+data.mensagem[indicePalestrantes][0]);
						indicePalestrantes++;
					
					});
				}
				
			}
		});
		
	 }
}*/

/////////// ----  Aulas ---- //////////////
/*function getAulas_success(tx, results)
{
	
	 var len = results.rows.length;
	 var indiceAulas = 0;
	 
	 
	 if(len ==0)
	 {
		
		$.getJSON(ExternalURL+'adm/lib/php/sm_palestrantes.php?acao=select&format=json',function(data){
			
			if(data.mensagem == 'fail')
			{
				alert('E#003 - Informe o Desenvolvedor');//Remover os dados do usuario do banco- adm/lib/php/sm_usuarios.php
			}
			else
			{
				
				db.transaction(handleInsertDataAulas, handleDbAulasError);
				
				function handleDbAulasError(tx, result)
				{
					alert('Erro ao cadastrar as Aulas!');
				}
				
				function handleInsertDataAulas(tx, result)
				{
					$.each(data.mensagem, function() { 
					
						if(data.mensagem[indiceAulas][1] != 1)
						{
							//console.log("Aulas: "+data.mensagem[indiceAulas][2]);
							tx.executeSql("INSERT INTO tb_aulas (aulasId, aulasPalestrantesNome, aulasStatus) VALUES ("+data.mensagem[indiceAulas][0]+",'"+data.mensagem[indiceAulas][2]+"', 0)");
							//SALVAR NO BANCO
								
								
						}
						
						indiceAulas++;
					});
				}
				
			}
		});
		
	 }
}*/

/////////// ----  Palestras Palestrantes ---- //////////////
/*function getPalestrasPalestrantes_success(tx, results)
{
	
	 var len = results.rows.length;
	 var indicePPalestrantes = 0;
	 
	 
	 if(len ==0)
	 {
		
		$.getJSON(ExternalURL+'adm/lib/php/sm_palestras_palestrantes.php?acao=select&format=json',function(data){
			
			if(data.mensagem == 'fail')
			{
				alert('E#003 - Informe o Desenvolvedor');//Remover os dados do usuario do banco- adm/lib/php/sm_usuarios.php
			}
			else
			{
				
				db.transaction(handleInsertDataPalestrasPalestrantes, handleDbError);
				
				function handleInsertDataPalestrasPalestrantes(tx, result)
				{
					$.each(data.mensagem, function() { 
					
						tx.executeSql("INSERT INTO tb_palestras_palestrantes (palestras_palestrantesId, palestras_palestrantesPalestrasId, palestras_palestrantesPalestrantesId, palestras_palestrantesStatus) VALUES ("+data.mensagem[indicePPalestrantes][0]+", "+data.mensagem[indicePPalestrantes][1]+", "+data.mensagem[indicePPalestrantes][2]+", 1)");
					//SALVAR NO BANCO
						
						
						//console.log("Palestras: "+data.mensagem[indicePPalestrantes][1] + ' - Palestrantes: '+data.mensagem[indicePPalestrantes][2]);
						indicePPalestrantes++;
					});
				}
				
			}
		});
		
	 }
	 
}*/

/*/////////// ----  Estudos ---- //////////////
function getEstudos_success(tx, results)
{
	
	 var len = results.rows.length;
	 var indiceEstudos = 0;
	 
	 if(len ==0)
	 {
		
		$.getJSON(ExternalURL+'adm/lib/php/sm_estudos.php?acao=select&format=json',function(data){
			
			if(data.mensagem == 'fail')
			{
				alert('E#003 - Informe o Desenvolvedor');//Remover os dados do usuario do banco- adm/lib/php/sm_usuarios.php
			}
			else
			{
			
				db.transaction(handleInsertDataEstudos, handleDbEstudosError);
				
				function handleDbEstudosError(tx, result)
				{
					alert('Erro ao cadastrar os Estudos!');
				}
				
				function handleInsertDataEstudos(tx, result)
				{
					$.each(data.mensagem, function() { 
					
					tx.executeSql("INSERT INTO tb_estudos (estudosId, estudosTipoId, estudosAutor, estudosTitulo, estudosDescricao, estudosStatus) VALUES ("+data.mensagem[indiceEstudos][0]+", "+data.mensagem[indiceEstudos][1]+", '"+data.mensagem[indiceEstudos][2]+"', '"+data.mensagem[indiceEstudos][3]+"', '"+data.mensagem[indiceEstudos][4]+"', 0)");
					//SALVAR NO BANCO
						//console.log("Estudos: "+data.mensagem[indiceEstudos][2]);
						indiceEstudos++;
					
					});
				}
				
			}
		});
		
	 }
}	

/////////// ----  Estudos Tipo---- //////////////
function getEstudosTipo_success(tx, results)
{
	
	 var len = results.rows.length;
	 var indiceEstudosTipo = 0;
	 
	 if(len ==0)
	 {
		
		$.getJSON(ExternalURL+'adm/lib/php/sm_estudos_tipo.php?acao=select&format=json',function(data){
			
			if(data.mensagem == 'fail')
			{
				alert('E#003 - Informe o Desenvolvedor');//Remover os dados do usuario do banco- adm/lib/php/sm_usuarios.php
			}
			else
			{
			
				db.transaction(handleInsertDataEstudosTipo, handleDbEstudosTipoError);
				
				function handleDbEstudosTipoError(tx, result)
				{
					alert('Erro ao cadastrar os Tipo de Estudos!');
				}
				
				function handleInsertDataEstudosTipo(tx, result)
				{
					$.each(data.mensagem, function() { 
					
					tx.executeSql("INSERT INTO tb_estudos_tipo (estudos_tipoId, estudos_tipoNome, estudos_tipoStatus) VALUES ("+data.mensagem[indiceEstudosTipo][0]+", '"+data.mensagem[indiceEstudosTipo][1]+"', 1)");
					
					//SALVAR NO BANCO
						//console.log("Estudos Tipo: "+data.mensagem[indiceEstudosTipo][0]);
						indiceEstudosTipo++;
					
					});
				}
				
			}
		});
		
	 }
}	*/


/////////// ----  Get USER ---- //////////////
var dadosUser = new Array();

function handeGetDadosUsuarios()
{
	db.transaction(handleDadosUserSuccess, handleDadosUserError);
}
function handleDadosUserError(tx, results)
{
	console.log('#Erro Ao selecionar os dados do usuario: js_database.js: linha: 225 ');
}
function handleDadosUserSuccess(tx, results)
{
	//Verificando dados da tabela: PalestrasDados
		var sql = "select * from tb_usuarios";
		tx.executeSql(sql, [], getDataUsuarios);
		
		function getDataUsuarios(tx, results)
		{
			var len = results.rows.length;
			
			for (var i=0; i<len; i++) {
				
				var employee = results.rows.item(i);
				//console.log('Grupo: '+employee.usuariosGrupo);
				dadosUser.push(
								employee.usuariosId,
								employee.usuariosTipo,
								employee.usuariosGrupo,
								employee.usuariosNome,
								employee.usuariosEmail,
								employee.usuariosLogin,
								employee.usuariosTelefone,
								employee.usuariosCrm,
								employee.usuariosDataChegada,
								employee.usuariosOrigem,
								employee.usuariosCia,
								employee.usuariosVoo,
								employee.usuariosHoraSaida,
								employee.usuariosHoraChegada,
								employee.usuariosDestino,
								employee.usuariosLocalizador,
								employee.usuariosEticket,
								employee.usuariosTransfer,
								employee.usuariosStatus); 
				
				
			}
			
			handleGiveDataUser(dadosUser);
		}

}


///------------ Alerta ---------
function handleAlert(strAlerta, strMessage, strUrl)
{
	
	
	$("#id-alert").fadeIn('slow').click(
		function()
		{
			$("#id-alert").fadeOut('slow'
			  ,function() {
				// Animation complete.
				if(strUrl !=undefined) window.location = strUrl;
					
			  });
		});
	$("#alert-top-message").html(strAlerta);
	$("#alert-content-message").html(strMessage);
}