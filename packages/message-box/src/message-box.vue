<template>
    <transition name="msgbox-fade">
        <div class="message-box" v-show="visible">
            <div class="msgbox-shadow" @click="shadowClick"></div>
            <div class="message-box-wrap">
                <div class="msgbox-title">
                    <span>{{title}}</span>
                    <i class="iconfont icon-close" v-if="showClose" @click="handleClose"></i>
                </div>
                <div class="msgbox-content">
                    <div class="msgbox-status"></div>
                    <div class="msgbox-message">{{message}}</div>
                </div>
                <div class="msgbox-btns" :style="{textAlign: btnAlign}">
                    <v-button type="primary" size="small" @click="query">{{confirmButtonText}}</v-button><v-button size="small" @click="cancel" v-if="showCancelButton">{{cancelButtonText}}</v-button>
                </div>
            </div>
        </div>
    </transition>
</template>
<script>
import vButton from 'vui/button/index';
export default {
    data () {
        return {
            visible: false,         // 是否显示
            title: '', 
            message: '',            // 消息
            type: '',
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            showCancelButton: false,
            callback: null,
            showClose: true,
            shadowClose: false,
            btnAlign: 'center'
        };
    },
    watch: {
        visible (value) {
            if (!value) {
                setTimeout(()=>{
                    this.destroyElement();
                }, 300)
            }
        }
    },
    components: { vButton },
    mounted () {
        this.visible = true;
    },
    methods: {
        destroyElement () {
            document.body.removeChild(this.$el);
        },
        handleClose(){
            this.visible = false;
        },
        shadowClick(){
            if(this.shadowClose){
                this.handleClose()
            }
        },
        query(){
            if(this.type == 'alert'){
                if(this.callback){
                    this.callback()
                }
                this.handleClose()
            }
            if(this.type == 'confirm'){
                this.callback()
                this.handleClose()
            }
        },
        cancel(){
            this.handleClose()
        }
    },
};
</script>