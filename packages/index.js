import vButton from './button/index'
import vRadio from './radio/index'
import vCheckbox from './checkbox/index'
import MessageBox from './message-box/index'
import vPages from './pagination/index'
import vTab from './tab/index'

const components = [
    vButton,
    vRadio,
    vCheckbox,
    MessageBox,
    vPages,
    vTab
]

const install = function(Vue, opts = {}) {
    components.map(function(component){
        Vue.component(component.name, component);
    });
    Vue.prototype.$MessageBox = MessageBox
    Vue.prototype.$alert = MessageBox.alert
    Vue.prototype.$confirm = MessageBox.confirm
}



if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}

export default {
    install
}