Feature: header navigation
    Background:
        Given I am on the login page
# PORT-2191
    Scenario: Swith to User Management app
    And I am logged in page
    When I Switch app
    Then I am taken to User Management app

    Scenario: Swith to Panel Management app
    And I am logged in page
    When I Switch app
    Then I am taken to Panel Management app

    Scenario: Swith to Resource Library app
    And I am logged in page
    When I Switch app
    Then I am taken to Resource Library app
