var app = angular.module("myContactApp", []);


app.controller("myContactController", ["$scope", "$http", "contactFactory", function($scope, $http, contactFactory) {

	getContacts();

	function getContacts() {
		contactFactory.getContacts()
		  .then(function(response) {
		  	console.log(response);
		  	$scope.contactList = response.data;
		  })
	} 

	$scope.createContact = function() {
		contactFactory.createContact($scope.contact) 
		  .then(function(response) {
		  	console.log(response.data)
		  	getContacts();
		  	$scope.contact = {};
		  })
	}

	$scope.editContact = function(id) {
		contactFactory.editContact(id)
		   .then(function(response) {
		   	console.log(response.data);
		   	$scope.contact = response.data;
		   })
	}

	$scope.updateContact = function() {
		contactFactory.updateContact($scope.contact._id, $scope.contact)
		   .then(function(response) {
		   	console.log(response);
		   	$scope.contact = {};
		   	getContacts();
		   })
	}

	$scope.removeContact = function(id) {
		contactFactory.removeContact(id) 
           .then(function(response) {
           	console.log(response.data);
           	getContacts();
           })
	}
}])