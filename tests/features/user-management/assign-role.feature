Feature: Assign role
    Background: 
        Given I am logged in usermangement page
# PORT-2178
    Scenario: Assign role in usermangement
    And I am on the user details page
    When I click on Roles
    And add a new role
    Then a new role should be added