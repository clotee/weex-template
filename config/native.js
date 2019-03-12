module.exports = {
    'appName': 'weex-template',
    'appBoard': '/config/index.js',
    // android 监听全局事件homeBack 如果为true 安卓端需要自行调用router.finish方法来关闭应用
    'androidIsListenHomeBack': 'true',
    'version': {
        'android': '1.0.0',
        'iOS': '1.0.0'
    },
    'page': {
        'homePage': 'tabBar',
        'mediatorPage': '/mediator/index.js',
        'navBarColor': '#1A887D',
        'navItemColor': '#ffffff'
    },
    'url': {
        'image': 'http://www.superlinksoft.com/img-company/XXX',
        'bundleUpdate': 'http://localhosts:3001/app/check'
    },
    'zipFolder': {
        'iOS': '/ios/LMWeex/LMWeex',
        'android': '/android/LMWeex/app/src/main/assets'
    },
    'getui': {
        'enabled': 'false',
        'appId': '',
        'appKey': '',
        'appSecret': ''
    },
    'tabBar': {
        'color': '#FFFFFF',
        'selectedColor': '#ededed',
        'backgroundColor': '#1A887D',
        'borderColor': '#1A887D',
        'list': [{
                'pagePath': '/pages/index.js',
                'text': '首页',
                'icon': 'bmlocal://assets/TabBar_Item1@2x.png',
                'selectedIcon': 'bmlocal://assets/TabBar_Item1_Selected@2x.png',
                'navShow': 'true',
                'navTitle': "首页"
            },
            {
                'pagePath': '/pages/contact/index.js',
                'text': '我的任务',
                'icon': 'bmlocal://assets/TabBar_Item2@2x.png',
                'selectedIcon': 'bmlocal://assets/TabBar_Item2_Selected@2x.png',
                'navShow': 'true',
                'navTitle': '任务'
            },
            {
                'pagePath': '/pages/user/index.js',
                'text': '个人中心',
                'icon': 'bmlocal://assets/TabBar_Item3@2x.png',
                'selectedIcon': 'bmlocal://assets/TabBar_Item3_Selected@2x.png',
                'navShow': 'true',
                'navTitle': '我'
            }
        ]
    }
}
