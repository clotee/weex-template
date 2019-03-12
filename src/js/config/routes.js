// 这里的后缀都是 .js 因为打包出来的都是js文件，而不是.vue文件，我们要告诉客户端跳转那个js

export default {
    'home': {
        title: '首页',
        url: '/pages/index.js'
    },
    'contact': {
        title: '联系人',
        url: '/pages/contact/index.js'
    },
    'user': {
        title: '个人中心',
        url: '/pages/user/index.js'
    },
}
