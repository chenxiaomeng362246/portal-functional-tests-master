Feature: Activity log detail
    Background: 
        Given I am logged in usermangement page

# PORT-2185
    Scenario: User activity log detail in usermangement
    When I am on the user activity log detail page
    Then the user of activty log detail should be displayed