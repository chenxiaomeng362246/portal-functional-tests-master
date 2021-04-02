Feature: create organization 
    Background: 
        Given I am on the org support page

#  PORT-2199
    Scenario: Create new Organization
    When I am on the Promethean World page
    And I create a new Organization
    Then new organization is created