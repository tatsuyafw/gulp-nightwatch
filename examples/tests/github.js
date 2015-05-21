// module.exports = {
//   'Demo: GitHub Title Test' : function (browser) {
//     browser
//       .url('https://github.com')
//       .assert.title('GitHub · Build software better, together.')
//       .end();
//   }
// };
module.exports = {
  'Demo: GitHub URL Test' : function (browser) {
    browser
      .url('https://github.com')
      // .assert.title('GitHub')
      .assert.urlEquals('https://github.com/')
      .end();
  },
  'Demo: GitHub Title Test' : function (browser) {
    browser
      .url('https://github.com')
      .assert.title('GitHub · Build software better, together.')
      .end();
  }
};
