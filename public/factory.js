app.factory("contactFactory", ["$http", function($http) {

	var factory = {};

	factory.getContacts = function() {

		return $http.get("/contacts");
		console.log(response);
	}

	factory.createContact =function(contact) {
		return $http.post("/createContact", contact);
		console.log(response)
	}

	factory.editContact = function(id) {
		return $http.get("/getContactById/" +id);
		console.log(response)
	}


	factory.updateContact = function(id, contact) {
		return $http.put("/updateContact/" +id, contact);
		console.log(response);
	}

	factory.removeContact = function(id) {
		return $http.delete("/removeContact/" +id);
		console.log(response);
	}

	return factory;
}]);