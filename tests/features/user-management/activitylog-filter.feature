Feature: Activity log Filter
    Background: 
        Given I am logged in

# PORT-2183
    Scenario: activity log Filter in usermangement
    And I am on the activity log page
    When I filter users by Admin and activty type
    Then the user of activty log should be displayed