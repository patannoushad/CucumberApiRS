package api;

import java.io.*;
import java.util.Properties;
import io.restassured.builder.RequestSpecBuilder;
import io.restassured.filter.log.LogDetail;
import io.restassured.filter.log.RequestLoggingFilter;
import io.restassured.filter.log.ResponseLoggingFilter;
import io.restassured.http.ContentType;
import io.restassured.specification.RequestSpecification;
import utils.PropertyManager;
import utils.TokenManager;

public class Utils {

	public static RequestSpecification req;
	public static StringBuilder requestResponseLogs; // Captures request and response logs
//	String access_token="BQAS7p5AaG2PF8-RryicQ4RQanUP88VvdMG3zeeKVTI3W4xyX6h5NfDz9K0ZpshOfHd0CtmR9q5lppW-bYkMfVtbfaOx18nYdAWkUFwVk9jBwuSWVpp0mH6ABoYMkElHlj7X3_bWjgqRYthYiHXOMWynI4R2taMvBXdQdbbFWk7WRWthvMZoGumzXwL14D49iEhwKkDVwNfwSfsyqDa6j_EUL8YRqDo-hS3q8ma6hNNpl7GVYr9OQgDVpOd83YoAQVytWCFUIG3lwZywrJoKu9ebnFNOlm3SeQQY4YImQyLLMa7GmAkw";
	String access_token= TokenManager.getToken();

	public RequestSpecification requestSpecification() {
		if (req == null) {
			requestResponseLogs = new StringBuilder();

			PrintStream captor = new PrintStream(new OutputStream() {
				@Override
				public void write(int b) throws IOException {
					requestResponseLogs.append((char) b);
				}
			});

			req = new RequestSpecBuilder()
					.setBaseUri(PropertyManager.getProperty("base_url"))
					.addHeader("Authorization","Bearer "+access_token)
					.addFilter(RequestLoggingFilter.logRequestTo(captor))
					.addFilter(ResponseLoggingFilter.logResponseTo(captor))
					.setContentType(ContentType.JSON)
					.build().log().all();
			return req;
		}
		return req;
	}
}
