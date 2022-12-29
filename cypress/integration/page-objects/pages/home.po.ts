import { PagePO, ComponentPO } from "./component.po";

export class HomePO implements PagePO {
  open() {
    cy.visit(Cypress.env("baseUrl"));
    return this;
  }

  headerMenu() {
    return new HeaderMenuPO(() =>
      cy.get(".z-10.w-full .relative.flex.items-center")
    );
  }
}

class HeaderMenuPO extends ComponentPO {
  selectMainMenuProfileItem(text: string) {
    this.root().find(".transition-opacity > a").contains(text).click();

    return this;
  }

  profileMainMenu() {
    return new ProfileMainMenuPO(() =>
      cy.get("div.w-full.bg-white.min-h-drawer.fixed.top-14")
    );
  }

  selectMainMenuItem(name: string) {
    this.root().find("nav button").should("contain.text", name).click();

    return this;
  }

  selectProfileMenu() {
    this.root()
      .find(".flex.items-center .p-15.translate-x-15", { timeout: 3000 })
      .eq(1)
      .click();
  }

  checkProfile() {
    this.root()
      .find("#option-0--menu--1 > div")
      .should("contain.text", "Your profile");

    return this;
  }

  verifyLogin() {
    this.selectProfileMenu();
    this.checkProfile();
    return this;
  }
}

class ProfileMainMenuPO extends ComponentPO {
  selectProfileMenuItem(name: string) {
    this.root().find("> div > a").contains(name).click();

    return this;
  }
}
