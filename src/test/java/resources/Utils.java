package resources;

import java.io.*;
import java.util.Properties;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.ObjectWriter;
import io.restassured.RestAssured;
import io.restassured.builder.RequestSpecBuilder;
import io.restassured.filter.log.RequestLoggingFilter;
import io.restassured.filter.log.ResponseLoggingFilter;
import io.restassured.http.ContentType;
import io.restassured.response.Response;
import io.restassured.specification.RequestSpecification;

public class Utils {

	public static RequestSpecification req;
	public static final Properties prop = new Properties();
	public static StringBuilder requestResponseLogs; // Captures request and response logs


	public RequestSpecification requestSpecification() throws IOException {
		if (req == null) {
			requestResponseLogs = new StringBuilder();

			PrintStream captor = new PrintStream(new OutputStream() {
				@Override
				public void write(int b) throws IOException {
					requestResponseLogs.append((char) b);
				}
			});

			req = new RequestSpecBuilder()
					.setBaseUri(getGlobalValue("base_url"))
					.addFilter(RequestLoggingFilter.logRequestTo(captor))
					.addFilter(ResponseLoggingFilter.logResponseTo(captor))
					.setContentType(ContentType.JSON)
					.build();
			return req;
		}
		return req;
	}

	public static String getGlobalValue(String key) throws IOException {
		FileInputStream inputStream = new FileInputStream(System.getProperty("user.dir") + "//src//test//java//resources//global.properties");
		prop.load(inputStream);
		return prop.getProperty(key);
	}
}
