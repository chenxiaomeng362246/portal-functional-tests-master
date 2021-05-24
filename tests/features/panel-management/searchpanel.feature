Feature: searchpanel

    Background: 
        Given I am on the panel page

# PORT-2360
    Scenario: Search for non-existing panel
    When I search for a panel that doesn't exist
    Then the result should show "No panel found"

    Scenario: Search for an existing panel
    When I search for a panel that exist
    Then the result should show the panel