'use strict';

const mock = require('egg-mock');

describe('test/crawler.test.js', () => {
  let app;
  before(() => {
    app = mock.app({
      baseDir: 'apps/crawler-test',
    });
    return app.ready();
  });

  after(() => app.close());
  afterEach(mock.restore);

  it('should GET /', () => {
    return app.httpRequest()
      .get('/')
      .expect('hi, crawler')
      .expect(200);
  });
});
