### 组件说明

**级联选择器组件**

### Attributes

| 属性           | 说明             | 类型    |
| -------------- | ---------------- | ------- |
| cascader-config | 选择器属性       | Object  |
| ng-val          | 输入框双向绑定值 | String  |
| ng-disabled     | 是否禁用         | Boolean |

#### cascader-config Attributes

| 属性       | 说明                                   |       类型       | 可选值 | 默认值 |
| ---------- | :------------------------------------- | :--------------: | :----: | :----: |
| data       | 可选项数据源                           |      Array       |   -    |   -    |
| dataUrl    | 可选项数据源请求地址                   |      String      |   -    |   -    |
| valueField | 指定选项的值为选项对象的某个属性值     |      String      |   -    | value  |
| textField  | 指定选项标签为选项对象的某个属性值     |      String      |   -    | label  |
| childName  | 指定选项的子选项为选项对象的某个属性值 |      Number      |   -    |   50   |
| css        | 自定义样式                             |      Object      |   -    |   -    |
| onSelect   | 选择回调                               | Function（item） |   -    |   -    |
