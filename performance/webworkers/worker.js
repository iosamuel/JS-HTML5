var i = 0;
setInterval(function(){
	i += 1;
	postMessage(i);
}, 1000);