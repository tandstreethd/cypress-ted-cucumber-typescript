import { PagePO, ComponentPO } from "./component.po";

export class LoginPO implements PagePO {
  open() {
    cy.visit(Cypress.env("loginPageURL"));
    return this;
  }

  loginForm() {
    return new LoginFormPO(() => cy.get(".css-dsj9sg"));
  }
}

class LoginFormPO extends ComponentPO {
  enterEmail(text: string) {
    this.root().find(".css-1dgn86m-base").type(text);
    this.loginContinue();
    return this;
  }

  enterPassword(text: string) {
    this.root().find(".css-1knpzs-base", { timeout: 3000 }).type(text);
    this.loginContinue();
    return this;
  }

  selectSubmit() {
    this.root().find(".css-uuzc5y-base-button").click();

    return this;
  }

  selectForgotPassword() {
    this.root()
      .find(".css-yu66yk-activator")
      .contains("Forgot your password?")
      .click();

    return this;
  }

  loginContinue() {
    this.root().find(".css-17ltv1z button", { timeout: 2000 }).click();
    cy.wait(2000);
    return this;
  }

  enterFirstName(text: string) {
    this.root().find(".css-1dgn86m-base").eq(0).type(text);
    return this;
  }

  enterLastName(text: string) {
    this.root().find(".css-1dgn86m-base").eq(1).type(text);
    this.loginContinue();
    return this;
  }

  checkLoginValidation() {
    this.root()
      .find(".css-39qtqq")
      .should("contain.text", "something went wrong");

    return this;
  }

  enterLogin(details: string) {
    cy.fixture("login").then((data) => {
      switch (details) {
        case "valid":
          this.enterEmail(data.reg_email);
          this.enterPassword(data.valid_password);
          break;

        case "invalid":
          this.enterEmail(data.reg_email);
          this.enterPassword(data.invalid_password);
          break;

        case "newPassword":
          cy.getEmail().then((email) => {
            this.enterEmail(`${email}`);
          });
          this.enterPassword(data.new_password);
          break;
      }
    });
    return this;
  }
}
