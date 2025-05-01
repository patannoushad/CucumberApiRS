package api;

public enum APIResources {

	//Person
	GetPersonAPI("/persons"),
	GetSinglePersonAPI("/persons/{id}"),
	AddPersonAPI("/persons"),
	UPDATE_PERSON("/persons/{id}"),
	DeletePersonAPI("/persons/{id}"),

	//Maps
	AddPlaceAPI("/maps/api/place/add/json"),
	GetSinglePlaceAPI("/maps/api/place/get/json"),
	DeletePlaceAPI("/maps/api/place/delete/json"),

	//Playlist
	AddPlaylistAPI("/users/31zghzhjvfg3ao3x6px4wogw6sc4/playlists"),

	//Token
	ApiToken("/api/token");


	private String resource;

	APIResources(String resource) {
		this.resource=resource;
	}

	public String getResource() {
		return resource;
	}
}
