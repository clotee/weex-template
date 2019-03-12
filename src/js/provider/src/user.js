import Config from "../../config/config";

export default class UserProvider {
    constructor () {
        return this
    }
    install (Vue, options){
        //用户模块API调用
        const vm = new Vue();
        Vue.prototype.user$ = {
            //登录操作
            login(data) {
                let url = 'user/login';
                return vm.$post({url:url, data:data})
                    .then(resData => { // 成功回调
                        if(resData.status === "SUCCESS"){
                            vm.$storage.setSync('accessToken', resData.data.accessToken);
                            resData.data.userInfo.avatar = vm.utils$.getAvatar(resData.data.userInfo.userNo);
                            vm.$storage.setSync('userInfo', resData.data.userInfo);
                            return true;
                        }
                        return false;
                    })
                    .catch(error => {
                        // vm.$notice.toast({message:error.errors[0].message})
                        // console.log('error--------------------------------->', error);
                    })

            },
            //退出登录操作
            loginOut() {
                let url = 'user/logout';
                return vm.$post({url:url, data:{}})
                    .then(resData => {
                        // 成功回调
                        if(resData.status === "SUCCESS"){
                            vm.$storage.deleteSync('accessToken');
                            vm.$storage.deleteSync('userInfo');
                            return true;
                        }
                    })
                    .catch(e=>e)
            },
        }


    }

}
