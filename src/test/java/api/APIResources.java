package api;

public enum APIResources {

	//Person
	GetPersonAPI("/persons"),
	GetSinglePersonAPI("/persons/{id}"),
	AddPersonAPI("/persons"),
	UPDATE_PERSON("/persons/{id}"),
	DeletePersonAPI("/persons/{id}"),

	// maps
	AddPlaceAPI("/maps/api/place/add/json"),
	GetSinglePlaceAPI("/maps/api/place/get/json"),
	DeletePlaceAPI("/maps/api/place/delete/json");

	private String resource;

	APIResources(String resource) {
		this.resource=resource;
	}

	public String getResource() {
		return resource;
	}
}
