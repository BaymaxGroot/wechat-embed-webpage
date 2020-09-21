import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.less']
})
export class MenuComponent implements OnInit {

  constructor(
    private _router: Router
  ) {
  }

  ngOnInit(): void {
  }

  title = '首页';
  tabs = [
    {
      title: '首页',
      icon_class: 'iconfont iconicon_home',
      active_icon_class: 'iconfont iconicon_solid_home',
      active: true,
      routerLink: '/home'
    },
    {
      title: '保姆月嫂',
      icon_class: 'iconfont iconicon_baomu',
      active_icon_class: 'iconfont iconicon_solid_baomu',
      active: false,
      routerLink: '/nanny'
    },
    {
      title: '综合服务',
      icon_class: 'iconfont iconicon_service',
      active_icon_class: 'iconfont iconicon_solid_service',
      active: false,
      routerLink: '/service'
    },
    {
      title: '我的',
      icon_class: 'iconfont iconicon_my',
      active_icon_class: 'iconfont iconicon_solid_my',
      active: false,
      routerLink: '/account'
    }
  ];

  handleSelect(val) {
    this.tabs.forEach((item) => {
      item.title == val.title ? item.active = true : item.active = false;
    });
    this.title = val.title;
  }
}
