var canvasW = window.innerWidth;
var canvasH = window.innerHeight;
var ctx;











//CANVAS SET UP
setUpCanvas();
// setUpCanvasTimer();
// setUpCanvasCategories();


function setUpCanvas(){
	canvas = document.querySelector("#myCanvas"); 
	ctx = canvas.getContext("2d"); 
	canvas.width = canvasW; 
	canvas.height = canvasH; 
	canvas.style = "position: absolute; top: 0px; left: 0px; right: 0px; bottom: 0px; margin: auto; border:2px solid blue";
}

// function setUpCanvasCategories(){
// 	canvas = document.querySelector("#myCanvasCategories"); 
// 	ctx = canvas.getContext("2d"); 
// 	canvas.width = canvasW; 
// 	canvas.height = canvasH; 
// 	canvas.style = "position: absolute; top: 0px; left: 0px; right: 0px; bottom: 0px; margin: auto; border:2px solid blue";
// }

// function setUpCanvasLetter(){
// 	canvas = document.querySelector("#myCanvasLetter"); 
// 	ctx = canvas.getContext("2d");  
// 	canvasSize = document.getElementsByClassName("grid-squares");
// }


















function random(range){
	var r = Math.floor(Math.random()*range);
	return r
}

function vh(v) {
  var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
  return (v * h) / 100;
}

function vw(v) {
  var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
  return (v * w) / 100;
}





//TITLE----------------------------------------------------------------//


function titleResetClicked(){
	//a random letter is chosen and displayed 
console.log("title button clicked");
}

function playClicked(){

	console.log("play button clicked");
	generateRandomLetter();
	categoriesResetClicked();
	timerStart();
}







//TIMER----------------------------------------------------------------//


function timerStart(){
	var timeleft = 180;
    var downloadTimer = setInterval(function(){
  		timeleft--;
	    document.getElementById("countdowntimer").textContent = timeleft;
	    if(timeleft <= 0)
	        clearInterval(downloadTimer);
	    },1000);

    // if(timeleft=0){
    // 	 alert("Times Up!");
    // }
}






function timerResetClicked(){
	console.log("timer button clicked");
}





//LETTERS----------------------------------------------------------------//

setupCanvasLetter();

function setupCanvasLetter(){
		canvas = document.querySelector("#myCanvasLetter"); 
		ctx = canvas.getContext("2d"); 
		canvas.width = canvasW; 
		canvas.height = canvasH; 
		canvas.style = "position: absolute; top: 0px; left: 0px; right: 0px; bottom: 0px; margin: auto";

		// canvas.width = document.getElementById('letterBlock').style.width; 
		// canvas.height = document.getElementById('letterBlock').style.height; 
        // canvas.parent('letterBlock');
	}


function generateRandomLetter() {
	
	var canvas = document.getElementById("myCanvasLetter");
	var ctx = canvas.getContext("2d");

	var x = vw(35);
	var y = vh(70);

	var returnedLetter = "";
	const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	var returnedLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
	console.log(returnedLetter);

	ctx.clearRect(0, 0, canvasW, canvasH);
	ctx.fillStyle = 'black';
	ctx.font = '600px helvetica';
	ctx.fillText(returnedLetter, x, y);
}











//CATEGORIES----------------------------------------------------------------//


setUpCanvasCategories();

function setUpCanvasCategories(){
		canvas = document.querySelector("#myCanvasCategories"); 
		ctx = canvas.getContext("2d"); 
		canvas.width = canvasW; 
		canvas.height = canvasH; 
		canvas.style = "position: absolute; top: 0px; left: 0px; right: 0px; bottom: 0px; margin: auto";

		// canvas.height = 1000;
		// canvas.width = document.getElementById('categoriesBlock').style.width; 
		// canvas.height = document.getElementById('categoriesBlock').style.height; 
  //       canvas.parent('categoriesBlock');
	}


function categoriesResetClicked(){

	var canvas = document.getElementById("myCanvasCategories");
	var ctx = canvas.getContext("2d");

	var x = 0;
	var y = 0;
	var n = vw(5.5);

	const categories1 = 
		["Citys",
		"Sports",
		"Vegetables",
		"Animals",
		];

	const categories2 = 
		["Things at the beach",
		"Items in the kitchen",
		"Things you plug in",
		"Things with tails",
		"Things with ears"];

	const categories3 = 
		["Methods of transportation",
		"Methods of writing"];


	const categories4 = 
		["Foods you eat raw",
		"Cooking utencils",
		"Ice cream flavours",
		"Menu Items",
		"Breakfast foods"
		];

	const categories5 = 
		["Something orange",
		"Somthing blue",
		"Something yellow",
		"Something green",
		"Something red",
		];

	const categories6 = 
		["Famous Women",
		"Famous Men",
		"Things that have stripes"
		];

	const categories7 = 
		["Reasons for calling 911",
		"Reasons for calling in sick",
		"Reasons for leaving"
		];

	const categories8 = 
		["Things you would find in a house",
		"Halloween costumes",
		"Articles of clothing",
		"Things that are round"
		];

	const categories9 = 
		["Spicy foods",
		"Reasons to quit your job",
		"Household chores",
		"Sports equipment"
		];

	const categories10 = 
		["People in uniform",
		"Things to do on a date",
		"Hobbies",
		"Weather",
		];



	
	ctx.clearRect(0, 0, canvasW, canvasH);

	ctx.fillStyle = 'black';
	ctx.font = '70px helvetica';

	ctx.fillText(categories1[Math.floor(Math.random() * categories1.length)], x, y+n*1);
	ctx.fillText(categories2[Math.floor(Math.random() * categories2.length)], x, y+n*2);
	ctx.fillText(categories3[Math.floor(Math.random() * categories3.length)], x, y+n*3);
	ctx.fillText(categories4[Math.floor(Math.random() * categories4.length)], x, y+n*4);
	ctx.fillText(categories5[Math.floor(Math.random() * categories5.length)], x, y+n*5);
	ctx.fillText(categories6[Math.floor(Math.random() * categories6.length)], x, y+n*6);
	ctx.fillText(categories7[Math.floor(Math.random() * categories7.length)], x, y+n*7);
	ctx.fillText(categories8[Math.floor(Math.random() * categories8.length)], x, y+n*8);
	ctx.fillText(categories9[Math.floor(Math.random() * categories9.length)], x, y+n*9);
	ctx.fillText(categories10[Math.floor(Math.random() * categories10.length)], x, y+n*10);
		

	console.log("categories button clicked");
}

















