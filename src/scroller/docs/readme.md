### 组件说明

**词条滚动组件**

### Attributes

| 属性          | 说明       | 类型   |
| ------------- | ---------- | ------ |
| scroll-config | 选择器属性 | Object |

#### scroll-config 对象属性

| 属性              | 说明                  |       类型       |               可选值               | 默认值 |
| ----------------- | :-------------------- | :--------------: | :--------------------------------: | :----: |
| data              | 可选项数据源          |      Array       |                 —                  |   —    |
| dataType          | 可选项数据源格式      |      Number      | 1:一维数组 2：二维数组 3：数组对象 |   1    |
| backgroundStyle   | 背景样式              |      Object      |                 —                  |   —    |
| highlightStyle    | 高亮样式              |      Object      |                 —                  |   —    |
| itemStyle         | 词条样式              |      Object      |                 —                  |   —    |
| itemHeight        | 词条高度              |      Number      |                 —                  |   35   |
| goIndex           | 滚动至第 n 个词条     |      String      |                 —                  |   -1   |
| goProcess         | 滚动进度              |      String      |                0-1                 |   0    |
| isLoop            | 是否循环播放          |     Boolean      |                 —                  | false  |
| isAutoPlay        | 是否自动播放          |      String      |                 —                  | false  |
| playInterval      | 自动播放时间间隔（s） |      Number      |                 —                  |   1    |
| goIndexCallBack   | 滚动至第 n 个词条回调 | Function（item） |                 —                  |   —    |
| goProcessCallBack | 滚动至某个进度回调    | Function（item） |                 —                  |   —    |
