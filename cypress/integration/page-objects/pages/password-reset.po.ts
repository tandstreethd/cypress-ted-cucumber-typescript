import { PagePO, ComponentPO } from "./component.po";

export class PasswordResetPO implements PagePO {
  open(name: string) {
    cy.visit(name);
    return this;
  }

  resetPasswordForm() {
    return new ResetFormPO(() => cy.get(".ga-form"));
  }
}

class ResetFormPO extends ComponentPO {
  enterPassword(text: string) {
    this.root().find("#user_password").type(text);

    return this;
  }

  selectSubmit() {
    this.root().find(".button").click();

    return this;
  }
}
