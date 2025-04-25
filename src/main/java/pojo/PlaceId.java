package pojo;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;

import javax.annotation.processing.Generated;

@JsonInclude(JsonInclude.Include.NON_NULL)
@JsonPropertyOrder({
        "place_id"
})
@Generated("jsonschema2pojo")
public class PlaceId {

    @JsonProperty("place_id")
    private String place_id;

    @JsonProperty("place_id")
    public String getPlaceId() {
        return place_id;
    }

    @JsonProperty("place_id")
    public void setPlaceId(String place_id) {
        this.place_id = place_id;
    }
}
