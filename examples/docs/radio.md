<script>
export default {
    data(){
        return {
            radio: 1,
            radio1: 2
        }
    },
    methods: {
    }
}
</script>

# Radio 单选框
---
在一组备选项中进行单选
## 基础使用
<div class="demo-block">
    <div class="block">
        <v-radio v-model="radio" :label="1">选项</v-radio>
        <v-radio v-model="radio" :label="2">选项</v-radio>
    </div>
</div>

::: demo
```html
<v-radio v-model="radio" :label="1">选项</v-radio>
<v-radio v-model="radio" :label="2">选项</v-radio>
```
:::
## 禁用状态
<div class="demo-block">
    <div class="block">
        <v-radio v-model="radio1" :label="1" disabled>选项</v-radio>
        <v-radio v-model="radio1" :label="2" disabled>选项</v-radio>
    </div>
</div>

::: demo
```html
<v-radio v-model="radio1" :label="1" disabled>选项</v-radio>
<v-radio v-model="radio1" :label="2" disabled>选项</v-radio>
```
:::

## Attributes
| 参数               | 说明                                                     | 类型              | 可选值      | 默认值 |
|--------------------|----------------------------------------------------------|-------------------|-------------|--------|
| label | Radio 的 value | string / number / boolean | — | — |
| disabled | 是否禁用状态 | boolean | — | false  |
| name | 原生 name 属性 | string | — | — |