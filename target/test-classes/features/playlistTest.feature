@regression
Feature: Validating Spotify PlayList APIs

  @CreatePlaylist @Smoke
  Scenario Outline: Verify if Place is being Successfully added using AddPlaceAPI
    Given Add Playlist Payload with "<name>" "<description>" "<public>"
    When user calls "AddPlaylistAPI" with "Post" http request on Playlist API
    Then the "AddPlaylistAPI" Call got success with status code "201" on Playlist API
    And "type" in response body is "playlist" on Playlist API
    Examples:
      | name            | description                      | public   |
      | Abcded          | EngliNew playlist description    | false    |

  @GetPerson @Smoke
  Scenario: Verify if Place is being Successfully get using GetSinglePlaceAPI
#    Given Get Playlist Payload with Place id
    When user calls "AddPlaylistAPI" with "Post" http request on Playlist API
    Then the "AddPlaylistAPI" Call got success with status code "201" on Playlist API
