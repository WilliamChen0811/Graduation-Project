function Test(){
	var home = document.getElementById("home");
	var welcome = document.getElementById("welcome");
	var empty_div = document.getElementById("empty_div");
	var homeParent = home.parentNode;
	var rightbar = document.getElementById("rightbar");
	var gototop = document.getElementById("gototop");
	var Screen1 = document.getElementById("Screen1");
	
    home.onclick = null;
	welcome.remove();
	empty_div.remove();
	home.style.backgroundImage = 'url(images/door.gif)';
	setTimeout(function(){homeParent.removeChild(home); rightbar.style.display = 'flex'; gototop.style.display = 'block'; Screen1.style.display = 'block';},1000);
}

var FourLeafCloverZCVar;
function gototop(){
    FourLeafCloverZCVar=setInterval(FourLeafCloverZCEachScrollBy,10);    
}
function FourLeafCloverZCEachScrollBy(eachHeight){
    if(document.documentElement && document.documentElement.scrollTop)  //IE
    {
        if(document.documentElement.scrollTop<=0){
            clearInterval(FourLeafCloverZCVar);
        }else{
            window.scrollBy(0,-30);
        }
    }else{          //Chrome不支持documentElement.scrollTop
        if(document.body.scrollTop<=0){
            clearInterval(FourLeafCloverZCVar);
        }else{
            window.scrollBy(0,-30);
        }
    }
}

//假設Screen2是概念設計，gototop2函式就是跳到概念設計用的
function clickto(s){
	jumpto(document.getElementById("Screen"+s))
}

function jumpto(tt){
    window.scrollTo({
		top: (jQuery(tt).offset().top)-75,
		behavior: "smooth"
	});
}
