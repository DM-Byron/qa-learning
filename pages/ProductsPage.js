export class ProductsPage {

    constructor(page) {
        this.page = page;

        this.menuButton = page.getByRole('button', { name: 'Open Menu' });
        this.logoutLink = page.getByRole('link', { name: 'Logout'});
    }

    async logout() {
        await this.menuButton.click();
        await this.logoutLink.click();
    }
}

