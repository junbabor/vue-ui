<template>
    <div class="docs-demo-wrapper">
        <div :style="{height: isExpand ? 'auto' : '0'}" class="demo-container">
            <div span="14">
                <div class="docs-demo docs-demo--expand">
                    <div class="highlight-wrapper">
                        <slot name="highlight"></slot>
                    </div>
                </div>
            </div>
        </div>
        <span class="docs-trans docs-demo__triangle" @click="toggle">{{isExpand ? '隐藏代码' : '显示代码'}}</span>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isExpand: false
        };
    },
    methods: {
        toggle() {
            this.isExpand = !this.isExpand;
        }
    }
};
</script>

<style lang="scss">
p {
    color: #666;
}
.demo-block {
    margin-top: 15px;
    border: 1px solid #eee;
    .block {
        padding: 20px;
        overflow: hidden;
        border-bottom: 1px solid #eee;
        &:last-child {
            border-bottom: none;
        }
    }
}

.demo-container {
    transition: max-height .3s ease;
    overflow: hidden;
}
.docs-demo {
    width: 100%;
    height: auto;
    box-sizing: border-box;
    font-size: 14px;
    border-top: none;
    pre code {
        font-family: Consolas,Menlo,Courier,monospace;
        line-height: 22px;
        border: none;
    }
}
.docs-trans {
    display: block;
    text-align: center;
    color: #409eff;
    font-size: 12px;
    padding: 10px 0;
    cursor: pointer;
    border: 1px solid #eee;
    border-top: none;
    &:hover {
        background-color: #f2fafd;
    }
}

.docs-demo__code,
.highlight-wrapper,
.docs-demo__meta {
    overflow-y: auto;
}


.docs-demo__code {
    border-bottom: 1px solid #eee;
}
.docs-demo.docs-demo--expand .docs-demo__meta {
    border-bottom: 1px dashed #e9e9e9;
}

.docs-demo.docs-demo--expand .docs-demo__triangle {
    transform: rotate(180deg);
}

.highlight-wrapper {
    display: none;
    p,
    pre {
        margin: 0;
    }

    .hljs {
        padding: 0;
    }
}

.docs-demo.docs-demo--expand .highlight-wrapper {
    display: block;
}

.docs-demo__code__mobi {
    height: 620px;
    margin: 20px 0;
}

.docs-demo__code__mobi__header {
    border-radius: 4px 4px 0 0;
    background: -webkit-linear-gradient(rgba(55,55,55,.98),#545456);
    background: linear-gradient(rgba(55,55,55,.98),#545456);
    text-align: center;
    padding: 8px;

    img {
        width: 100%;
    }

    .url-box {
        height: 28px;
        line-height: 28px;
        color: #fff;
        padding: 0 3px;
        background-color: #a2a2a2;
        margin: 10px auto 0;
        border-radius: 4px;
        white-space: nowrap;
        overflow-x: auto;
    }
}

.docs-demo__code__mobi__content {
    iframe {
        width: 100%;
        border: 0;
        height: 548px;
    }
}
.hljs-built_in, .hljs-doctag, .hljs-keyword, .hljs-name, .hljs-section, .hljs-selector-class, .hljs-selector-id, .hljs-selector-tag, .hljs-strong, .hljs-tag, .hljs-title, .hljs-type {
    color: #3182bd;
}
.hljs-addition, .hljs-meta, .hljs-string, .hljs-symbol, .hljs-template-tag, .hljs-template-variable {
    color: #756bb1;
}

.base-block {
    padding: 20px;
}

.table {
    width: 100%;
    border-spacing: 0;
    th {
        text-align: left;
        padding: 15px;
        border-bottom: 2px solid #eee;
        background-color: #f1f1f1;
    }
    td {
        padding: 15px;
        border-bottom: 1px solid #eee;
        color: #666;
    }
}
</style>

