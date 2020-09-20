export class Util {
  static toImg() {
    return '../../../../assets/img/';
  }

  /**
   * 生成随机字符串
   * @param version
   * @returns {string}
   */
  static getCode(a: number) {
    let num = '';
    for (let i = 0; i < a; i++) {
      num += Math.floor(Math.random() * 10);
    }
    return;
  }

  /**
   * 格式化时间
   * @param str
   */
  static fomart(str: string) {
    let date = new Date();
    if (str === null || str === '' || str === 'undefined') {
    } else {
      date = new Date(str.replace(/-/g, '/'));
    }
    let hours = date.getHours().toString();
    if (hours.length < 2) {
      hours = '0' + hours;
    }
    let minutes = date.getMinutes().toString();
    if (minutes.length < 2) {
      minutes = '0' + minutes;
    }
    let seconds = date.getSeconds().toString();
    if (seconds.length < 2) {
      seconds = '0' + seconds;
    }
    let getMonth = (date.getMonth() + 1).toString();
    if (getMonth.length < 2) {
      getMonth = '0' + getMonth;
    }
    let getDate = date.getDate().toString();
    if (getDate.length < 2) {
      getDate = '0' + getDate;
    }
    return date.getFullYear() + '-' + getMonth + '-' + getDate + ' ' + hours + ':' + minutes + ':' + seconds;
  }

  /**
   * 格式化时分秒
   * @param {string} str
   * @returns {string}
   */
  static fomartHour(str: string) {
    let date = new Date();
    if (str === null || str === '' || str === 'undefined') {
    } else {
      date = new Date(str.replace(/-/g, '/'));
    }
    let hours = date.getHours().toString();
    if (hours.length < 2) {
      hours = '0' + hours;
    }
    let minutes = date.getMinutes().toString();
    if (minutes.length < 2) {
      minutes = '0' + minutes;
    }
    let seconds = date.getSeconds().toString();
    if (seconds.length < 2) {
      seconds = '0' + seconds;
    }
    return hours + ':' + minutes + ':' + seconds;
  }

  /**
   * 格式化年月日
   * @param str
   * @returns {string}
   */
  static fomartDay(str: string) {
    let date = new Date();
    if (str === null || str === '' || str === 'undefined') {
    } else {
      date = new Date(str.replace(/-/g, '/'));
    }
    let getMonth = (date.getMonth() + 1).toString();
    if (getMonth.length < 2) {
      getMonth = '0' + getMonth;
    }
    let getDate = date.getDate().toString();
    if (getDate.length < 2) {
      getDate = '0' + getDate;
    }
    return date.getFullYear() + '-' + getMonth + '-' + getDate;
  }

  /**
   * 格式化月日
   * @param str
   * @returns {string}
   */
  static fomartDayDto(str: any) {
    let date = new Date();
    if (str === null || str === '' || str === 'undefined') {
    } else {
      date = new Date(str.replace(/-/g, '/'));
    }
    return (date.getMonth() + 1) + '-' + date.getDate();
  }

  /**
   * 格式化年月
   * @param str
   * @returns {string}
   */
  static formartMonth(str: any) {
    let date = new Date();
    if (str === null || str === '' || str === 'undefined') {
    } else {
      date = new Date(str.replace(/-/g, '/'));
    }
    return date.getFullYear() + '-' + (date.getMonth() + 1);
  }

  /**
   * 格式化年
   * @param str
   * @returns {string}
   */
  static formartYear(str: any) {
    let date = new Date();
    if (str === null || str === '' || str === 'undefined') {
    } else {
      date = new Date(str.replace(/-/g, '/'));
    }
    return date.getFullYear();
  }

  /**
   * 非空判断
   * @param str
   * @returns {string}
   */
  static empty(str: string) {
    if (str != null && str !== '' && str !== undefined) {
      return true;
    } else {
      return false;
    }
  }

  /**
   * 判断是否是闰年
   * @param year
   */
  static isYear(year: number): boolean {
    return (year % 100 === 0) ? ((year % 400 === 0) ? true : false) : ((year % 4 === 0) ? true : false);
  }

  /**
   * 处理获取时间格式
   * @param time
   * @returns {string}
   */
  static timeList(time) {
    let timeList = '';
    if (time !== null || time !== '' || time !== 'undefined') {
      timeList = time.split('T')[1].split('+')[0];
    } else {
      timeList = time;
    }
    return timeList;
  }

  /**
   * 对象转map
   * @param obj
   * @returns {Map<any, any>}
   */
  static objToStrMap = (obj) => {
    let strMap = new Map();
    for (let k of Object.keys(obj)) {
      strMap.set(k, obj[k]);
    }
    return strMap;
  };
  static emptyLine = (str) => {
    if (str === null || str === '' || str === 'undefined') {
      return '--';
    } else {
      return str;
    }
  };

  static getNowTime(date) {
    return `${date.getFullYear()}-${this.format(date.getMonth() + 1)}-${this.format(date.getDate())} ${this.format(date.getHours())}:${this.format(date.getMinutes())}:${this.format(date.getSeconds())}`;
  }

  static format(value) {
    if (value < 10) {
      return '0' + value;
    } else {
      return value;
    }
  }

  static getNowDate(date) {
    return `${date.getFullYear()}-${this.format(date.getMonth() + 1)}-${this.format(date.getDate())}`;
  }

  static getTime(date) {
    return `${this.format(date.getHours())}:${this.format(date.getMinutes())}:${this.format(date.getSeconds())}`;

  };


  static arrayDuplicateRemoval(colorArr: Array<string>): Array<string> {
    //随机颜色
    let res: Array<string> = [];
    let json = {};
    for (let i = 0; i < colorArr.length; i++) {
      if (!json[colorArr[i]]) {
        res.push(colorArr[i]);
        json[colorArr[i]] = 1;
      }
    }
    return res;
  }


  static IdCardValid(value: string): boolean {
    if (18 === value.length) { //18位身份证号码
      if (value.charAt(17) !== this.IdCardIsp(value)) {
        return false;
      } else {
        return true;
      }
    } else {
      return false;
    }
  }

  static IdCardIsp(value: string): any {
    if (value.length !== 18) {
      return false;
    }
    let x = 0;
    for (let i = 18; i >= 2; i--) {
      x = x + (this.square(2, (i - 1)) % 11) * parseInt(value.charAt(19 - i - 1).toString(), 10);
    }
    x %= 11;
    let y = (12 - x).toString();
    if (x === 0) {
      y = '1';
    }

    if (x === 1) {
      y = '0';
    }
    if (x === 2) {
      y = 'X';
    }
    return y;
  }

  static square(x, y) {
    let i = 1;
    for (let j = 1; j <= y; j++) {
      i *= x;
    }
    return i;
  }

  //手机号验证
  static isPhoneNumber(value: string): boolean {
    if ((/^1(3|4|5|7|8)\d{9}$/.test(value))) {
      return true;
    } else {
      return false;
    }
  }

  static dateFormat(timestamp, format) {
    const date = new Date(timestamp);
    let date1 = {
      'M+': date.getMonth() + 1,
      'd+': date.getDate(),
      'h+': date.getHours(),
      'm+': date.getMinutes(),
      's+': date.getSeconds(),
      'q+': Math.floor((date.getMonth() + 3) / 3),
      'S+': date.getMilliseconds()
    };
    if (/(y+)/i.test(format)) {
      format = format.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
    }
    for (let k in date1) {
      if (new RegExp('(' + k + ')').test(format)) {
        format = format.replace(RegExp.$1, RegExp.$1.length === 1
          ? date1[k] : ('00' + date1[k]).substr(('' + date1[k]).length));
      }
    }
    return format;
  }
}
