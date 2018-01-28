import { BaseContextClass } from 'egg';

export class Crawler extends BaseContextClass {
  exec<T>(): Promise<T>;
}
