<template>
    <div class="v-pagination" :style="{textAlign: align}">
        <ul v-if="total > display">
            <li v-if="current > 1 && layout.indexOf('first') != -1">
                <a href="javascript: void(0);" @click="setCurrent(1)">首页</a>
            </li>
            <li v-if="current > 1">
                <a href="javascript: void(0);" @click="setCurrent(current - 1)">
                    {{prevText}}
                    <i class="iconfont icon-arrow-left" v-if="prevText == ''"></i>
                </a>
            </li>
            <li class="ellipsis" v-if="pages[0] > 1">...</li>
            <li v-for="p in pages" :class="{current: current == p}">
                <a href="javascript: void(0);" @click="setCurrent(p)">{{p}}</a>
            </li>
            <li class="ellipsis" v-if="pages[pages.length - 1] < pageLength">...</li>
            <li v-if="current < pageLength">
                <a href="javascript: void(0);" @click="setCurrent(current + 1)">
                    {{nextText}}
                    <i class="iconfont icon-arrow-right" v-if="nextText == ''"></i>
                </a>
            </li>
            <li v-if="current < pageLength && layout.indexOf('last') != -1">
                <a href="javascript: void(0);" @click="setCurrent(pageLength)">末页</a>
            </li>
            <li v-if="layout.indexOf('total') != -1">
                <span class="total">共 {{pageLength}} 页</span>
            </li>
            <li class="go-page" v-if="layout.indexOf('jumper') != -1">
                前往<input type="text" class="page-ipt" v-model="pageValue" @keyup.enter="setCurrent(pageValue)" @change="setCurrent(pageValue)">页
            </li>
        </ul>
    </div>
</template>

<script>

export default {
    name: 'vPagination',
    props: {
        currentPage: {
            type: Number,
            default: 1
        },
        display: {
            type: Number,
            default: 10
        },
        total: {
            type: Number
        },
        pagegroup: {
            type: Number,
            default: 5,
        },
        align: {
            type: String,
            default: 'center'
        },
        layout: {
            default: ''
        },
        prevText: {
            default: ''
        },
        nextText: {
            default: ''
        },
    },
    data () {
        return {
            current: this.currentPage,
            pageList: [],
            pageValue: ''
        }
    },
    created () {
        this.pageLength = Math.ceil(this.total / this.display)
    },
    watch: {
        currentPage (a, b) {
            this.current = a
        }
    },
    computed: {
        pages () {
            this.pageLength = Math.ceil(this.total / this.display);

            let page = [];
            // console.log(this.current + ' -' + this.pagegroup)
            if(this.current < this.pagegroup){  //如果当前页 小于 要显示的页数
                //总页数和要显示的页数，哪个大就显示多少页
                let i = Math.min(this.pagegroup, this.pageLength);
                while(i){
                    page.unshift(i--);
                }
            }else{ //当前页数大于显示页数
                let middle = this.current - Math.floor(this.pagegroup / 2 ); //从哪里开始
                let n = this.pagegroup;
                if(middle > (this.pageLength - this.pagegroup)){
                    middle = (this.pageLength - this.pagegroup) + 1
                }
                while(n--){
                    page.push(middle++);
                }
            }
            return page
        }
    },
    methods: {
        setCurrent (idx) {
            if(idx == '' || idx > this.pageLength || idx < 1 || isNaN(idx) || idx == this.current){
                return false
            }
            this.current = +idx;
            this.$emit('page-change', this.current);
        },
    }
}
</script>