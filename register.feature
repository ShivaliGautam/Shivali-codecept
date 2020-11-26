Feature: User want to register on marketcube
I want to register into marketcube

Scenario: User is trying to register
    Given User goes to marketcube login page
    When User click on register here
    When User enters email
    When User enters password
    When User reenters password
    When User clicks on I agree checkbox 
    When User clicks on register button
    Then User sucessfully register

Scenario:User is trying to register
    Given User goes to marketcube login page
    When User click on register here
    When User enters email
    When User enters password
    When User clicks on I agree checkbox 
    Then User should not able to click on register button
    


