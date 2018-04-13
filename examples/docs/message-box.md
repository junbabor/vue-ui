<script>
export default {
    methods: {
        open(){
            this.$alert('消息内容', '标题', {
                callback: () => {
                    console.log('alert')
                }
            });
        },
        open2(){
            this.$confirm('消息内容', '标题', {
                callback: () => {
                    console.log('确定')
                }
            })
        }
    }
}
</script>

# MessageBox 弹框
---
模拟系统的消息提示框而实现的一套模态对话框组件，用于消息提示、确认消息和提交内容。

## 弹出消息alert
<div class="demo-block">
    <div class="block">
        <v-button type="primary" @click="open">点击打开 alert</v-button>
    </div>
</div>

::: demo
```html
<template>
    <v-button type="primary" @click="open">点击打开 alert</v-button>
</template>

<script>
export default {
    methods: {
        open() {
            this.$alert('消息内容', '标题');
        }
    }
}
</script>
```
:::

## 确认消息
<div class="demo-block">
    <div class="block">
        <v-button type="primary" @click="open2">点击打开 confirm</v-button>
    </div>
</div>

::: demo
```html
<template>
    <v-button type="primary" @click="open2">点击打开 confirm</v-button>
</template>

<script>
export default {
    methods: {
        open2() {
            this.$confirm('消息内容', '标题', {
                callback: () => {
                    console.log('确定')
                }
            })
        }
    }
}
</script>
```
:::

## Options
| 参数               | 说明                                                     | 类型              | 可选值      | 默认值 |
|--------------------|----------------------------------------------------------|-------------------|-------------|--------|
| title | 标题 | string | — | — |
| message | 消息正文内容 | string | — | — |
| callback | 关闭后的回调 | function | — | — |
| showClose | 是否显示右上角关闭按钮| boolean | — | true  |
| shadowClose | 是否可通过点击遮罩关闭 | boolean | — | false |
| confirmButtonText| 确定按钮的文本内容 | string | — | '确定' |
| cancelButtonText| 取消按钮的文本内容 | string | — | '取消' |
| showCancelButton| 是否显示取消按钮 | boolean | — | false |