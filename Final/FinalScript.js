let is_locked = true;

function test(){
	alert("positive");
}

function start(){
	document.getElementById("start_screen").style.display = "block";
	const timeout = setTimeout(disapear, 2000);
	document.getElementById("start_screen_start").style.display = "none";
}

function disapear(){
	document.getElementById("start_screen").style.display = "none";
}

function check_code(){
	let x = document.getElementById("code_text").value;
	
	if(x == 2470){
		document.getElementById("start_screen").style.display = "block";
		document.getElementById('map').src = 'assets/map_3.png';
		document.getElementById("box_xy").innerHTML = document.getElementById("door_open").innerHTML;
		const timeout = setTimeout(disapear, 2000);
		is_locked = false;
		
	}
}

function clicked_map() {
	
	if( 575 <= event.clientX && event.clientX <= 607 && 66 <= event.clientY && event.clientY <= 110 && is_locked == true){
		document.getElementById("box_xy").innerHTML = document.getElementById("panel").innerHTML;	
	};
	if( 575 <= event.clientX && event.clientX <= 607 && 66 <= event.clientY && event.clientY <= 110 && is_locked == false){
		document.getElementById("box_xy").innerHTML = document.getElementById("door_open").innerHTML;	
	};
	if ( 490 <= event.clientX && event.clientX <= 562 && 52 <= event.clientY && event.clientY <= 126 && is_locked == true){
		document.getElementById("box_xy").innerHTML = document.getElementById("door_closed").innerHTML;
	};
	if ( 490 <= event.clientX && event.clientX <= 562 && 52 <= event.clientY && event.clientY <= 126 && is_locked == false){
		document.getElementById("box_xy").innerHTML = document.getElementById("door_open").innerHTML;
	};
	if ( 160 <= event.clientX && event.clientX <= 390 && 180 <= event.clientY && event.clientY <= 402){
		document.getElementById("box_xy").innerHTML = document.getElementById("tv").innerHTML;
	};
	if ( 574 <= event.clientX && event.clientX <= 737 && 184 <= event.clientY && event.clientY <= 365){
		document.getElementById("box_xy").innerHTML = document.getElementById("table").innerHTML;
	};
	if ( 481 <= event.clientX && event.clientX <= 661 && 365 <= event.clientY && event.clientY <= 571){
		document.getElementById("box_xy").innerHTML = document.getElementById("pc").innerHTML;
	};
	if ( 152 <= event.clientX && event.clientX <= 359 && 466 <= event.clientY && event.clientY <= 565){
		document.getElementById("box_xy").innerHTML = document.getElementById("bed").innerHTML;
	};
	if ( 790 <= event.clientX && event.clientX <= 897 && 127 <= event.clientY && event.clientY <= 416){
		document.getElementById("box_xy").innerHTML = document.getElementById("kitchen").innerHTML;
	};
	if ( 815 <= event.clientX && event.clientX <= 896 && 524 <= event.clientY && event.clientY <= 580){
		document.getElementById("box_xy").innerHTML = document.getElementById("trash").innerHTML;
	};
	if ( 239 <= event.clientX && event.clientX <= 469 && 59 <= event.clientY && event.clientY <= 118){
		document.getElementById("box_xy").innerHTML = document.getElementById("graffiti").innerHTML;
	};
	
	
	
	
	
	/*    document.getElementById('map').src = 'assets/map_3.png';   */
}

function clicked_box() {

	//document.getElementById("box_xy").innerHTML = document.getElementById("table").innerHTML;
    console.log("X: "+event.clientX);
    console.log("Y: "+event.clientY);
}

function proceed(){
	window.location.href = "https://ferasmarjieh.github.io/Twist/Final_Task/index.html";
}

//document.addEventListener("click", printMousePos);