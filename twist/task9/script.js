

function load(){
		//alert("Loaded");
		console.log("loaded");
}

function add(){
	let x = document.getElementById("num1").value;
	let y = document.getElementById("num2").value;
		x = Number(x);
		y = Number(y);
	if(isNaN(x) || isNaN(y)){
		console.log("non numbers")
	}
	else{
		calculated(x+y);	
		console.log("both numbers");
	}
	
}

function remove(){
	let x = Number(document.getElementById("num1").value);
	let y = Number(document.getElementById("num2").value);
	if(isNaN(x) || isNaN(y)){
		console.log("non numbers")
	}
	else{
		calculated(x-y);	
		console.log("both numbers");
	}
}

function mult(){
	let x = Number(document.getElementById("num1").value);
	let y = Number(document.getElementById("num2").value);
	if(isNaN(x) || isNaN(y)){
		console.log("non numbers")
	}
	else{
		calculated(x*y);	
		console.log("both numbers");
	}
}

function divide(){
	let x = Number(document.getElementById("num1").value);
	let y = Number(document.getElementById("num2").value);
	if(isNaN(x) || isNaN(y)){
		console.log("non numbers")
	}
	else{	
		if (y==0){
			alert("cannot divide by 0");
		}
		else{
			calculated(x/y);
			console.log("both numbers");
		}
		
	}
	
}

function calculated(result){
	
	console.log(result);
	let box = document.getElementById("box");
	box.innerHTML = result;
	console.log(isNaN(result));
	console.log(box);
}
