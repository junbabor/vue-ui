<script>
export default {
    data(){
        return {
        }
    },
    methods: {
        switchTab(idx){
            this.$alert('当前选项卡序号为：' + idx)
        }
    }
}
</script>

# Tab 选项卡
---
分隔内容上有关联但属于不同类别的数据集合。
## 基础使用
<div class="demo-block">
    <div class="block">
        <v-tab>
            <div name="选项1">
                内容1
            </div>
            <div name="选项2">
                内容2
            </div>
        </v-tab>
    </div>
</div>

::: demo
```html
<v-tab>
    <div name="选项1">
        内容1
    </div>
    <div name="选项2">
        内容2
    </div>
</v-tab>
```
:::
## 默认显示
可以通过 `current` 属性实现默认显示的选项卡序号，默认值：0
<div class="demo-block">
    <div class="block">
        <v-tab :current="1">
            <div name="选项1">
                内容1
            </div>
            <div name="选项2">
                内容2
            </div>
        </v-tab>
    </div>
</div>

::: demo
```html
<v-tab :current="1">
    <div name="选项1">
        内容1
    </div>
    <div name="选项2">
        内容2
    </div>
</v-tab>
```
:::

## 切换事件
 `switch` 方法返回切换后的选项卡序号
<div class="demo-block">
    <div class="block">
        <v-tab @switch="switchTab">
            <div name="选项1">
                内容1
            </div>
            <div name="选项2">
                内容2
            </div>
        </v-tab>
    </div>
</div>

::: demo
```html
<v-tab @switch="switchTab">
    <div name="选项1">
        内容1
    </div>
    <div name="选项2">
        内容2
    </div>
</v-tab>
<script>
export default {
    methods: {
        switchTab(idx){
            this.$alert('当前选项卡序号为：' + idx)
        }
    }
}
</script>
```
:::



## Attributes
| 参数               | 说明                                                     | 类型              | 可选值      | 默认值 |
|--------------------|----------------------------------------------------------|-------------------|-------------|--------|
| current | 默认显示的选项卡序号 | number | — | 0 |


## Events
| 事件名称 | 说明 | 回调参数 |
|---------|--------|---------|
| switch | 切换选项卡时会触发 | 当前选项卡的序号 |
