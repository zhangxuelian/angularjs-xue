#### 组件说明

  复选组件


#### xue-checkbox(用于table/select组件) Attributes

| 属性         | 说明             | 类型    |
| ------------ | ---------------- | ------- |
| ng-checked   | 是否选中        |   Boolean|


#### xue-multi-checkbox(用于树组件) Attributes

| 属性         | 说明             | 类型    | 可选值    |默认值    |
| ------------ | ---------------- | ------- |------- |------- |
| multi-type   | 是否选中        | string | 1：勾选 2：部分选中| -|
| ng-disabled   | 是否禁用       |   Boolean| -|  -|


#### xue-checkbox-group Attributes

| 属性         | 说明             | 类型 | 默认值 |
| ------------ | ---------------- | ------- | ------------ |
| ng-model | 复选组选中数组 | Array | [] |
| ng-change | 选中状态发生变化 | Function(选中数组ngModel) | - |


#### xue-checkbox-item Attributes

| 属性         | 说明             | 类型    |
| ------------ | ---------------- | ------- |
| ng-checked   | 是否选中        |   Boolean|
| value | 复选框value值 | String |
| label | 复选框文本值 | String |
| ng-disabled | 是否禁用 | Boolean |
| checkbox-click | 点击回调 | Function(选中状态checked) |