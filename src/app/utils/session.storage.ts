import {Injectable} from '@angular/core';

@Injectable()
export class SessionStorage {
  public sessionStorage: any;

  constructor() {
    if (!sessionStorage) {
      throw new Error('Current browser does not support Session Storage');
    }
    this.sessionStorage = sessionStorage;
  }

  /**
   * 保存字符串
   * @param {string} key
   * @param {string} value
   */
  public set(key: string, value: string): void {
    this.sessionStorage[key] = value;
  }

  /**
   * 获取保存的字符串
   * @param {string} key
   * @returns {string}
   */
  public get(key: string): string {
    return this.sessionStorage[key] || '';
  }

  /**
   * 保存对象
   * @param {string} key
   * @param value
   */
  public setObject(key: string, value: any): void {
    this.sessionStorage[key] = JSON.stringify(value);
  }

  /**
   * 获取保存对象
   * @param {string} key
   * @returns {any}
   */
  public getObject(key: string): any {
    return JSON.parse(this.sessionStorage[key] || null);
  }

  /**
   * 移除保存的数据
   * @param {string} key
   * @returns {any}
   */
  public remove(key: string): any {
    this.sessionStorage.removeItem(key);
  }

  /**
   * 移除所有缓存并退出
   * @param {string} key
   * @returns {any}
   */
  public clear(): any {
    this.sessionStorage.clear();
  }
}
