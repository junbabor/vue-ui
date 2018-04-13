<template>
    <div class="tab">
        <div class="tab-head">
            <span v-for="(tit, idx) in titles" :class="{active: cur == idx}" @click="tabswitch(idx, $event)">{{tit}}</span>
        </div>
        <div class="tab-con">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'vTab',
        props: {
            current: {
                type: Number,
                default: 0
            }
        },
        data() {
            return {
                titles: [],
                cur: 0
            }
        },
        created () {

        },
        mounted() {
            this.cur = this.current;
            let slot = this.$slots.default;
            let cons = [];
            
            for(let i = 0; i < slot.length; i++) {
                if(slot[i].tag == "div") {
                    cons.push(slot[i].elm);
                    this.titles.push(slot[i].data.attrs.name);
                    if(slot[i].elm) {
                        slot[i].elm.className = "hide";
                    };
                }
            }
            cons[this.cur].className = 'show'
        },
        methods: {
            tabswitch (idx, event) {
                this.cur = idx;
                let target = event.target;
                let tabCon = target.parentNode.parentNode.children[1];
                let cons = tabCon.children;
                for(let n = 0; n < cons.length; n++){
                    cons[n].className = 'hide';
                    if(n == this.cur){
                        cons[n].className = 'show';
                    }
                }

                this.$emit('switch', idx)
            }
        }
    }
</script>