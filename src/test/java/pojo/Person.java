
package pojo;

import java.util.HashMap;
import java.util.Map;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

@Data
public class Person {

    @JsonProperty("first_name")
    private String firstName;
    @JsonProperty("last_name")
    private String lastName;
    @JsonProperty("age")
    private Integer age;
    @JsonProperty("id")
    private Integer id;
    @JsonProperty("address")
    private String address;
    @JsonProperty("phonenumbers")
    private String phonenumbers;
    @JsonIgnore
    private Map<String, Object> additionalProperties = new HashMap<String, Object>();
}