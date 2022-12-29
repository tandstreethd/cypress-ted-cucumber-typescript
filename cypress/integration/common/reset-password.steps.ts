import { Given, Then, When } from "cypress-cucumber-preprocessor/steps";
import { TedPO } from "../page-objects/ted.po";
import "cypress-mailosaur";

cy.on("uncaught:exception", (err, runnable) => {
  return false;
});

When("the user visits the reset password link and sets a new password", () => {
  TedPO.home().headerMenu().selectMainMenuProfileItem("SIGN IN");

  cy.getEmail().then((email) => {
    TedPO.login().loginForm().enterEmail(`${email}`);

    TedPO.login().loginForm().selectForgotPassword();
    TedPO.login().loginForm().selectSubmit();

    cy.wait(8000);
    cy.mailosaurGetMessage(Cypress.env("MAILOSAUR_SERVER_ID"), {
      sentTo: email,
    }).then((retrievedEmail) => {
      expect(retrievedEmail.subject).to.equal("Reset your password for TED");

      TedPO.resetPassword().open(retrievedEmail.text.links[0].href);

      cy.fixture("login").then((data) => {
        TedPO.resetPassword()
          .resetPasswordForm()
          .enterPassword(data.new_password);
      });
      TedPO.resetPassword().resetPasswordForm().selectSubmit();
    });
  });
});
