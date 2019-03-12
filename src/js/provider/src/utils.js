import md5 from './md5.js';
import Config from "../../config/config";

export default class UtilsProvider {
    constructor () {
        return this
    }
    install (Vue, options){
        //用户模块API调用
        const vm = new Vue();
        Vue.prototype.utils$ = {

            //MD5摘要
            md5:function (key) {
                return md5(key)
            },

            // 身份证号校验
            idNoVerify: function (idNo) {
                return idNo.match(/^[0-9]{6}[1-2]{1}[0-9]{3}[0-1]{1}[0-9]{1}[0-3]{1}[0-9]{1}[0-9]{3}[xX0-9]{1}$/g);
            },
        }
    }

}
