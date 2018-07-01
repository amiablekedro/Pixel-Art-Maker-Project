//Document.ready function to make sure the DOM has loaded
$(function (){

//Selecting color input
  	const colorPicker = $('#colorPicker');
	
//Selecting size input
  	let heightInput = $('#inputHeight');
  	let widthInput 	= $('#inputWidth');

//Selecting canvas
  	const canvas = $('#pixelCanvas');

//Function to make grid when size is submitted by the user
  	function makeGrid() {
   		canvas.find('tbody').remove();
		
//Variables for collecting user input, to specify the size of the grid
    		const gridRows = heightInput.val();
   		const gridCol  = widthInput.val();

 //Tbody is set to the table
    		canvas.append('<tbody></tbody>');

    		let canvasBody = canvas.find('tbody');

 //Drawing grid rows
    		for (let i = 0; i < gridRows; i++) {
      			canvasBody.append('<tr></tr>');
   			 }

 //Drawing grid columns
   		for (let i = 0; i < gridCol; i++) {
      			canvas.find('tr').append('<td class="transparent"></td>');
    		}
  	}

//Update grid when Submit button is clicked by calling makeGrid Function
 	$(document).ready(function(){
    		$('input[type="submit"]').on('click', function(event){
      			event.preventDefault();
      	makeGrid();
    	});

//Clear the table and reset when Reset button is clicked
	$('#resetGrid').click(function(event){
	  	event.preventDefault();
  		$('#pixelCanvas').find('tr').remove();
		
  	});
  
//Toggle grid color
	 $('#pixelCanvas').on('click', 'td', function(event){
    		let color = colorPicker.val();
      		let currentColor = $(this).css('background-color');
     		console.log(currentColor + ' color:' + color);

      		if ($(this).hasClass('transparent')) {
        	$(this).toggleClass('transparent');
        	$(this).css('background-color', color);
      		}
     		else {
        	$(this).toggleClass('transparent');
        	$(this).css('background-color', 'transparent');
      	}
    })
  });
});