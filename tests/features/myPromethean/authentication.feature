Feature: Authentication

    Background: 
        Given I am on the login page
    
    # PORT-2187
    Scenario: Signin using email
    When I am on login using email page
    And login using valid credenials
    Then I am on home page

    # PORT-2187
    Scenario: Signout
    When I am on MyPromethean home page
    And I click on Signout
    Then I should Signout