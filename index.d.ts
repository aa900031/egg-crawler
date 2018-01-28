import { BaseContextClass } from 'egg';
import scrapeIt from 'scrape-it'

export class Crawler extends BaseContextClass {
  scraper: typeof scrapeIt;
  exec<T>(): Promise<T>;
}
