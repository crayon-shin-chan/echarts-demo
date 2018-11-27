<template>
    <div class="basic-line-container">
        <!-- 最好使用div渲染，canvas很模糊 -->
        <div class="line" ref="line"></div>
        <div class="control"></div>
    </div>
</template>

<script lang="ts">

import { ECharts,EChartOption,EChartTitleOption,init, graphic } from 'echarts'
import Component from 'vue-class-component'
import Vue from 'vue'

/** 大数据量面积图，主要特点为可以xy轴方向同时缩放，从而观察局部细节 */
@Component({})
export default class LargeArea extends Vue{

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

    option:EChartOption = {
        tooltip: {
            trigger: 'axis',
            position: function (pt:any) {
                return [pt[0], '10%'];
            }
        },
        title: {
            left: 'center',
            text: '大数据量面积图',
        },
        toolbox: {
            feature: {
                dataZoom: {
                    yAxisIndex: 'none'
                },
                restore: {},
                saveAsImage: {}
            }
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: []
        },
        yAxis: {
            type: 'value',
            boundaryGap: [0, '100%']
        },
        dataZoom: [{
            type: 'inside',
            start: 0,
            end: 10
        }, {
            start: 0,
            end: 10,
            handleIcon: 'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
            handleSize: '80%',
            handleStyle: {
                color: '#fff',
                shadowBlur: 3,
                shadowColor: 'rgba(0, 0, 0, 0.6)',
                shadowOffsetX: 2,
                shadowOffsetY: 2
            }
        }],
        series: [
            {
                name:'模拟数据',
                type:'line',
                smooth:true,
                symbol: 'none',
                sampling: 'average',
                itemStyle: {
                    color: 'rgb(255, 70, 131)'
                },
                areaStyle: {
                    color: new (graphic as any).LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: 'rgb(255, 158, 68)'
                    }, {
                        offset: 1,
                        color: 'rgb(255, 70, 131)'
                    }])
                },
                data: []
        }
    ]
};
    
    instance:ECharts;

    $refs:{
        line:HTMLDivElement
    } ;

    mounted(){
        let base = +new Date(1968, 9, 3);
        let oneDay = 24 * 3600 * 1000;
        let date = [];
        let data = [Math.random() * 300];
        for (var i = 1; i < 20000; i++) {
            var now = new Date(base += oneDay);
            date.push([now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/'));
            data.push(Math.round((Math.random() - 0.5) * 20 + data[i - 1]));
        }
        (this.option.xAxis as any).data = date;
        (this.option.series as any)[0].data = data;
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