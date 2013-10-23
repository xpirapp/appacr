// JavaScript Document
// Js_San_Diego.js
// por Rafael Alves
// ralves.sql@gmail.com
// @ralves_sql



//-- handleCreateElementsNotas
function handleListenerLinksInformacoes(e)
{
	var text;
	var titulo;
	
	$('#txtTitulo').empty();
	$('#txtSanDiego').empty();
	switch(e)
	{
		case 'cconvencoes':
			titulo = 'San Diego Convention Center';
			text = '<img src="images/san_diego_cCenter.JPG" style="padding-top:5px;" width="100">'+
                    '<h3>San Diego Convention Center</h3>'+
                    '<p>111 W. Harbor Drive - San Diego</p>'+
                    '<p>Fone: +1 (619) 525-5000</p>';
			break;
		
		case 'hotel':
			titulo = 'San Diego Convention Center';
			text = '<img src="images/san_diego_hotel.jpeg" style="padding-top:5px;" width="100">'+
                    '<h3>San Diego Marriott Marquis & Marina</h3>'+
                    '<p>333 W. Harbor Dr. - San Diego</p>'+
                    '<p>Fone: +1 (619) 234-1500</p>';
			break;
			
		case 'embaixada':
			titulo = 'San Diego Convention Center';
			text = ' <h3>Embaixada Brasileira (Los Angeles)</h3>'+
                   ' <p>8484 Willshire Boulevard, Suite 711/730, Beverly Hills</p>'+
                   ' <p>Fone: +1 (323) 651-2664</p>'+
                    '<p>E-mail: passporte@brazilian-consulate.org</p>';
			break;
			
	}
		
		$('#txtTituloSanDiego').html(titulo);
		$('#txtSanDiego').html(text);
		
}