Feature: Authentication

    Background: 
        Given I am on the login page
    
    # PORT-2187
    Scenario: Signin using email
    When I am on login using email page
    And login using valid credenials
    Then I am on home page

    # PORT-2187
    Scenario: Signout
    When I am on MyPromethean home page
    And I click on Signout
    Then I should Signout

    # PORT-2188
    @skip
    Scenario:  Invalid email on forgot password page
    And I click on Forgot Password
    When I enter Invalid email
    Then I should get an error

    # PORT-2189
    Scenario: Change password after login 
    And I am logged in page
    When I change the password
    Then password must be changed

    # PORT-2192
    Scenario: Invalid code on forgot password page
    And I click on Forgot Password
    When I enter an Invalid code
    Then I should get an error information