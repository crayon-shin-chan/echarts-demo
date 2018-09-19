<template>
    <div class="pie-container">
        <canvas class="pie" ref="pie"></canvas>
        <div class="control"></div>
    </div>
</template>

<script lang="ts">

import Vue from 'vue'
import Component from 'vue-class-component'
import * as echarts from 'echarts'

@Component({
    data: function():{
        option:echarts.EChartOption,
        instance:echarts.ECharts|undefined
    }{
        return {
            option:{
                title:{
                    top: '20',
                    text: '人口分布',
                    textStyle: {
                        color: 'black',
                        fontSize: 15,
                        fontFamily: 'serif',
                        align: 'left'
                    }
                },
                legend:{
                    type:"plain"
                },
                grid:{
                    show:true
                },
                backgroundColor: 'white',
                visualMap: [
                    {
                        show: false,
                        min: 500,
                        max: 600,
                        inRange: {
                            colorLightness: [0, 1]
                        }
                    }
                ],
                series : [
                    {
                        name:'人口分布',
                        type:'pie',
                        clockwise:'true',
                        startAngle:'0',
                        radius : '80%',
                        center: ['50%', '50%'],
                        data:[
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
                                    color: 'rgb(128, 128, 128)',
                                    normal:{
                                        color:'yellow',
                                    },
                                    borderColor: 'white',
                                    borderWidth: 2
                                }
                            },
                            {
                                name:'欧洲',
                                value:10,
                                itemStyle:{
                                    normal:{
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
                                }
                            },
                            {
                                name:'非洲',
                                value:10,
                                itemStyle:{
                                    normal:{
                                        color:'black'
                                    }
                                }
                            }
                        ],
                    }
                ]
            },
            instance: undefined
        }
    },
    mounted(){
         this.$data.instance = echarts.init(this.$refs.pie as HTMLCanvasElement,{
            /** 设备像素比 */
            devicePixelRatio: window.devicePixelRatio,
            /** 渲染器，canvas、svg */
            renderer: "canvas",
            /** 长宽取dom长宽 */
            width: "auto",
            height: "auto"
        });
        (this.$data.instance as echarts.ECharts).setOption(this.$data.option,true,true)
    }
})
export default class Pie extends Vue{
}


</script>

<style lang="scss">
    .pie-container{
        width:80%;
        height:100%;
        margin: 0px auto 0px auto;
    }
    .pie{
        margin: 20% 0px 0px 0px;
        width:80%;
        height:80%;
    }

</style>