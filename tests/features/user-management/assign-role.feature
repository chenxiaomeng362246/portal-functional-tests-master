Feature: Assign role
    Background: 
        Given I am logged in
# PORT-2178
    Scenario: Assign role in usermangement
    And I am on the user details page
    When I click on Roles
    And add a new role
    Then a new role should be added

# PORT-2179
    Scenario: Unassign role in usermangement
    And I am on the user details page
    When I click on Roles
    And delete a role
    Then the role should be removed