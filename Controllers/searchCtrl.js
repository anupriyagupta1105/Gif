function SearchCtrl(ApiService) {
	var self = this;
	this.service = ApiService;
	ApiService.getTags().then(function(response) {
		console.log(response);
		self.tags = response.data;
	})
}

angular.module('gifApp').controller('SearchCtrl', SearchCtrl);