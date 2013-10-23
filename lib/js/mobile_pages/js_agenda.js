// JavaScript Document
// Js_agenda.js
// por Rafael Alves
// ralves.sql@gmail.com
// @ralves_sql


//-- StateMachine
function StateMachine(strAction)
{
	switch(strAction)
	{
		case 'handleGetDadosAgendaDia':
			  db.transaction(handleStartDbAgendaDiaSuccess, handleStartDbAgendaError);
			  break;
			  
		case 'handleGetDadosAgenda':
			  db.transaction(handleStartDbAgendaSuccess, handleStartDbAgendaError);
			  break;
			  
	}
}


//-- handleStartDbAgendaError
function handleStartDbAgendaError(tx, result)
{
	//handleAlert('Erro!', '#Agenda: Houve um Erro. Informe um Técnico.');
	alert('Houve uma falha, tente novamente fechando e abrindo o aplicativo.');
}

//-- handleStartDbAgendaDiaSuccess
function handleStartDbAgendaDiaSuccess(tx, result)
{
	/**/
	var sql = "select * from tb_palestras_data ORDER by palestras_dataId ASC";
	tx.executeSql(sql, [], handleSelectAgendaDiaSuccess, handleStartDbAgendaError);
}

//-- handleStartDbAgendaSuccess
function handleStartDbAgendaSuccess(tx, result)
{
	/* var sql = "select * from tb_palestras a, tb_palestrantes b, tb_palestras_palestrantes c "+
			  " where a.palestrasId = c.palestras_palestrantesPalestrasId AND "+
			  		" b.palestrantesId = c.palestras_palestrantesPalestrantesId "+
					" OR b.palestrantesId != null GROUP by a.palestrasTitulo ORDER by a.palestrasId ASC";
					*/
	var sql = "select * from tb_palestras ORDER by palestrasId ASC";
	tx.executeSql(sql, [], handleSelectAgendaSuccess, handleStartDbAgendaError);
}

//-- handleSelectAgendaSuccess

var indicePalestrantesDb = 0;
var indicePalestrantesDb2 = 0;

function handleSelectAgendaDiaSuccess(tx, result)
{
	$('#ulAgenda').empty();
	$('#ulAgenda').append('<li data-role="list-divider" style="background-color:#436CA9;" >Selecione a Agenda pela data </li>');
	var countItens = 0;
	var id;
	var numItens = result.rows.length;
	var arrIds = Array();
	
	handleGetDia();
	
	function handleGetDia()
			{
				if(countItens < numItens)
				{
					
					var employee = result.rows.item(countItens);
					
					$('#ulAgenda').append('<li><a href="#agendaDetalhes1" data-transition="slide" onClick="handleGetAgendaPorDia('+employee.palestras_dataId+', \''+employee.palestras_dataDia+'\');"><h2>'+employee.palestras_dataDia+'</h2></a></li>');
					
					
					$('#ulAgenda').listview('refresh');
					countItens++;
					handleGetDia()
				}
			}
		
	StateMachineNotas('handleGetDadosNotas');
}

//-- handleGetAgendaPorDia
function handleGetAgendaPorDia(e,f)
{
	$('#txtTitulo').html(f);
	db.transaction(handleGetAgendaSuccess, handleGetAgendaError);
	
	//ERROR
	function handleGetAgendaError(tx, result)
	{
		alert('Falha ao carregar os dados. Feche o aplicativo e tente novamente.');
	}
	
	//SUCCESS
	function handleGetAgendaSuccess(tx, result)
	{
		var sql = "select * from tb_palestras WHERE palestrasDataId = '"+e+"'";
		tx.executeSql(sql, [], handleSelectAgendaSuccess);
	}
}

//-- handleGetAgenda
function handleSelectAgendaSuccess(tx, result)
{
	
	$('#ulAgendaDetalhes1').empty();
	$('#ulAgendaDetalhes1').append('<li data-role="list-divider" style="background-color:#436CA9;" >Agenda </li>');
	var countItens = 0;
	var id;
	var numItens = result.rows.length;
	var arrIds = Array();
	oi();
	
	
			function oi()
		{
			if(countItens < numItens)
			{
				
				var employee = result.rows.item(countItens);
				var tipo = employee.palestrasTipo;
				
					$('#ulAgendaDetalhes1').append(
					'<a href="#" onclick="handleGetDetalhesAgenda('+employee.palestrasId+', \''+employee.palestrasDescricao+'\')"><li data-theme="c"><p><strong>'+employee.palestrasHora+'</strong></p><p><em>'+employee.palestrasTitulo+'</em></p></a></li>');
			
				id = employee.palestrasId;
				
				countItens++;
				oi()
				$('#ulAgendaDetalhes1').listview('refresh');
			}
		}
		
			
			
	$('#ulAgendaDetalhes1').listview('refresh');
	
	
}


