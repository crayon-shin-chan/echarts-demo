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

/** 基本区域图组件 */
@Component({})
export default class BasicArea extends Vue{

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
     * 基本区域图，主要有以下属性
     * series.areaStyle：区域样式，就算为空对象，也代表这是个区域图，如果不设置，则为折线图
     * xAxis.boundaryGap：为true时，开始点的横坐标不是0
     */
    option:EChartOption = {
        title: {
            text: '基本区域图'
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
            type: 'value'
        },
        series: [{
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            type: 'line',
            areaStyle:{}
        }]
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