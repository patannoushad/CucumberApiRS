package stepDefinitions;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import io.restassured.builder.ResponseSpecBuilder;
import io.restassured.http.ContentType;
import io.restassured.path.json.JsonPath;
import io.restassured.response.Response;
import io.restassured.specification.RequestSpecification;
import io.restassured.specification.ResponseSpecification;
import api.TestDataBuild;
import api.Utils;
import static org.junit.Assert.*;
import java.io.FileNotFoundException;
import java.io.IOException;
import api.APIResources;
import api.EndPoints;
import static io.restassured.RestAssured.*;

public class StepDefinition extends Utils {

    public static RequestSpecification res;
    public static ResponseSpecification resspec;
    public static Response response;
    static String place_id;
    TestDataBuild data = new TestDataBuild();

    @Given("Add Place Payload")
    public void add_Place_Payload() throws IOException {

        resspec = new ResponseSpecBuilder()
				.expectStatusCode(200)
				.expectContentType(ContentType.JSON)
				.build();

        res = given()
				.spec(requestSpecification())
				.body(data.addPlacePayLoad());
    }

    @Given("Add Place Payload with {string} {string} {string}")
    public void add_Place_Payload_with(String name, String language, String address) throws IOException {

        resspec = new ResponseSpecBuilder()
				.expectStatusCode(200)
				.expectContentType(ContentType.JSON)
				.build();

        res = given()
				.spec(requestSpecification())
                .body(data.addPlacePayLoad(name, language, address));
    }


    @When("user calls {string} with Post http request")
    public void user_calls_with_Post_http_request(String string) throws FileNotFoundException {

        // response =res.when().post("/maps/api/place/add/json")
        //response = res.when().post("/place")
        response = res.when()
				.post(EndPoints.ADD_PLACE)
                .then().spec(resspec).extract().response();
    }


    @When("user calls {string} with {string} http request")
    public void user_calls_with_http_request(String resource, String method) {

        // response =res.when().post("/maps/api/place/add/json")
        // response = res.when().post("/place")
        APIResources resourceAPI = APIResources.valueOf(resource);
        System.out.println(resourceAPI.getResource());

        if (method.equalsIgnoreCase("POST")){
            response = res.when().post(resourceAPI.getResource());
            JsonPath jsonPath = new JsonPath(response.asString());
            place_id=jsonPath.getString("place_id");
            // response = res.when().post(EndPoints.CREATE_PERSON)
        }
        else if (method.equalsIgnoreCase("GET"))
            response = res.when().get(resourceAPI.getResource());
        // response = res.when().post(EndPoints.GET_ALL_PERSON)
        //		.then().spec(resspec).extract().response();
    }

    @Given("Get Place Payload with Place id")
    public void get_Place_Payload_with_placeId() throws IOException {
		resspec = new ResponseSpecBuilder()
				.expectStatusCode(200)
				.expectContentType(ContentType.JSON)
				.build();

        res = given().spec(requestSpecification())
				.queryParam("place_id", place_id)
				.queryParam("key", "qaclick123");
    }


    @Given("Delete Place Payload with place id")
    public void delete_Place_Payload_with_placeId() throws IOException {

        resspec = new ResponseSpecBuilder()
				.expectStatusCode(200)
				.expectContentType(ContentType.JSON)
				.build();

        res = given()
				.spec(requestSpecification())
				.queryParam("key", "qaclick123")
				.body(data.deletePlacePayLoad(place_id));
    }

    @When("user calls {string} with Delete http request")
    public void user_calls_with_Delete_http_request_for(String string) {

        response = res.when().delete(EndPoints.DELETE_PLACE)
                .then().spec(resspec).extract().response();
    }

    @Then("the API Call got success with status code {string}")
    public void the_API_Call_got_success_with_status_code(String statuscode) {

        int statusco = Integer.parseInt(statuscode);
        System.out.println("status code is:" + response.getStatusCode());
        assertEquals(response.getStatusCode(), statusco);
        String responsestring = response.asString();
        System.out.println("response body is :-" + responsestring);

        Response response = res.when().post("/maps/api/place/add/json")
                .then().spec(resspec).extract().response();

		String responsestring1 = response.asString();
        System.out.println(responsestring1);
        //body("scope",equalTo("APP")).header("Content-Type","application/json;charset=UTF-8");
    }

    @Then("the {string} Call got success with status code {string}")
    public void the_Call_got_success_with_status_code(String resource, String statuscode) {

        APIResources resourceAPI = APIResources.valueOf(resource);
        System.out.println(resourceAPI.getResource());

        if (resource.equalsIgnoreCase("AddPlaceAPI")) {
            int statusco = Integer.parseInt(statuscode);
            System.out.println("status code is:" + response.getStatusCode());
            assertEquals(response.getStatusCode(), statusco);
        } else if (resource.equalsIgnoreCase("GetSinglePersonAPI")) {
            int statusco = Integer.parseInt(statuscode);
            System.out.println("status code is:" + response.getStatusCode());
            assertEquals(response.getStatusCode(), statusco);
        } else if (resource.equalsIgnoreCase("DeletePlaceAPI")) {
            int statusco = Integer.parseInt(statuscode);
            System.out.println("status code is:" + response.getStatusCode());
            assertEquals(response.getStatusCode(), statusco);
        }

        String responsestring = response.asString();
        System.out.println("response body is :-" + responsestring);

        /*
         * Response response =res.when().post("/maps/api/place/add/json")
         *
         * .then().spec(resspec).extract().response();
         *
         * String responsestring=response.asString();
         * System.out.println(responsestring);
         */
        // body("scope",equalTo("APP")).header("Content-Type","application/json;charset=UTF-8");

    }

    @Then("{string} in response body is {string}")
    public void in_response_body_is(String key, String value) {
//	String res=response.asString();
//	JsonPath js=new JsonPath(res);
//	assertEquals(js.get(key).toString(),value);
    }
}