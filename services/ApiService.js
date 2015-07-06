function ApiService($http) {
	var self = this;
	this.$http = $http;

}
ApiService.prototype.getTags = function() {
	return this.$http.get('http://www.gifbase.com/js/tags.json', {})
	}

angular.module('gifApp').service('ApiService', ApiService);