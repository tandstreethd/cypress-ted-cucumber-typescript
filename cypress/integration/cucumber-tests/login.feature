@Regression @Login
Feature: Login
As a user
I want to log into the app
So that I can manage the videos that I watch

  Background:
    Given the user navigates to the app

    @LoginHappy
    Scenario: The user logs into the app
    When the user submits "valid" credentials
    Then the user is logged into the app

    @LoginSad
    Scenario: The user fails to log into the app
    When the user submits "invalid" credentials
    Then the login form validation message should be displayed

