'use strict';

const BaseContextClass = require('egg').BaseContextClass;
const scrapeIt = require('scrape-it');

class Crawler extends BaseContextClass {
  scraper = scrapeIt;

  exec() {}
}

module.exports = Crawler;
