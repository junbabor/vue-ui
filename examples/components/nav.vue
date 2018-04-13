<template>
    <div class="nav">
        <div class="group" v-for="group in navData">
            <div class="group-tit">{{group.title}}</div>
            <div class="item" v-for="item in group.children">
                <div class="tit">
                    <router-link :to="item.path" v-if="item.path">{{item.title}}</router-link>
                    <span v-else>{{item.title}}</span>
                </div>
                <div class="sub-nav" v-if="item.children">
                    <div class="sub-item" v-for="subItem in item.children">
                        <div class="sub-tit">
                            <router-link :to="subItem.path">{{subItem.title}}</router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import navConfig from '../nav.json'
export default {
    name: 'side-nav',
    data () {
        return {
            navData: navConfig.navs
        }
    }
}
</script>
<style lang="scss" scoped>
.nav {
    padding: 20px 15px;
    .group {
        margin-bottom: 15px;
    }
    .group-tit {
        font-size: 18px;
        color: #333;
        font-weight: bold;
    }
    .item {
        .tit {
            line-height: 40px;
            a {
                color: #000;
            }
            .router-link-active {
                color: #409eff;
            }
        }

    }
    .sub-nav {
        padding-left: 15px;
    }
    .sub-tit {
        line-height: 40px;
        a:hover {
            color: #409eff;
        }
    }
    .router-link-active {
        color: #409eff;
    }
}
</style>
