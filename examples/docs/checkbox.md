<script>
export default {
    data(){
        return {
            checkbox: [1],
            checkbox1: [2]
        }
    },
    methods: {
    }
}
</script>

# Checkbox 多选框
---
一组备选项中进行多选
## 基础使用
<div class="demo-block">
    <div class="block">
        <v-checkbox v-model="checkbox" :label="1">选项</v-checkbox>
        <v-checkbox v-model="checkbox" :label="2">选项</v-checkbox>
    </div>
</div>

::: demo
```html
<v-checkbox v-model="checkbox" :label="1">选项</v-checkbox>
<v-checkbox v-model="checkbox" :label="2">选项</v-checkbox>
```
:::
## 禁用状态
<div class="demo-block">
    <div class="block">
        <v-checkbox v-model="checkbox1" :label="1" disabled>选项</v-checkbox>
        <v-checkbox v-model="checkbox1" :label="2" disabled>选项</v-checkbox>
    </div>
</div>

::: demo
```html
<v-checkbox v-model="checkbox1" :label="1" disabled>选项</v-checkbox>
<v-checkbox v-model="checkbox1" :label="2" disabled>选项</v-checkbox>
```
:::

## Attributes
| 参数               | 说明                                                     | 类型              | 可选值      | 默认值 |
|--------------------|----------------------------------------------------------|-------------------|-------------|--------|
| label | checkbox 的 value | string / number / boolean | — | — |
| disabled | 是否禁用状态 | boolean | — | false  |
| name | 原生 name 属性 | string | — | — |