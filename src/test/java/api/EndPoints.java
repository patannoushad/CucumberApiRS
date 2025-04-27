package api;

public class EndPoints {

	// person
	public static final String GET_ALL_PERSON = "/persons";
	public static final String GET_SINGLE_PERSON = "/persons/{id}";
	public static final String CREATE_PERSON = "/persons";
	public static final String UPDATE_PERSON = "/persons/{id}";
	public static final String DELETE_PERSON = "/persons/{id}";

	// maps
	public static final String ADD_PLACE ="/maps/api/place/add/json";
	public static final String GET_PLACE ="/maps/api/place/get/json";
	public static final String DELETE_PLACE ="/maps/api/place/delete/json";
}
