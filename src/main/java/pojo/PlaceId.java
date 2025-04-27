package pojo;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

@Data
public class PlaceId {

    @JsonProperty("place_id")
    private String placeId;
}
