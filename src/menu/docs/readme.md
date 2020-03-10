### 组件说明

**菜单组件**

### Attributes

| 属性        | 说明       | 类型   |
| ----------- | ---------- | ------ |
| menu-config | 选择器属性 | Object |

#### menu-config 对象属性

| 属性             | 说明                 |       类型       | 可选值 |   默认值    |
| ---------------- | :------------------- | :--------------: | :----: | :---------: |
| data             | 可选项数据源               |      Array       |   —    |      —      |
| search           | 是否支持搜索         |     Boolean      |   —    |    false    |
| autoShrink       | 是否自动搜索         |     Boolean      |   —    |    true     |
| setFirst         | 是否默认选中第一项   |     Boolean      |   —    |    true     |
| showOneDimenIcon | 是否展示一级菜单图标 |     Boolean      |   —    |    true     |
| oneDimenName     | 一级菜单标题字段名   |      String      |   —    |      —      |
| oneDimenIcon     | 一级菜单图标字段名   |      String      |   —    |      —      |
| childrenName     | 二维数组对象名       |      String      |   —    |      —      |
| twoDimenName     | 二级菜单标题字段名   |      String      |   —    |      —      |
| twoDimenIcon     | 二级菜单图标字段名   |      String      |   —    |      —      |
| routerId         | 导航菜单 ID 字段名   |      String      |   —    |     id      |
| selectId         | 选中导航菜单 ID      |      String      |   —    |    null     |
| imagePrefix      | 图片前缀             |      String      |   —    | imagestore/ |
| imageSuffix      | 图片后缀             |      String      |   —    |    .jpg     |
| clickRouter      | 导航菜单点击回调     | Function（item） |   —    |      —      |
