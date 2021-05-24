Feature: header navigation
    Background: 
        Given I am logged in
# PORT-2197
    Scenario: Switch apps in usermangement
    When I switch apps from the header
    Then the app is opened in new tab

