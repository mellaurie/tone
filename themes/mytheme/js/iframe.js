var maxHeight = 800;
	
// Fire once when DOM is loaded.
$(function(){
	// Only increase the height of frame.
	if(document.body.scrollHeight > maxHeight){
		maxHeight = document.body.scrollHeight;
		window.parent.postMessage({"scrollHeight": maxHeight}, "*");
	}
	
	// Signal a prev/next button click so we can scroll to top too.
	$("p.prev-next").find("a.btn").on('click', function(){ window.parent.postMessage({"scrollTop": true},"*")});
});
// And again when all IMAGEs are done loading
$(window).on("load", function(){
	if(document.body.scrollHeight > maxHeight){
		maxHeight = document.body.scrollHeight;
		window.parent.postMessage({"scrollHeight": maxHeight}, "*");
	}
});