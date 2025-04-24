@regression
Feature: Validating Place API's

#  @AddPlace
#Scenario: Verify if Place is being Successfully added using AddPlaceAPI
#    Given Add Place Payload
#    When user calls "AddPlaceAPI" with Post http request
#    Then the API Call got success with status code "200"
#    And "status" in response body is "OK"
#    And  "scope" in response body is "APP"

  @AddPlace @Smoke
  Scenario Outline: Verify if Place is being Successfully added using AddPlaceAPI
    Given Add Place Payload with "<name>" "<language>" "<address>"
    When user calls "AddPlaceAPI" with "Post" http request
    Then the "AddPlaceAPI" Call got success with status code "200"
    And "status" in response body is "OK"
    Examples:
      | name            | language | address    |
      | Frontline house | English  | Tadigadapa |
#      | ocean | Telugu    | Vijawadada  |

  @GetPerson @Smoke
  Scenario: Verify if Place is being Successfully get using GetSinglePlaceAPI
    Given Get Place Payload with Place id
    When user calls "GetSinglePlaceAPI" with "GET" http request
    Then the "GetSinglePlaceAPI" Call got success with status code "200"
    And "status" in response body is "OK"

  @DeletePlace @Smoke
  Scenario: Verify if Place is being Successfully deleted using DeletePlaceAPI
    Given Delete Place Payload with place id
    When user calls "DeletePlaceAPI" with Delete http request
    Then the "DeletePlaceAPI" Call got success with status code "200"
    And "status" in response body is "OK"

        
