module.exports = {
  'Demo: GitHub URL Test' : function (browser) {
    browser
      .url('https://github.com')
      .assert.urlEquals('https://github.com/')
      .end();
  },
  'Demo: GitHub Title Test' : function (browser) {
    browser
      .url('https://github.com')
      .assert.title('GitHub · Where software is built')
      .end();
  }
};
