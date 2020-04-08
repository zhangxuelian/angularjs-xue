
### 组件说明

可更改内容的下拉选择框（仅限取明词，不适用取词选对象）

### Attributes

| 属性         | 说明             | 类型    |
| ------------ | ---------------- | ------- |
| select-config | 下拉属性对象       | Object  |
| ng-val        | 输入框双向绑定值 | String  |
| ng-disabled   | 是否禁用         | Boolean |
| ng-blur | 失去焦点事件 | Function |
| ng-item | 选项参数 | Object |
| select-class | 自定义样式名 | String |

#### select-config Attributes

| 属性           | 说明         |       类型       | 可选值 | 默认值 |
| -------------- | :----------- | :--------------: | :----: | :----: |
| data           | 下拉数据     |      Array       |   -    |   -   |
| height         | 输入框高度   |      String      |   -   |  28px  |
| panelHeight    | 下拉面板高度 |      String      |   -    |  auto  |
| panelWidth     | 下拉面板宽度 |      String      |   -    | 180px  |
| showLimit      | 匹配前多少条 |      Number      |   -   |   50   |
| selectCallback | 选择回调     | Function（参数item：当前选择对象） |   -   |   -    |

