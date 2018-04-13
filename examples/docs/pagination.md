<script>
    export default {
        methods: {
            handelPageChange(page){
                console.log('当前是第 ' + page + ' 页')
            }
        }
    }
</script>
<style>
.block .v-pagination {
    float: right;
}
.demonstration {
    line-height: 30px;
    color: #8492a6;
}
.v-pagination .iconfont {
    font-size: 16px !important;
}
</style>

# Pagination 分页
---
当数据量过多时，使用分页分解数据。

## 基础使用
<div class="demo-block">
    <div class="base-block">
        <v-pagination :total="300" :current-page="1" :display="10" @page-change="handelPageChange"></v-pagination>
    </div>
</div>

::: demo
```html
<v-pagination :total="300" :current-page="1" :display="10" @page-change="handelPageChange"></v-pagination>
```
:::

## 附加功能
根据场景需要，可以添加其他功能模块。
<div class="demo-block">
    <div class="block">
        <span class="demonstration">显示首页、末页</span>
        <v-pagination :total="300" :current-page="1" :display="10" layout="first, last"></v-pagination>
    </div>
    <div class="block">
        <span class="demonstration">显示总数</span>
        <v-pagination :total="300" :current-page="1" :display="10" layout="total"></v-pagination>
    </div>
    <div class="block">
        <span class="demonstration">直接前往</span>
        <v-pagination :total="300" :current-page="1" :display="10" layout="total, jumper"></v-pagination>
    </div>
</div>

::: demo
```html
    <div class="block">
        <span class="demonstration">显示首页、末页</span>
        <v-pagination :total="300" :current-page="1" :display="10" layout="first, last"></v-pagination>
    </div>
    <div class="block">
        <span class="demonstration">显示总数</span>
        <v-pagination :total="300" :current-page="1" :display="10" layout="total"></v-pagination>
    </div>
    <div class="block">
        <span class="demonstration">直接前往</span>
        <v-pagination :total="300" :current-page="1" :display="10" layout="total, jumper"></v-pagination>
    </div>
```
:::

## Attributes
| 参数               | 说明                                                     | 类型              | 可选值      | 默认值 |
|--------------------|----------------------------------------------------------|-------------------|-------------|--------|
| display | 每页显示条目个数 | Number | — | 10 |
| total | 总条目数 | Number | — | — |
| current-page | 当前页数，支持 .sync 修饰符 | Number | — | 1 |
| layout | 组件布局，子组件名用逗号分隔| String | `total`, `jumper`, `first`, `last` | ''  |
| prev-text | 替代图标显示的上一页文字 | string | — | — |
| next-text | 替代图标显示的下一页文字 | string | — | — |

## Events
| 事件名称 | 说明 | 回调参数 |
|---------|--------|---------|
| page-change | currentPage 改变时会触发 | 当前页`currentPage` |
