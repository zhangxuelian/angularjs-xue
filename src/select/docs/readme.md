
### 组件说明

下拉选择组件

### Attributes

| 属性         | 说明             | 类型    |
| ------------ | ---------------- | ------- |
| select-config | 下拉属性对象 | Object  |
| set-val | 设置值 | String |
| get-val | 获取值 | String |
| ng-disabled | 是否禁用 | Boolean |
| ng-item | 选择回调第二个参数 | - |

#### select-config Attributes

| 属性           | 说明         |       类型       | 可选值 | 默认值 |
| -------------- | :----------- | :--------------- | :----- | :----- |
| filter | 是否过滤             | Boolean  | - | true   |
| enableEmpty     | 是否可以置空         | Boolean  | - | true   |
| separate        | 是否输入与过滤分离   | Boolean  | - | true   |
| checkbox        | 是否多选             | Boolean  | - | false  |
| position        | 面板位置             | String   | - | down   |
| data            | 下拉数据源           | Array    | - | - |
| valueField      | 对应选项value值      | String   | - | value  |
| textField       | 对应选项字段名       | String   | - | label  |
| textFieldFormat | 自定义显示输入框内容 | Funciotn | - | - |
| height          | 输入框高度           | String   | - | 28px   |
| panelHeight     | 面板高度             | String   | - | 250px  |
| panelWidth      | 面板宽度             | String   | - | 180px  |
| showLimit       | 匹配前n条数据        | Number   | - | 50     |
| inputLabel      | 输入框内容           | String   | - | - |
| myLabel         | 过滤输入框内容       | String   | - | - |
| setValue        | 设置值               | Function | - | - |
| value           | 选项值               | String   | - | - |
| label           | 输入框字段值         | String   | - | - |
| checkRows       | 选中数组             | Array    | - | - |
| checkLimit      | 选中条数限制         | Number   | - | null   |
| checkRowsMap    | 选中记录map          | Object   | - | - |
| onBeforeSelect  | 选择前回调           | Funciton(item) | - | - |
| onSelect        | 选择回调             | Funciton(item) | - | - |
| assign          | 赋值回调             | Funciton(Array) | - | - |
| clearAll        | 清空回调             | Funciton | - | - |
| disabled        | 是否禁用             | Boolean  | - | - |
| cancelWatch     | 取消监听             | Funciton | - | - |
| reset           | 重置                 | Funciton | - | - |
