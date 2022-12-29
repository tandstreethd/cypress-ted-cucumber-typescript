// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************

// eslint-disable-next-line @typescript-eslint/no-namespace
declare global {
    // eslint-disable-next-line @typescript-eslint/no-namespace
    namespace Cypress {
  
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      interface Chainable<Subject> {
  
        setEmail(): void;
        getEmail(): string;
       
      }
    }
  }

  let testEmailAddress = "";

  Cypress.Commands.add('setEmail', () => {

   testEmailAddress = `test.${new Date().getTime()}@${Cypress.env('MAILOSAUR_SERVER_ID')}.mailosaur.net`;
  
  })

  Cypress.Commands.add('getEmail', () => {

    return testEmailAddress;
   
   }) 