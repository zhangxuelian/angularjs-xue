### xue-tabs 

选项卡切换组件

### xueTabsWrap Attributes

| 属性         | 说明             | 类型      | 可选值 | 默认值 |
| ------------ | ---------------- | ------- | ------------ | ------------ |
| type | tab类型 | String | border-card/card | null |
| tab-position | tab位置 | Object | top/right/bottom/left | top |
| ng-model | 当前选中tab | String | - | - |

### xueTab Attributes
| 属性         | 说明             | 类型      | 可选值 | 默认值 |
| ------------ | ---------------- | ------- | ------------ | ------------ |
| label | tab选项值 | String | border-card/card | null |
| value | tab选项value | String | top/right/bottom/left | top |
| disabled | 是否禁用 | Boolean |  | false |
| closable |  |  |  |  |
| select | 选择回调 | Fucntion |  |  |
| deselect | 取消选中回调 | Function |  |  |