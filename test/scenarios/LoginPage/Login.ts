import LoginPage from "../../pageobjects/login.page.ts"


describe('Login to salesforce: [LOGIN]', async function () {

    it('C2491 Login to salesforce validation', async function () {
        await LoginPage.open();
        await LoginPage.login('susmita@cloudkaptan.com.dev', 'Automation@123');
    })

    it('C2492 Test Case Amend Application', async () => {
        await browser.pause(1000);
    })
    it('C2493 Test case Application creation', async () => {
        await LoginPage.login('susmita@cloudkaptan.com.dev', 'Automation@123'); 
    })
    it('C2494 Test case Balance Transfer', async () => {
        await LoginPage.login('susmita@cloudkaptan.com.dev', 'Automation@123');
    })
    it('C2495 Test case Service Cloud', async () => {
        await browser.pause(1000);
    })
    it('C2496 Test case application convert to contract', async () => {
        await browser.pause(1000);
    })
    it('C2497 Test case validate contract details', async () => {
        await LoginPage.login('susmita@cloudkaptan.com.dev', 'Automation@123');
    })
    it('C2498 Validate Amend application', async () => {
        await browser.pause(1000);
    })
})