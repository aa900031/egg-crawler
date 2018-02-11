'use strict';

const path = require('path');
const assert = require('assert');
const is = require('is-type-of');

module.exports = app => {
  const baseName = 'crawler';
  const baseCrawlerDir = 'app/crawler';
  const ctx = app.createAnonymousContext();

  // 載入 app/crawler 資料夾下的檔案進入到 app.crawler
  app.loader.loadToApp(
    path.join(app.baseDir, baseCrawlerDir),
    baseName,
    {
      caseStyle: 'lower',
      ignore: 'index.js',
      initializer: crawler => {
        assert(is.class(crawler), '[egg-crawler] The Crawler module must be class, please check app/crawler/*.js')
        return new crawler(ctx);
      }
    },
  );
}
