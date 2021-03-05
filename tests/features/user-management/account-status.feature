Feature: account status
    Background: 
        Given I am logged in usermangement page

# PORT-2180
    Scenario: Suspend user in usermangement
    And I am on the user details page
    When I click on Suspend
    Then the user should be suspended 


