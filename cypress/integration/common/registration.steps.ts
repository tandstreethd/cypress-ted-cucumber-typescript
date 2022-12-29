import { Given, Then, When } from "cypress-cucumber-preprocessor/steps";
import { TedPO } from "../page-objects/ted.po";
import "cypress-mailosaur";

cy.on("uncaught:exception", (err, runnable) => {
  return false;
});

When("the user registers an account", () => {
  TedPO.home().headerMenu().selectMainMenuProfileItem("SIGN IN");

  cy.setEmail();
  cy.getEmail().then((email) => {
    TedPO.login().loginForm().enterEmail(`${email}`);
  });

  cy.fixture("userRegistration").then((data) => {
    TedPO.login()
      .loginForm()
      .enterPassword(data.valid_password)
      .enterFirstName(data.first_name)
      .enterLastName(data.last_name);
  });

  cy.getEmail().then((mail) => {
    cy.mailosaurGetMessage(Cypress.env("MAILOSAUR_SERVER_ID"), {
      sentTo: mail,
    }).then((email) => {
      let registerLink = email.text.links[0].href;
      cy.visit(registerLink);
    });
  });
});
