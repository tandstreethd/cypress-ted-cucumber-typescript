import { Given, Then, When } from 'cypress-cucumber-preprocessor/steps';
import { TedPO } from '../page-objects/ted.po';


Given('the user navigates to the app', () => {
    
    TedPO.home().open();
});
