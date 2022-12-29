@Regression @Registration
Feature: Registration
As a user
I want to register an account for the app
So that I can create a profile 

  Background:
    Given the user navigates to the app

    @RegistrationEmailHappy
    Scenario: The user registers an account via email
    When the user registers an account
    Then the user is logged into the app