function handleGetDetalhesAgenda(strId,strDescricao)
{
	//userId = strId;
	
	$('#pageDetalheUl').empty();
	$.mobile.changePage( "#page-detalhes", { transition: "slide"});
	
	$("#textPageDetalhe").text('Detalhes');
	$('#descricao-page-detalhes').html(strDescricao);
	
	
	
		$('#pageDetalheUl').append('<li data-role="list-divider" style="background-color:#436CA9;">Anota&ccedil;&otilde;es</li>');
		$('#pageDetalheUl').append('<li><textarea  name="textarea" id="textareaNote3" style="height:200px; padding:10px; overflow:scroll;"></textarea></li>');
		$('#pageDetalheUl').append('<li><input id="btSaveNotas" type="button" value="Salvar"></li>');
		$('#pageDetalheUl').append('<li><div id="sleepNote"></div></li>');
		$('#pageDetalheUl').trigger("create");
		
		handleGetNotas($('#textareaNote3'));
		
		$('#btSaveNotas').click(function ()
		{
			handleSaveNote($('#textareaNote3'));
		});
		$('#pageDetalheUl').listview('refresh');
		StateMachineNotas('handleGetDadosNotas');
}

function handleViewMinicurriculo(b, c)
{
	$.mobile.changePage( "#page-miniCurriculo", { transition: "slideup"});
	$('#descricao-page-detalhes-mini-curriculo').empty();

	$("#nomePalestrante").text(b);
	$("#descricao-page-detalhes-mini-curriculo").append(c);
	//'<img src="images/template_ipad/images/palestrantes/'+a+'" style="float:left;padding:10px;"> '+
}


/*
function handleGetDetalhesAgenda(strId, strTipo, strNome, strCurriculo, strFoto, strDescricao)
{
	//userId = strId;
	
	$('#pageDetalheUl').empty();
	$.mobile.changePage( "#page-detalhes", { transition: "fade"});
	$("#textPageDetalhe").text('Detalhes da Aula');
	$('#descricao-page-detalhes').html(strDescricao);
	
	
	if(strTipo == 0)
	{
		$('#pageDetalheUl').append('<li data-role="list-divider">Palestrante</li>');
		$('#pageDetalheUl')
				.append('<li><a href="#" onClick="handleViewMinicurriculo(\''+strFoto+'\', \''+strNome+'\', \''+strCurriculo+'\')">'+
        				'<h2>'+strNome+'</h2>'+
						'<p>'+strCurriculo+'</p></a>'+
						'</li>');
						
		$('#pageDetalheUl').append('<li data-role="list-divider">Anota&ccedil;&otilde;es</li>');
		$('#pageDetalheUl').append('<li><textarea  name="textarea" id="textareaNote" style="height:300px; padding:10px; overflow:scroll;"></textarea></li>');
		$('#pageDetalheUl').append('<li><input id="btSaveNotas" type="button" value="Salvar anota&ccedil;&otilde;es"></li>');
		$('#pageDetalheUl').append('<li><div id="sleepNote"></div></li>');
		$('#pageDetalheUl').trigger("create");
		
		$('#btSaveNotas').click(function ()
		{
			handleSaveNote($('#textareaNote'));
		});
		StateMachineNotas('handleGetDadosNotas');
	}
	
	$('#pageDetalheUl').listview('refresh');
}

function handleViewMinicurriculo(a, b, c)
{
	$.mobile.changePage( "#page-miniCurriculo", { transition: "slideup"});
	$('#descricao-page-detalhes-mini-curriculo').empty();

	$("#nomePalestrante").text(b);
	//$("#descricao-page-detalhes-mini-curriculo").append('<img src="images/template_ipad/images/palestrantes/'+a+'" style="float:left;padding:10px;"> '+c);
	
}
 */