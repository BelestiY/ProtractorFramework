let homepage = require('../pages/homepage')

describe('Calculator Demo tests', function() {
    it('addition test', function() {
        //browser.get('http://juliemr.github.io/protractor-demo/');
        homepage.get('http://juliemr.github.io/protractor-demo/')

        //element(by.model('first')).sendKeys(4);
        homepage.enterFirstNumber('12');

        //element(by.model('second')).sendKeys(10);
        homepage.enterSecondNumber('15');

        //element(by.css('[ng-click="doAddition()"]')).click();
        homepage.clickGo();

        //let result = element(by.cssContainingText('.ng-binding', '14'));

        //expect(result.getText()).toEqual('14');
        homepage.verifyRes('27');
        

        browser.sleep(2000);
    });
    
    it('substraction test', function() {
        //browser.get('http://juliemr.github.io/protractor-demo/');
        homepage.get('http://juliemr.github.io/protractor-demo/')

        //element(by.model('first')).sendKeys(4);
        homepage.enterFirstNumber('15');

        //element(by.model('second')).sendKeys(10);
        homepage.enterSecondNumber('12');

        //element(by.css('[ng-click="doAddition()"]')).click();
        homepage.clickGo();

        //let result = element(by.cssContainingText('.ng-binding', '14'));

        //expect(result.getText()).toEqual('14');
        homepage.verifyRes('3');
        

        browser.sleep(2000);
    });
  
});