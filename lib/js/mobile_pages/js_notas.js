// JavaScript Document
// Js_notas.js
// por Rafael Alves
// ralves.sql@gmail.com
// @ralves_sql


//-- StateMachine
function StateMachineNotas(strAction)
{
	
	switch(strAction)
	{
		case 'handleGetDadosNotas':
			    handleGetNotas($('#textareaNote3'));
			    break;
				
		case 'handleCreateElementsNotas':
			    handleCreateElementsNotas2();
			    break;
				
	}
}


//-- handleStartDbNotasError
function handleStartDbNotasError(tx, result)
{
	handleAlert('Erro!', '#Notas: Houve um Erro. Informe um Técnico.');	
}


//-- HandleSaveNote
function handleSaveNote(a)
{
	
	$('#btSaveNotas').hide();
	$('#sleepNote').html('Por favor aguarde...');
	var texto = a.val();
	
	/////----__SELCT NOTES------///
	db.transaction(handleSelectNotesSuccess, handleDbError2);
	
	function handleSelectNotesSuccess(tx, result)
	{
		var sqlNotas = "select * from tb_mynote";
		tx.executeSql(sqlNotas, [], getSelectNotesSuccess,handleDbError2);
	}
		
	function getSelectNotesSuccess(tx, result)
	{
		var len = result.rows.length;
		
		
		
		if(len ==0)
		 {
			 
			 db.transaction(handleInsertNotesSuccess, handleInsertNotesError);
			 
			 function handleInsertNotesSuccess(tx, result)
			{
				
				tx.executeSql("INSERT INTO tb_mynote (mynoteNote) VALUES ('"+texto+"')");
					//SALVAR NO BANCO
					console.log("Nota Cadastrada: "+texto);
					$('#btSaveNotas').show();
					$('#sleepNote').html('');
					alert(html_entity_decode('Anota&ccedil;&otilde;es salvas com sucesso!'));
				
			}
			
			 function handleInsertNotesError(tx, result)
			 {
				alert(html_entity_decode('Erro ao cadastrar as Anota&ccedil;&otilde;es!'));
			 }
	
		 }
		 else
		 {
			 
			 db.transaction(handleInsertNotesSuccess, handleInsertNotesError);
			 
			 
			 
			 
			 function handleInsertNotesSuccess(tx, result)
			{
				tx.executeSql('DELETE from tb_mynote where 1');
				tx.executeSql("INSERT INTO tb_mynote (mynoteNote) VALUES ('"+texto+"')");
					//SALVAR NO BANCO
					console.log("Nota Cadastrada: "+texto);
					$('#btSaveNotas').show();
					$('#sleepNote').html('');
					alert(html_entity_decode('Anota&ccedil;&otilde;es salvas com sucesso!'));
				
			}
			
			 function handleInsertNotesError(tx, result)
			 {
				alert(html_entity_decode('Erro ao salvar as Anota&ccedil;&otilde;es!'));
			 }
		 }
	}
		
}

//-- HandleSaveNote
function handleGetNotas(a)
{
	
	db.transaction(handleGetNotasSuccess, handleGetNotasError);
	
	//ERROR
	function handleGetNotasError(tx, result)
	{
		a.text('Digite aqui suas anotações.');
	}
	
	//SUCCESS
	function handleGetNotasSuccess(tx, result)
	{
		var sql = "select * from tb_mynote";
		tx.executeSql(sql, [], handleSelectNotasSuccess);
	}
	
	
	function handleSelectNotasSuccess(tx, result)
	{
		var employee = result.rows.item(0);
		a.text(employee.mynoteNote);
	}
}

//-- handleCreateElementsNotas
function handleCreateElementsNotas2()
{
		$('#pageNotasUl').empty();
		$('#pageDetalheUl').append('<li data-role="list-divider" style="background-color:#436CA9;">Anota&ccedil;&otilde;es</li>');
		$('#pageDetalheUl').append('<li><textarea  name="textarea" id="textareaNote3" style="height:200px; padding:10px; overflow:scroll;"></textarea></li>');
		$('#pageDetalheUl').append('<li><input id="btSaveNotas" type="button" value="Salvar"></li>');
		$('#pageDetalheUl').append('<li><div id="sleepNote"></div></li>');
		$('#pageDetalheUl').trigger("create");
		
		
		handleGetNotas($('#textareaNote2'));
		
		$('#btSaveNotas2').click(function ()
		{
			handleSaveNote($('#textareaNote2'));
		});
		
		$('#pageNotasUl').listview('refresh');
}