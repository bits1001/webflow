import LoginPage from '../pageobjects/login.page.js';
import WorkspacePage from '../pageobjects/workspace.page.js';
//import SecurePage from '../pageobjects/secure.page.js';

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.open();
        await LoginPage.login(process.env.WEBFLOW_USERNAME, process.env.WEBFLOW_VALID_PASSWORD);
        await expect(WorkspacePage.navbarAccount).toBeExisting();
        await expect(WorkspacePage.workspaceName).toHaveText("Mrunal's Workspace");
        await WorkspacePage.logout();
    });

    it('login should fail with invalid credentials', async () => {
        await LoginPage.open();
        await LoginPage.login(process.env.WEBFLOW_USERNAME, process.env.WEBFLOW_INVALID_PASSWORD);
        await expect(WorkspacePage.navbarAccount).not.toBeExisting();
        await expect(LoginPage.invalidCredentialError).toHaveText("Invalid email and password combination");
    });
});


