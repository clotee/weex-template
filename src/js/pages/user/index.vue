<template>
    <div class="wrapper">
        <div class="btn" @click="openMask">
            <text class="btn-txt">点击弹出动画面板</text>
        </div>
        <div class="btn btn-margin yellow" @click="openNoAnimationMask">
            <text class="btn-txt">点击弹出无动画面板</text>
        </div>
        <wxc-mask height="800"
                  width="702"
                  border-radius="0"
                  duration="200"
                  mask-bg-color="#FFFFFF"
                  :has-animation="hasAnimation"
                  :has-overlay="true"
                  :show-close="true"
                  :show="show"
                  @wxcMaskSetHidden="wxcMaskSetHidden">
            <div class="content">
                <div class="demo-title">
                    <text class="title">Weex帮助你构建原生应用</text>
                </div>
                <text class="content-text">
                    与 Web App、HTML5 App 或 hybrid App 不同，您可以使用 Weex 构建一个真正的原生应用。更贴心的是你的代码只需使用
                    HTML、CSS、JavaScript 可以构建原生应用，上手非常简单。但实际上，应用的底层是 Objective-C 或 Java， 同时，Weex 提供很多 native
                    组件或模块供开发人员使用。</text>
            </div>
        </wxc-mask>
    </div>
</template>

<script>
    import { WxcMask } from 'weex-ui';
    export default {
        components: { WxcMask },
        data: () => ({
            show: false,
            overlayCanClose: true,
            isFalse: false,
            hasAnimation: true
        }),
        methods: {
            openMask (e) {
                this.show = true;
                this.hasAnimation = true;
            },
            wxcMaskSetHidden () {
                this.show = false;
            },
            openNoAnimationMask (e) {
                this.show = true;
                this.hasAnimation = false;
            }
        }
    };
</script>

<style scoped>
    .wxc-demo {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
    }
    .scroller {
        flex: 1;
        background-color: #ffffff;
    }
    .btn {
        width: 600px;
        height: 80px;
        margin-top: 300px;
        margin-left: 75px;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        border-radius: 6px;
        background-color: rgb(92, 184, 92);
        border-color: rgb(76, 174, 76);
    }
    .yellow {
        background-color: #FDC22D;
        border-color: #FDC22D;
    }
    .btn-txt {
        font-size: 32px;
        color: #ffffff;
    }
    .btn-margin {
        margin-top: 40px;
    }
    .content {
        padding: 30px;
    }
    .demo-title {
        align-items: center;
        margin-bottom: 20px;
        margin-top: 40px;
    }
    .title {
        color: #333333;
        font-size: 40px;
    }
    .content-text {
        color: #333333;
        font-size: 30px;
        margin-top: 20px;
    }
</style>
