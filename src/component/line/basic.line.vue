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

@Component({})
export default class BasicLine extends Vue{

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
     * echarts折线图，即含有x、y轴配置，需要再x、y轴两个方向传入数据，一次最多可以有两条线
     * 折线图与曲线图实际上是一回事，只在于一个smooth设置
     */
    option:EChartOption = {
        title: {
            text: '基本折线图'
        },
        toolbox: {
            show: true,
            feature: {
                dataZoom: {
                    yAxisIndex: 'none'
                },
                dataView: {readOnly: false},
                magicType: {type: ['line', 'bar']},
                restore: {},
                 saveAsImage: {}
            }
        },
        /** x轴设置 */
        xAxis: {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        /** y轴设置 */
        yAxis: {
            type: 'value'
        },
        /** 数据 */
        series: [
            {
                data: [820, 932, 901, 934, 1290, 1330, 1320],
                type: 'line'
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