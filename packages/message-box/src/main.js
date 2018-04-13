import Vue from 'vue'
import msgBox from './message-box.vue';
import merge from 'src/merge';
let msgBoxConstructor = Vue.extend(msgBox);

let instance;

class msgBoxUse {
    constructor (options = {}) {
        this.options = options;
        this.instance = new msgBoxConstructor({
            data: this.options
        });
        this.instance.vm = this.instance.$mount();
        document.body.appendChild(this.instance.vm.$el);
    }
    close () {
        this.instance.close();
    }
};

const MessageBox = (options = {}) => {
    return new msgBoxUse(options);
};

MessageBox.alert = (message, title, options) => {
    if (typeof title === 'object') {
        options = title
        title = ''
    } else if (title === undefined) {
        title = ''
    }
    return MessageBox(merge({
        title: title,
        message: message,
        type: 'alert'
    }, options))
}
MessageBox.confirm = (message, title, options) => {
    if (typeof title === 'object') {
        options = title
        title = ''
    } else if (title === undefined) {
        title = ''
    }
    return MessageBox(merge({
        title: title,
        message: message,
        type: 'confirm',
        showCancelButton: true
    }, options))
}
export default MessageBox;