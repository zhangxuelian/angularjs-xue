
### 组件说明

计数器组件

### Attributes

| 属性         | 说明             | 类型    |
| ------------ | ---------------- | ------- |
| counter-config |  计数器属性对象       | Object  |
| ng-number      | 计数器值   | Number  |
| params   | 是否禁用         | Boolean |

#### counter-config Attributes

| 属性           | 说明         |       类型       | 可选值 | 默认值 |
| -------------- | :----------- | :--------------- | :----- | :----- |
| type | 输入框类型（文本，输入框） | Number | 1:纯文本，2：input输入框 | 1 |
| max            | 最大值       |      Number       |   -   |  100    |
| min            | 最小值       |      Number      |   -   |  0  |
| step    | 步进值 |      Number      |   -   |  1  |
| precision    | 小数精度,不能小于步进精度 |      Number      |   -   |  0(默认为步进精度)  |
| disabled     | 是否禁用 |      Boolean      |   -   | false  |
| required      | 是否必填 |      Boolean      |   -   |   true   |
| size | 计数器大小 | String | large,small |   -   |
| suffix | 数据单位 | String | - | - |
| trigger | 输入框触发方式 | String | blur,change(type为2生效) | change |
| change | change事件 | Funciton（number,params） | - | - |
| blur | blur事件 | Funciton（number,params） | - | - |
| focus | focus事件 | Funciton（number,params） | - | - |
| changeCallback | 数据改变回调 | Funciton（number,params） | - | - |

