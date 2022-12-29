@Regression @ResetPassword
Feature: Reset Password
As a user
I want to reset my password
So that I log into the app with a new password

  Background:
    Given the user navigates to the app

    @ResetPasswordEmailHappy
    Scenario: The user resets there account password via email
    And the user registers an account
    And the user logs out of the app
    When the user visits the reset password link and sets a new password
    And the user logs out of the app
    And  the user submits "newPassword" credentials
    Then the user is logged into the app
    