import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'HelloWorld',
            redirect: '/giud'
        },
        {
            path: '/giud',
            name: 'giud',
            component: r => require.ensure([], () => r(require('../docs/giud.md')))
        },
        {
            path: '/icon',
            name: 'icon',
            component: r => require.ensure([], () => r(require('../docs/icon.md')))
        },
        {
            path: '/button',
            name: 'button',
            component: r => require.ensure([], () => r(require('../docs/button.md')))
        },
        {
            path: '/radio',
            name: 'radio',
            component: r => require.ensure([], () => r(require('../docs/radio.md')))
        },
        {
            path: '/checkbox',
            name: 'checkbox',
            component: r => require.ensure([], () => r(require('../docs/checkbox.md')))
        },
        {
            path: '/pagination',
            name: 'pagination',
            component: r => require.ensure([], () => r(require('../docs/pagination.md')))
        },
        {
            path: '/Tab',
            name: 'tab',
            component: r => require.ensure([], () => r(require('../docs/tab.md')))
        },
        {
            path: '/MessageBox',
            name: 'MessageBox',
            component: r => require.ensure([], () => r(require('../docs/message-box.md')))
        }
    ]
})
