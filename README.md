# AngularNgBootstrap

1、生成Angular7工程
运行命令：

ng new angular-ng-bootstrap
参考：https://www.angular.cn

2、集成Bootstrap4
运行命令：

npm install bootstrap
在angular-ng-bootstrap\angular.json文件加入Bootstrap4样式：

"node_modules/bootstrap/dist/css/bootstrap.min.css"

参考：https://getbootstrap.com/

3、集成Bootstrap小部件ng-bootstrap4
3.1、依赖
此存储库包含一组基于Bootstrap标记和CSS的本机Angular指令。因此，不需要依赖jQuery或Bootstrap的JavaScript。

3.2、版本
以下是ng-bootstrap 的Angular和Bootstrap CSS 的最低要求版本列表：

ng-bootstrap	Angular	Bootstrap CSS
1.x.x	5.0.2	4.0.0
2.x.x	6.0.0	4.0.0
3.x.x	6.1.0	4.0.0
4.x.x	7.0.0	4.0.0
我应该将bootstrap.js或bootstrap.min.js添加到我的项目中吗？

不，ng-bootstrap的目标是完全取代组件的JavaScript实现。你也不应该包括其他依赖项，如jQuery或popper.js。它不是必需的，可能会干扰ng-bootstrap代码。

3.3、支持的浏览器
我们努力支持Bootstrap 4和Angular支持的相同浏览器和版本，以较严格的为准。检查Angular和Bootstrap的浏览器支持说明。

我们的代码会在所有支持的浏览器上自动测试。

3.4、安装
安装上述依赖项后，ng-bootstrap通过以下方式安装：

npm install --save @ng-bootstrap/ng-bootstrap
安装完成后，您需要导入我们的主模块。

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  ...
  imports: [NgbModule, ...],
  ...
})
export class YourAppModule {
}
或者，您只能导入包含所需组件的模块，例如。分页和警报。在这种情况下，得到的束将更小。

import {NgbPaginationModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  ...
  imports: [NgbPaginationModule, NgbAlertModule, ...],
  ...
})
export class YourAppModule {
}
参考：https://ng-bootstrap.github.io/#/getting-started

界面截图：

源码下载：

https://github.com/daqiang123/angular-ng-bootstrap.git


欢迎加入大华软件学院QQ群交流，群号：665714453
--------------------- 
作者：dq012 
来源：CSDN 
原文：https://blog.csdn.net/daqiang012/article/details/88545135 
版权声明：本文为博主原创文章，转载请附上博文链接！



This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
