Feature: User Filter
    Background: 
        Given I am logged in usermangement page

# PORT-2182
    Scenario: User Filter in usermangement
    When I filter users by Site Manager
    Then the user with the site manager role should be displayed