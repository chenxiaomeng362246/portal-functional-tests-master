Feature: Login

    Background: 
        Given I am on the login page

    Scenario: Login using email
    When I am on login using email page
    And login using valid credenials
    Then I am on home page
