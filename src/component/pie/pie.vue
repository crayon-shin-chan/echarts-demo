<template>
    <div class="pie-container">
        <!-- 最好使用div渲染，canvas很模糊 -->
        <div class="pie" ref="pie"></div>
        <div class="control"></div>
    </div>
</template>

<script lang="ts">

import Vue from 'vue'
import Component from 'vue-class-component'
import * as echarts from 'echarts'

/** 虽然Component装饰器中包含各种属性，data、method等，但是在装饰器参数中定义vue组件属性并不合适 */
@Component({})
export default class Pie extends Vue{

    /** echarts选项 */
    option:echarts.EChartOption = {
                title:{
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
                },
                legend:{
                    type:"plain"
                },
                grid: {
                    left: '3%',
                    right: '20%',
                    top: '8%',
                    containLabel: true,
                    show:false
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
                tooltip:{
                    show:false
                },
                series : [
                    {
                        name:'人口分布',
                        type:'pie',
                        clockwise:'true',
                        startAngle:'0',
                        radius : 120,
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
                        ],
                    }
                ]
            };

    instance:echarts.ECharts;

    $refs:{
        pie:HTMLDivElement
    } ;

    mounted(){
         this.instance = echarts.init(this.$refs.pie,{
            /** 设备像素比 */
            devicePixelRatio: window.devicePixelRatio,
            /** 渲染器，canvas、svg */
            renderer: "canvas",
            width:'auto',
            height:'auto'
        });
        this.instance.setOption(this.$data.option,true,true)
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