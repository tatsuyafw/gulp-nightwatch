module.exports = {
  'Demo test Npmjs' : function (browser) {
    browser
      .url('https://www.npmjs.com')
      .waitForElementVisible('body', 1000)
      .setValue('input[type=search]', 'nightwatch')
      .waitForElementVisible('input[type=submit]', 1000)
      .click('input[type=submit]')
      .pause(1000)
      .assert.elementPresent('a[href="/packages/nightwatch"]', 'The Night Watch')
      .end(); 
  }
};

module.exports = {
  tags: [ 'sandbox' ],
  'Demo test Npmjs' : function (browser) {
    browser
      .url('https://www.npmjs.com')
      .assert.title('npm')
      .end();
  }
};
