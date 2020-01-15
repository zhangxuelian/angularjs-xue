# angularjs-xue
Components for angularjs by Gosuncn FE team，support IE8+.
## For user
### Requirements
angularjs 1.2.32 
### Manual download
After downloading dependencies you need to download build version of this project: https://github.com/zhangxuelian/angularjs-xue/tree/master/dist  
You could import the components by require or <script>.  
#### Adding dependency to your project
When you are done downloading all the dependencies and project files the only remaining part is to add dependencies on the ui.bootstrap AngularJS module:
```javascript
angular.module('myModule', ['ui.xue']);
```
#### Webpack / JSPM
To use this project with webpack, follow the NPM instructions. Now, if you want to use only the accordion, you can do:
```javascript
import pagination from 'angularjs-xue/src/pagination';
import table from 'angularjs-xue/src/table/index-nocss.js';
  
angular.module('myModule', [pagination,table]);
```
## For developer
### Install global dependencies
* npm install grunt-cli@1.3.2 -g  
* npm install karma-cli@2.0.0 -g  
### Git clone project to local
git clone https://github.com/zhangxuelian/angularjs-xue.git
### Bundle
* cd angularjs-xue  
* npm install  
* grunt  
