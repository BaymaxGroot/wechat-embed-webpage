import { Component, ViewEncapsulation } from '@angular/core';

import {} from 'ngx-weui';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = '首页';

  tabs = [
    { title: '首页', icon_class: 'iconfont iconicon_home', active_icon_class: 'iconfont iconicon_solid_home', active: true },
    { title: '保姆月嫂', icon_class: 'iconfont iconicon_baomu', active_icon_class: 'iconfont iconicon_solid_baomu', active: false },
    { title: '综合服务', icon_class: 'iconfont iconicon_service', active_icon_class: 'iconfont iconicon_solid_service', active: false },
    { title: '我的', icon_class: 'iconfont iconicon_my', active_icon_class: 'iconfont iconicon_solid_my', active: false }
  ];

  handleSelect(val) {
    this.tabs.forEach( (item) => {
      item.title == val.title?item.active = true:item.active = false;
    } );
    this.title = val.title;
  }
}
