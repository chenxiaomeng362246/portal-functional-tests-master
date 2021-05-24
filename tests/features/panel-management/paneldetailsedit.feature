Feature: editpaneldetail

    Background: 
        Given I am on the panel page

# PORT-2360
    Scenario: Panel details page-Edit
    And I am on the panel-detail page
    When I modify the panel name on panel detail
    Then panel detail has been modified successfully

