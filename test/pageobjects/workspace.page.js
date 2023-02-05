

import Page from './page.js';


class WorkspacePage extends Page {
    /**
     * define selectors using getter methods
     */
    get navbarAccount () {
        return $('[data-automation-id="navbar-account"]');
    }

    get workspaceName () {
        return $('[data-automation-id="workspace-active"]');
    }

    get logoutLink () {
        return $('[data-automation-id="Navbar-logout-link"]');
    }

    open () {
        return super.open('dashboard?workspace');
    }

    async logout () {
        await this.navbarAccount.click();
        await this.logoutLink.click();
    }
}

export default new WorkspacePage();