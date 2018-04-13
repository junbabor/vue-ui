<template>
    <label class="v-checkbox"
        :class="{
            'is-checked': isChecked,
            'is-disabled': disabled
        }"
    >
        <span class="v-checkbox-input" :class="{'is-focus': focus}">
            <span class="v-checkbox-inner"></span>
            <input type="checkbox" class="v-checkbox-ipt"
                v-model="model"
                :name="name"
                :value="label"
                :disabled="disabled"
                @focus="focus = true"
                @blur="focus = false"
            >
        </span>
        <span class="v-checkbox-label"><slot></slot></span>
    </label>
</template>

<script>

export default {
    name: 'vCheckbox',
    props: {
        value: {},
        label: {},
        name: String,
        size: String,
        disabled: Boolean
    },
    data () {
        return {
            focus: false
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
        },
        isChecked(){
            if (Array.isArray(this.model)) {
                return this.model.indexOf(this.label) > -1;
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