<template>
    <div class="basic-line-container">
        <!-- 最好使用div渲染，canvas很模糊 -->
        <div class="line" ref="line"></div>
        <div class="control"></div>
    </div>
</template>

<script lang="ts">

import { ECharts,EChartOption,EChartTitleOption,init } from 'echarts'
import Component from 'vue-class-component'
import Vue from 'vue'

/** 堆叠折线图组件 */
@Component({})
export default class StackedLine extends Vue{

    initOptions:{
        devicePixelRatio?: number
        renderer?: string
        width?: number | string
        height?: number | string
    } = {
        /** 设备像素比 */
        devicePixelRatio: window.devicePixelRatio,
        /** 渲染器，canvas、svg */
        renderer: "canvas",
        width:'auto',
        height:'auto'
    }


    /**
     * 堆叠区域图，每个横坐标上，各项纵坐标值进行堆叠，属性有下
     * title：图例标题，默认显示在哦让其左上角
     * tooltip：全局提示框，提示框包含三个部分，横轴刻度、纵轴刻度、交汇点提示框
     * tooltip.trigger：axis，代表提示框由坐标轴触发
     * tooltip.axisPointer：坐标轴指示器配置项
     * legend：图例配置，图例显示为容器上方
     * legend.data：图例数据，可以为字符串数组或者对象数组
     * series：所谓堆叠区域图，其实就是直接配置了多个区域图，堆叠时自动的，不需要配置什么
     * 如果直接配置多个折线图，这些折线无法堆叠
     */
    option:EChartOption = {
        title: {
            text: '堆叠折线图'
        },
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data:['邮件营销','联盟广告','视频广告','直接访问','搜索引擎']
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        toolbox: {
            feature: {
                saveAsImage: {}
            }
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['周一','周二','周三','周四','周五','周六','周日']
        },
        yAxis: {
            type: 'value'
        },
        series: [
            {
                name:'邮件营销',
                type:'line',
                stack: '总量',
                data:[120, 132, 101, 134, 90, 230, 210]
            },
            {
                name:'联盟广告',
                type:'line',
                stack: '总量',
                data:[220, 182, 191, 234, 290, 330, 310]
            },
            {
                name:'视频广告',
                type:'line',
                stack: '总量',
                data:[150, 232, 201, 154, 190, 330, 410]
            },
            {
                name:'直接访问',
                type:'line',
                stack: '总量',
                data:[320, 332, 301, 334, 390, 330, 320]
            },
            {
                name:'搜索引擎',
                type:'line',
                stack: '总量',
                data:[820, 932, 901, 934, 1290, 1330, 1320]
            }
        ]
    };

    instance:ECharts;

    $refs:{
        line:HTMLDivElement
    } ;

    mounted(){
        this.instance = init(this.$refs.line,this.initOptions);
        this.instance.setOption(this.option,true,true)
    }
}

</script>

<style lang="scss">

    .basic-line-container{
        width:100%;
        height:100%;
    }
    .line{
        margin: 30px auto auto 5%;
        width:80%;
        height:500px;
        border: 1px solid black;
    }

</style>