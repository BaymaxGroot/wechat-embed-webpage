import {NgModule, ModuleWithProviders} from '@angular/core';
import {CommonModule, HashLocationStrategy, LocationStrategy} from '@angular/common';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {LocalStorage} from '../utils/local.storage';
import {SessionStorage} from '../utils/session.storage';

/**
 * 自定义组件
 */
const components = [];
/**
 * 自定义指令
 */
const directives = [];

const providers = [
  LocalStorage,
  SessionStorage,
  {provide: LocationStrategy, useClass: HashLocationStrategy}
];


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  declarations: [
    ...components,
    ...directives
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ...components,
    ...directives
  ]
})
// @ts-ignore
export class CoreModule {
  // @ts-ignore
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: [
        ...providers
      ]
    };
  }
}
