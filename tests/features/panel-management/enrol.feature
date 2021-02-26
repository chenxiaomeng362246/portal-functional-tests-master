Feature: Enrol
#  PORT-2170
    Background: 
        Given I am on Panel Management home page

    Scenario: enrol using CSV file
    When  I am on enrol page
    And I importCSV file
    Then I enrol panel by uploadCSV file