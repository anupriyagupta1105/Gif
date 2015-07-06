function SearchCtrl(ApiService) {
	var self = this;
	this.apiService = ApiService;
	self.gifData


	this.apiService.getTags().then(function(response) {
		console.log(response);
		self.tags = response.data;
	})
}
SearchCtrl.prototype.onSelect = function ($item, $model, $label) {
	var self = this;
    this.apiService.getGifData($item).then(function(data) {
    	self.gifData = data.data.gifs;
    	console.log(self.gifData);
    }).catch(function(data) {
    	console.log(data);
    });
};
angular.module('gifApp').controller('SearchCtrl', SearchCtrl);