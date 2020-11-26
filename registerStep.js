const registerPage = require("../page/registerPage");

Given('User goes to marketcube login page', () => {
 registerPage.openLoginPage();
});

When('User click on register here', () => {
  registerPage.clickOnRegisterHereButton();
});

When('User enters email', () => {
  registerPage.enterEmail();
});

When('User enters password', () => {
    registerPage.enterPassword();
});

When('User reenters password', () => {
 registerPage.reEnterPassword();
});

When('User clicks on I agree checkbox', () => {
    registerPage.clickOnCheckboxButton();
 
});

When('User clicks on register button', () => {
    registerPage.clickOnRegisterButton();
 
});

Then('User sucessfully register', () => {
   registerPage.onLoginPageDashboard();
});


Then('User should not able to click on register button', () => {
   registerPage.clickOnRegisterButton();
});
