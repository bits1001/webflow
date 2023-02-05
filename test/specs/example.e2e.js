import LoginPage from '../pageobjects/login.page.js';
import WorkspacePage from '../pageobjects/workspace.page.js';
//import SecurePage from '../pageobjects/secure.page.js';

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.open();
        await LoginPage.login('bugsberry27@gmail.com', 'Testingpassword123');
        await expect(WorkspacePage.navbarAccount).toBeExisting();
        await expect(WorkspacePage.workspaceName).toHaveText("Mrunal's Workspace");
        await WorkspacePage.logout();
    });

    it('login should fail with invalid credentials', async () => {
        await LoginPage.open();
        await LoginPage.login('bugsberryabc@gmail.com', 'invalidPassword123');
        await expect(WorkspacePage.navbarAccount).not.toBeExisting();
        await expect(LoginPage.invalidCredentialError).toHaveText("Invalid email and password combination");
    });
});


