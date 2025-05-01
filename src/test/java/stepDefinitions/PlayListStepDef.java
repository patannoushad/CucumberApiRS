package stepDefinitions;

import api.APIResources;
import api.TestDataBuild;
import api.Utils;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import io.restassured.builder.ResponseSpecBuilder;
import io.restassured.http.ContentType;
import io.restassured.path.json.JsonPath;
import io.restassured.response.Response;
import io.restassured.specification.RequestSpecification;
import io.restassured.specification.ResponseSpecification;
import org.junit.Assert;
import utils.FakerUtils;

import java.io.IOException;

import static io.restassured.RestAssured.given;
import static org.junit.Assert.assertEquals;

public class PlayListStepDef extends Utils {

    public static RequestSpecification res;
    public static ResponseSpecification resspec;
    public static Response response;
    TestDataBuild data = new TestDataBuild();


    @Given("Add Playlist Payload with {string} {string} {string}")
    public void add_Playlist_Payload_with(String name, String language, String address) {

//        resspec = new ResponseSpecBuilder()
//                .expectStatusCode(200)
//                .expectContentType(ContentType.JSON)
//                .build();

        res = given()
                .spec(requestSpecification())
                .body(data.addPlaylistPayLoad(FakerUtils.generateName(), FakerUtils.generateDescription(), address));
    }

    @When("user calls {string} with {string} http request on Playlist API")
    public void userCalls_AddPlaylistApi_with_POST_request(String resource, String method){

        APIResources resourceAPI = APIResources.valueOf(resource);
        System.out.println(resourceAPI.getResource());

        if (method.equalsIgnoreCase("POST")){
            response = res.when().post(resourceAPI.getResource());
            JsonPath jsonPath = new JsonPath(response.asString());
//            place_id=jsonPath.getString("place_id");
        }
        else if (method.equalsIgnoreCase("GET"))
            response = res.when().get(resourceAPI.getResource());
    }

    @Then("the {string} Call got success with status code {string} on Playlist API")
    public void AddPlaylistApi_callGotSuccessWith_200_code(String resource, String statuscode){

        APIResources resourceAPI = APIResources.valueOf(resource);
        System.out.println(resourceAPI.getResource());

        if (resource.equalsIgnoreCase("AddPlaylistAPI")) {
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

    @And("{string} in response body is {string} on Playlist API")
    public void AddPlaylistApi_InResponseBodyIs(String key, String value){
        String res=response.asString();
        JsonPath js=new JsonPath(res);
//        assertEquals(js.get(key).toString(),value);
        String typeStr=js.getString("type");
        System.out.println("Type : "+typeStr);
        System.out.println("id  : "+js.getString("id"));
        org.testng.Assert.assertEquals(js.getString(key),value);
    }
}
