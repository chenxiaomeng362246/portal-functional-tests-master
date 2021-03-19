Feature: edit profile
    Background:
        Given I am on the login page
# PORT-2190
    Scenario: Change country
    And I am logged in page
    When I edit the country
    Then the country should be updated

    Scenario: Change the first name
    And I am logged in page
    When I edit the first name
    Then the first name should be updated

    Scenario: Change organization
    And I am logged in page
    When I edit the organization
    Then the organization should be updated

    Scenario: Change language
    And I am logged in page
    When I edit the language
    Then the language should be updated