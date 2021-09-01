var HomePage = function() {
   this.wdwMainSiteLogo = element(by.className('logo ng-trigger ng-trigger-logoAnimationState xs'));
   this.newIcon = element(by.xpath('//*[@class="ngx-icon ngx ngx-plus ng-star-inserted"]'));
   this.save = element(by.xpath('//*[.="Save"]'));
   this.navMenu = element(by.xpath('//*[@class="nav-menu"]'));
   this.empInfo = element(by.xpath('//*[@data-id="5fe1259a5b026de867ba029a"]'));
   this.timeSpent = element(by.xpath('//*[@class="form-input ng-pristine ng-valid ng-not-empty ng-touched"]'));
   this.timeSpentSave = element(by.repeater('button in options.buttons'));
   this.dropDownToggle = element(by.xpath('//*[@class="ngx-dropdown-toggle"]'));

   this.username = element(by.xpath('//*[@id="input-1"]'));
   this.pwd = element(by.xpath('//*[@id="input-2"]'));
   this.login = element(by.xpath('//span[.="Login"]'));
   this.logout = element(by.xpath('//*[.="Log Out"]'));
};

module.exports = HomePage;
