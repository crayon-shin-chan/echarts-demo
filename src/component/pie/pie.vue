<template>
    <div class="pie-container">
        <!-- 最好使用div渲染，canvas很模糊 -->
        <div class="pie" ref="pie"></div>
        <div class="control"></div>
    </div>
</template>

<script lang="ts">

import { ECharts,EChartOption,EChartTitleOption,init } from 'echarts'
import Component from 'vue-class-component'
import Vue from 'vue'

/** 虽然Component装饰器中包含各种属性，data、method等，但是在装饰器参数中定义vue组件属性并不合适 */
@Component({})
export default class Pie extends Vue{

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

    /** 标题选项 */
    title:EChartTitleOption = {
        top: '40',
        left: '30',
        text: '人口分布',
        textStyle: {
            color: 'black',
            fontSize: 20,
            fontFamily: 'serif',
            fontWeight: 'bold',
            align: 'left',
            verticalAlign: 'middle',
            lineHeight: 60,
            textBorderWidth:2,
            textBorderColor:'white'
        }
    }

    /** 图例选项 */
    legend:object = {
        type:"plain"
    }

    /** 提示网格选项，用于包裹住图形 */
    grid:object = {
        left: '3%',
        right: '20%',
        top: '8%',
        containLabel: true,
        show:false
    }

    /** 虚拟映射 */
    visualMap:object[] = [
        {
            show: false,
            min: 500,
            max: 600,
            inRange: {
                colorLightness: [0, 1]
            }
        }
    ]

    /** 提示工具，鼠标放置到图形上时，显示提示框 */
    tooltip: object = {
        show:false
    }

    /** 扇形数据数据数组 */
    data: object[] = [
        {
            name:'亚洲',
            value:30,
            label:{
                show:true,
                position:'outside'
            },
            labelLine:{
                smooth:false
            },
            itemStyle:{
                color: 'red',
                normal:{
                    color:'yellow',
                },
                borderColor: 'white',
                borderWidth: 2
            },
            emphasis:{
                itemStyle:{
                     color:'yellow'
                }
            }
        },
        {
            name:'欧洲',
            value:10,
            itemStyle:{
                normal:{
                    color:'green'
                }
            },
            emphasis:{
                itemStyle:{
                    color:'green'
                }
            }
        },
        {
            name:'美州',
            value:10,
            itemStyle:{
                normal:{
                    color:'blue'
                }
            },
            emphasis:{
                itemStyle:{
                    color:'blue'
                }
            }
        },
        {
            name:'非洲',
            value:10,
            itemStyle:{
                normal:{
                    color:'black'
                }
            },
            emphasis:{
                itemStyle:{
                    color:'black'
                }
            }
        }
    ];

    series1:object = {
        name:'人口分布',
        type:'pie',
        
        legendHoverLink:false,
        /** 图例覆盖时的放大动画效果 */
        hoverAnimation:false,
        /** 图例覆盖时，放大的偏移距离 */
        hoverOffset:200,
        /** 是否支持多选中 */
        selectedMode:false,
        /** 多选中时，的扇区偏移 */
        selectedOffset:40,
        /** 扇区是否按照顺时针排布 */
        clockwise:true,
        /** 起始角度 */
        startAngle:0,
        /** 最小扇区角度，为了防止扇区角度过小，影响交互，如果小于这个角度，则会强行放大角度 */
        minAngle:30,
        /** 是否展示未南丁格尔图，通过半径区分数据大小，radius、area */
        roseType:false,
        /** 是否启用防止标签重叠策略 */
        avoidLabelOverlap:true,
        /** 是否在数据和为0时不显示扇区 */
        stillShowZeroSum:true,
        /** 鼠标悬浮时的样式 */
        cursor:'pointer',
        center: ['50%', '50%'],
        radius : 120,
        /** 映射数据集时，决定用行还是列来映射 */
        seriesLayoutBy:'column',
        /** 图标数据 */
        data: this.data,
        /** 图表标注 */
        markPoint:{
            /** 标注的图形 */
            symbol:'pin'
        }
    }

    /** 数据项，为数组 */
    series :object[] = [ this.series1 ]

    /** echarts选项 */
    option:EChartOption = {
        title : this.title,
        legend : this.legend,
        grid : this.grid, 
        backgroundColor: 'white',
        visualMap: this.visualMap,
        tooltip: this.tooltip,
        series : this.series
    };

    instance:ECharts;

    $refs:{
        pie:HTMLDivElement
    } ;

    mounted(){
        this.instance = init(this.$refs.pie,this.initOptions);
        this.instance.setOption(this.option,true,true)
    }
}

</script>

<style lang="scss">

    .pie-container{
        width:100%;
        height:100%;
    }
    .pie{
        margin: 30px auto auto 5%;
        width:60%;
        height:500px;
        border: 1px solid black;
    }

</style>