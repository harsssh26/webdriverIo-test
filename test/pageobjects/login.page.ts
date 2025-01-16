import { $ } from '@wdio/globals'
import Page from './page.ts'
import users from '../config/users.ts';

class LoginPage extends Page {
        /**
         * Define selectors using getter methods
         */
        public get inputUsername() { return $('#username') }
        public get inputPassword() { return $('#password') }
        public get btnSubmit() { return $('#Login') }


        /**
         * Define functional methods
         */

        public async open() {
                //return super.open('')
                await browser.url('https://cloudkaptan-f-dev-ed.develop.my.salesforce.com')
        }

        public async login(
                username: string,
                password: string
        ) {
                await this.inputUsername.setValue(username)
                await this.inputPassword.setValue(password)
                await this.btnSubmit.click()
        }


}

export default new LoginPage()
