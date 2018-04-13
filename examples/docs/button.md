<style>

</style>

# Button 按钮
---
常用的操作按钮。
## 基础使用
<div class="demo-block">
    <div class="block">
        <v-button>默认按钮</v-button>
        <v-button type="primary">主要按钮</v-button>
        <v-button type="success">成功按钮</v-button>
        <v-button type="danger">危险按钮</v-button>
        <v-button type="warning">警告按钮</v-button>
        <v-button type="info">信息按钮</v-button>
    </div>
    <div class="block">
        <v-button round>默认按钮</v-button>
        <v-button type="primary" round>主要按钮</v-button>
        <v-button type="success" round>成功按钮</v-button>
        <v-button type="danger" round>危险按钮</v-button>
        <v-button type="warning" round>警告按钮</v-button>
        <v-button type="info" round>信息按钮</v-button>
    </div>
</div>

::: demo
```html
<div class="block">
    <v-button>默认按钮</v-button>
    <v-button type="primary">主要按钮</v-button>
    <v-button type="success">成功按钮</v-button>
    <v-button type="danger">危险按钮</v-button>
    <v-button type="warning">警告按钮</v-button>
    <v-button type="info">信息按钮</v-button>
</div>
<div class="block">
    <v-button round>默认按钮</v-button>
    <v-button type="primary" round>主要按钮</v-button>
    <v-button type="success" round>成功按钮</v-button>
    <v-button type="danger" round>危险按钮</v-button>
    <v-button type="warning" round>警告按钮</v-button>
    <v-button type="info" round>信息按钮</v-button>
</div>
```
:::
## 禁用状态
<div class="demo-block">
    <div class="block">
        <v-button disabled>默认按钮</v-button>
        <v-button type="primary" disabled>主要按钮</v-button>
        <v-button type="success" disabled>成功按钮</v-button>
        <v-button type="danger" disabled>危险按钮</v-button>
        <v-button type="warning" disabled>警告按钮</v-button>
        <v-button type="info" disabled>信息按钮</v-button>
    </div>
</div>

::: demo
```html
<v-button disabled>默认按钮</v-button>
<v-button type="primary" disabled>主要按钮</v-button>
<v-button type="success" disabled>成功按钮</v-button>
<v-button type="danger" disabled>危险按钮</v-button>
<v-button type="warning" disabled>警告按钮</v-button>
<v-button type="info" disabled>信息按钮</v-button>
```
:::

## 不同尺寸
<div class="demo-block">
    <div class="block">
        <v-button>默认按钮</v-button>
        <v-button size="medium">中等按钮</v-button>
        <v-button size="small">小型按钮</v-button>
        <v-button size="mini">超小按钮</v-button>
    </div>
</div>

::: demo
```html
<v-button>默认按钮</v-button>
<v-button size="medium">中等按钮</v-button>
<v-button size="small">小型按钮</v-button>
<v-button size="mini">超小按钮</v-button>
```
:::


## Attributes
| 参数               | 说明                                                     | 类型              | 可选值      | 默认值 |
|--------------------|----------------------------------------------------------|-------------------|-------------|--------|
| size | 尺寸 | string | medium / small / mini | — |
| type | 类型 | string | primary / success / warning / danger / info | — |
| round | 是否圆形按钮 | boolean | — | false |
| disabled | 是否禁用状态 | boolean | — | false  |
| native-type | 原生 type 属性 | string | button / submit / reset | button |