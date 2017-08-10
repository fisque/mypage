/**
 * Hey you you're a turd
 * 
 */

function showMonth() {
	var d = new Date();
	var num = d.getMonth()+1;
	document.getElementById("date").innerHTML = "month: "+num;
}
function showDay() {
	var d = new Date();
	document.getElementById("date").innerHTML = "day: "+d.getDate();
}
function showYear() {
	var d = new Date();
	document.getElementById("date").innerHTML = "year: "+d.getFullYear();
}
function showHours() {
	var d = new Date();
	var num = d.getHours();
	var pm;
	if (num >= 12) {
		pm = " (pm)";
		num = num - 12;
	}
	else pm = " (am)";
	var str = num+"";
	if (str.lastIndexOf("1") == str.length-1) {
		document.getElementById("date").innerHTML = "'tis the "+str+"st hour"+pm;
	}
	else if (str.lastIndexOf("2") == str.length-1) {
		document.getElementById("date").innerHTML = "'tis the "+str+"nd hour"+pm;
	}
	else if (str.lastIndexOf("3") == str.length-1) {
		document.getElementById("date").innerHTML = "'tis the "+str+"rd hour"+pm;
	}
	else {
		document.getElementById("date").innerHTML = "'tis the "+num+"th hour"+pm;
	}
}
function showMinutes() {
	var d = new Date();
	document.getElementById("date").innerHTML = "minutes: "+d.getMinutes();
}
function showSeconds() {
	var d = new Date();
	document.getElementById("date").innerHTML = "why do u even care about the "+d.getSeconds()+" second(s) that have gone by";
}
function showDate() {
	var d = new Date();
	document.getElementById("date").innerHTML = d.getMonth()+1+"/"+d.getDate()+"/"+d.getFullYear() 
		+", "+Math.abs(d.getHours()-12)+":"+d.getMinutes()+":"+d.getSeconds();
}

function makeRed(element) {
	var id = element.id;
	document.getElementById(id).style.color = "red";
}
function makeOrange(element) {
	var id = element.id;
	document.getElementById(id).style.color = "orange";
}
function makeYellow(element) {
	var id = element.id;
	document.getElementById(id).style.color = "yellow";
}
function makeGreen(element) {
	var id = element.id;
	document.getElementById(id).style.color = "green";
}
function makeBlue(element) {
	var id = element.id;
	document.getElementById(id).style.color = "blue";
}
function makePurple(element) {
	var id = element.id;
	document.getElementById(id).style.color = "purple";
}
function hide(element) {
	var id = element.id;
	document.getElementById(id).style.display = "none";
}
function show(element) {
	var id = element.id;
	document.getElementById(id).style.display = "inline";
}
function toTheLeft(element) {
	var id = element.id;
	document.getElementById(id).style.textAlign = "left";
}
function toTheRight(element) {
	var id = element.id;
	document.getElementById(id).style.textAlign = "right";
}
function changeFont(element) {
	var id = element.id;
	document.getElementById(id).style.fontFamily = "consolas, sans-serif";
}
