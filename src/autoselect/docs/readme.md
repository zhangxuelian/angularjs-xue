
### 组件说明

**可更改内容的下拉选择框（仅限取明词，不适用取词选对象）**

### Attributes

| 属性         | 说明             | 类型    |
| ------------ | ---------------- | ------- |
| selectConfig | 下拉框属性       | Object  |
| ngVal        | 输入框双向绑定值 | String  |
| ngDisabled   | 是否禁用         | Boolean |

#### selectConfig 对象属性

| 属性           | 说明         |       类型       | 可选值 | 默认值 |
| -------------- | :----------- | :--------------: | :----: | :----: |
| data           | 下拉数据     |      Array       |   —    |   —    |
| height         | 输入框高度   |      String      |   —    |  28px  |
| panelHeight    | 下拉面板高度 |      String      |   —    |  auto  |
| panelWidth     | 下拉面板宽度 |      String      |   —    | 180px  |
| showLimit      | 匹配前多少条 |      Number      |   —    |   50   |
| selectCallback | 选择回调     | Function（item） |   —    |   —    |

