function gourl(u){
	setTimeout(function(){
		window.parent.postMessage(u,"*");	
	},200);
	
}