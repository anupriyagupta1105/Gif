function ApiService($http) {
	var self = this;
	this.$http = $http;
}
ApiService.prototype.getTags = function() {
	return this.$http.get('http://www.gifbase.com/js/tags.json', {})
	}
	
ApiService.prototype.getGifData = function(tag) {
	return this.$http.get('http://www.gifbase.com/tag/'+tag+'?format=json', {})
}


angular.module('gifApp').service('ApiService', ApiService);