'use strict';

const path = require('path');
const baseName = 'crawler';
const baseCrawlerDir = 'app/crawler';

module.exports = app => {

  // 載入 app/crawler 資料夾下的檔案進入到 app.crawler
  app.loader.loadToApp(
    path.join(app.baseDir, baseCrawlerDir),
    baseName,
    { caseStyle: 'lower', ignore: 'index.js' },
  );
}
