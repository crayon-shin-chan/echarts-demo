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

/** 平滑曲线图组件 */
@Component({})
export default class SmoothLine extends Vue{

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
     * 曲线图与折线图的区别为：
     * series[0].smooth：为true时代表曲线图，即对连线进行了平滑处理，为false，则变为折线图
     */
    option:EChartOption = {
        xAxis: {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
            type: 'value'
        },
        series: [{
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            type: 'line',
            smooth: true
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