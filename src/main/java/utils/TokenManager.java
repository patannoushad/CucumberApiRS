package utils;

import com.github.dockerjava.api.model.Endpoint;
import io.restassured.builder.RequestSpecBuilder;
import io.restassured.filter.log.LogDetail;
import io.restassured.http.ContentType;
import io.restassured.response.Response;

import java.time.Instant;
import java.util.HashMap;

import static io.restassured.RestAssured.given;
import static io.restassured.RestAssured.requestSpecification;

public class TokenManager {
    private static String access_token;
    private static Instant expiry_time;

    public synchronized static String getToken(){
        try{
            if(access_token == null || Instant.now().isAfter(expiry_time)){
                System.out.println("Renewing token ...");
                Response response = renewToken();
                access_token = response.path("access_token");
                int expiryDurationInSeconds = response.path("expires_in");
                expiry_time = Instant.now().plusSeconds(expiryDurationInSeconds - 300);
            } else{
                System.out.println("Token is good to use");
            }
        }
        catch (Exception e){
            e.printStackTrace();
            throw new RuntimeException("ABORT!!! Failed to get token");
        }
        return access_token;
    }

    private static Response renewToken() {
        HashMap<String, String> formParams = new HashMap<String, String>();
        formParams.put("client_id", PropertyManager.getProperty("client_id"));
        formParams.put("client_secret", PropertyManager.getProperty("client_secret"));
        formParams.put("refresh_token", PropertyManager.getProperty("refresh_token"));
        formParams.put("grant_type", PropertyManager.getProperty("grant_type"));

//        Response response = postAccount(formParams);
//        APIResources resourceAPI = APIResources.valueOf(resource);

        Response response = given()
                .baseUri(PropertyManager.getProperty("account_base_url"))
                .contentType(ContentType.URLENC)
                .formParams(formParams)
                .log().all()
                .when().post("/api/token")
                .then().extract()
                .response();

        if(response.statusCode() != 200){
            throw new RuntimeException("ABORT!!! Renew Token failed");
        }
        return response;
    }
}
