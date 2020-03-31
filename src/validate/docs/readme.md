### 组件说明

**校验组件**

### Attributes

| 属性            | 说明       | 类型   |
| --------------- | ---------- | ------ |
| xue-validate | 选择器属性 | Object |

#### xue-validate 对象属性

| 属性          | 说明                     |  类型   |               可选值               |  默认值  |
| ------------- | :----------------------- | :-----: | :--------------------------------: | :------: |
| required      | 是否必填                 | Boolean |                 —                  |   true   |
| requiredTip   | 必填时的错误提示         | String  |                 —                  | 不能为空 |
| regex         | 正则匹配                 | String  |                 —                  |    —     |
| errorTipPos   | 错误提示信息位置         | String  |            bottom/right            |  bottom  |
| errorTip      | 错误提示信息             | String  |                 —                  |    —     |
| hasErrorTip   | 是否显示错误信息         | Boolean |                 —                  |   true   |
| validType     | 校验元素的类型           | String  | input/select/datepicker/radio/sign |  input   |
| hasModalTip   | 是否弹窗展示错误信息     | Boolean |                 —                  |  false   |
| iconStyle     | 图标样式                 | Object  |                 —                  |    —     |
| msgStyle      | 提示消息 div 样式        | Object  |                 —                  |    —     |
| lblStyle      | 提示消息 label 样式      | Object  |                 —                  |    —     |
| parentStyle   | 提示消息 div 父节点样式  | Object  |                 —                  |    —     |
| equalTo       | 输入值必须和 #field 相同 | String  |                 —                  |    —     |
| equalToTip    | 不相等时的提示信息 ID    | String  |                 —                  |    —     |
| unequalToTip  | 相等时的提示信息         | String  |                 —                  |    —     |
| maxlen        | 字符串最大的长度         | Number  |                 —                  |    —     |
| maxlenTip     | 超过最大长度时的提示信息 | String  |                 —                  |    —     |
| minlen        | 字符串最小的长度         | Number  |                 —                  |    —     |
| minlenTip     | 超过最小长度时的提示信息 | String  |                 —                  |    —     |
| judge         | 特殊的判断要求           | String  |      idCard/caseCode/dutyRule      |    —     |
| gxMsgId       | 消息提示元素唯一标识     | String  |                 —                  |    —     |
| hasFirstValid | 是否首次校验             | Boolean |                 —                  |   true   |
