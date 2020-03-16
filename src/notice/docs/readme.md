
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
| title | 滑过显示标题 | String | - | 消息提醒 |
| iconClassName | 组件图标(字体图标样式名) | String | - | xui-icon-md-notifications-outline |
| width          | 提示容器宽  |      String      | - |  366px  |
| height         | 提示容器高  |      String      | - |  266px  |
| count   | 总提示数量，为0不显示 |      Number      |   -   |  0  |
| selectTabId | 选中tab项id |      String      |   -   | - |
| tabItem | tab项 |      Array      |   -   |   -   |
| tabMark | 消息展示样式 | String | 数字:number,原点:cricle |   number   |
| formatField | 字段名格式化 | Object | - | - |
| listMaxLen | 消息每页条数 | Number | - | 10 |
| noticeList | 消息内容列表 | Array | - | - |
| showNoticeType | 是否显示消息分类列表(与消息内容列表互斥) | Boolean | - | false |
| noticeTypeList | 消息分类列表 | Array | - | - |
| emptyNoticeTip | 无消息提示文案 | String | - | 暂没有新消息 |
| showFooter | 是否显示底部操作 | Boolean | - | true |
| footerContent | 底部操作项数组 | Array | - | [{name:'',<br />click:funciton(){}}] |
| tabItemClick | tab项点击回调 | Funciton(item) | - | - |
| itemClick | 列表项点击回调 | Funciton(item) | - | - |
| loadNextPage | 滚动加载下一页回调 | Funciton | - | - |
| listHide | 消息列表消失回调 | Funciton | - | - |
| listShow | 消息列表显示回调 | Function | - | - |



