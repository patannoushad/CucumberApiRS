package api;

import java.util.ArrayList;
import java.util.List;

import pojo.*;

public class TestDataBuild {

	// queryParam("Key", "qaclick123").header("Content-Type","application/json")
	/*
	 * .body("{\r\n" + "  \"location\": {\r\n" + "    \"lat\": -38.383494,\r\n" +
	 * "    \"lng\": 33.427362\r\n" + "  },\r\n" + "  \"accuracy\": 50,\r\n" +
	 * "  \"name\": \"Frontline house\",\r\n" +
	 * "  \"phone_number\": \"(+91) 983 893 3937\",\r\n" +
	 * 
	 * "  \"address\": \"29, side layout, cohen 09\",\r\n" + "  \"types\": [\r\n" +
	 * "    \"shoe park\",\r\n" + "    \"shop\"\r\n" + "  ],\r\n" +
	 * "  \"website\": \"http://google.com\",\r\n" +
	 * "  \"language\": \"French-IN\"\r\n" + "}\r\n" + "")
	 */

	public AddPlace addPlacePayLoad() {

		AddPlace p = new AddPlace();
		p.setAccuracy(50);
		p.setPhoneNumber("(+91) 983 893 3937");
		p.setAddress("29, side layout, cohen 09");
		p.setWebsite("http://google.com");
		p.setLanguage("French-IN");
		p.setName("Frontline house");
		List<String> myList = new ArrayList<String>();
		myList.add("shoe park");
		myList.add("shop");
		p.setTypes(myList);
		Location l = new Location();
		l.setLat(-38.383494);
		l.setLng(33.427362);
		p.setLocation(l);

		return p;
	}

	public AddPlace addPlacePayLoad(String name,String language ,String address) {

		AddPlace p = new AddPlace();
		p.setAccuracy(50);
		p.setPhoneNumber("(+91) 983 893 3937");
		p.setAddress(address);
		p.setWebsite("http://google.com");
		p.setLanguage(language);
		p.setName(name);
		List<String> myList = new ArrayList<String>();
		myList.add("shoe park");
		myList.add("shop");
		p.setTypes(myList);
		Location l = new Location();
		l.setLat(-38.383494);
		l.setLng(33.427362);
		p.setLocation(l);

		return p;
	}

	public Person addPersonPayLoad(String fname,String lname ,String id) {

		Person person = new Person();

		person.setFirstName(fname);
		person.setLastName(lname);
		person.setAge(35);
		person.setId(Integer.parseInt(id));
		person.setAddress("201 house no");
		person.setPhonenumbers("9978678");

		return person;
	}

	public PlaceId deletePlacePayLoad(String id) {

		PlaceId placeId= new PlaceId();
		placeId.setPlaceId(id);

		return placeId;
	}

	public Playlist addPlaylistPayLoad(String name,String language ,String address) {

		Playlist p = new Playlist();
		p.setName(name);
		p.setDescription(language);
		p.set_public(address);

		return p;
	}
}
