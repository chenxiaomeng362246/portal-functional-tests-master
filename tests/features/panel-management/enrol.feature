Feature: Enrol 

    Background: 
        Given I am on Panel Management home page

#  PORT-2170
    Scenario: enrol using CSV file
    When  I am on enrol page
    And I importCSV file
    Then I enrol panel by uploadCSV file

# PORT-2171
    Scenario: enrol panel enrol manually
    When  I am on typemanually page
    And I am on enrolmanually page
    Then I am on successfullly enrol page