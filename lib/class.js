'use strict';

const BaseContextClass = require('egg').BaseContextClass;
const scrapeIt = require('scrape-it');

class Crawler extends BaseContextClass {
  constructor() {
    this.scrapter = scrapeIt;
  }

  exec() {
    this.scrapter
  }
}

module.exports = Crawler;
