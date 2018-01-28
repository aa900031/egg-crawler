import { BaseContextClass } from 'egg';
import * as scrapeIt from 'scrape-it'

export class Crawler extends BaseContextClass {
  scraper: typeof scrapeIt;
  exec<T>(): Promise<T>;
}
