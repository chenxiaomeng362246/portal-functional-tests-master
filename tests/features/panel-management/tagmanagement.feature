Feature: tagmanagement

    Background: 
        Given I am on the Tags page

#  PORT-2345
    Scenario: Create tags
    When I create a new tag
    Then a new tag is created

#  PORT-2346
    Scenario: delete tags
    And there is a Tag present
    When I delete a tag
    Then the tag is deleted 


