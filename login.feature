Feature: User want to login
     
     I want to login into marketcube

Scenario: User is trying to login
Given User goes to marketcube login page
When User enters valid email
When User enters valid password
When User clicks on login button
Then User should be on the dashboard

Scenario: User is trying to login with invalid password
Given User goes to marketcube login page
When User enters valid email
When User enters invalid password
When User clicks on login button
Then Incorrect credentials provided error occure





