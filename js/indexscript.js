function Test(){
	var home = document.getElementById("home");
	var welcome = document.getElementById("welcome");
	var empty_div = document.getElementById("empty_div");
	var homeParent = home.parentNode;
	var rightbar = document.getElementById("rightbar");
	var new_div = document.getElementById("new_div");
	
    home.onclick = null;
	welcome.remove();
	empty_div.remove();
	home.style.backgroundImage = 'url(images/door.gif)';
	setTimeout(function(){homeParent.removeChild(home); rightbar.style.display = 'block'; new_div.style.display = 'block';},8000);
}