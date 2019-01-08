"use strict";

function toggleToolBar() {
	var toolbar = document.getElementById("toolbar");
	console.log(toolbar.style.display);
	if(toolbar.style.display == "block") { 
		toolbar.style.display = "none";
	} else {
		toolbar.style.display = "block";
	}
}
function setDate(){
	document.getElementById("settingdate").addEventListener("change", function() {
    	var input = this.value;
    	var dateEntered = new Date(input);
    	console.log(input); 
		console.log(dateEntered);
		return dateEntered;
});
}
function setCookie(name, value, days) {
	var d = new Date;
	d.setTime(d.getTime() + 24*60*60*1000*days);
	document.cookie = name + "=" + document.getElementById("settingdate").value + ";path=/;expires=" + d.toGMTString();
}
function getCookie(value) {
	var v = document.cookie.match('(^|;) ?' + value + '=([^;]*)(;|$)');
	alert(v);
	return v ? v[2] : null;
}
function deleteCookie(name) {
	setCookie(name, '', -1);
}