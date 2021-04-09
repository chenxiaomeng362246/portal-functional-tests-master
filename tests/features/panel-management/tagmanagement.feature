Feature: tagmanagement

    Background: 
        Given I am on the Tags page

#  PORT-2345
    Scenario: Create tags
    When I create a new tag
    Then a new tag is created

