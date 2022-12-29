export class GlobalComponentPO {

    protected root: () => Cypress.Chainable<JQuery<HTMLElement>>
  
    isVisible() {
      this.root().should('be.visible');
    }
  }
  
  export class ComponentPO extends GlobalComponentPO {
    constructor(protected root: () => Cypress.Chainable<JQuery<HTMLElement>>) {
      super();
    }
  }
  
  export interface PagePO {
    open: (guid?: string) => void;
  }
  
  
  