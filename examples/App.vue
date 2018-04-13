<template>
    <div id="app">
        <div class="wrap">
            <div class="side">
                <side-nav></side-nav>
            </div>
            <div class="space"></div>
            <div class="main">
                <router-view/>
            </div>
        </div>
    </div>
</template>

<script>
import sideNav from 'common/nav'
export default {
    name: 'App',
    components: { sideNav }
}
</script>

<style lang="scss">
body {
    margin: 0;
    font-size: 14px;
    color: #333;
    font-family: '微软雅黑';
    background-color: #ececec;
}
a {
    color: #666;
    text-decoration: none;
}
h1, h2 {
    margin: 0;
}
.wrap {
    display: table;
    margin: 0 auto;
    padding: 50px 0;
    width: 1170px;
}

.side {
    display: table-cell;
    width: 200px;
    background-color: #fff;
    box-shadow: 0 0 10px #ccc;
    vertical-align: top;
}
.space {
    display: table-cell;
    width: 20px;
}
.main {
    display: table-cell;
    padding: 20px;
    padding-bottom: 40px;
    background-color: #fff;
    box-shadow: 0 0 10px #ccc;
    vertical-align: top;
}

section h1, section h2, section h3, section h4, section h5 {
    margin: 16px 0;
    line-height: 1.5;
    font-weight: normal;
}
section h1 {
    font-size: 28px;
}
section h2 {
    margin-top: 40px;
}

.code_inline {
    background-color: #f9fafc;
    padding: 0 4px;
    border: 1px solid #eaeefb;
    border-radius: 4px;
}

.hljs-built_in, .hljs-doctag, .hljs-keyword, .hljs-name, .hljs-section, .hljs-selector-class, .hljs-selector-id, .hljs-selector-tag, .hljs-strong, .hljs-tag, .hljs-title, .hljs-type {
    color: #3182bd;
}
.hljs-addition, .hljs-meta, .hljs-string, .hljs-symbol, .hljs-template-tag, .hljs-template-variable {
    color: #756bb1;
}


pre {
    padding: 10px;
    background-color: #F7F7F7;
    border: 1px solid #e2ecf4;
}

</style>
