<template>
    <label class="v-radio" :class="{'is-checked': model == label, 'is-disabled': disabled}">
        <span class="v-radio-input">
            <span class="v-radio-inner"></span>
            <input type="radio" class="v-radio-ipt" v-model="model" :name="name" :value="label" :disabled="disabled">
        </span>
        <span class="v-radio-label"><slot></slot></span>
    </label>
</template>

<script>

export default {
    name: 'vRadio',
    props: {
        value: {},
        label: {},
        name: String,
        size: String,
        disabled: Boolean
    },
    data () {
        return {
            
        }
    },
    computed: {
        model: {
            get(){
                return this.value
            },
            set(val){
                this.$emit('input', val);
            }
        }
    },
    methods: {
        handleClick(evt){
            this.$emit('click', evt)
        }
    }
}
</script>