// JavaScript Document
// Js_San_Diego.js
// por Rafael Alves
// ralves.sql@gmail.com
// @ralves_sql



//-- handleCreateElementsNotas
function handleListenerLinksSanDiego(e)
{
	var text;
	var titulo;
	
	$('#txtTitulo').empty();
	$('#txtSanDiego').empty();
	switch(e)
	{
		case 'historia':
			titulo = 'História';
			text = 'San Diego é o berço da Califórnia. <br><br>Foi localizada pelo explorador Juan Rodriguez Cabrillo, que viajava do México em direção ao norte, com um navio de bandeira espanhola.<br><br>Em 1542, a região passou a ser possessão dos espanhóis. <br><br>Em 1769, o padre franciscano Junipero Serra instalou na área a Mission San Diego de Alcala —a primeira das 21 que foram posteriormente construídas na Califórnia. <br><br>Originalmente povoada por índios, a região foi governada por Espanha, México e, desde 1846, pelos Estados Unidos.';
			break;
		
		case 'balboa-park':
			titulo = 'Balboa Park';
			text = 'Lindos jardins e a estufa botânica com um belo orquidário. Conta com várioas museus entre eles o Museu de História Natural e o Air & Space Museum.<p><em>1549 El Prado - San Diego</em></p>';
			break;
			
		case 'timken':
			titulo = 'Timken Museum of Art';
			text = 'Possui uma amostra da coleção de arte de uma família russa se mudou para San Diego no final do século XIX, fez fortuna e se tornou influente política e artisticamente neste pedaço da América. <p><em>1500 El Prado - San Diego</em></p>';
			break;
			
		case 'mission':
			titulo = 'Mission beach';
			text = 'Local para caminhada com diversas marinas e restaurantes.<p><em>West Mission Bay Dr. - San Diego</em></p>';
			break;
	}
		
		$('#txtTituloSanDiego').html(titulo);
		$('#txtSanDiego').html(text);
		
}