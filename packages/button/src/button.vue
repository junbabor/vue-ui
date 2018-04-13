<template>
    <button
        class="v-button"
        @click="handleClick"
        :disabled="disabled"
        :class="[
            type ? 'v-button-' + type : '',
            size ? 'v-button-' + size : '',
            {
                'is-disabled': disabled,
                'is-round': round
            }
        ]"
        :type="nativeType"
    >
        <slot></slot>
    </button>
</template>

<script>

export default {
    name: 'vButton',
    props: {
        type: {
            type: String,
            default: 'default'
        },
        size: String,
        icon: {
            type: String,
            default: ''
        },
        nativeType: {
            type: String,
            default: 'button'
        },
        disabled: Boolean,
        round: Boolean
    },
    data () {
        return {
            
        }
    },
    
    methods: {
        handleClick(evt){
            this.$emit('click', evt)
        }
    }
}
</script>