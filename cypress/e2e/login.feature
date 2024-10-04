Feature: Login Feature
  As a user of SauceDemo
  I want to log in to my account
  So that I can access my personal dashboard

   Scenario: Successful login with valid credentials
    Given I am on the login page of SauceDemo
    When I enter a valid username and valid password
    Then I should be redirected to the inventory page