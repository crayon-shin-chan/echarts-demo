<template>
    <!--线形图显示-->
    <div class="line-display">
        <!--线形图列表-->
        <div class="line-list">
            <!--子路由路径需要使用全路径-->
            <router-link to="/line/basic" class="line-item">基本折线图</router-link>
            <router-link to="/line/basic/area" class="line-item">基本区域图</router-link>
            <router-link to="/line/smooth" class="line-item">平滑曲线图</router-link>
            <router-link to="/line/stacked/area" class="line-item">堆叠区域图</router-link>
        </div>
        <!--线型图容器-->
        <div class="line-container">
            <router-view></router-view>
        </div>
    </div>
</template>

<script lang="ts">

import Component from 'vue-class-component'
import Vue from 'vue'

@Component({})
export default class Line extends Vue{}

</script>

<style lang="scss">

    .line-display{
        width:100%;
        height:100%;
    }

    .line-list{
        box-sizing: border-box;
        width:10%;
        height:100%;
        padding: 20px 0px 0px 0px;
        float: left;
        clear: both;
        background-color: #6daf52;
    }

    .line-container{
       width:90%;
       height:100%;
       float: left;
       clear: right;
    }

    .line-item{
        display: block;
        font-size: 18px;
        margin: 10px 10px 10px 10px;
        padding: 9px 0px 0px 10px;
        height: 35px;
        color: black;
        text-decoration: none;
        border-radius: 4px;
        background-color: #bc457d;
        border: 1px black solid;
    }

    

</style>