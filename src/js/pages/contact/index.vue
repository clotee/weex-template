<template>
    <div>
        <scroller class="scroller" :show-scrollbar="false">
            <bui-flow
                :items="testData"></bui-flow>
            <bui-flow
                :items="testData"
                :customStyles="customStyles"
                @click='_click'></bui-flow>

            <bui-timeline>
                <bui-timeline-item first=true></bui-timeline-item>
                <bui-timeline-item>
                    <text class="time">1984年</text>
                    <text class="content">发布 Macintosh</text>
                </bui-timeline-item>
                <bui-timeline-item>
                    <text class="time">2007年</text>
                    <text class="content">发布 iPhone</text>
                </bui-timeline-item>
                <bui-timeline-item>
                    <text class="time">2010年</text>
                    <text class="content">发布 iPad</text>
                </bui-timeline-item>
                <bui-timeline-item last=true>
                    <text class="time">2011年10月5日</text>
                    <text class="content">史蒂夫·乔布斯去世</text>
                </bui-timeline-item>
            </bui-timeline>
        </scroller>
    </div>
</template>

<script>
    import { buiFlow, buiTimeline, buiTimelineItem, } from 'bui-weex';
    export default {
        components: {
            buiFlow,
            buiTimeline,
            buiTimelineItem
        },
        data () {
            return {
                curHomeBackTriggerTimes: 1,
                maxHomeBackTriggerTimes: 5,
                statusBarHeight: weex.config.eros.statusBarHeight ? weex.config.eros.statusBarHeight : 40,
                touchBarHeight: weex.config.eros.touchBarHeight ? weex.config.eros.touchBarHeight : 20,
                testData: [
                    {
                        'date': '2017-05-24 21:10:29',
                        'desc': '结束',
                        'highlight': true,
                        'title': '页面交互输出'
                    },
                    {
                        'date': '2017-05-24 21:10:29',
                        'desc': '回流到客户确认',
                        'title': '设计稿上传'
                    },
                    {
                        'date': '2017-05-24 19:54:28',
                        'desc': '产品经理需跟业务与设计相关人员确认',
                        'title': '产品经理确认'
                    },
                    {
                        'date': '2017-05-24 19:50:21',
                        'desc': '以需求方案输出产品原型,需要客户确认',
                        'title': '产品原型图'
                    },
                    {
                        'date': '2017-05-24 19:49:03',
                        'desc': '业务员根据客户的需要制定产品解决方案',
                        'title': '客户提出需求方案'
                    }
                ],
                customStyles: {
                    'highlightTitleColor': '#EE9900',
                    'highlightPointInnerColor': '#EE9900',
                    'highlightPointBorderColor': '#FFE78D'
                },
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
            back: function () {
                this.$pop();
            },
            rightclick: function () {
                this.$toast('right')
            },
            centerclick: function () {
                this.$toast('center')
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
<style lang="scss" src='../index.scss'></style>
