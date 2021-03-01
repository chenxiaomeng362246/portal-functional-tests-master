Feature: user search

    Background: 
        Given I am logged in

# PORT-2198
    Scenario: User search
    When I search for a user
    Then the user is shown in search results