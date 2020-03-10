### 组件说明

**日期组件**

### Attributes

| 属性       | 说明             | 类型    |
| ---------- | ---------------- | ------- |
| date-config | 选择器属性       | Object  |
| ng-val      | 输入框双向绑定值 | String  |
| min-date    | 日期可选最小值   | String  |
| max-date    | 日期可选最大值   | String  |
| ng-disabled | 是否禁用         | Boolean |

#### date-config 对象属性

| 属性            | 说明               |       类型       |                      可选值                      |   默认值   |
| --------------- | :----------------- | :--------------: | :----------------------------------------------: | :--------: |
| theme           | 主题               |      String      |                        —                         | deep-blue  |
| element         | 自定义样式对象     |      Object      |                        —                         |     —      |
| format          | 日期格式           |      String      | YYYY-MM-DD、YYYY-MM-DD hh:mm:ss、hh:mm:ss、hh:mm | YYYY-MM-DD |
| timeSelectMode  | 时间选择方式       |      Number      |             0：自由选择 1：快速选择              |     0      |
| minDate         | 日期最小值         |      String      |                        —                         |     —      |
| maxDate         | 日期最大值         |      String      |                        —                         |     —      |
| fixedMinDate    | 固定最小值         |      String      |                        —                         |     —      |
| fixedMaxDate    | 固定最大值         |      String      |                        —                         |     —      |
| language        | 语言               |      String      |                        —                         |     —      |
| showTime        | 是否展示时间选择器 |     Boolean      |                        —                         |    true    |
| showClear       | 是否展示清除按钮   |     Boolean      |                        —                         |    true    |
| nowCallback     | 选择当前时间回调   | Function（item） |                        —                         |     —      |
| confirmCallback | 确认选择回调       | Function（item） |                        —                         |     —      |
| clearCallback   | 清除时间回调       | Function（item） |                        —                         |     —      |
| closeCallback   | 关闭日期选择器回调 | Function（item） |                        —                         |     —      |
