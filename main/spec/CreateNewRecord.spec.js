var Helper = require('../page-objects/helper.po.js');
var HomePage = require('../page-objects/homepage.po.js');

var homePage = new HomePage(),
helper = new Helper();

describe('Swimlane', function() {

	it('Login to the application with valid credentials', async function() {
		
		await browser.driver.get(browser.params.url);
		var userName = 'vivekananda.chakravarthy';
		var password = '+fS^^W$5yDjd@*c/';
		
		expect(browser.wait(helper.EC.urlContains('/login'), 20000));
		helper.waitForElementToBeVisible(homePage.wdwMainSiteLogo);
		expect(homePage.wdwMainSiteLogo.isPresent()).toBeTruthy();

		await homePage.username.sendKeys(userName);
		await homePage.pwd.sendKeys(password);
		await homePage.login.click();
		await browser.sleep(2000);
	});

	it('Click on the new icon', function() {
		helper.switchToNonAngularPage();
		browser.driver.findElement(by.xpath('//*[@class="ngx-icon ngx ngx-plus ng-star-inserted"]')).click();
		helper.waitForElementToBeVisible(homePage.empInfo);
	});

	it('Enter the employee information fields', async function() {
		const values = ["Vivekananda", "Battala", "Hyderabad", "Telangana", "147258369", "502319", "xyz@gmail.com", "Record"];
		var elements = await browser.driver.findElements(by.xpath('//*[@ng-repeat="layout in row"][@class="col-md-6"]//input'));
		for(var i = 0; i < values.length; i++){
			elements[i].sendKeys(values[i]);
		}
		browser.driver.findElement(by.xpath('//*[@ng-repeat="layout in row"]//textarea')).sendKeys("#14-93, sree ram nagar colony, hyderabad");
	});

	it('Save the employee information fields', async function() {
		await homePage.save.click();
		await homePage.timeSpent.sendKeys("3h 30m");
		await homePage.timeSpentSave.click();
	});

	it('Logout the application', async function() {
		await homePage.dropDownToggle.click();
		await homePage.logout.click();
		browser.sleep(2000);
	});

});
