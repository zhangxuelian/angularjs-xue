
### 组件说明

步骤条组件

### Attributes

| 属性         | 说明             | 类型    |
| ------------ | ---------------- | ------- |
| steps-config | 步骤条属性对象 | Object  |
| params | 步骤条参数 |  |
| ng-value | 步骤条值 | String |

#### steps-config Attributes

| 属性           | 说明         |       类型       | 可选值 | 默认值 |
| -------------- | :----------- | :--------------- | :----- | :----- |
| theme | 主题颜色 | String | blue-theme,green-theme | blue-theme |
| size           | 步骤条大小 | String | small,large            | - |
| direction      | 步骤条布局 | String | horizontal:水平布局,vertical：垂直布局 | horizontal |
| alignCenter    | 是否居中展示 | Boolean | - | false |
| iconStyle      | icon的展示形式 | String | num：默认,statusNum：带状态的数字,strokeStatus：镂空状态,fillStatus：填充状态,point：小点式,img：图片,iconfont：字体图标 | num |
| idField        | 键值字段名 | String | - | code |
| nameField      | 展示文字字段名 | String | - | title |
| descField      | 描述文字字段名 | String | - | description |
| options        | 步骤条项 | Array | - |            |
| changeCallback | 改变回调 | Function | - | - |
