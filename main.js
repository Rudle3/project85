canvas = document.getElementById('myCanvas')
ctx=canvas.getContext ("2d")//Create a reference for canvas 

greencar_width=75
greencar_heigth=100//Give specific height and width to the car image

background_image = "parkingLot.jpg";
greencar_image = "car2.png";

greencar_x=5
greencar_y=225//Set initial position for a car image.

function add() {
bg_imgtag=new Image()
bg_imgtag.onload=uploadBackground
bg_imgtag.src=background_image

greencar_imgtag=new Image()
greencar_imgtag.onload=uploadBackground
greencar_imgtag.src=greencar_image//upload car, and background images on the canvas.
}

function uploadBackground() {
	ctx.drawImage(bg_imgTag,0,0,canvas.width,canvas.height)
}

function uploadgreencar() {
	//Define function ‘uploadgreencar’.
	ctx.drawImage(greencar_imgtag,greencar_x,greencar_y, greencar_width.width,greencar_heigth)
	
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		function up(){
			if rover_y >=0}
			{
				rover_y = rover_y-10;
				console.log("When up arrow is pressed, x=" +rover_x +"| y="+rover_y);
				uploadBackground();
				uploadrover();
				ctx.darwImage(rover_imageTag,rover_x,rover_y,rover_width,rover_height)
			}   
			
			function up(){
				if rover_y <=500}
				{
					rover_y = rover_y+10;
					console.log("When up arrow is pressed, x=" +rover_x +"| y="+rover_y);
					uploadBackground();
					uploadrover();
					ctx.darwImage(rover_imageTag,rover_x,rover_y,rover_width,rover_height)
				}   
				function left(){
					if rover_y >=0}
					{
						rover_y = rover_x-10;
						console.log("When up arrow is pressed, x=" +rover_x +"| y="+rover_y);
						uploadBackground();
						uploadrover();
						ctx.darwImage(rover_imageTag,rover_x,rover_y,rover_width,rover_height)
					}   
					function right(){
						if rover_y <=700}
						{
							rover_y = rover_x+10;
							console.log("When up arrow is pressed, x=" +rover_x +"| y="+rover_y);
							uploadBackground();
							uploadrover();
							ctx.darwImage(rover_imageTag,rover_x,rover_y,rover_width,rover_height);
			
			
}

function up()
{
	//Define function to move the car upward
}

function down()
{
	//Define function to move the car downward
}

function left()
{
	//Define function to move the car left side
}

function right()
{
	//Define function to move the car right side
}
