//Select the table
const canvas = $("#canvas");	

//When size is submitted by the user, call makeGrid()
$("#button").click(function(){
  	// Select dimensions of the grid
	const height = $("#height").val();	//Get the height input
	const width = $("#width").val();	  	//Get the width input

  	$("form").submit(makeGrid(height,width));	//call makeGrid() upon submit
});	

function makeGrid(h,w) {	
	//Clears the table to remake it
	canvas.empty();

	//Create the grid
	for(let r = 0; r < h; r++){					        	//Iterate over the rows
		const row = $('<tr></tr>').appendTo(canvas);	//Add the table rows
		for(let c = 0; c < w; c++){					        //Iterate over the columns
			const cell = $('<td></td>').appendTo(row);	    //Add the cells in each row

			//Color the cells
			cell.click(function(){	                  	//Monitor the click events 
				const color = $("#colorPicker").val();	//Get the color input
				$(this).css("backgroundColor", color);	//Change the color of the cell
			});
		}
	}
}


