Feature: Login Functionality

Scenario: Successful login with valid credential

Given user is on OrangeHRM page
When user input valid username 
And user input valid password
And user click on Login Button
Then user navigate to Dashboard page