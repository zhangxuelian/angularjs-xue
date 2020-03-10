
### 组件说明

消息组件

### Attributes

| 属性         | 说明             | 类型    |
| ------------ | ---------------- | ------- |
| notice-config | 消息属性对象 | Object  |

#### notice-config Attributes

| 属性           | 说明         |       类型       | 可选值 | 默认值 |
| -------------- | :----------- | :--------------- | :----- | :----- |
| modalId | 消息提示窗口id | String | - | null |
| title | 滑过显示标题 | String | - | - |
| width          | 最大值       |      String      | 提示容器宽  |  366px  |
| height         | 最小值       |      String      | 提示容器高  |  266px  |
| count   | 总提示数量，为0不显示 |      Number      |   -   |  0  |
| selectTabId | id |      String      |   -   | - |
| tabItem | tab项 |      Array      |   -   |   -   |
| tabMark | 消息展示形式 | String | number,cricle |   number   |
| showNotice | 是否显示提示内容 | Boolean | - | true |
| formatField | 字段名格式化 | Object | - | - |
| listMaxLen | 消息展示数 | Number | - | 10 |
| noticeList | 提示内容列表 | Array | - | - |
| showNoticeType | 是否显示提示分类(与提示内容列表互斥) | Boolean | - | false |
| noticeTypeList | 提示分类列表 | Array | - | - |
| emptyNoticeTip | 自定义无消息提示语 | String | - | 暂没有新消息 |
| showFooter | 是否显示底部操作 | Boolean | - | - |
| footerContent | 底部操作内容数组 | Array | - | - |
| tabItemClick | tab项点击回调 | Funciton | - | - |
| itemClick | 列表项点击回调 | Funciton | - | - |
| loadNextPage | 滚动加载下一页回调 | Funciton | - | - |
| listHide | 消息列表消失回调 | Funciton | - | - |
| listShow | 消息列表显示回调 | Function | - | - |

