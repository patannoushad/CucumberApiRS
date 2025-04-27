package pojo;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import javax.annotation.processing.Generated;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

@Data
@Generated("jsonschema2pojo")
public class AddPlace {
    @JsonProperty("location")
    private Location location;
    @JsonProperty("accuracy")
    private Integer accuracy;
    @JsonProperty("name")
    private String name;
    @JsonProperty("phone_number")
    private String phoneNumber;
    @JsonProperty("address")
    private String address;
    @JsonProperty("types")
    private List<String> types = null;
    @JsonProperty("website")
    private String website;
    @JsonProperty("language")
    private String language;

    @JsonIgnore
    private Map<String, Object> additionalProperties = new HashMap<String, Object>();
}
