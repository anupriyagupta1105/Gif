function ApiService($http) {
	this.$http = $http;
}
ApiService.prototype.getTags = function() {
	return this.$http.get('http://www.gifbase.com/js/tags.json', {}).then(function(response) {
		console.log(response);
	})

}

angular.module('gifApp').service('ApiService', ApiService);