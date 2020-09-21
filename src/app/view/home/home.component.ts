import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {

  swipeItems = [
    { icon: 'https://image.haobangni.com/upfiles/sysattachment/propertyitem/2020-05/c52201b7-f95d-4bd6-80fb-9ba0b2d22658.jpg' },
    { icon: 'https://image.haobangni.com/upfiles/sysattachment/propertyitem/2020-08/2fd065d2-b9da-4956-9060-45fcaee652c3.jpg' },
    { icon: 'https://image.haobangni.com/upfiles/sysattachment/propertyitem/2020-07/2bc115d2-d04a-478c-b9e5-28a63d8ba36b.jpg' },
    { icon: 'https://image.haobangni.com/upfiles/sysattachment/propertyitem/2020-08/1e3f1b81-fea3-49a0-ba15-51eab054d13e.jpg' }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
