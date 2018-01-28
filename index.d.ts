import { BaseContextClass } from 'egg';
import * as scrapeIt from 'scrape-it';

export interface Crawler {
  scraper: scrapeIt
  exec(): Promise
}
