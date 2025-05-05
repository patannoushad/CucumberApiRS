@regression @spotify
Feature: Validating Spotify PlayList APIs

  @CreatePlaylist @Smoke
  Scenario Outline: Verify if Playlist is being Successfully added using AddPlaylistAPI
    Given Add Playlist Payload with "<name>" "<description>" "<public>"
    When user calls "AddPlaylistAPI" with "Post" http request on Playlist API
    Then the "AddPlaylistAPI" Call got success with status code "201" on Playlist API
    And "type" in response body is "playlist" on Playlist API
    Examples:
      | name            | description                      | public   |
      | Abcded          | EngliNew playlist description    | false    |

  @GetPerson @Smoke
  Scenario: Verify if Playlist is being Successfully get using PlaylistIdAPI
    Given Get Playlist Payload with Place id
    When user calls "PlaylistIdAPI" with "Get" http request on Playlist API
    Then the "PlaylistIdAPI" Call got success with status code "200" on Playlist API

    @UpdatePlaylist @Smoke
    Scenario Outline: Verify if Playlist is being Successfully Updated using PlaylistIdAPI
      Given Update Playlist Payload with "<name>" "<description>" "<public>"
      When user calls "PlaylistIdAPI" with "Put" http request on Playlist API
      Then the "PlaylistIdAPI" Call got success with status code "200" on Playlist API
      Examples:
        | name            | description           | public   |
        | Noushad          | abcdefghijklmnopq    | false    |
