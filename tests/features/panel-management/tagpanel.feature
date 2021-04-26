Feature: tagpanel

    Background: 
        Given I am on the panel page

#  PORT-2347
    Scenario: Add tags to panel
    And there is a panel present
    And I am on the panel details page
    When I click and assign a tag to the panel
    Then the tag is added to the panel 
