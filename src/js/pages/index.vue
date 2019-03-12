<template>
    <div>
        <scroller class="scroller" :show-scrollbar="false">
            <wxc-ep-slider :slider-id="sliderId"
                           :card-length='cardLength'
                           :card-s="cardSize"
                           :select-index="2"
                           @wxcEpSliderCurrentIndexSelected="wxcEpSliderCurrentIndexSelected">

                <!--demo-->
                <div v-for="(v,index) in [1,2,3,4,5]"
                     :key="index"
                     :slot="`card${index}_${sliderId}`"
                     :class="['slider',`slider${index}`]">
                    <text>this is the {{index + 1}} slider</text>
                </div>
            </wxc-ep-slider>
            <cell class="line"></cell>
            <div class="flex-row container-row" :style="{'top': statusBarHeight-48}">
                <div class="flex1 container-item" v-for="item in rows">
                    <bui-image width="220px" height="220px" :src="item.imageUrl" radius="9px"></bui-image>
                    <text class="h4 item-text">{{item.title}}...</text>
                </div>
            </div>
            <div class="flex-row container-column" :style="{'top': statusBarHeight-48}">
                <div class="flex1 container-item" v-for="item in rows">
                    <bui-image width="690px" height="300px" :src="item.imageUrl" radius="9px" resize="cover"></bui-image>
                    <text class="h4 item-text">{{item.title}}...</text>
                </div>
            </div>
        </scroller>
    </div>
</template>

<script>
    import { buiButton, buiHeader, buiImage, buiImageSlider } from 'bui-weex';
    import { WxcEpSlider } from 'weex-ui';
    export default {
        components: {
            buiButton,
            buiHeader,
            buiImage,
            buiImageSlider,
            WxcEpSlider
        },
        data () {
            return {
                curHomeBackTriggerTimes: 1,
                maxHomeBackTriggerTimes: 5,
                statusBarHeight: weex.config.eros.statusBarHeight ? weex.config.eros.statusBarHeight : 40,
                touchBarHeight: weex.config.eros.touchBarHeight ? weex.config.eros.touchBarHeight : 20,
                sliderId: 1,
                cardLength: 5,
                cardSize: {
                    width: 400,
                    height: 300,
                    spacing: 0,
                    scale: 0.8
                },
                leftItem: {
                    icon: 'ion-chevron-left',
                },
                rightItem: {
                    text: '更多'
                },
                backgroundColor: "#1A887D",
                rows: [
                    {
                        title: '标题N01',
                        imageUrl: 'https://img.alicdn.com/tps/TB1z.55OFXXXXcLXXXXXXXXXXXX-560-560.jpg'
                    },
                    {
                        title: '标题N02',
                        imageUrl: 'https://img.alicdn.com/tps/TB1z.55OFXXXXcLXXXXXXXXXXXX-560-560.jpg'
                    },
                    {
                        title: '标题N03',
                        imageUrl: 'https://img.alicdn.com/tps/TB1z.55OFXXXXcLXXXXXXXXXXXX-560-560.jpg'
                    },
                ]
            };
        },
        beforeCreate: function () {
            var domModule = weex.requireModule('dom');

            domModule.addRule('fontFace', {
                fontFamily: 'iconfont-eros',
                'src': 'url(\'bmlocal://iconfont/iconfont-eros.ttf\')'
            });
        },
        created () {
            console.log("::::::::::::::::::::::::::::", this.statusBarHeight)

            this.$navigator.setNavigationInfo({
                statusBarStyle: 'LightContent'
            });

            // this.$event.on('popBmMask', () => {
            //     this.$refs['bmmask'].show()
            // })
            // 安卓自定义退出 app
            this.androidFinishApp()
        },
        methods: {
            androidFinishApp () {
                const globalEvent = weex.requireModule('globalEvent')
                globalEvent.addEventListener('homeBack', options => {
                    (this.curHomeBackTriggerTimes === this.maxHomeBackTriggerTimes) && this.$router.finish()
                    this.curHomeBackTriggerTimes++
                    this.$notice.toast({ message: `点击返回${this.maxHomeBackTriggerTimes}次之后，会关闭应用，当前点击第${this.curHomeBackTriggerTimes}次` })
                })
            },
            wxcEpSliderCurrentIndexSelected (e) {
                const index = e.currentIndex;
                console.log(index);
            },
            //图片切换时候的事件
            onChange(e) {
                console.log(e);
            },
            //点击图片的事件
            onItemClick(e, index) {
                this.$toast(index);
            }
        }
    }
</script>
<style lang="scss" src='./index.scss'></style>
