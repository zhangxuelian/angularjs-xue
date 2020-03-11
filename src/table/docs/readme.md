
### 组件说明

表格组件

### Attributes

| 属性         | 说明             | 类型    |
| ------------ | ---------------- | ------- |
| table-config | 表格属性对象 | Object  |

#### table-config Attributes

| 属性           | 说明         |       类型       | 可选值 | 默认值 |
| -------------- | :----------- | :--------------- | :----- | :----- |
| colunms | 表头                            | Array    | - | -                           |
| defaultNull | 表格默认显示文字                | String   | - | 无                          |
| pagination      | 是否显示分页                    | Boolean  | - | true                        |
| maxSize         | 分页最大选项数                  | NUmber   | - | 5                           |
| page            | 当前页码                        | Number   | - | 1                           |
| pagesize        | 是否显示分页信息                | Boolean  | - | - |
| size            | 每页条数                        | Number   | - | 10                          |
| pageList        | 每页条数切换的配置              | Array    | - | [10, 25, 50, 100, 150, 200] |
| total           | 数据总数                        | Number   | - | 0 |
| optConfig       | 操作列配置                      | Array    | - | - |
| optConfigExt    | 扩展操作列配置                  | Array    | - | - |
| uniqueId        | 唯一标识字段名                  | String   | - | id                          |
| noDataText      | 无数据时显示文字                | String   | - | 暂无数据                    |
| showIndex       | 是否显示序号                    | Boolean  | - | false                       |
| indexTitle      | 序号表头标题                    | String   | - | - |
| rows            | 表记录项                        | Array    | - | - |
| checkbox        | 是否多选                        | Boolean  | - | false                       |
| radio           | 是否单选                        | Boolean  | - | false                       |
| selectAll       | 是否全选                        | Boolean  | - | false                       |
| checkRows       | 选中记录                        | Array    | - | - |
| checkRowsMap    | 选中记录map                     | Object   | - | - |
| order           | 是否排序                        | Boolean  | - | false                       |
| orderColumn     | 排序列                          | String   | - |                             |
| desc            | 排序规则是否递减                | Boolean  | - | false                       |
| tableHover      | 是否显示滑过变色效果            | Boolean  | - | true                        |
| showTableCol    | 是否显示选项                    | Boolean  | - | false                       |
| drag            | 是否支持拖动表格列宽            | Boolean  | - | false |
| selectAllColumn | 是否全选列显示                  | Boolean  | - | true |
| rowDbclick      | 行双击回调                      | Funciton(参数row:当前行数据) | - | - |
| rowClick        | 行单击回调                      | Funciton(参数row:当前行数据) | - | - |
| turnPage        | 页码跳转回调                    | Funciton | - | - |
| resetPage       | 重置page为1，并阻止turnPage回调 | Funciton | - | - |
| toolbar         | 工具栏（详见工具栏说明）        | Object   | - | - |

### toolbar Attributes

| 属性           | 说明         |       类型       | 可选值 | 默认值 |
| -------------- | :----------- | :--------------- | :----- | :----- |
| show | 是否显示                        | Boolean | - |false|
| title | 表头 | String | - |列表|
| tools | 操作栏数组 | Array | - ||

### tools Attributes

| 属性           | 说明         | 类型     | 可选值 | 默认值 |
| -------------- | :----------- | :------- | :----- | :----- |
| text           | 操作文本     | String   | -      | false  |
| icon           | 图标样式     | String   | -      | 列表   |
| noPermission   | 是否权限控制 | Boolean  | -      | false      |
| permissionCode | 权限控制名称 | String   | -      | -      |
| callback       | 操作回调     | Function | -      | -      |