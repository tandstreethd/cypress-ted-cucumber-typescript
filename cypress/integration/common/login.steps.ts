import { Given, Then, When } from "cypress-cucumber-preprocessor/steps";
import { TedPO } from "../page-objects/ted.po";

cy.on("uncaught:exception", (err, runnable) => {
  return false;
});

Given("the user submits {string} credentials", (credentials: string) => {
  TedPO.home().headerMenu().selectMainMenuProfileItem("SIGN IN");
  TedPO.login().loginForm().enterLogin(credentials);
});

Given("the user is logged into the app", () => {
  TedPO.home().headerMenu().verifyLogin();
});

When("the user logs out of the app", () => {
  TedPO.home().headerMenu().selectProfileMenu();
  TedPO.home().headerMenu().profileMainMenu().selectProfileMenuItem("Sign out");
});

Then("the login form validation message should be displayed", () => {
  TedPO.login().loginForm().checkLoginValidation();
});
