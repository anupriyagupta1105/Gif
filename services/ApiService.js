function ApiService() {

}
ApiService.prototype.getTags = function() {
	$.ajax({
  		url:'http://www.gifbase.com/js/tags.JSON',
  		type:'GET',
  		data:{},
	})
	.then(function(data){
  		//success promise
  		console.log(data);
	},
	function(data){
		//failure promise
		console.log(data);
	})
	// .always(function(data){
	// 	//code to run whether function is success or error
	});

}
