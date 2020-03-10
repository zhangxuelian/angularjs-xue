### 组件说明

**树组件**

### Attributes

| 属性        | 说明       | 类型   |
| ----------- | ---------- | ------ |
| tree-config | 选择器属性 | Object |

#### tree-config Attributes

| 属性          | 说明                                                               |       类型       | 可选值 |  默认值  |
| ------------- | :----------------------------------------------------------------- | :--------------: | :----: | :------: |
| search        | 是否支持搜索                                                       |     Boolean      |   —    |  false   |
| data          | 可选项数据源                                                       |      Array       |   —    |    —     |
| dataMap       | 可选项数据索引                                                     |      Object      |   —    |    —     |
| uniqueId      | 节点唯一标识字段名                                                 |      String      |   —    |    id    |
| childName     | 子节点列表字段名                                                   |      String      |   —    | children |
| showIcon      | 是否展示图标                                                       |     Boolean      |   —    |  false   |
| icon          | 节点图标配置                                                       |      Object      |   —    |    —     |
| showCheckbox  | 是否展示复选框                                                     |     Boolean      |   —    |  false   |
| checkOnClick  | 是否在点击节点时同时(取消)勾选节点，仅当 showCheckbox 为 true 生效 |     Boolean      |   —    |   true   |
| expandOnClick | 是否在选中树节点时展开子列表                                       |     Boolean      |   —    |  false   |
| accordion     | 是否手风琴模式                                                     |     Boolean      |   —    |  false   |
| expandAll     | 是否展开所有节点                                                   |     Boolean      |   —    |  false   |
| showLine      | 是否展示连接线                                                     |     Boolean      |   —    |   true   |
| nodeName      | 节点标题字段名                                                     |      String      |   —    |   name   |
| checkNodes    | 定位选中指定节点                                                   |      String      |   —    |    —     |
| currentNode   | 勾选的节点数组                                                     |      Array       |   —    |   name   |
| lazy          | 是否懒加载子节点数据                                               |     Boolean      |   —    |  fasle   |
| clickNode     | 单击树节点时回调                                                   | Function（item） |   —    |    —     |
| checkNode     | 取消勾选的事件回调                                                 | Function（item） |   —    |    —     |
| beforeClick   | 单击树节点之前的事件回调                                           | Function（item） |   —    |    —     |
| beforeCheck   | 勾选、取消勾选树节点之前的事件回调                                 | Function（item） |   —    |    —     |
| loadData      | 加载子节点数据的方法，仅当 lazy 属性为 true 时生效                 | Function（item） |   —    |    —     |
| completeTree  | 树节点构建完成时回调                                               | Function（item） |   —    |    —     |
